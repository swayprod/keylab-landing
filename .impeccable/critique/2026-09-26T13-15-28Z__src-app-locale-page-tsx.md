---
target: STUDIO landing (portfolio showcase)
total_score: 26
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
target_identity: "file:/Users/vfr/Desktop/BACKTAGE/src/app/[locale]/page.tsx"
target_fingerprint: "sha256:5f622351faf46826d172b8101b3c6d4d368f4601325354988b2be981c4dd4044"
target_path: /Users/vfr/Desktop/BACKTAGE/src/app/[locale]/page.tsx
timestamp: 2026-09-26T13-15-28Z
slug: src-app-locale-page-tsx
---
Method: dual-agent (A: design review · B: detector + browser)

Score 26/32 (n/a: 7, 10). Hero authored (8/10), rest of page reads as premium dark template (5/10).
Detector: CLI 0 findings; browser 1440px: dark-glow 18, ai-color-palette 25 (≈6 real icons + gradient metrics), all-caps-body 3, gradient-text 1, cramped-padding 6-9 (false positives).

P0 Cases look like placeholders: blue wireframe SVGs, identical cards, fake round metrics → art-directed fictional client mockups, one oversized hero case, hover preview.
P1 No second wow after hero, 6x same SectionHeader+cards template → full-bleed giant type line, giant-number Stats, torus reprise in final CTA, giant footer wordmark.
P1 Flat typographic hierarchy between sections → vary H2 scale/alignment, uppercase display lines, mono indices.
P2 Neon applied uniformly (glow everywhere, same gradient on every metric) → one glow per viewport, editorial paper sections, cyan as signal colour.
P2 Header turns muddy grey over light sections; mobile sticky benefits panel eats ~25% viewport.
Minor: hero text invisible until JS (FadeIn opacity 0), form glow bleeds right edge, hard Stats→FAQ seam, generic logo, sparse footer, off-system white FAQ card, long mono sentences in all caps.
