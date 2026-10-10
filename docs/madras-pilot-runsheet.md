# Madras Diocese Pilot Launch: Run Sheet

Deck: `npm run dev` → `http://localhost:5173/?deck=madras-pilot` (deployed: `<site>/?deck=madras-pilot`).
Settings (Mentimeter code, contact details, agenda): `src/decks/madras-pilot.config.js`.
Keys: → / Space next · ← back · **N** speaker notes + time budget · **S** slide list · Esc overview · F fullscreen ·
type a number to jump. `&slide=28` opens a given slide (rehearse one section).

Audience: pastor + treasurer + secretary from each of 10 churches (~30 people).

## Timing (2 h 15 min including the break)

| Block | Length | What happens |
|---|---|---|
| Session 1: the whole picture | 45 min | Welcome + prayer → Mentimeter (QR slide, then the Mentimeter screen) → you're not alone → how churches work today → ChurchBell + our story → three roles → module map → church in every pocket → diocese vision → **features at a glance, one slide each**: Pulse (data cleanup), members, groups, special dates, member reports, transactions, WhatsApp receipt, subscription card, auction, reports, online giving, house visits, records, voter list → **phones out: everyone tries the app** |
| Tea break | 15 min | Countdown on screen; attendees keep exploring the demo church on their phones |
| Session 2: live demo + the pilot | 45 min | **Live demo in the app (31 min, live WhatsApp receipt)** → order of service → hymn book & Bible → notice board → run your church with confidence → security → under the hood → the pilot: 90-day plan, what we need, our promise |
| Q&A + next steps | 30 min | "What could stop you?" → Q&A 25 min → table cards + group photo |

**Q&A** is 25 minutes of spoken questions; the last 5 are table cards and the group photo.

## Mentimeter (code 7742 2279)

The deck has **one** Mentimeter slide (slide 3): the QR code plus menti.com and the code. Leave it up while people
scan, switch to the Mentimeter presentation (Cmd+Tab), run the questions there, and talk through their word cloud
there (link each big word to ChurchBell in a sentence), then come back to the deck. About 7 minutes. The next slide, "You're Not Alone", shows what other church
teams told us (3 minutes).

Questions in the Mentimeter presentation:
1. Word cloud: *Which church administration task takes most of your time, or is hardest to manage?*
2. Multiple choice: *How do you manage your church's administration today?* Paper registers & files / Excel / WhatsApp & phone calls / Several apps / A church management system / A mix of these
3. Scale 1–5: *How easy is it to get accurate church information whenever you need it?* Very difficult → Very easy

Q3 is your baseline: ask it again at day 90. Open the Q&A by asking out loud: *"What could stop your church from
starting next month?"*

## Preparation

**2 weeks before**
- [ ] Make a **demo church on prod** with fake Tamil/English names: ~40 families, receipts for the last 3 months,
      birthdays and anniversaries in the week of the session, one harvest auction, a voter list, a committee,
      baptism and marriage records. Never demo on staging: it holds copies of real members.
- [ ] Registration form: collect each attendee's mobile number, with consent to be added to the demo church.
- [ ] Ask each church to bring (or send) its member Excel. Their onboarding then starts on the same day.
- [ ] Check that the WhatsApp receipt and wish templates are approved and switched on for the demo church.
- [ ] Ask one pastor to open in prayer, and one treasurer to be the volunteer for the live receipt.

**The day before**
- [ ] Add every attendee's number to the demo church as a member; check a few test logins.
- [ ] Full rehearsal with the notes panel (N). The live demo must fit its 31 minutes; its suggested order is in the notes of the "Live Demo" slide.
- [ ] Back-up: a screen recording of the live demo plus the WhatsApp receipt. Play it if the venue Wi-Fi fails.
- [ ] Print the table cards: church name · start week (dropdown of 4 weeks) · app champion name + phone.

**On the morning**
- [ ] Mobile hotspot as Wi-Fi back-up. Laptop on power, notifications off, browser zoom 125%.
- [ ] Log in the demo church on the web; log in the phone (admin view) and a second phone (member view).
- [ ] Send one test WhatsApp receipt to your own number.
- [ ] 2–3 volunteers at the tables for OTP and installation help during "Phones out".

## The three moments people will talk about

1. **The church in their hand**: at "Phones out", everyone opens the demo church on their own phone and finds
   their family, a receipt and this week's birthdays.
2. **The WhatsApp receipt**: the volunteer treasurer "pays", and the receipt reaches their WhatsApp while
   they're still standing. Ask them to read it out.
3. **Tamil in one click**: switch the whole app to Tamil during the live demo.

## After the session

- Same evening: WhatsApp group for the 10 champions; send the Mentimeter word cloud and the group photo.
- Week 0–1: collect the member lists, subscription cards and any ledger lists; import members (`import-church-members` skill) and set up the ledgers.
- Week 2: a 1-hour training session for each church. Day 30 / 60 / 90 check-ins, using each church's Pulse score.
- Day 90: two pilot pastors present their own story at the diocesan meeting.
