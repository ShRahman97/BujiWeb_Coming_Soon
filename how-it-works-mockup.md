# How-it-works page refinement mockup

Below is a content-first mockup for refining the how-it-works experience without changing imagery or copy. It focuses on hierarchy, whitespace, and polish.

## Above-the-fold
- **Header**: Keep the existing logo; add a subtle 1px bottom border (#ececec) and 16px padding for a lighter frame.
- **Intro block**: Center content inside a 960px max width. Reduce the title to ~42px with 1.2 line-height and pair with a 20px subtitle set at 60% width for comfortable reading.
- **Hero**: Wrap the hero photo in a soft radial gradient background (#f7f7ff → transparent) with a 28px radius and 32px padding so the image sits on a card instead of touching the page background.

## Step flow
- **Layout**: Use a vertical timeline spine on the center column: a 2px muted line stretching through the steps with the numbered circles overlapping it. Each step becomes a 2-column grid (media on left, copy on right) at desktop, switching to a single column at 900px.
- **Step cards**: Place steps on lightly elevated cards (white, 18px radius, 0 18px 55px rgba(15, 23, 42, 0.08)). Add 32px padding and 28px gap to separate images and text.
- **Numbered circles**: Reduce to 80px with a soft inner shadow; pull them halfway over the card edge to create depth.
- **Copy styling**: Set titles to 28px/1.3 and body to 16px/1.7 with a 520px max width; add a 12px top rule (#e8ecf3) on the body copy for subtle structure.
- **Phone stacks**: Constrain floating media inside a 320px container; simplify offsets to avoid overlap beyond the card boundary. Add a thin outline (#f1f5f9) to floating images so they read as cards.

## "Why choose" grid
- Increase grid gap to 36px and cards to 22px radius. Add 18px pill labels at the top-left of each card (e.g., "Transparent", "Medical", "Trusted", "Concierge", "Aftercare") using a soft gray background (#f3f4f6) and 12px bold text for scannability.
- Use 260px image height with subtle zoom-on-hover (scale 1.02) and a 3px top border in the accent green (#cbe898) for brand continuity.

## CTA band
- Place the CTA on a full-width slate gradient (#0f172a → #111827) with faint noise texture. Center copy to 720px max width, use 34px heading/1.3 line-height, and place buttons side-by-side on desktop (primary filled + secondary ghost) collapsing to stacked on mobile.

## Mobile
- Collapse step cards to single column with the number badge top-left. Reduce paddings to 20px and set consistent 24px vertical spacing between sections. Keep floating images inside a 260px container and lower drop shadow for performance.

## Quick color tokens
- Backgrounds: `--bg` #f9fafb, `--bg-alt` #ffffff, `--panel` #ffffff
- Text: `--text` #0f172a, `--muted` #475569
- Accents: `--accent` #cbe898, `--line` #e2e8f0

## Implementation notes
- Most changes are CSS-only: timeline spine pseudo-element, card wrapper, refined shadow/radius, and simplified float offsets. No copy or asset updates required.
