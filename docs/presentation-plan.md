# ChurchBell Presentation — Build Plan

## Overview

A cinematic, futuristic React-based presentation for ChurchBell sales demos. Designed for 45-60 minute in-person demos at churches.

## Tech Stack

| Tool | Purpose |
|---|---|
| React + Vite | Core framework, fast dev & build |
| Framer Motion | Slide transitions, element animations |
| GSAP + @gsap/react | Text reveals, counters, timeline animations |
| Three.js + React Three Fiber + drei | Animated 3D particle mesh backgrounds |
| Montserrat | Brand font (from existing assets) |
| fal.ai (FLUX Pro) | AI-generated hero images |
| fal.ai (Seedance 2.0) | AI-generated intro video |

## Brand Assets

### Colors (from `mobile-app/lib/core/theme/app_colors.dart`)

| Role | Hex |
|---|---|
| Primary (Purple) | `#7367F0` |
| Secondary (Gray) | `#82868B` |
| Tertiary (Cyan) | `#4BCBF9` |
| Success (Green) | `#28C76F` |
| Alert (Red) | `#EA5455` |
| Warning (Orange) | `#F79C39` |
| Dark Background | `#161D31` |
| Dark Surface | `#283046` |
| Dark Surface Variant | `#303952` |
| Dark Text | `#D0D2D6` |
| Dark Text Secondary | `#B4B7BD` |
| Logo Gradient Start | `#8D82FD` |
| Logo Gradient End | `#584CDB` |

### Fonts
- **Montserrat** — Regular (400), Medium (500), Bold (700)
- Font files: `mobile-app/assets/fonts/Montserrat-*.ttf`

### Logo Files
- `webapp/src/assets/images/logo/logo.svg` — master vector
- `webapp/src/assets/images/logo/logo.png` — raster
- `webapp/src/assets/images/logo/logo-horizontal.png` — horizontal with text
- `webapp/src/assets/images/logo/logo-white.png` — white version
- `mobile-app/assets/icons/logocolor.png` — mobile color version
- `mobile-app/assets/icons/logowhite.png` — mobile white version

## Visual Design

- **Base:** Dark theme (`#161D31`) with purple (`#7367F0`) accents
- **Gradients:** `#8D82FD` → `#584CDB` (from logo SVG)
- **Cards:** Glassmorphism — frosted glass effect with backdrop-blur
- **Background:** Three.js animated particle mesh, subtle floating particles
- **Typography:** Large, bold Montserrat headings, light body text
- **Transitions:** Framer Motion — fade + slide between slides, stagger on elements

## Slide Structure (28 slides)

### Opening (Slides 1-3)

| # | Title | Content | Animation |
|---|---|---|---|
| 1 | Intro Video | Fullscreen Seedance 2.0 generated clip — church bell → digital transition | Auto-play, fade to next |
| 2 | Hero | ChurchBell logo + "Connected. United. Blessed." tagline | Logo morphs in, tagline types in letter by letter |
| 3 | The Story | Personal narrative — dream from 2016, COVID opportunity, word of mouth growth | Text reveals line by line, AI image of old ledger books |

### Act 1: The Problem (Slides 4-6)

| # | Title | Content | Animation |
|---|---|---|---|
| 4 | How It Works Today | Cash book, ledger, day book, receipt book, subscription card — all manual | Icons animate in sequence, old-way AI image |
| 5 | The Pain | "4 ledger books per transaction", "Hours for quarterly report", "Days for annual accounts" | Numbers count up with impact |
| 6 | What If | Transition — "What if all of this... was just one click?" | Screen cracks like old paper, purple glow underneath |

### Act 2: The Solution (Slides 7-22)

#### People Section (Slides 7-11)

| # | Title | Content | Animation |
|---|---|---|---|
| 7 | People | Section header — "Know Your Congregation" | Large text zoom with particle burst |
| 8 | Members | Filters, family management, member profile, transaction history, Excel import | Filter chips fly in, data table populates |
| 9 | Special Dates | Weekly birthday/anniversary view, auto WhatsApp wishes, Friday PDF to Presbyter | Calendar animates, WhatsApp notification slides in |
| 10 | Groups & Committee | Member groups (fellowship, choir), area groups (house visits, carol), committees | Network graph animation |
| 11 | Member Reports | PDF/Excel export, filtered reports, "senior citizens above 80 — 1 click" | Export icons animate, counter: "seconds, not hours" |

#### Finance Section (Slides 12-19)

| # | Title | Content | Animation |
|---|---|---|---|
| 12 | Finance | Section header — "The Heart of Church Administration" | Cash register → digital morph |
| 13 | Transactions | Create receipt → auto-updates all books → WhatsApp PDF + SMS to member instantly | Receipt creation flow animation, WhatsApp mockup |
| 14 | Keyboard Shortcuts | Alt+Shift+T → form → Ctrl+S → saved. "50 receipts on a Sunday — made fast" | Animated key presses |
| 15 | Auction | Create event → items → assign to members → track payments → pending amounts | Auction paddle animation, payment tracker filling |
| 16 | Service Register | One entry per service, linked to transactions | Connection line draws between register → transaction |
| 17 | Opening Balance | Bulk save, auto-calculate next month, cascading recalculation | Numbers cascade from month to month |
| 18 | Reports | Day Book, Receipts & Payments, Trial Balance, Account Statistics, Ledger Report | Report cards flip and stack |
| 19 | Defaulters & Statements | Monthly defaulters list, member contribution statements, subscription insights | Red/green status grid animates |

#### Records Section (Slides 20-22)

| # | Title | Content | Animation |
|---|---|---|---|
| 20 | Records | Section header — "Preserve Your History" | Old book pages turning → digital |
| 21 | Records Detail | Baptism, Confirmation, Wedding, Burial — all searchable, exportable | Four cards rotate in with icons |
| 22 | Masters & Assets | Ledger, Ledger Group, Bill Book, Asset Categories, Asset Management | Clean list with checkmarks |

### Act 3: Close (Slides 23-28)

| # | Title | Content | Animation |
|---|---|---|---|
| 23 | Security | User activity log, permissions, audit trail — fraud prevention | Activity log lines type in real-time |
| 24 | Settings | Church config — name/date format, receipt format, notifications, signatures | Toggle switches animate on/off |
| 25 | Mobile App | Admin: transactions, members, reports on the go. Members: view details, payments | Phone mockup with cycling screens |
| 26 | Pricing | Rs. 3/member/month. Competitor table. "No setup cost. No hidden fees." | Competitor numbers count up, ChurchBell drops in with impact |
| 27 | Setup & Trial | 1 hour setup, Excel import, 2-month trial, training included | Timeline animation: Day 1 → Go Live |
| 28 | Closing | "Let us set up your church." Logo + contact + WhatsApp | Particles converge to form bell shape |

## Keyboard Controls

| Key | Action |
|---|---|
| Arrow Right / Space | Next slide |
| Arrow Left | Previous slide |
| F | Toggle fullscreen |
| N | Toggle presenter notes |
| Escape | Slide overview / grid |
| Home | First slide |
| End | Last slide |
| Touch swipe | Mobile navigation |

## AI Image Generation (fal.ai)

### Images to Generate (FLUX Pro)

1. **Old way scene** — Weathered ledger books, handwritten receipts, stacked notebooks on a wooden church table, warm sepia lighting, photorealistic
2. **New way scene** — Modern laptop on church desk showing clean dashboard with purple UI, ambient lighting, futuristic glow
3. **Church bell hero** — Bronze church bell with divine light rays streaming through, photorealistic, dramatic lighting
4. **Mobile in hand** — Hand holding smartphone showing a clean church app interface, church blurred in background
5. **Community** — Warm gathering of church community members, diverse, welcoming, soft lighting

### Video to Generate (Seedance 2.0)

- **Intro clip (10-15s)** — Church bell swinging and ringing, camera slowly pulls back, old paper textures dissolve into modern digital interface, "ChurchBell" text fades in with purple glow

## Staging Environment (for screenshots)

- URL: https://staging.churchbell.in
- Phone: 9994012253
- OTP: 123456

## Folder Structure

```
sales/presentation/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── logo-white.png
│   │   ├── logo-horizontal.png
│   │   ├── ai/                  # AI-generated images
│   │   └── screenshots/         # App screenshots
│   ├── videos/
│   │   └── intro.mp4            # Seedance intro video
│   └── fonts/
│       ├── Montserrat-Regular.ttf
│       ├── Montserrat-Medium.ttf
│       └── Montserrat-Bold.ttf
├── src/
│   ├── components/
│   │   ├── SlideLayout.jsx      # Base slide wrapper
│   │   ├── Background3D.jsx     # Three.js particle mesh
│   │   ├── AnimatedText.jsx     # GSAP text reveals
│   │   ├── Counter.jsx          # Number count-up animation
│   │   ├── SlideNav.jsx         # Navigation + progress bar
│   │   ├── PhoneMockup.jsx      # Mobile app showcase
│   │   ├── GlassCard.jsx        # Glassmorphism card
│   │   └── TypeWriter.jsx       # Typing effect
│   ├── slides/
│   │   ├── 01-IntroVideo.jsx
│   │   ├── 02-Hero.jsx
│   │   ├── 03-Story.jsx
│   │   ├── 04-HowItWorks.jsx
│   │   ├── 05-ThePain.jsx
│   │   ├── 06-WhatIf.jsx
│   │   ├── 07-PeopleHeader.jsx
│   │   ├── 08-Members.jsx
│   │   ├── 09-SpecialDates.jsx
│   │   ├── 10-Groups.jsx
│   │   ├── 11-MemberReports.jsx
│   │   ├── 12-FinanceHeader.jsx
│   │   ├── 13-Transactions.jsx
│   │   ├── 14-KeyboardShortcuts.jsx
│   │   ├── 15-Auction.jsx
│   │   ├── 16-ServiceRegister.jsx
│   │   ├── 17-OpeningBalance.jsx
│   │   ├── 18-Reports.jsx
│   │   ├── 19-DefaultersStatements.jsx
│   │   ├── 20-RecordsHeader.jsx
│   │   ├── 21-Records.jsx
│   │   ├── 22-MastersAssets.jsx
│   │   ├── 23-Security.jsx
│   │   ├── 24-Settings.jsx
│   │   ├── 25-MobileApp.jsx
│   │   ├── 26-Pricing.jsx
│   │   ├── 27-Setup.jsx
│   │   └── 28-Closing.jsx
│   ├── hooks/
│   │   └── useSlideNavigation.js
│   ├── theme/
│   │   └── colors.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Implementation Phases

### Phase 1: Foundation
- [x] Vite + React project setup
- [ ] Install dependencies (framer-motion, gsap, three, r3f, drei)
- [ ] Brand theme (colors, fonts, global styles)
- [ ] Slide navigation system (keyboard, click, swipe)
- [ ] Base SlideLayout component with Framer Motion transitions
- [ ] 3D animated background (Three.js particle mesh)
- [ ] Reusable components (AnimatedText, Counter, GlassCard, TypeWriter)

### Phase 2: Slides
- [ ] Build all 28 slides with content and animations
- [ ] Section transition effects (People, Finance, Records)
- [ ] Progress indicator bar
- [ ] Presenter notes (hidden, toggle with N key)

### Phase 3: AI Assets
- [ ] Generate 5 hero images via fal.ai FLUX Pro
- [ ] Generate intro video via Seedance 2.0
- [ ] Take app screenshots from staging
- [ ] Integrate all assets into slides

### Phase 4: Polish
- [ ] Sound effects (optional subtle whooshes)
- [ ] Full-screen mode
- [ ] Mobile/tablet responsive
- [ ] Overview/grid view (Escape key)
- [ ] Performance optimization
- [ ] Build & deploy

## Competitor Pricing (for Slide 26)

| Competitor | Monthly Cost |
|---|---|
| Tabernacle | Rs. 2,999 – Rs. 5,999 |
| IconCMO | Rs. 3,150+ |
| Bitrix24 | Rs. 3,510+ |
| Continue To Give | Rs. 2,610+ |
| **ChurchBell (200 members)** | **Rs. 600** |
| **ChurchBell (500 members)** | **Rs. 1,500** |

## Future: 15-Minute Pitch Version

A condensed version selecting slides: 1, 2, 3, 5, 6, 8, 9, 13, 18, 21, 25, 26, 27, 28 (14 slides, ~1 min each).

## Future: Intro Video (standalone)

Convert the best slides into a 2-3 minute video using Seedance 2.0 image-to-video on each slide's key visual, stitched together with transitions and background music.
