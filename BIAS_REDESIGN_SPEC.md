# Cognitive Bias Visualization Redesign Specification

## Design Philosophy

Each visualization must embody the **core psychological mechanism** of the bias, not just illustrate it. The user should *experience* the bias, not merely observe it. Following the recency bias gold standard:

- **Direct metaphor**: Visual elements map 1:1 to the cognitive mechanism
- **Interactive insight**: User action reveals how the bias operates
- **Minimal UI**: The visualization IS the explanation
- **Continuous feedback**: Real-time response to user interaction

---

## 1. Confirmation Bias

**Core Mechanism**: We actively seek, notice, and remember information that confirms our existing beliefs while dismissing contradicting information.

**Psychological Insight**: It's not passive filtering—it's active construction of a worldview.

**Visualization Concept**:
A "belief lens" in the center. Information particles drift across the screen. When belief is active:
- Confirming info passes through clearly, gets larger/brighter
- Contradicting info gets refracted, distorted, pushed to periphery
- Toggle belief off to see all information equally

**Key Interaction**: Toggle the belief on/off. See how the same information stream looks completely different.

---

## 2. Anchoring Bias

**Core Mechanism**: The first number we encounter becomes an unconscious reference point that skews all subsequent judgments—even when the anchor is arbitrary or irrelevant.

**Psychological Insight**: We don't evaluate things absolutely; we evaluate relative to anchors.

**Visualization Concept**:
A number line with a draggable anchor point. Other numbers "orbit" around the anchor based on proximity. When you drag the anchor:
- Numbers close to anchor appear "reasonable" (centered, normal size)
- Numbers far from anchor appear "extreme" (pushed to edges, small)
- Same number appears different depending on anchor position

**Key Interaction**: Drag the anchor. Watch how $50 seems cheap when anchored at $200, expensive when anchored at $10.

---

## 3. Hindsight Bias

**Core Mechanism**: After learning an outcome, we reconstruct our memory to believe we "knew it all along." The past is rewritten to seem predictable.

**Psychological Insight**: Memory is not a recording—it's a reconstruction influenced by present knowledge.

**Visualization Concept**:
Multiple branching paths from a starting point (like a tree). All paths visible initially, showing genuine uncertainty. User clicks to "reveal outcome" on one path:
- That path becomes bold, golden, seemingly inevitable
- Other paths fade, become dotted, seem implausible
- Timeline indicator shows "before" vs "after" knowing

**Key Interaction**: Click "Reveal Outcome" button. Watch other possibilities literally fade as the chosen path seems obvious.

---

## 4. Dunning-Kruger Effect

**Core Mechanism**: Those with low ability overestimate their competence (they don't know enough to know what they don't know). Those with high ability underestimate (they assume others are similarly competent).

**Psychological Insight**: Metacognition requires the same skills being evaluated.

**Visualization Concept**:
An interactive quiz with 5-10 questions. User answers AND estimates their performance (0-100%). After completion:
- Plot actual score vs estimated score
- Show the classic D-K curve with user's point highlighted
- Show distribution of where others land

**Key Interaction**: Take the quiz, estimate confidence, see where you fall on the curve.

---

## 5. Bandwagon Effect

**Core Mechanism**: We adopt beliefs, behaviors, and preferences because we perceive that many others do—regardless of underlying evidence.

**Psychological Insight**: Social proof is a cognitive shortcut that usually works but can cascade into collective irrationality.

**Visualization Concept**:
A voting scenario with options A and B. Show vote counts updating in real-time (simulated). As one option gains more votes:
- Its visual "mass" increases, pulling cursor toward it
- The other option becomes physically harder to click (cursor resists)
- Final reveal: votes were randomly generated

**Key Interaction**: Try to vote for the minority option. Feel the gravitational pull toward the majority.

---

## 6. Spotlight Effect

**Core Mechanism**: We drastically overestimate how much others notice our appearance, behavior, and mistakes—because we're the center of our own attention.

**Psychological Insight**: Everyone is the protagonist of their own story, too busy thinking about themselves to notice you.

**Visualization Concept**:
A figure (you) in center with multiple observer figures around. Two views:
- "Your Perception": Bright spotlight on you, all observers staring at you
- "Reality": Observers looking at phones, each other, random directions—barely noticing you

**Key Interaction**: Toggle between "Your View" and "Reality." See the dramatic difference.

---

## 7. Sunk Cost Fallacy

**Core Mechanism**: We continue investing in failing endeavors because of what we've already invested—even when the rational choice is to stop.

**Psychological Insight**: Past costs are irrecoverable but we treat them as relevant to future decisions.

**Visualization Concept**:
A digging/mining scene. Each click invests more (time visualized as depth dug). A treasure indicator shows diminishing probability. As investment deepens:
- The "quit" button physically moves further away / becomes smaller
- Investment counter prominently displays sunk cost
- Probability of success shown honestly (decreasing)

**Key Interaction**: Keep clicking to invest more. Notice how harder it becomes psychologically to stop.

---

## 8. Framing Effect

**Core Mechanism**: Identical information presented differently (as gain vs loss, percentages vs absolute numbers) leads to different decisions.

**Psychological Insight**: We don't respond to objective reality but to its presentation.

**Visualization Concept**:
Side-by-side identical scenarios framed differently:
- "90% survival rate" vs "10% mortality rate"
- "Save 200 people guaranteed" vs "1/3 chance to save 600"
Show the same underlying statistics with visual representations:
- Gain frame: Growing, green, expansive
- Loss frame: Shrinking, red, contracting

**Key Interaction**: Mouse over to see the mathematical equivalence. Notice visceral reaction differs.

---

## 9. Availability Heuristic

**Core Mechanism**: We judge frequency/probability by how easily examples come to mind. Vivid, recent, emotional events are overweighted; mundane but common events are underweighted.

**Psychological Insight**: Media exposure shapes our perception of reality more than statistics do.

**Visualization Concept**:
A word/bubble cloud comparing perceived vs actual frequency:
- Shark attacks, plane crashes, terrorism: HUGE bubbles (perception)
- Heart disease, car accidents, falls: tiny bubbles (perception)
Toggle to "Reality" view: sizes flip to reflect actual statistics

**Key Interaction**: Toggle "Media View" vs "Statistical Reality." See the inversion.

---

## 10. Halo Effect

**Core Mechanism**: One positive trait (attractiveness, charisma, expertise in one area) colors our perception of unrelated traits, creating a "halo" of positive assumptions.

**Psychological Insight**: We don't evaluate traits independently—positive impressions bleed across domains.

**Visualization Concept**:
A profile with multiple trait sliders (intelligence, kindness, competence, trustworthiness). When user boosts "attractiveness":
- A golden glow emanates from it
- Other sliders drift upward automatically
- The correlation is visible as connecting glow

**Key Interaction**: Drag one "halo" trait slider. Watch others rise without evidence.

---

## 11. Loss Aversion

**Core Mechanism**: Losses hurt approximately twice as much as equivalent gains feel good. $100 lost hurts more than $100 gained pleases.

**Psychological Insight**: Our value function is asymmetric—steeper for losses than gains.

**Visualization Concept**:
A balance scale visualization. Add weights to gain side and loss side:
- Gain weights are normal
- Loss weights appear 2x heavier (visually larger or denser)
- Scale tips dramatically even when "amounts" are equal
- Show the Kahneman-Tversky value function curve

**Key Interaction**: Add equal amounts to both sides. See the scale tip toward loss. Feel the asymmetry.

---

## 12. Survivorship Bias

**Core Mechanism**: We focus on the survivors (successful people, companies, strategies) while ignoring the silent evidence of failures—leading to false conclusions.

**Psychological Insight**: The dead don't write memoirs. Failed startups don't give TED talks.

**Visualization Concept**:
The classic WWII plane example. Show plane silhouette with red dots where returning planes were hit. Initial view shows the survivor data only. Toggle reveals:
- Ghost planes where damage was fatal (engines, cockpit, fuel)
- The realization: armor the places with NO damage on survivors

**Key Interaction**: Click "Reveal the Fallen." See the ghost planes appear with critical-area damage.

---

## Styling Requirements

All visualizations must follow the main page theme:
- Font: IBM Plex Mono
- Colors: Flexoki palette (--fx-paper, --fx-base-*, accent colors)
- Spacing: 8px scale
- Animation: --ease-mechanical, --ease-gentle curves
- Dark mode: Full support
- Mobile: Touch-friendly, responsive

## Index Page Requirements

- Remove stats dashboard (13 biases, 5 categories, 100% interactive)
- Remove emojis from cards
- Match main page navigation style
- Simple grid of cards with bias name and brief description
- Subtle hover effects consistent with main page
