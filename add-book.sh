#!/bin/bash
#
# add-book.sh - CLI tool to add a book to the bookshelf
#
# Features:
#   - Auto-fills book details using Google Books API
#   - Only requires title and author input
#   - Fetches: year, description, cover image automatically
#
# Usage:
#   ./add-book.sh                    # Interactive mode with auto-fill
#   ./add-book.sh --help             # Show help
#   ./add-book.sh --list             # List current books
#   ./add-book.sh --json '<json>'    # Add book from JSON string
#
# Example:
#   ./add-book.sh
#   Title: Sapiens
#   Author: Yuval Noah Harari
#   [Auto-fetching book details...]
#

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BOOKS_FILE="$SCRIPT_DIR/assets/data/books.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
GRAY='\033[0;90m'
NC='\033[0m' # No Color

# Available categories and accent colors
CATEGORIES=("philosophy" "science" "technology" "economics" "fiction")
ACCENT_COLORS=("red" "orange" "yellow" "green" "cyan" "blue" "purple" "magenta")

# Category to color mapping (function instead of associative array for bash 3 compatibility)
get_category_color() {
    local cat="$1"
    case "$cat" in
        philosophy) echo "purple" ;;
        science) echo "cyan" ;;
        technology) echo "blue" ;;
        economics) echo "green" ;;
        fiction) echo "magenta" ;;
        *) echo "blue" ;;
    esac
}

show_help() {
    echo -e "${CYAN}add-book.sh${NC} - Add a book to your bookshelf with auto-fill"
    echo ""
    echo -e "${YELLOW}Usage:${NC}"
    echo "  ./add-book.sh              Interactive mode with web search auto-fill"
    echo "  ./add-book.sh --help       Show this help message"
    echo "  ./add-book.sh --list       List all current books"
    echo "  ./add-book.sh --json '{}'  Add book from JSON (advanced)"
    echo ""
    echo -e "${YELLOW}How it works:${NC}"
    echo "  1. Enter book title and author"
    echo "  2. Script auto-fetches: year, description, cover image"
    echo "  3. You choose: category, rating, optional quote"
    echo ""
    echo -e "${YELLOW}Categories:${NC} ${CATEGORIES[*]}"
    echo -e "${YELLOW}Colors:${NC} ${ACCENT_COLORS[*]}"
}

list_books() {
    echo -e "${CYAN}Current books in your bookshelf:${NC}"
    echo ""
    jq -r '.books[] | "  \(.id). \(.title) by \(.author) (\(.year))"' "$BOOKS_FILE"
    echo ""
    echo -e "${YELLOW}Total:${NC} $(jq '.books | length' "$BOOKS_FILE") books"
}

get_next_id() {
    local max_id=$(jq -r '.books | map(.id | tonumber) | max' "$BOOKS_FILE")
    echo $((max_id + 1))
}

color_to_hex() {
    local color="$1"
    case "$color" in
        red) echo "#AF3029" ;;
        orange) echo "#BC5215" ;;
        yellow) echo "#AD8301" ;;
        green) echo "#66800B" ;;
        cyan) echo "#24837B" ;;
        blue) echo "#205EA6" ;;
        purple) echo "#5E409D" ;;
        magenta) echo "#A02F6F" ;;
        *) echo "#205EA6" ;;
    esac
}

validate_category() {
    local cat="$1"
    for valid in "${CATEGORIES[@]}"; do
        if [[ "$cat" == "$valid" ]]; then
            return 0
        fi
    done
    return 1
}

validate_color() {
    local color="$1"
    for valid in "${ACCENT_COLORS[@]}"; do
        if [[ "$color" == "$valid" ]]; then
            return 0
        fi
    done
    return 1
}

# URL encode a string
urlencode() {
    local string="$1"
    python3 -c "import urllib.parse; print(urllib.parse.quote('$string'))"
}

# Fetch book data from Google Books API
fetch_book_data() {
    local title="$1"
    local author="$2"

    echo -e "${GRAY}Searching Google Books...${NC}"

    # Build search query
    local query=$(urlencode "$title $author")
    local api_url="https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5"

    # Fetch data
    local response=$(curl -s "$api_url" 2>/dev/null)

    if [[ -z "$response" ]] || [[ $(echo "$response" | jq -r '.totalItems // 0') == "0" ]]; then
        echo -e "${YELLOW}No results from Google Books, trying Open Library...${NC}"
        fetch_from_openlibrary "$title" "$author"
        return
    fi

    # Find best match (check each result for author match)
    local best_match=""
    local author_lower=$(echo "$author" | tr '[:upper:]' '[:lower:]')

    for i in $(seq 0 4); do
        local item=$(echo "$response" | jq -r ".items[$i] // empty")
        if [[ -z "$item" ]]; then
            break
        fi

        local item_authors=$(echo "$item" | jq -r '.volumeInfo.authors[]? // empty' | tr '[:upper:]' '[:lower:]')
        if echo "$item_authors" | grep -qi "$author_lower" || echo "$author_lower" | grep -qiF "$(echo "$item_authors" | head -1)"; then
            best_match="$item"
            break
        fi
    done

    # Fall back to first result if no author match
    if [[ -z "$best_match" ]]; then
        best_match=$(echo "$response" | jq -r '.items[0] // empty')
    fi

    if [[ -z "$best_match" ]]; then
        echo -e "${YELLOW}Could not find book, trying Open Library...${NC}"
        fetch_from_openlibrary "$title" "$author"
        return
    fi

    # Extract data
    FETCHED_YEAR=$(echo "$best_match" | jq -r '.volumeInfo.publishedDate // empty' | grep -oE '^[0-9]{4}' || echo "")
    FETCHED_DESC=$(echo "$best_match" | jq -r '.volumeInfo.description // empty' | head -c 500)

    # Get cover image (prefer larger size)
    local cover=$(echo "$best_match" | jq -r '.volumeInfo.imageLinks.thumbnail // empty')
    if [[ -n "$cover" ]]; then
        # Convert to higher res by replacing zoom parameter
        FETCHED_COVER=$(echo "$cover" | sed 's/zoom=1/zoom=2/' | sed 's/^http:/https:/')
    else
        FETCHED_COVER=""
    fi

    # Get categories for suggestion
    FETCHED_CATEGORIES=$(echo "$best_match" | jq -r '.volumeInfo.categories[]? // empty' | tr '\n' ', ' | sed 's/, $//')

    echo -e "${GREEN}Found book data!${NC}"
}

# Fallback to Open Library API
fetch_from_openlibrary() {
    local title="$1"
    local author="$2"

    echo -e "${GRAY}Searching Open Library...${NC}"

    local query=$(urlencode "$title")
    local api_url="https://openlibrary.org/search.json?title=${query}&limit=5"

    local response=$(curl -s "$api_url" 2>/dev/null)

    if [[ -z "$response" ]] || [[ $(echo "$response" | jq -r '.numFound // 0') == "0" ]]; then
        echo -e "${YELLOW}No results found. You'll need to enter details manually.${NC}"
        return
    fi

    # Find best match
    local best_match=$(echo "$response" | jq -r '.docs[0] // empty')

    if [[ -z "$best_match" ]]; then
        echo -e "${YELLOW}No results found. You'll need to enter details manually.${NC}"
        return
    fi

    # Extract data
    FETCHED_YEAR=$(echo "$best_match" | jq -r '.first_publish_year // empty')

    # Open Library doesn't have descriptions in search, but we can try to get it
    local olid=$(echo "$best_match" | jq -r '.key // empty')
    if [[ -n "$olid" ]]; then
        local work_response=$(curl -s "https://openlibrary.org${olid}.json" 2>/dev/null)
        local desc=$(echo "$work_response" | jq -r '.description // empty')
        if [[ "$desc" != "null" && -n "$desc" ]]; then
            # Description might be an object with "value" key
            if echo "$desc" | jq -e '.value' >/dev/null 2>&1; then
                FETCHED_DESC=$(echo "$desc" | jq -r '.value' | head -c 500)
            else
                FETCHED_DESC=$(echo "$desc" | head -c 500)
            fi
        fi
    fi

    # Get cover
    local cover_id=$(echo "$best_match" | jq -r '.cover_i // empty')
    if [[ -n "$cover_id" ]]; then
        FETCHED_COVER="https://covers.openlibrary.org/b/id/${cover_id}-L.jpg"
    else
        FETCHED_COVER=""
    fi

    FETCHED_CATEGORIES=$(echo "$best_match" | jq -r '.subject[]? // empty' | head -5 | tr '\n' ', ' | sed 's/, $//')

    echo -e "${GREEN}Found book data!${NC}"
}

# Suggest category based on fetched categories
suggest_category() {
    local cats="$1"
    cats=$(echo "$cats" | tr '[:upper:]' '[:lower:]')

    if echo "$cats" | grep -qiE "philosoph|ethics|metaphysics|logic|existential"; then
        echo "philosophy"
    elif echo "$cats" | grep -qiE "fiction|novel|literary|fantasy|mystery|thriller|romance"; then
        echo "fiction"
    elif echo "$cats" | grep -qiE "computer|programming|software|technolog|internet|artificial|machine learning"; then
        echo "technology"
    elif echo "$cats" | grep -qiE "econom|business|finance|money|market|trade"; then
        echo "economics"
    elif echo "$cats" | grep -qiE "science|physics|biology|chemistry|math|nature|evolution|brain|neuro"; then
        echo "science"
    else
        echo ""
    fi
}

prompt_required() {
    local prompt="$1"
    local var_name="$2"
    local value=""

    while [[ -z "$value" ]]; do
        echo -ne "${GREEN}$prompt:${NC} "
        read -r value
        if [[ -z "$value" ]]; then
            echo -e "${RED}This field is required.${NC}"
        fi
    done

    eval "$var_name=\"\$value\""
}

prompt_with_default() {
    local prompt="$1"
    local var_name="$2"
    local default="$3"

    echo -ne "${GREEN}$prompt${NC}"
    if [[ -n "$default" ]]; then
        echo -ne " ${YELLOW}[$default]${NC}"
    fi
    echo -ne ": "
    read -r value

    if [[ -z "$value" && -n "$default" ]]; then
        value="$default"
    fi

    eval "$var_name=\"\$value\""
}

prompt_category() {
    local suggested="$1"
    local cat=""

    echo -ne "${GREEN}Category${NC} (${CATEGORIES[*]})"
    if [[ -n "$suggested" ]]; then
        echo -ne " ${YELLOW}[$suggested]${NC}"
    fi
    echo -ne ": "

    while true; do
        read -r cat

        # Use suggestion if empty
        if [[ -z "$cat" && -n "$suggested" ]]; then
            cat="$suggested"
        fi

        cat=$(echo "$cat" | tr '[:upper:]' '[:lower:]')
        if validate_category "$cat"; then
            break
        else
            echo -e "${RED}Invalid category. Choose from:${NC} ${CATEGORIES[*]}"
        fi
    done
    echo "$cat"
}

prompt_rating() {
    local rating=""
    echo -ne "${GREEN}Rating${NC} (1-5) ${YELLOW}[4]${NC}: "
    while true; do
        read -r rating
        if [[ -z "$rating" ]]; then
            rating="4"
            break
        elif [[ "$rating" =~ ^[1-5]$ ]]; then
            break
        else
            echo -e "${RED}Please enter a number between 1 and 5.${NC}"
        fi
    done
    echo "$rating"
}

interactive_mode() {
    echo -e "${CYAN}========================================${NC}"
    echo -e "${CYAN}    Add a Book (with Auto-Fill)        ${NC}"
    echo -e "${CYAN}========================================${NC}"
    echo ""

    # Get title and author
    prompt_required "Title" TITLE
    prompt_required "Author" AUTHOR

    # Fetch book data from web
    echo ""
    FETCHED_YEAR=""
    FETCHED_DESC=""
    FETCHED_COVER=""
    FETCHED_CATEGORIES=""

    fetch_book_data "$TITLE" "$AUTHOR"
    echo ""

    # Year - use fetched or prompt
    if [[ -n "$FETCHED_YEAR" ]]; then
        echo -e "${GRAY}Found year: $FETCHED_YEAR${NC}"
        prompt_with_default "Year published" YEAR "$FETCHED_YEAR"
    else
        echo -ne "${GREEN}Year published:${NC} "
        while true; do
            read -r YEAR
            if [[ "$YEAR" =~ ^-?[0-9]+$ ]]; then
                break
            else
                echo -e "${RED}Please enter a valid year.${NC}"
            fi
        done
    fi

    # Category - suggest based on fetched categories
    local suggested_cat=""
    if [[ -n "$FETCHED_CATEGORIES" ]]; then
        echo -e "${GRAY}Book subjects: $FETCHED_CATEGORIES${NC}"
        suggested_cat=$(suggest_category "$FETCHED_CATEGORIES")
    fi
    CATEGORY=$(prompt_category "$suggested_cat")

    # Description - use fetched or prompt
    if [[ -n "$FETCHED_DESC" ]]; then
        echo ""
        echo -e "${GRAY}Found description:${NC}"
        echo -e "${GRAY}${FETCHED_DESC:0:200}...${NC}"
        echo ""
        echo -ne "${GREEN}Use this description? (y/n)${NC} ${YELLOW}[y]${NC}: "
        read -r use_desc
        if [[ "$use_desc" != "n" && "$use_desc" != "N" ]]; then
            DESCRIPTION="$FETCHED_DESC"
        else
            echo -e "${GREEN}Description${NC} (brief summary):"
            read -r DESCRIPTION
        fi
    else
        echo -e "${GREEN}Description${NC} (brief summary):"
        read -r DESCRIPTION
    fi

    # Cover URL - use fetched or prompt
    if [[ -n "$FETCHED_COVER" ]]; then
        echo ""
        echo -e "${GRAY}Found cover: $FETCHED_COVER${NC}"
        echo -ne "${GREEN}Use this cover? (y/n)${NC} ${YELLOW}[y]${NC}: "
        read -r use_cover
        if [[ "$use_cover" != "n" && "$use_cover" != "N" ]]; then
            COVER_URL="$FETCHED_COVER"
        else
            prompt_with_default "Cover image URL" COVER_URL ""
        fi
    else
        prompt_with_default "Cover image URL (or leave empty for fallback)" COVER_URL ""
    fi

    # Accent color - default based on category
    local default_color=$(get_category_color "$CATEGORY")
    echo -ne "${GREEN}Accent color${NC} (${ACCENT_COLORS[*]}) ${YELLOW}[$default_color]${NC}: "
    read -r ACCENT
    if [[ -z "$ACCENT" ]]; then
        ACCENT="$default_color"
    fi
    ACCENT=$(echo "$ACCENT" | tr '[:upper:]' '[:lower:]')
    if ! validate_color "$ACCENT"; then
        echo -e "${YELLOW}Invalid color, using $default_color${NC}"
        ACCENT="$default_color"
    fi

    # Rating
    RATING=$(prompt_rating)

    # Quote (optional)
    echo ""
    echo -e "${YELLOW}Optional: Add a memorable quote from the book${NC}"
    prompt_with_default "Quote text" QUOTE_TEXT ""
    if [[ -n "$QUOTE_TEXT" ]]; then
        prompt_with_default "Quote author" QUOTE_AUTHOR "$AUTHOR"
    fi

    # Summary and confirm
    echo ""
    echo -e "${CYAN}========================================${NC}"
    echo -e "${CYAN}            Book Summary               ${NC}"
    echo -e "${CYAN}========================================${NC}"
    echo -e "${YELLOW}Title:${NC} $TITLE"
    echo -e "${YELLOW}Author:${NC} $AUTHOR"
    echo -e "${YELLOW}Year:${NC} $YEAR"
    echo -e "${YELLOW}Category:${NC} $CATEGORY"
    echo -e "${YELLOW}Description:${NC} ${DESCRIPTION:0:80}..."
    echo -e "${YELLOW}Cover URL:${NC} ${COVER_URL:-None (will use fallback)}"
    echo -e "${YELLOW}Accent:${NC} $ACCENT"
    echo -e "${YELLOW}Rating:${NC} $RATING/5"
    if [[ -n "$QUOTE_TEXT" ]]; then
        echo -e "${YELLOW}Quote:${NC} \"${QUOTE_TEXT:0:60}...\""
    fi
    echo ""

    echo -ne "${GREEN}Add this book? (y/n):${NC} "
    read -r confirm
    if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
        echo -e "${YELLOW}Cancelled.${NC}"
        exit 0
    fi

    # Build and add the book
    add_book_to_json
}

add_book_to_json() {
    local next_id=$(get_next_id)
    local accent_hex=$(color_to_hex "$ACCENT")

    # Clean description (remove newlines, escape quotes)
    DESCRIPTION=$(echo "$DESCRIPTION" | tr '\n' ' ' | sed 's/  */ /g')

    # Build the book JSON object
    local book_json
    if [[ -n "$QUOTE_TEXT" ]]; then
        book_json=$(jq -n \
            --arg id "$next_id" \
            --arg title "$TITLE" \
            --arg author "$AUTHOR" \
            --argjson year "$YEAR" \
            --arg category "$CATEGORY" \
            --arg description "$DESCRIPTION" \
            --arg coverUrl "$COVER_URL" \
            --arg accentColor "$accent_hex" \
            --argjson rating "$RATING" \
            --arg quoteText "$QUOTE_TEXT" \
            --arg quoteAuthor "${QUOTE_AUTHOR:-$AUTHOR}" \
            '{
                id: $id,
                title: $title,
                author: $author,
                year: $year,
                category: $category,
                description: $description,
                coverUrl: $coverUrl,
                accentColor: $accentColor,
                rating: $rating,
                quote: {
                    text: $quoteText,
                    author: $quoteAuthor
                }
            }')
    else
        book_json=$(jq -n \
            --arg id "$next_id" \
            --arg title "$TITLE" \
            --arg author "$AUTHOR" \
            --argjson year "$YEAR" \
            --arg category "$CATEGORY" \
            --arg description "$DESCRIPTION" \
            --arg coverUrl "$COVER_URL" \
            --arg accentColor "$accent_hex" \
            --argjson rating "$RATING" \
            '{
                id: $id,
                title: $title,
                author: $author,
                year: $year,
                category: $category,
                description: $description,
                coverUrl: $coverUrl,
                accentColor: $accentColor,
                rating: $rating
            }')
    fi

    # Add to books.json
    local temp_file=$(mktemp)
    jq --argjson newbook "$book_json" '.books += [$newbook]' "$BOOKS_FILE" > "$temp_file"
    mv "$temp_file" "$BOOKS_FILE"

    echo ""
    echo -e "${GREEN}Book added successfully!${NC}"
    echo ""

    # Commit and push
    commit_and_push
}

commit_and_push() {
    echo -e "${CYAN}Committing and pushing changes...${NC}"

    cd "$SCRIPT_DIR"

    # Check if using jj or git
    if command -v jj &> /dev/null && [[ -d ".jj" ]]; then
        # Using jj
        jj describe -m "feat(bookshelf): Add \"$TITLE\" by $AUTHOR

Added new book to the bookshelf collection.

Co-Authored-By: add-book.sh <noreply@bookshelf.local>"

        jj bookmark set main -r @
        jj git push

        echo -e "${GREEN}Pushed with jj!${NC}"
    else
        # Using git
        git add assets/data/books.json
        git commit -m "feat(bookshelf): Add \"$TITLE\" by $AUTHOR

Added new book to the bookshelf collection.

Co-Authored-By: add-book.sh <noreply@bookshelf.local>"

        git push origin main

        echo -e "${GREEN}Pushed with git!${NC}"
    fi

    echo ""
    echo -e "${CYAN}========================================${NC}"
    echo -e "${GREEN}Done! Your book has been added.${NC}"
    echo -e "${CYAN}========================================${NC}"
    echo ""
    echo -e "View your bookshelf at: ${BLUE}https://xiaolong-y.github.io/bookshelf${NC}"
}

add_from_json() {
    local json_input="$1"

    # Validate JSON
    if ! echo "$json_input" | jq . > /dev/null 2>&1; then
        echo -e "${RED}Error: Invalid JSON${NC}"
        exit 1
    fi

    # Extract required fields
    TITLE=$(echo "$json_input" | jq -r '.title // empty')
    AUTHOR=$(echo "$json_input" | jq -r '.author // empty')
    YEAR=$(echo "$json_input" | jq -r '.year // empty')
    CATEGORY=$(echo "$json_input" | jq -r '.category // "technology"')
    DESCRIPTION=$(echo "$json_input" | jq -r '.description // ""')
    COVER_URL=$(echo "$json_input" | jq -r '.coverUrl // ""')
    ACCENT=$(echo "$json_input" | jq -r '.accent // "blue"')
    RATING=$(echo "$json_input" | jq -r '.rating // 4')
    QUOTE_TEXT=$(echo "$json_input" | jq -r '.quote.text // empty')
    QUOTE_AUTHOR=$(echo "$json_input" | jq -r '.quote.author // empty')

    # Validate required fields
    if [[ -z "$TITLE" || -z "$AUTHOR" || -z "$YEAR" ]]; then
        echo -e "${RED}Error: title, author, and year are required${NC}"
        exit 1
    fi

    echo -e "${GREEN}Adding:${NC} $TITLE by $AUTHOR"
    add_book_to_json
}

# Main
case "${1:-}" in
    --help|-h)
        show_help
        ;;
    --list|-l)
        list_books
        ;;
    --json|-j)
        if [[ -z "${2:-}" ]]; then
            echo -e "${RED}Error: --json requires a JSON string argument${NC}"
            exit 1
        fi
        add_from_json "$2"
        ;;
    "")
        interactive_mode
        ;;
    *)
        echo -e "${RED}Unknown option: $1${NC}"
        show_help
        exit 1
        ;;
esac
