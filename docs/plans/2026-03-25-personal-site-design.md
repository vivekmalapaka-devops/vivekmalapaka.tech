# vivek.tech — Design Document

## Vision

A minimal personal website that feels like opening someone's notebook. Typography-first, personality-driven, radically simple. The site reflects someone who builds things and thinks deeply — still figuring things out, doing so in public.

## Core philosophy

- Simplicity over features
- Personality over scalability
- Writing over visuals
- Structure only where it earns its place

## Pages

### Homepage (`/`)

Centered narrow column (~600px). Top to bottom:

1. Name — "Vivek Malapaka" in serif
2. One-liner — something personal, not a job title
3. Navigation — `log / now / beliefs` in monospace, inline
4. Rotating quote — random from a data file, italic serif, with attribution
5. Footer — site age counter ("this site has been alive for N days")

### Log (`/log/`)

Index page: entries listed newest-first, grouped by year. Each entry shows title (serif, linked) and "last updated" date (monospace, muted). No excerpts.

Individual entries: narrow column, title in serif, metadata line with last updated date, body in serif at comfortable line-height. Interlinking via standard markdown links. Quiet `← log` link at bottom.

Entries are markdown files with frontmatter: `title`, `date`, `updated`.

### Now (`/now/`)

Single living markdown document. Title in monospace, last updated line, freeform body in serif. No archive.

### Beliefs (`/beliefs/`)

Same structure as now. A list of things held to be true, expected to evolve.

## Visual design

### Typography

- Prose: `Georgia, 'Times New Roman', serif` (system stack, no web fonts)
- UI/meta: `'SF Mono', 'Cascadia Code', 'Fira Code', monospace`
- Base size: 18px, line-height: 1.6

### Colors (3 total)

- Text: `#1a1a1a` (near-black)
- Background: `#faf8f4` (warm off-white)
- Muted: `#6b6b6b` (warm gray for dates, nav, footer)

### Interactions

- Nav: gentle opacity shift on hover
- Log titles: underline slides in on hover (CSS only)
- Rotating quote: swaps on page load, no animation
- Site age: calculated with JS on load
- Links: subtle underline offset, darken on hover, no color change

### No dark mode (for now). No responsive breakpoint complexity — narrow column works natively.

## Technical architecture

- **SSG:** Eleventy (11ty)
- **Templates:** Nunjucks
- **No:** bundlers, CSS preprocessors, frameworks, plugins

### Folder structure

```
vivek.tech/
├── src/
│   ├── _includes/
│   │   ├── base.njk
│   │   └── log-entry.njk
│   ├── _data/
│   │   └── quotes.json
│   ├── log/
│   │   ├── log.json
│   │   ├── first-entry.md
│   │   └── another-entry.md
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── index.njk
│   ├── now.md
│   └── beliefs.md
├── .eleventy.js
├── package.json
└── .gitignore
```

Build output: `_site/`, deployable anywhere.

## Design approach

"The Notebook" with year-based grouping on the log page. Radical simplicity now, structure added only when earned.

## Personal touches

- Rotating quote from a curated list
- Site age counter in footer
- No stock images, no icons, no cards
