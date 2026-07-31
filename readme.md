# FUCKBOY — Design System

Design system for **FUCKBOY — Das verbotene Werkzeug**, an interactive German-language e-learning staged as a leaked, classified dossier. A self-declared "fuckboy" (professionally a sales trainer) writes down the communication methods he has used for casual dating — and, in the same document, what those methods cost. The product's whole dramaturgy is the tension between the two.

**The design system exists to hold that tension visually.** Every screen must be able to say "this works" and "this is unfair" at the same time, without one voice drowning out the other. That is why the palette has both an electric reward colour and a bordeaux cost colour, why consent has its own hue that is never used for rewards, and why a high Fuckboy-Level is deliberately styled as neutral rather than a win.

---

## Sources

| Source | URL / path | What we got from it |
| --- | --- | --- |
| Product concept | Provided in chat ("FUCKBOY – Das verbotene Werkzeug", ~325 lines) | Narrative frame, chapter themes, tone of voice, gamification model, the explicit visual brief (black / white / dark bordeaux / occasional electric accents; secret document, men's magazine, black dossier, dating thriller, psychology experiment) |
| Code repository | https://github.com/philip1658/fuckboy (private) | **Empty — zero commits.** No components, tokens, assets or screens existed to import. See "Caveats". |
| Design reference | https://www.gq-magazine.co.uk | Editorial reference named by the client: high-contrast Didone display serif, condensed uppercase kickers, hairline rules, full-bleed imagery with bottom scrims, generous vertical air, near-monochrome palette with one hot accent. Our type and layout rules follow this model. |
| Icon set | https://github.com/lucide-icons/lucide (`icons/`, branch `main`) | 49 outline SVGs copied verbatim into `assets/icons/` and inlined into `Icon.jsx` |

Readers with access to the repository should explore it directly — a real codebase will always beat this reconstruction for component structure, naming and exact values. Once `philip1658/fuckboy` has content, re-run a sync and let it overwrite the invented parts of this system (see `github.md`).

---

## Index

| File / folder | What it is |
| --- | --- |
| `styles.css` | Global entry point — `@import` lines only. Consumers link this one file. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `borders.css`, `effects.css`, `motion.css`, `base.css` |
| `components/core/` | Icon, Button, IconButton, Badge, Tag, Card, Rule |
| `components/forms/` | Input, Textarea, Select, Checkbox, Radio, Switch |
| `components/feedback/` | WarningNotice, Dialog, Toast, Tooltip |
| `components/navigation/` | Tabs, ProgressRail |
| `components/learning/` | ChoiceOption, PillChoice, ScoreMeter, ChatBubble, SwipeCard, Redacted, Stamp, ChapterCard, LockedPanel |
| `ui_kits/elearning/` | Full click-through recreation of the product — 6 screens. See its own README. |
| `guidelines/` | 30 foundation specimen cards (Colors, Type, Spacing, Surfaces, Motion, Brand) |
| `assets/icons/` | 49 Lucide outline SVGs |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-Skill entry point |
| `github.md` | Upstream source association for one-click sync |

---

## CONTENT FUNDAMENTALS

**Language.** German, Swiss orthography — `ss` never `ß` ("grösste", "ausschliesslich", "weiss"). Swiss-German audience, Swiss narrator.

**Person.** The narrator writes **ich**; he addresses the learner as **du**. Never "Sie", never "man" as a hiding place, never a corporate "wir". The product itself — headings, labels, system feedback — drops to a neutral third voice: "Antworten sind nicht richtig oder falsch."

**Register.** Short declaratives. Fragments are allowed and preferred over commas: *"Sie hat es gemerkt. Ich habe damals gedacht, es lag an meinem Hemd. Es lag an meiner Erwartung."* Sentences average under 14 words. No subordinate-clause towers, no consultancy nouns ("Optimierungspotenzial", "Kommunikationsstrategie").

**Provocation with a floor.** The narrator may be arrogant, contradictory, self-mocking. He may not be right about everything, and the product says so out loud: *"Ich verkaufe dir hier eine Haltung, die mir selbst nicht immer gelingt."* Provocation is always followed by cost, in the same breath — never in a separate compliance chapter.

**The consent voice is different.** When the copy talks about boundaries it drops all irony and gets shorter and colder: *"Ein Nein ist keine Verhandlungsposition."* / *"Thema vom Tisch — dauerhaft."* No hedging ("eigentlich", "meistens"), no future-tense escape hatches ("vielleicht später"). If a consent sentence could be read as a technique for eventually getting a yes, it is wrong and must be rewritten.

**What copy never does.**
- Never frames a woman as a target, product, funnel or customer. The sales-parallel is about *the narrator's own* communication, never about her being processed.
- Never presents a boundary as an obstacle to route around.
- Never rewards consent. Consent is the floor, not a score you win.
- Never uses "nice guy" framing as a virtue — the product treats hidden intent as the failure it is.

**Casing.** Sentence case for all prose and headings ("Der grösste Fehler" — not title case). UPPERCASE only for condensed chrome: kickers, labels, buttons, stamps. Uppercase text is always ≤ 4 words and always tracked (0.10–0.24em).

**Numbers.** Chapters are two digits ("03"). Scores are integers with a signed delta ("+6", "−4" — use U+2212 minus, not a hyphen). Durations read "14 Min".

**Emoji.** Not part of the brand voice. They appear **only inside simulated chat messages**, because real people text with them — e.g. her message *"Und was suchst du so? 🙂"*. Never in UI, headings, labels, buttons or narrator text.

**Micro-copy examples.**
| Slot | Copy |
| --- | --- |
| Primary CTA | `Akte öffnen` · `Zum Boss-Level` · `Entscheidung bestätigen` |
| Disabled CTA | `Wähle eine Pille` · `Wähle eine Reaktion` (states the requirement, never "Weiter") |
| Locked | `Kapitel 05 abschliessen` |
| Stamp | `Vertraulich · nicht weitergeben` · `Moralisch unbequem` |
| Score note | `Hoch ist nicht gut. Hoch ist nur hoch.` |

---

## VISUAL FOUNDATIONS

### Colour
Three worlds. **Ink** (`#08080A`–`#45454D`) is the default ground — everything lives on near-black. **Paper** (`#F5F2EB`–`#6B675E`) is a warm off-white that carries all body text and, as a full surface, marks a leaked document insert. **Bordeaux** (`#2A050C`–`#D33A4B`) is the cost of the method: red flags, redaction seals, narrator field notes, collateral damage.

Electric accents are rationed to three, one meaning each: **volt** `#C6F70E` (unlock, score gain, selection), **wire** `#13E5FF` (consent, analysis, read receipts), **amber** `#F2A81E` (ambiguous signal, caution). Max one electric hue per screen, and never as a large fill — only 1px borders, 3–4px bars, single glyphs, numerals. No blue-purple gradients anywhere.

### Type
Four families, all Google-hosted (see substitution note below):
- **Bodoni Moda** — Didone display serif. Masthead 96/0.84/-0.035em, display 72 and 54, H1 40, H2 30. Never all-caps, never below 22px. This is the GQ-derived voice of the brand.
- **Archivo** — grotesque sans. Lead 21/1.5, body 17/1.62 at 64ch, small 15, caption 13.
- **Barlow Condensed** — all chrome: kickers, labels, buttons, nav, badges. 11px/0.14em uppercase is the workhorse.
- **Courier Prime** — typewriter. Field notes and dossier prose (15/1.7), classification stamps (9px/0.24em), and every number in a HUD (tabular).

Rule of thumb: **serif states, sans explains, condensed labels, mono testifies.**

### Spacing & layout
2px root scale (2·4·6·8·12·16·20·24·32·40·56·72·96·128). UI density lives at 8–24; editorial air starts at 56. Reader width 720px, content 1120px, sidebar rail 280px, topbar 64px, prose measure 64ch. Page gutters 32px (56px on wide editorial screens). Touch targets never under 44px.

Layout is a left rail (fixed, full height, on `--bg-void`) plus a scrolling main column. The rail and topbar are the only fixed elements; everything else scrolls. Sidebars inside a screen may be `position: sticky`.

### Backgrounds
Flat ink fields, not gradients. The two permitted non-flat treatments: **film grain** (`--texture-grain` at 5.5% opacity, `mix-blend-mode: overlay`, only on fields ≥400px) and a **scanline** (`--scanline`, only behind locked/redacted content). Full-bleed imagery gets a **protection gradient** — `--protect-bottom`, a scrim to `--ink-900` — never a translucent capsule behind the text. The system ships **no photography and no illustrations**; `SwipeCard` falls back to an ink→bordeaux gradient by design.

### Borders, radii, cards
The dossier is **sharp**. Default radius is 0 — Cards, panels, dialogs, notices. 2px on buttons and inputs, 4px on chips, 6px on `SwipeCard` (the only rounded card, because it imitates a dating app), full pill only on `Tag`, `Switch` and the pill glyph.

A card is: 1px hairline border (`--rule-faint`), flat ink fill one step above the page, `--shadow-card` (a hard 1px black seat plus a deep soft drop). No coloured borders except the three signal cases: volt = selected, wire = consent block, bordeaux 2px left rule = narrator voice or red flag. Hairline rules do most of the structural work — prefer a `Rule` over nesting another card.

### Shadow & glow
Two shadow levels (`--shadow-card`, `--shadow-lift`) plus `--shadow-modal`; `--shadow-paper` for inverted inserts. On near-black, shadows barely read, so accent depth comes from **glow** instead: `--glow-volt`, `--glow-wire`, `--glow-bordeaux` (a 1px ring plus a soft coloured bloom). No coloured drop shadows beyond those three. Inputs get an inset well (`--shadow-inset-well`) rather than an outer shadow.

### Transparency & blur
Used for exactly two things: the modal scrim (`rgba(8,8,10,.82)` + `blur(14px)`) and locked content (`blur(7px)` behind a 66% scrim and a scanline). Never frosted panels for decoration. Locked content is always the **real** content blurred — never a placeholder — so the tease is honest.

### Motion
Cold and controlled: cuts, fades and wipes. Never a bounce, never an overshoot. `--dur-fast` 140ms for hover/press, `--dur-base` 220ms for panels, `--dur-slow` 380ms for score bars, `--dur-redact` **900ms** for the signature redaction wipe (left→right, `--ease-in-out`). Easing: `--ease-out` for enter, `--ease-snap` for swipe and unlock. Travel distances are small — 2px on hover, 8px on toast entry.

### Interaction states
- **Hover**: lift 2px (`--travel-hover`), brighten the border one rule step, swap `--shadow-card` → `--shadow-lift`. On text buttons: background to `rgba(245,242,235,.09)`. Never a colour flash.
- **Press**: `scale(0.985)`, one step darker fill. No ripple.
- **Selected**: 1px volt border + volt kicker. Never a filled accent background on a choice.
- **Focus**: `--focus-ring` — 2px ink gap then a 2px volt ring.
- **Disabled**: `--action-disabled-bg` fill with `--paper-600` text, or 40% opacity for whole rows. Disabled CTAs state their requirement in the label.
- **Locked**: blur + scanline + a lock glyph, and the click is refused rather than silently swallowed.

### Imagery vibe (when the client supplies photography)
Cool, desaturated, high-contrast, grain present. Night interiors, hard single light source, faces cropped or turned away. Never stock-warm, never smiling-couple. Full-bleed with a bottom scrim; captions in condensed uppercase.

### Typography substitution — needs your input
No brand font files existed (empty repo), so all four families are Google Fonts chosen against the GQ reference: **Bodoni Moda** for the Didone display, **Archivo** for the grotesque, **Barlow Condensed** for chrome, **Courier Prime** for the typewriter voice. Loaded via `@import` in `tokens/fonts.css`. **If FUCKBOY has or licenses real fonts, send the files** and we swap the `@font-face` block — every size, leading and tracking token stays as-is.

---

## ICONOGRAPHY

**Set.** [Lucide](https://github.com/lucide-icons/lucide), 24×24 viewBox, 2px stroke, round caps and joins. **This is a flagged substitution** — the empty repository defined no icon set. Lucide was chosen because its uniform hairline weight sits correctly next to Bodoni hairlines and it never reads as friendly or rounded-cartoon.

**How it ships.** 49 SVGs copied verbatim into `assets/icons/`, and the same path data inlined into `components/core/Icon.jsx` so consumers need no asset resolution. Use `<Icon name="lock" />` — never an `<img>` to the SVG, never a hand-written SVG, never an icon font.

**Sizes.** 14px inline with caption text, 18px default (buttons, rows), 22px section headers. Stroke stays at 2 at every size. Icons inherit `currentColor` unless carrying a signal.

**Signal pairing** (fixed, do not improvise):
| Meaning | Glyph | Colour |
| --- | --- | --- |
| Consent, boundary respected | `shield-check` | wire |
| Red flag, boundary crossed | `flag`, `ban` | bordeaux |
| Damage, hurt | `heart-crack` | bordeaux |
| Ambiguous signal | `triangle-alert`, `circle-alert` | amber |
| Unlock, reward | `lock-open`, `zap` | volt |
| Locked | `lock` | faint |
| Moral trade-off | `scale`, `split` | amber / neutral |
| Score, measurement | `gauge`, `trending-up`, `trending-down` | per direction |
| Cost of the method | `skull` | neutral (never volt) |

**Emoji as iconography: no.** Emoji appear only as *content* inside simulated chat bubbles. **Unicode as iconography: no** — except the mathematical minus (U+2212) in score deltas.

**Logo.** The source provided none, and none was invented. The brand mark **is the word**: `FUCKBOY` set in Bodoni Moda 900 at -0.035em tracking, optionally inside a 3px paper frame with the subtitle "DAS VERBOTENE WERKZEUG" in Barlow Condensed at 0.42em tracking beneath a hairline. See `guidelines/brand-wordmark.card.html`. If a real mark exists, drop the SVG into `assets/` and replace the `Wordmark` block in `ui_kits/elearning/Shell.jsx`.

---

## Components

Grouped by concern. Every component is a `.jsx` with a sibling `.d.ts` (props contract) and `.prompt.md` (when & how). Import from the compiled namespace.

**core** — `Icon`, `Button`, `IconButton`, `Badge`, `Tag`, `Card`, `Rule`
**forms** — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
**feedback** — `WarningNotice`, `Dialog`, `Toast`, `Tooltip`
**navigation** — `Tabs`, `ProgressRail`
**learning** — `ChoiceOption`, `PillChoice`, `ScoreMeter`, `ChatBubble`, `SwipeCard`, `Redacted`, `Stamp`, `ChapterCard`, `LockedPanel`

The **learning** group is the part that makes this system this brand rather than a generic dark UI:

- `ChoiceOption` — a scenario answer. Never marked right or wrong; the probable effect appears only after the learner commits. The tactically effective but dishonest option is `outcome="costly"`.
- `PillChoice` — the recurring red/blue fork. Always a pair, always both with a stated `cost`.
- `ScoreMeter` — one Fuckboy-Score dimension. Cost dimensions use `tone="loss"` so a rising bar reads as damage.
- `Redacted` — blacked-out span that wipes open in 900ms on click. Never on hover: looking must be a decision.
- `Stamp` — Courier classification mark. Annotates, never acts.
- `LockedPanel` — real content blurred behind a scanline scrim, with the unlock condition stated.
- `ChapterCard`, `ChatBubble`, `SwipeCard` — chapter index row, chat-simulation message, dating-profile card.

### Intentional additions
No component library existed in the source, so the inventory was derived from the concept document's own didactic elements (interactive decisions, consequence simulations, Fuckboy-Score, red-flag moments, chat simulations, Tinder-like cards, censored passages, unlockable rules, pill metaphors, boss levels). Two general primitives were added because the screens need them and the concept implies them:
- `Icon` — wrapper for the copied Lucide set, so no screen hand-rolls an SVG.
- `Rule` — labelled hairline divider; the GQ-style editorial layout depends on it.

---

## UI kit

`ui_kits/elearning/` — the product itself, six click-through screens: Cover/pill gate, Akten-Index, Kapitel-Reader, Boss-Level scenario, Chat-Simulation, Fuckboy-Profil. Open `ui_kits/elearning/index.html`. Full walkthrough in that folder's README.

Only one product surface exists today (the learner-facing web app). There is no marketing site, no admin/authoring tool and no mobile app in the source — none were invented.

---

## Caveats

1. **The GitHub repository is empty.** `philip1658/fuckboy` has zero commits, so nothing here is a recreation of existing code. Colours, type, spacing, components and screens are an original system built to the concept document's explicit visual brief plus the named GQ reference. Treat every value as a proposal, not a reconstruction.
2. **Fonts are substitutions.** Four Google families standing in for unknown brand fonts.
3. **Icons are substitutions.** Lucide, flagged above.
4. **No logo, no photography, no illustrations.** Nothing was drawn or generated. The wordmark is plain type; image slots fall back to gradients.
5. **Colour values are derived, not given.** The brief named "Schwarz, Weiss, dunkles Bordeauxrot und vereinzelte elektrische Akzentfarben"; the exact hexes are ours.
