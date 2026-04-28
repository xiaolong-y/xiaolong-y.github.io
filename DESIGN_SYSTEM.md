# Design System: Tinker Aesthetic

*Inspired by the TinkerToy Computer (Hillis & Silverman) and thinkingmachines.ai*

---

## Design Philosophy

### Core Principles

1. **Computational Beauty Made Visible**
   - Like the TinkerToy Computer, make structure apparent
   - Every visual element should feel intentional and connected
   - Precision with warmth—mechanical but not cold

2. **Content Over Decoration**
   - Whitespace is a design material, not empty space
   - Typography carries hierarchy
   - Resist ornamentation that doesn't serve understanding

3. **Craft-Like Attention to Detail**
   - Consistent spacing creates rhythm
   - Color coding communicates meaning
   - Subtle animations suggest life without distraction

---

## Preserved Elements

### Color Palette (Flexoki)
```css
:root {
  /* Base - KEEP */
  --fx-paper: #FFFCF0;
  --fx-base-50: #F2F0E5;
  --fx-base-200: #DAD8CE;
  --fx-base-700: #6F6E69;
  --fx-base-900: #2D2B28;
  --fx-base-950: #1C1B18;

  /* Accents - KEEP (TinkerToy colors!) */
  --fx-yellow: #AD8301;   /* Primary nodes */
  --fx-orange: #BC5215;   /* Connections */
  --fx-red: #AF3029;      /* Alert/negative */
  --fx-green: #66800B;    /* Success/positive */
  --fx-blue: #205EA6;     /* Links/interactive */
  --fx-cyan: #24837B;     /* Hover states */
  --fx-purple: #5E409D;   /* Special elements */
}
```

### Typography (Keep)
- Primary: IBM Plex Mono
- Weights: 200 (body), 300 (headings), 500 (emphasis)

---

## Adopted from Reference

### Spacing Scale (8px base)
```css
:root {
  --sp-1: 8px;    /* Tight */
  --sp-2: 16px;   /* Default */
  --sp-3: 24px;   /* Comfortable */
  --sp-4: 32px;   /* Sections */
  --sp-5: 48px;   /* Major breaks */
  --sp-6: 64px;   /* Page sections */
  --sp-7: 96px;   /* Hero spacing */
}
```

### Visual Rhythm
- Section gaps: 64px minimum
- Component padding: 24-32px
- Line height: 1.6 for body, 1.3 for headings
- Max content width: 800px for prose, 1200px for grids

### Shadow System (Subtle)
```css
--shadow-subtle: 0 1px 3px rgba(45, 43, 40, 0.08);
--shadow-medium: 0 4px 12px rgba(45, 43, 40, 0.10);
--shadow-float: 0 8px 24px rgba(45, 43, 40, 0.12);
```

---

## Tinker Aesthetic: Specific Treatments

### Node Styling (for interactive elements)
```css
.tinker-node {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--fx-yellow);
  border: 2px solid var(--fx-base-700);
  box-shadow: inset 0 1px 2px rgba(255,255,255,0.3);
}
```

### Connection Lines
```css
.tinker-connection {
  stroke: var(--fx-orange);
  stroke-width: 2px;
  stroke-linecap: round;
}
```

### Geometric Precision
- Border radius: 2-4px (crisp, not rounded)
- Line weights: 1px (delicate), 2px (structural), 4px (emphasis)
- Angles: 45° and 90° preferred for diagrams

### Animation Curves
```css
--ease-mechanical: cubic-bezier(0.4, 0.0, 0.2, 1);
--ease-gentle: cubic-bezier(0.25, 0.1, 0.25, 1.0);
--duration-fast: 150ms;
--duration-medium: 300ms;
--duration-slow: 500ms;
```

---

## Component Patterns

### Cards
```css
.card {
  background: var(--fx-base-50);
  border: 1px solid var(--fx-base-200);
  border-radius: 4px;
  padding: var(--sp-3);
  box-shadow: var(--shadow-subtle);
}

.card:hover {
  border-color: var(--fx-blue);
  box-shadow: var(--shadow-medium);
  transform: translateY(-2px);
}
```

### Navigation
```css
.nav-link {
  color: var(--fx-base-700);
  padding: var(--sp-1) var(--sp-2);
  border-bottom: 2px solid transparent;
  transition: all var(--duration-fast) var(--ease-mechanical);
}

.nav-link:hover {
  color: var(--fx-blue);
  border-bottom-color: var(--fx-blue);
}

.nav-link.active {
  color: var(--fx-yellow);
  border-bottom-color: var(--fx-yellow);
}
```

### Buttons
```css
.btn-primary {
  background: var(--fx-blue);
  color: var(--fx-paper);
  padding: var(--sp-1) var(--sp-3);
  border: none;
  border-radius: 3px;
  font-weight: 500;
}

.btn-secondary {
  background: transparent;
  color: var(--fx-blue);
  border: 1px solid var(--fx-blue);
  padding: var(--sp-1) var(--sp-3);
  border-radius: 3px;
}
```

---

## Page-Specific Guidelines

### Main Page (README.md)
- Hero: Neural visualization right-aligned, generous whitespace left
- Navigation: Horizontal, centered, minimal
- Sections: Clear typographic hierarchy, no boxes around text
- Footer: Social icons, subtle, centered

### Quotes Page
- Background: Cream/paper (#FFFCF0)
- Cards: White with subtle shadow, slight rotation (-2° to 2°)
- Layout: Masonry or organic float, not rigid grid
- Animation: Gentle drift/parallax on scroll, ephemeral feeling
- Typography: Serif for quotes (Crimson Pro), mono for attribution

### Cognitive Bias Visualizations
- Container: Clean border, subtle shadow
- Canvas: Full-width within container
- Controls: Minimal, grouped, clear labels
- Color coding: Match category (perception=blue, memory=purple, etc.)
- Interaction: Immediate feedback, smooth 60fps

### Bookshelf
- Keep current polished state
- Ensure consistent with new navigation pattern

---

## Accessibility Requirements

- Color contrast: WCAG AA minimum (4.5:1 for text)
- Focus states: Visible outline using --fx-blue
- Reduced motion: Honor prefers-reduced-motion
- Touch targets: 44px minimum
- Keyboard navigation: Full support for all interactives

---

## File Naming

```
Page files:     quotes.md, bookshelf.md, cognitive-biases.html
Bias files:     bias-[name].html (bias-confirmation.html)
Assets:         assets/js/[feature].js, assets/css/[feature].css
```

---

## Checklist Before Implementation

- [ ] Design system approved by user
- [ ] All color values use CSS variables
- [ ] Spacing follows 8px scale
- [ ] Animations use defined curves
- [ ] Mobile breakpoints defined (600px, 900px, 1200px)
- [ ] Dark mode tested
- [ ] Accessibility checked
