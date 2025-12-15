#!/bin/bash
#
# add-book.sh - CLI tool to add a book to the bookshelf
#
# Usage:
#   ./add-book.sh                    # Interactive mode
#   ./add-book.sh --help             # Show help
#   ./add-book.sh --json '<json>'    # Add book from JSON string
#
# Example:
#   ./add-book.sh
#   ./add-book.sh --json '{"title":"Book Title","author":"Author Name",...}'
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
NC='\033[0m' # No Color

# Available categories and accent colors
CATEGORIES=("philosophy" "science" "technology" "economics" "fiction")
ACCENT_COLORS=("red" "orange" "yellow" "green" "cyan" "blue" "purple" "magenta")

show_help() {
    echo -e "${CYAN}add-book.sh${NC} - Add a book to your bookshelf"
    echo ""
    echo -e "${YELLOW}Usage:${NC}"
    echo "  ./add-book.sh              Interactive mode (recommended)"
    echo "  ./add-book.sh --help       Show this help message"
    echo "  ./add-book.sh --list       List all current books"
    echo "  ./add-book.sh --json '{}'  Add book from JSON (advanced)"
    echo ""
    echo -e "${YELLOW}Categories:${NC} ${CATEGORIES[*]}"
    echo -e "${YELLOW}Colors:${NC} ${ACCENT_COLORS[*]}"
    echo ""
    echo -e "${YELLOW}Example interactive session:${NC}"
    echo "  $ ./add-book.sh"
    echo "  Title: The Pragmatic Programmer"
    echo "  Author: David Thomas, Andrew Hunt"
    echo "  Year: 2019"
    echo "  Category: technology"
    echo "  ..."
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
        *) echo "#205EA6" ;;  # Default to blue
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

prompt_optional() {
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
    local cat=""
    echo -e "${GREEN}Category${NC} (${CATEGORIES[*]}): "
    while true; do
        read -r cat
        cat=$(echo "$cat" | tr '[:upper:]' '[:lower:]')
        if validate_category "$cat"; then
            break
        else
            echo -e "${RED}Invalid category. Choose from:${NC} ${CATEGORIES[*]}"
        fi
    done
    echo "$cat"
}

prompt_color() {
    local color=""
    echo -e "${GREEN}Accent color${NC} (${ACCENT_COLORS[*]}): "
    while true; do
        read -r color
        color=$(echo "$color" | tr '[:upper:]' '[:lower:]')
        if validate_color "$color"; then
            break
        else
            echo -e "${RED}Invalid color. Choose from:${NC} ${ACCENT_COLORS[*]}"
        fi
    done
    echo "$color"
}

prompt_rating() {
    local rating=""
    echo -ne "${GREEN}Rating${NC} (1-5): "
    while true; do
        read -r rating
        if [[ "$rating" =~ ^[1-5]$ ]]; then
            break
        else
            echo -e "${RED}Please enter a number between 1 and 5.${NC}"
        fi
    done
    echo "$rating"
}

interactive_mode() {
    echo -e "${CYAN}========================================${NC}"
    echo -e "${CYAN}       Add a Book to Your Shelf        ${NC}"
    echo -e "${CYAN}========================================${NC}"
    echo ""

    # Required fields
    prompt_required "Title" TITLE
    prompt_required "Author" AUTHOR

    # Year with validation
    echo -ne "${GREEN}Year published:${NC} "
    while true; do
        read -r YEAR
        if [[ "$YEAR" =~ ^-?[0-9]+$ ]]; then
            break
        else
            echo -e "${RED}Please enter a valid year.${NC}"
        fi
    done

    # Category
    CATEGORY=$(prompt_category)

    # Description
    echo -e "${GREEN}Description${NC} (brief summary of the book):"
    read -r DESCRIPTION

    # Cover URL (optional)
    prompt_optional "Cover image URL" COVER_URL ""

    # Accent color
    ACCENT=$(prompt_color)

    # Rating
    RATING=$(prompt_rating)

    # Quote (optional)
    echo ""
    echo -e "${YELLOW}Optional: Add a memorable quote from the book${NC}"
    prompt_optional "Quote text" QUOTE_TEXT ""
    if [[ -n "$QUOTE_TEXT" ]]; then
        prompt_optional "Quote author" QUOTE_AUTHOR "$AUTHOR"
    fi

    # Confirm
    echo ""
    echo -e "${CYAN}========================================${NC}"
    echo -e "${CYAN}            Book Summary               ${NC}"
    echo -e "${CYAN}========================================${NC}"
    echo -e "${YELLOW}Title:${NC} $TITLE"
    echo -e "${YELLOW}Author:${NC} $AUTHOR"
    echo -e "${YELLOW}Year:${NC} $YEAR"
    echo -e "${YELLOW}Category:${NC} $CATEGORY"
    echo -e "${YELLOW}Description:${NC} ${DESCRIPTION:0:50}..."
    echo -e "${YELLOW}Cover URL:${NC} ${COVER_URL:-None (will use fallback)}"
    echo -e "${YELLOW}Accent:${NC} $ACCENT"
    echo -e "${YELLOW}Rating:${NC} $RATING/5"
    if [[ -n "$QUOTE_TEXT" ]]; then
        echo -e "${YELLOW}Quote:${NC} \"${QUOTE_TEXT:0:40}...\""
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
