# Optimized Team Design for Remaining 8 Cognitive Bias Prototypes

**Date:** December 15, 2025
**Objective:** Complete 8 remaining bias visualizations using lessons learned
**Target Completion:** 45-60 minutes
**Success Criteria:** 8 working, tested, polished HTML prototypes

---

## Executive Summary

### Lessons Applied

**From Previous Session Failures:**
- ❌ Multi-agent file creation blocked by permissions → ✅ Orchestrator handles ALL file operations
- ❌ Designer→Engineer handoff impossible → ✅ Designers output complete code directly
- ❌ Sequential bottlenecks → ✅ Maximum parallelization in design phase

**From Previous Session Successes:**
- ✅ Design brief distribution effective → Reuse for new designers
- ✅ Agents excellent at ideation/design → Expand this capability
- ✅ Orchestrator efficient at execution → Centralize all file creation

### Optimized Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    PHASE 1: PARALLEL DESIGN             │
│                         (20 minutes)                     │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Designer-Alpha        Designer-Beta                     │
│  ┌──────────────┐     ┌──────────────┐                 │
│  │ Confirmation │     │ Hindsight    │                 │
│  │ Bias         │     │ Bias         │                 │
│  └──────────────┘     └──────────────┘                 │
│  ┌──────────────┐     ┌──────────────┐                 │
│  │ Anchoring    │     │ Dunning-     │                 │
│  │ Bias         │     │ Kruger       │                 │
│  └──────────────┘     └──────────────┘                 │
│                                                          │
│  Designer-Gamma       Designer-Delta                     │
│  ┌──────────────┐     ┌──────────────┐                 │
│  │ Bandwagon    │     │ Sunk Cost    │                 │
│  │ Effect       │     │ Fallacy      │                 │
│  └──────────────┘     └──────────────┘                 │
│  ┌──────────────┐     ┌──────────────┐                 │
│  │ Spotlight    │     │ Framing      │                 │
│  │ Effect       │     │ Effect       │                 │
│  └──────────────┘     └──────────────┘                 │
│                                                          │
│  All designers output complete HTML code blocks         │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│              PHASE 2: ORCHESTRATOR EXECUTION            │
│                      (10 minutes)                        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│              Orchestrator (You)                          │
│  ┌────────────────────────────────────────────────┐    │
│  │ 1. Monitor all 4 designer windows              │    │
│  │ 2. Extract HTML code from responses            │    │
│  │ 3. Create 8 bias-*.html files                  │    │
│  │ 4. Smoke test (files open without errors)      │    │
│  └────────────────────────────────────────────────┘    │
│                                                          │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│               PHASE 3: QUALITY ASSURANCE                │
│                      (15 minutes)                        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  QA-Visual                QA-Technical                   │
│  ┌──────────────────┐   ┌──────────────────┐           │
│  │ • Visual design  │   │ • Performance    │           │
│  │ • Interactions   │   │ • Accessibility  │           │
│  │ • Aesthetics     │   │ • Code quality   │           │
│  │ • Mobile/dark    │   │ • Browser compat │           │
│  └──────────────────┘   └──────────────────┘           │
│                                                          │
│  Both output issue reports to Orchestrator              │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                PHASE 4: ITERATION                       │
│                   (As needed)                            │
├─────────────────────────────────────────────────────────┤
│  Orchestrator fixes issues, re-tests, polishes          │
└─────────────────────────────────────────────────────────┘
```

---

## Team Roster

### Design Squad (4 Agents)

**Designer-Alpha** (`design-alpha:0`)
- **Assignment:** 2 biases
  1. Confirmation Bias (magnetic belief bubble)
  2. Anchoring Bias (gravity anchor, orbiting numbers)
- **Deliverable:** 2 complete HTML files as code blocks
- **Specialization:** Physics-based interactions

**Designer-Beta** (`design-beta:0`)
- **Assignment:** 2 biases
  1. Hindsight Bias (timeline path morphing)
  2. Dunning-Kruger Effect (dual curves + interactive quiz)
- **Deliverable:** 2 complete HTML files as code blocks
- **Specialization:** Data visualization, charts

**Designer-Gamma** (`design-gamma:0`)
- **Assignment:** 2 biases
  1. Bandwagon Effect (gravitational opinion bubbles)
  2. Spotlight Effect (spotlight + observer focus)
- **Deliverable:** 2 complete HTML files as code blocks
- **Specialization:** Particle systems, social dynamics

**Designer-Delta** (`design-delta:0`)
- **Assignment:** 2 biases
  1. Sunk Cost Fallacy (deepening pit, shrinking button)
  2. Framing Effect (dual presentation toggle)
- **Deliverable:** 2 complete HTML files as code blocks
- **Specialization:** Emotional design, UI deformation

### Execution Layer

**Orchestrator** (You)
- **Role:** Central coordinator and file creator
- **Responsibilities:**
  - Monitor all 4 designer windows via tmux
  - Extract complete HTML from designer outputs
  - Create all 8 bias-*.html files
  - Initial smoke testing
  - Fix issues identified by QA
- **Tools:** Write, tmux capture-pane, send-claude-message.sh

### Quality Assurance (2 Agents)

**QA-Visual** (`qa-visual:0`)
- **Role:** Design and interaction quality
- **Test Matrix:**
  - [ ] Visual aesthetics match Flexoki palette
  - [ ] Interactions feel smooth and intuitive
  - [ ] Dark mode works correctly
  - [ ] Mobile responsive (test at 375px, 768px, 1200px)
  - [ ] Animations performant (no jank)
  - [ ] Educational clarity (bias well-explained)
- **Deliverable:** Visual quality report with specific issues

**QA-Technical** (`qa-tech:0`)
- **Role:** Performance and code quality
- **Test Matrix:**
  - [ ] Canvas rendering optimized (60fps)
  - [ ] No console errors
  - [ ] Accessibility (keyboard nav, screen readers)
  - [ ] Code follows patterns from first 5 prototypes
  - [ ] Browser compatibility (Chrome, Firefox, Safari)
  - [ ] File sizes reasonable (<15KB each)
- **Deliverable:** Technical quality report with specific issues

---

## Role Definitions

### Designer Role

**Input Received:**
- Brief for 2 cognitive biases
- Design constraints (Flexoki, IBM Plex Mono, canvas-based)
- Reference to first 5 prototypes for patterns
- Reference to neural-symphony.js for interaction ideas

**Work Process:**
1. Read bias brief thoroughly
2. Study existing prototypes (bias-recency.html, etc.)
3. Design interactive visualization concept
4. Write complete HTML file (inline CSS/JS)
5. **OUTPUT complete HTML as code block in response**
   - DO NOT try to create files (permissions blocked)
   - DO NOT use Write or Bash tools
   - JUST show the code in your message

**Success Criteria:**
- Complete, working HTML (not pseudocode)
- Follows Flexoki + IBM Plex Mono design system
- Canvas-based interactive animation
- Mobile-responsive
- Dark mode support
- ~7-12 KB file size

### Orchestrator Role (Me)

**Input Monitoring:**
- Watch all 4 designer tmux windows
- Extract HTML from their responses
- Track completion status

**File Creation Process:**
```bash
# Monitor designer outputs
tmux capture-pane -t design-alpha:0 -p | tail -500

# Extract HTML (manual or automated)
# Create files using Write tool

# Smoke test
open bias-confirmation.html  # Quick visual check
```

**Quality Gates:**
- [ ] All 8 files created
- [ ] No syntax errors
- [ ] Files open in browser without errors
- [ ] Basic interaction works

### QA Role

**Input Received:**
- List of 8 newly created bias files
- Quality criteria checklist
- Reference to first 5 prototypes as quality benchmark

**Testing Process:**
1. Open each file in browser
2. Test all interactions
3. Check responsive behavior (resize window)
4. Toggle dark mode
5. Check console for errors
6. Test on mobile device (if available)
7. Document ALL issues found

**Output Format:**
```markdown
## QA Report: [bias-name].html

### ✅ Passes
- [specific items that work]

### ❌ Issues Found
1. [Specific issue with reproduction steps]
2. [Another issue]

### 💡 Suggestions
- [Optional improvement ideas]
```

---

## Communication Protocols

### Designer → Orchestrator

**Method:** Designers output code in their window, Orchestrator monitors via tmux

**Format:**
```
Designer outputs:

Here is the complete HTML for [BIAS NAME]:

[Full HTML code block]

---

Here is the complete HTML for [BIAS NAME 2]:

[Full HTML code block]
```

**No active handoff needed** - Orchestrator pulls code when ready

### Orchestrator → QA

**Method:** `send-claude-message.sh`

**Message Template:**
```
TEST COMPLETE: All 8 bias files created and ready for QA.

Files to test:
- bias-confirmation.html
- bias-anchoring.html
- bias-hindsight.html
- bias-dunning-kruger.html
- bias-bandwagon.html
- bias-spotlight.html
- bias-sunk-cost.html
- bias-framing.html

Location: /Users/peteryang/Documents/Github/xiaolong-y.github.io/

Your role: [QA-Visual or QA-Technical]
Reference quality: First 5 prototypes (bias-recency.html, etc.)

Output a detailed QA report for each file.
```

### QA → Orchestrator

**Method:** Orchestrator monitors QA windows via tmux

**Expected Output:** Structured report with issues, passes, suggestions

---

## Deployment Plan

### Pre-Launch Checklist

**Environment Setup:**
- [ ] 4 designer tmux sessions created
- [ ] 2 QA tmux sessions created
- [ ] All Claude Code instances started
- [ ] All agents briefed with their roles

**Design Brief Preparation:**
- [ ] Confirmation Bias spec ready
- [ ] Anchoring Bias spec ready
- [ ] Hindsight Bias spec ready
- [ ] Dunning-Kruger spec ready
- [ ] Bandwagon Effect spec ready
- [ ] Spotlight Effect spec ready
- [ ] Sunk Cost Fallacy spec ready
- [ ] Framing Effect spec ready

**Reference Materials Accessible:**
- [ ] First 5 prototypes available for designers to study
- [ ] neural-symphony.js patterns documented
- [ ] Flexoki color palette documented
- [ ] Design system guide ready

### Phase 1: Parallel Design Launch (T+0 to T+20)

**Orchestrator Actions:**

```bash
# Create designer sessions
tmux new-session -d -s design-alpha -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io"
tmux new-session -d -s design-beta -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io"
tmux new-session -d -s design-gamma -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io"
tmux new-session -d -s design-delta -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io"

# Start Claude in each
tmux send-keys -t design-alpha "claude" Enter
tmux send-keys -t design-beta "claude" Enter
tmux send-keys -t design-gamma "claude" Enter
tmux send-keys -t design-delta "claude" Enter

# Wait for initialization
sleep 8

# Brief all designers simultaneously (parallel messages)
./send-claude-message.sh design-alpha:0 "[Designer-Alpha brief]"
./send-claude-message.sh design-beta:0 "[Designer-Beta brief]"
./send-claude-message.sh design-gamma:0 "[Designer-Gamma brief]"
./send-claude-message.sh design-delta:0 "[Designer-Delta brief]"
```

**Monitoring Strategy:**

Every 5 minutes, check progress:
```bash
# Quick check all designers
for session in design-alpha design-beta design-gamma design-delta; do
  echo "=== $session ==="
  tmux capture-pane -t $session:0 -p | tail -10
  echo ""
done
```

**Success Indicator:** Designers output complete HTML code blocks

### Phase 2: Orchestrator Execution (T+20 to T+30)

**Extraction Process:**

```bash
# Capture full designer outputs
tmux capture-pane -t design-alpha:0 -p -S - > /tmp/designer-alpha-output.txt
tmux capture-pane -t design-beta:0 -p -S - > /tmp/designer-beta-output.txt
tmux capture-pane -t design-gamma:0 -p -S - > /tmp/designer-gamma-output.txt
tmux capture-pane -t design-delta:0 -p -S - > /tmp/designer-delta-output.txt

# Manually extract HTML or use grep/sed
# (Could automate with script but manual is safer for quality)
```

**File Creation:**

Use Write tool to create all 8 files:
```
bias-confirmation.html
bias-anchoring.html
bias-hindsight.html
bias-dunning-kruger.html
bias-bandwagon.html
bias-spotlight.html
bias-sunk-cost.html
bias-framing.html
```

**Smoke Test:**

```bash
cd /Users/peteryang/Documents/Github/xiaolong-y.github.io

# Check all files created
ls -lh bias-*.html | wc -l  # Should be 13 (5 old + 8 new)

# Quick browser test (open first few)
open bias-confirmation.html
open bias-anchoring.html
# etc.
```

### Phase 3: Quality Assurance (T+30 to T+45)

**QA Launch:**

```bash
# Create QA sessions
tmux new-session -d -s qa-visual -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io"
tmux new-session -d -s qa-tech -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io"

# Start Claude
tmux send-keys -t qa-visual "claude" Enter
tmux send-keys -t qa-tech "claude" Enter
sleep 8

# Brief QA agents
./send-claude-message.sh qa-visual:0 "[QA-Visual brief with file list]"
./send-claude-message.sh qa-tech:0 "[QA-Technical brief with file list]"
```

**QA Monitoring:**

Check reports every 5 minutes:
```bash
tmux capture-pane -t qa-visual:0 -p | tail -50
tmux capture-pane -t qa-tech:0 -p | tail -50
```

**Collect Issues:**

Orchestrator compiles all reported issues into fix list

### Phase 4: Iteration (T+45 to completion)

**Fix Process:**

For each issue:
1. Read issue description
2. Open relevant bias file
3. Apply fix using Edit or Write tool
4. Re-test
5. Mark as resolved

**Final Validation:**

- [ ] All QA issues resolved
- [ ] All 13 bias files working
- [ ] Consistent quality across all prototypes
- [ ] Ready for git commit

---

## Risk Mitigation

### Risk 1: Designers Output Incomplete Code

**Likelihood:** Medium
**Impact:** High (blocks file creation)

**Mitigation:**
- Clear instructions: "Output COMPLETE HTML, not pseudocode"
- Provide example of expected output format
- Monitor early (5-min check) to catch incomplete work
- If incomplete, send follow-up: "Need FULL HTML including all tags"

**Contingency:**
- Orchestrator can complete partial designs
- Request specific missing sections
- Worst case: Orchestrator writes from scratch (proven to work)

### Risk 2: Permission Blocks (Again)

**Likelihood:** Low (learned from last time)
**Impact:** Medium

**Mitigation:**
- Designers instructed NOT to use Write/Bash
- Only output code as text
- Orchestrator handles ALL file operations
- QA agents only READ files (via browser)

**Contingency:**
- Already proven orchestrator has Write permissions
- Can create all files directly if needed

### Risk 3: QA Agents Can't Test in Browser

**Likelihood:** Medium
**Impact:** Medium

**Mitigation:**
- Provide clear testing instructions
- QA can describe what SHOULD be tested
- Orchestrator can do manual browser testing if needed

**Contingency:**
- Orchestrator performs all QA
- Automated testing via screenshots
- Focus on code review instead of browser testing

### Risk 4: Designers Produce Low-Quality Code

**Likelihood:** Low (based on briefing quality)
**Impact:** Medium

**Mitigation:**
- Provide first 5 prototypes as quality reference
- Clear design constraints in brief
- Early monitoring to catch quality issues
- QA will catch remaining issues

**Contingency:**
- Orchestrator can enhance/fix designer output
- Iterate with designers ("Needs improvement in X area")
- Proven: Orchestrator can write high-quality code directly

### Risk 5: Timeline Overruns

**Likelihood:** Medium
**Impact:** Low (no hard deadline)

**Mitigation:**
- Realistic time estimates (45-60 min)
- Parallel design maximizes throughput
- Can extend any phase if needed

**Contingency:**
- Pause and resume in next session
- Prioritize most important biases first
- Ship incrementally (4 now, 4 later)

---

## Success Metrics

### Quantitative Metrics

- [ ] **8 files created** (100% completion)
- [ ] **File sizes:** 7-15 KB each (efficient)
- [ ] **Zero console errors** in any file
- [ ] **60fps animations** (performance)
- [ ] **Mobile responsive** at 375px, 768px, 1200px
- [ ] **Dark mode functional** in all files
- [ ] **Total time:** <60 minutes

### Qualitative Metrics

- [ ] **Visual consistency** with first 5 prototypes
- [ ] **Interaction quality** feels smooth and intuitive
- [ ] **Educational value** bias clearly demonstrated
- [ ] **Code quality** follows established patterns
- [ ] **Aesthetic appeal** professionally designed
- [ ] **Innovation** each bias has unique creative approach

### Comparison to Previous Session

| Metric | Previous (5 biases) | Target (8 biases) |
|--------|---------------------|-------------------|
| Time to completion | 35 min | 45-60 min |
| Files created by agents | 0 | 0 (learned lesson) |
| Files created by orchestrator | 5 | 8 |
| Average file size | 9.6 KB | 8-12 KB |
| QA process | None | Formal QA team |
| Permission blocks | Many | Zero (avoided) |

---

## Designer Briefs (Full Text)

### Designer-Alpha Brief

```
DESIGNER-ALPHA: You are creating 2 cognitive bias visualizations.

ASSIGNMENT:
1. Confirmation Bias
2. Anchoring Bias

DESIGN CONSTRAINTS:
- Flexoki color palette (study bias-recency.html for colors)
- IBM Plex Mono font throughout
- Canvas-based interactive animations
- Mobile-responsive (min-width: 375px)
- Dark mode support via CSS @media (prefers-color-scheme: dark)
- Single HTML file per bias (inline CSS and JavaScript)
- File size target: 7-12 KB each
- Match aesthetic of existing prototypes

REFERENCE FILES:
Study these for quality benchmarks and code patterns:
- /Users/peteryang/Documents/Github/xiaolong-y.github.io/bias-recency.html
- /Users/peteryang/Documents/Github/xiaolong-y.github.io/bias-loss-aversion.html
- /Users/peteryang/Documents/Github/xiaolong-y.github.io/assets/js/neural-symphony.js

BIAS 1: CONFIRMATION BIAS
Concept: Central "belief bubble" with magnetic properties. Matching-color particles get absorbed, opposing-color particles get deflected/repelled. Toggle to flip belief and watch attraction/repulsion reverse.

Interactive Elements:
- Central belief bubble (e.g., "Climate change is real")
- Particles flowing from edges labeled with evidence
- Green particles = confirming evidence (attracted)
- Red particles = contradicting evidence (repelled)
- Toggle button flips belief, reverses particle behavior
- Visual representation of selective exposure

Technical Requirements:
- Physics simulation (attraction/repulsion forces)
- Particle system with color coding
- Smooth animation (requestAnimationFrame)
- Toggle state management

BIAS 2: ANCHORING BIAS
Concept: Large "anchor" number drops with weight/gravity effect. Subsequent numbers orbit around it, distorted by proximity. Slider changes anchor value, watch all estimates shift accordingly.

Interactive Elements:
- Large anchor number (e.g., $100) drops from top with gravity
- Subsequent estimate numbers orbit around anchor
- Numbers closer to anchor = more distorted
- Slider to change anchor value
- All orbiting numbers shift with new anchor
- Visual representation of anchoring effect on judgments

Technical Requirements:
- Gravity simulation for anchor drop
- Orbital mechanics for estimate numbers
- Slider control with live updates
- Smooth transitions when anchor changes

CRITICAL INSTRUCTIONS:
1. DO NOT try to create files using Write or Bash tools
2. DO NOT wait for file creation permissions
3. OUTPUT complete HTML code as text in your response
4. Format:
   "Here is bias-confirmation.html:

   [COMPLETE HTML CODE]

   ---

   Here is bias-anchoring.html:

   [COMPLETE HTML CODE]"

Your code will be extracted and files created by the orchestrator.

WORK IN: /Users/peteryang/Documents/Github/xiaolong-y.github.io/
OUTPUT: 2 complete HTML files as code blocks
DEADLINE: 20 minutes

BEGIN DESIGN NOW!
```

### Designer-Beta Brief

```
DESIGNER-BETA: You are creating 2 cognitive bias visualizations.

ASSIGNMENT:
1. Hindsight Bias
2. Dunning-Kruger Effect

[Similar structure to Alpha brief...]

BIAS 1: HINDSIGHT BIAS
Concept: Timeline with coin flip/prediction. Before: two equal paths. After reveal: winning path brightens, straightens; losing path fades, becomes dotted. Confidence meter swells post-outcome.

Interactive Elements:
- Timeline with decision point
- Two equal probability paths before outcome
- "Flip Coin" button reveals outcome
- Winning path: brightens, straightens, solid line
- Losing path: fades, becomes wavy/dotted
- Confidence meter increases after outcome
- "I knew it all along!" message appears
- Reset button to replay

Technical Requirements:
- SVG or Canvas path morphing
- Smooth transitions (bezier curves)
- State management (before/after reveal)
- Confidence visualization (bar or meter)

BIAS 2: DUNNING-KRUGER EFFECT
Concept: Two animated curves: Confidence vs. Competence. Confidence spikes early, crashes (Valley of Despair), then gradually aligns. Mini-quiz tracks user's confidence vs. actual performance.

Interactive Elements:
- Dual curves (Confidence = red, Competence = blue)
- X-axis: Experience (Novice → Expert)
- Y-axis: Perceived skill level
- Animation shows curves over time
- "Peak of Mt. Stupid" and "Valley of Despair" labels
- Mini-quiz: 5 questions
- User rates confidence before answering
- Shows confidence vs. actual correctness
- Plots user on the curve

Technical Requirements:
- Line chart with smooth curves
- Animation along X-axis
- Quiz state management
- Confidence slider for each question
- Score calculation and visualization

[REST OF BRIEF SIMILAR TO ALPHA]
```

### Designer-Gamma Brief

```
DESIGNER-GAMMA: You are creating 2 cognitive bias visualizations.

ASSIGNMENT:
1. Bandwagon Effect
2. Spotlight Effect

BIAS 1: BANDWAGON EFFECT
Concept: Opinion bubbles floating. Clusters attract nearby undecided bubbles. Bigger cluster = stronger gravitational pull. Small contrary opinions squeezed to margins. User can seed opinions, watch adoption spread.

Interactive Elements:
- Floating opinion bubbles (different colors)
- Undecided bubbles (gray) drift around
- Clusters form gravitational attraction
- Larger clusters attract more strongly
- User can click to seed new opinions
- Watch clustering behavior emerge
- Contrary opinions get marginalized
- Counter shows adoption rate

Technical Requirements:
- Particle physics with attraction forces
- Collision detection
- Mass-based gravity simulation
- Click to spawn new bubbles
- Dynamic clustering

BIAS 2: SPOTLIGHT EFFECT
Concept: Central figure with huge spotlight on self. Surrounding observers have tiny flashlights pointed elsewhere (phones, sky, each other). Click observers to reveal what they're actually focused on (never the user).

Interactive Elements:
- Central figure with large spotlight
- 8-10 observer figures around edges
- Each observer has small flashlight
- Click observer → reveals their actual focus
- Focus options: phone, sky, other person, ground
- Never focused on central figure
- Counter: "0/10 people noticed you"
- Message: "Everyone's in their own spotlight"

Technical Requirements:
- Spotlight effects (radial gradients)
- Click handlers for each observer
- Animation of focus reveal
- Icon/emoji for attention targets
- State tracking

[REST OF BRIEF]
```

### Designer-Delta Brief

```
DESIGNER-DELTA: You are creating 2 cognitive bias visualizations.

ASSIGNMENT:
1. Sunk Cost Fallacy
2. Framing Effect

BIAS 1: SUNK COST FALLACY
Concept: Pit filling with coins. Each coin makes pit deeper. "Walk away" button shrinks and moves farther with each investment. Visceral feeling of increasing difficulty to stop.

Interactive Elements:
- Pit visualization (canvas or SVG)
- "Invest $10" button
- Each click: coin falls into pit, pit deepens
- "Walk Away" button at top
- Button shrinks and moves farther each investment
- Counter shows total invested
- Message changes: "$10 invested → Don't waste it!"
- Eventually button almost invisible
- Emotional weight visualization

Technical Requirements:
- Animated coin drop (gravity)
- Dynamic pit depth rendering
- Button transformation (shrink + move)
- Cumulative investment tracking
- Psychological pressure messaging

BIAS 2: FRAMING EFFECT
Concept: Same statistic shown two ways: "90% survival" = green, upward arrows, smiles vs "10% mortality" = red, downward arrows, skulls. Preference meter shifts despite identical data. Toggle between frames.

Interactive Elements:
- Medical treatment decision scenario
- Frame 1: "90% survival rate" (green, positive icons)
- Frame 2: "10% mortality rate" (red, negative icons)
- Toggle button switches frames
- "Would you choose this treatment?" Yes/No buttons
- Preference meter shows emotional response
- Same data, different framing
- Reveal: "These are identical statistics!"

Technical Requirements:
- Dual presentation layouts
- Smooth transitions between frames
- Icon animations (arrows, emoticons)
- Color psychology (green=good, red=bad)
- State management for toggle
- Preference visualization

[REST OF BRIEF]
```

### QA-Visual Brief

```
QA-VISUAL: You are the Visual Quality Assurance agent.

MISSION: Test 8 newly created cognitive bias visualizations for visual design quality, interaction smoothness, and aesthetic consistency.

FILES TO TEST:
1. bias-confirmation.html
2. bias-anchoring.html
3. bias-hindsight.html
4. bias-dunning-kruger.html
5. bias-bandwagon.html
6. bias-spotlight.html
7. bias-sunk-cost.html
8. bias-framing.html

LOCATION: /Users/peteryang/Documents/Github/xiaolong-y.github.io/

QUALITY BENCHMARKS:
Reference these existing prototypes for quality standards:
- bias-recency.html
- bias-availability.html
- bias-loss-aversion.html
- bias-halo.html
- bias-survivorship.html

TEST MATRIX (for EACH file):

✅ VISUAL AESTHETICS:
- [ ] Colors match Flexoki palette
- [ ] IBM Plex Mono font used throughout
- [ ] Visual hierarchy clear
- [ ] Professional appearance
- [ ] No visual glitches

✅ INTERACTIONS:
- [ ] All buttons/controls responsive
- [ ] Animations smooth (no jank)
- [ ] Hover states work
- [ ] Click targets adequate size
- [ ] Feedback on user actions

✅ DARK MODE:
- [ ] Toggle dark mode (System Preferences)
- [ ] Colors adapt properly
- [ ] Text remains readable
- [ ] Contrast sufficient

✅ MOBILE RESPONSIVE:
- [ ] Resize window to 375px width
- [ ] Layout adapts correctly
- [ ] No horizontal scroll
- [ ] Touch targets adequate
- [ ] Text remains readable

✅ EDUCATIONAL CLARITY:
- [ ] Bias concept clearly explained
- [ ] Interaction teaches the bias
- [ ] Examples/labels helpful
- [ ] User learns something

OUTPUT FORMAT (for each file):

## QA Report: bias-[name].html

### Visual Aesthetics: ✅ PASS / ❌ FAIL
[Comments]

### Interactions: ✅ PASS / ❌ FAIL
[Comments]

### Dark Mode: ✅ PASS / ❌ FAIL
[Comments]

### Mobile Responsive: ✅ PASS / ❌ FAIL
[Comments]

### Educational Clarity: ✅ PASS / ❌ FAIL
[Comments]

### Overall Rating: ⭐⭐⭐⭐⭐ (1-5 stars)

### Issues Found:
1. [Specific issue with reproduction steps]
2. [Another issue]

### Suggestions for Improvement:
- [Optional enhancement]

---

Complete QA reports for all 8 files. Be thorough but efficient.
```

### QA-Technical Brief

```
QA-TECHNICAL: You are the Technical Quality Assurance agent.

[Similar structure focusing on performance, accessibility, code quality]

TEST MATRIX (for EACH file):

✅ PERFORMANCE:
- [ ] Canvas renders at 60fps
- [ ] No dropped frames
- [ ] Animations smooth
- [ ] Resource usage reasonable

✅ CODE QUALITY:
- [ ] Follows patterns from existing prototypes
- [ ] No console errors
- [ ] Code well-organized
- [ ] Reasonable file size (<15KB)

✅ ACCESSIBILITY:
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Alt text on images
- [ ] Semantic HTML structure
- [ ] Color contrast WCAG AA

✅ BROWSER COMPATIBILITY:
- [ ] Works in Chrome
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] No browser-specific bugs

[Rest similar to QA-Visual]
```

---

## Post-Deployment

### Immediate Actions After Completion

1. **Git Commit**
```bash
cd /Users/peteryang/Documents/Github/xiaolong-y.github.io
git add bias-*.html COGNITIVE_BIASES_DEV_LOG.md TEAM_DESIGN_OPTIMIZED.md
git commit -m "feat: Add 8 cognitive bias visualizations (confirmation, anchoring, hindsight, dunning-kruger, bandwagon, spotlight, sunk-cost, framing)"
git push
```

2. **Update Dev Log**
- Append completion notes to COGNITIVE_BIASES_DEV_LOG.md
- Document actual vs. planned timeline
- Note any deviations from this plan
- Record final file sizes

3. **Create Index Page** (Next session)
- Grid layout with all 13 biases
- Thumbnails/previews
- Search/filter
- Categories

4. **Team Cleanup**
```bash
# Kill design sessions
tmux kill-session -t design-alpha
tmux kill-session -t design-beta
tmux kill-session -t design-gamma
tmux kill-session -t design-delta

# Kill QA sessions
tmux kill-session -t qa-visual
tmux kill-session -t qa-tech
```

### Success Celebration

When all 13 prototypes are complete:
- 🎉 Full cognitive bias visualization suite
- 📊 Educational resource for psychology/economics students
- 💡 Demonstrates interactive data visualization skills
- 🚀 Portfolio-ready project
- 📈 Valuable addition to academic website

---

## Appendix: Command Reference

### Tmux Session Management
```bash
# List all sessions
tmux ls

# Create session
tmux new-session -d -s [name] -c "[directory]"

# Send keys
tmux send-keys -t [session]:[window] "[command]" Enter

# Capture pane
tmux capture-pane -t [session]:[window] -p
tmux capture-pane -t [session]:[window] -p -S -  # Full history

# Kill session
tmux kill-session -t [name]
```

### Orchestrator Messaging
```bash
# Send message to agent
./send-claude-message.sh [session]:[window] "message"

# Schedule reminder
./schedule_with_note.sh [minutes] "note" "[session]:[window]"
```

### File Operations
```bash
# Check file sizes
ls -lh bias-*.html

# Count files
ls bias-*.html | wc -l

# Open in browser
open bias-[name].html

# View file
cat bias-[name].html | head -50
```

---

**END OF OPTIMIZED TEAM DESIGN**
**Ready to deploy on your command!**
