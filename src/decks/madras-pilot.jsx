// Madras Diocese pilot launch: session 1 (45 min) + 15 min break + session 2 (45 min) + 30 min Q&A.
// Session 1 runs through the features on slides and ends with everyone trying the app on their phone;
// session 2 is the live demo, security and the pilot plan. `minutes` is the time budget for the slide
// (the live demo included); the notes panel (N) shows it with the planned running clock.
import { SectionSlide } from '../components/SlideLayout';
import Hero from '../slides/01-Hero';
import Story from '../slides/02-Story';
import HowItWorks from '../slides/03-HowItWorks';
import ThePain from '../slides/04-ThePain';
import WhatIf from '../slides/05-WhatIf';
import ChurchBellIntro from '../slides/06-ChurchBellIntro';
import Members from '../slides/08-Members';
import HouseVisit from '../slides/08b-HouseVisit';
import SpecialDates from '../slides/09-SpecialDates';
import Groups from '../slides/10-Groups';
import MemberReports from '../slides/11-MemberReports';
import Transactions from '../slides/13-Transactions';
import WhatsAppReceipt from '../slides/14-WhatsAppReceipt';
import Auction from '../slides/16-Auction';
import OnlineGiving from '../slides/17d-OnlineGiving';
import Reports from '../slides/19-Reports';
import SubscriptionCard from '../slides/20b-SubscriptionCard';
import Records from '../slides/22-Records';
import Pulse from '../slides/25b-Pulse';
import MobileApp from '../slides/26-MobileApp';
import DioceseVision from '../slides/26c-DioceseVision';
import VoterList from '../slides/10c-VoterList';
import OrderOfService from '../slides/21x-OrderOfService';
import WorshipBooksBible from '../slides/21y-WorshipBooksBible';
import NoticeBoard from '../slides/21u-NoticeBoard';
import TrustOversight from '../slides/24g-TrustOversight';
import SecurityHero from '../slides/24a-SecurityHero';
import SecurityArchitecture from '../slides/24b-SecurityArchitecture';
import {
  Agenda, NotAlone, ThreeRoles, ModuleMap, PhonesOut, BreakTimer,
  PilotJourney, WhatWeNeed, OurPromise, QandA, PilotClosing,
} from '../slides/pilot/PilotSlides';
import { menti } from '../slides/pilot/factories';

const section = (title, subtitle, bgImage) => {
  const S = () => <SectionSlide title={title} subtitle={subtitle} bgImage={bgImage} />;
  return S;
};

export const madrasPilotSlides = [
  // ═══════════════ SESSION 1: THE WHOLE PICTURE (45 min) ═══════════════
  { component: Hero, title: 'Welcome', minutes: 3,
    notes: 'Invite one pastor (agree beforehand) to open in prayer. Welcome everyone and thank the diocese. Ask the volunteers to check every table has a table card and a pen.' },
  { component: Agenda, title: 'Agenda', minutes: 1,
    notes: 'Two sessions plus Q&A. Session 1 is a quick look at the features and their own phone; after the break, the full live demo.' },
  { component: menti(), title: 'Mentimeter', minutes: 7,
    notes: 'Read the opening script, then switch to the Mentimeter tab (Cmd+Tab). Wait for 25+ participants. Run the questions there: (1) word cloud: most time-consuming admin task, (2) how you manage admin today, (3) how easy it is to get accurate information (1–5). Read the 3 biggest words out loud and ask one pastor and one treasurer for a story. While the word cloud is up, link the biggest words to ChurchBell in a sentence each ("member records: you\'ll see the family register in a few minutes"), without going into features. Photograph the word cloud, note the Q3 average (your day-90 baseline), then come back here.' },
  { component: NotAlone, title: "You're not alone", minutes: 3,
    notes: 'Right after their own word cloud: "You\'re not the only ones. Here is what other church teams told us." Read the 3–4 cards that match their biggest words, not all ten. Say in one line that each of these comes up in today\'s demo.' },
  { component: HowItWorks, title: 'How it works today', minutes: 1.5,
    notes: 'Mirror their Q2 answers: one receipt written into several books.' },
  { component: ThePain, title: 'The real cost', minutes: 1.5,
    notes: 'Ask the treasurers: "How long does your quarterly report take?" Let one answer.' },
  { component: WhatIf, title: 'What if?', minutes: 1 },
  { component: ChurchBellIntro, title: 'ChurchBell', minutes: 1 },
  { component: Story, title: 'Our story', minutes: 2,
    notes: 'Why ChurchBell exists. Keep it personal and short.' },
  { component: ThreeRoles, title: 'Three roles', minutes: 1.5,
    notes: 'Look at each group in the room as you read their card. Each of them will see their own work in the next few slides.' },
  { component: ModuleMap, title: 'Module map', minutes: 1,
    notes: 'Say it plainly: we will NOT go deep into everything today. Next, a quick look at the features you will use every week.' },
  { component: MobileApp, title: 'Mobile app', minutes: 1,
    notes: 'One app, three views. You will try it yourselves at the end of this session.' },
  { component: DioceseVision, title: 'Diocese vision', minutes: 1.5,
    notes: 'Why the diocese is backing this: each parish runs its own books, and what a church chooses to share rolls up for the Bishop and the officers. Keep it to a minute; this room is about their church.' },

  // Features at a glance: one slide each, about a minute
  { component: Pulse, title: 'Pulse', minutes: 2,
    notes: 'Start with data cleanup: Pulse shows what is missing (mobile numbers, birth dates) and what to fix first, so the register gets cleaner every week. Tease the friendly pilot scoreboard: "In 90 days we\'ll see which church has the healthiest data."' },
  { component: Members, title: 'Members', minutes: 1 },
  { component: Groups, title: 'Groups', minutes: 1,
    notes: 'Point to the ready-made "Members Above 80" list; a church told us this takes them hours today.' },
  { component: SpecialDates, title: 'Special dates', minutes: 1,
    notes: 'The weekly birthday and anniversary list, prepared on its own every week.' },
  { component: MemberReports, title: 'Member reports', minutes: 1 },
  { component: Transactions, title: 'Transactions', minutes: 1,
    notes: 'One entry, and every book updates itself.' },
  { component: WhatsAppReceipt, title: 'WhatsApp receipt', minutes: 1,
    notes: 'You will see this happen live after the break.' },
  { component: SubscriptionCard, title: 'Subscription card', minutes: 1 },
  { component: Auction, title: 'Auction', minutes: 1 },
  { component: Reports, title: 'Reports', minutes: 1,
    notes: 'Ask the treasurers again: the quarterly PC Meeting report is one click.' },
  { component: OnlineGiving, title: 'Online giving', minutes: 1 },
  { component: HouseVisit, title: 'House visits', minutes: 1 },
  { component: Records, title: 'Records', minutes: 1 },
  { component: VoterList, title: 'Voter list', minutes: 1,
    notes: 'Election season resonates in CSI. Ask: "How long did your last voter list take?"' },
  { component: PhonesOut, title: 'Phones out', minutes: 4,
    notes: 'Attendees were added (with consent, at registration) as members of the DEMO church. Volunteers help with OTP. When most are in, ask them to open their family, a receipt and this week\'s birthdays, and to find one thing that surprised them. Let them carry on into the break.' },

  // ═══════════════ BREAK (15 min) ═══════════════
  { component: BreakTimer, title: 'Tea break', minutes: 15,
    notes: 'The countdown starts when this slide opens. Use the break to sit with the 2–3 churches that were quietest, and collect any member Excel files they brought.' },

  // ═══════════════ SESSION 2: LIVE DEMO + THE PILOT (45 min) ═══════════════
  { component: section('Live Demo', 'ChurchBell, in Action', '/images/ai/modern-dashboard.jpg'), title: 'Live demo', minutes: 31,
    notes: 'Switch to the app (demo church on the web, already logged in, zoom 125%). Suggested order: search a member and open the family card; add a family with birthdays; this week\'s birthdays; a volunteer treasurer "pays" a subscription and their phone gets the WhatsApp receipt (read it out; test delivery that morning); a payment voucher; the Day Book and the PC Meeting report; defaulters and one subscription card; an auction bid and part payment; a baptism entry; a member report exported to Excel; the menu search and the Tamil switch; then the mobile admin view. Hand the mouse to a pastor for one search if they are willing.' },
  { component: OrderOfService, title: 'Order of service', minutes: 1,
    notes: 'Plan Sunday once; every member has it on their phone and can follow along live.' },
  { component: WorshipBooksBible, title: 'Worship books & Bible', minutes: 1,
    notes: 'The CSI hymnals and seven Bible versions, readable offline.' },
  { component: NoticeBoard, title: 'Notice board', minutes: 1,
    notes: 'Notices reach every family, not just those in church on Sunday.' },
  { component: TrustOversight, title: 'Run with confidence', minutes: 1,
    notes: 'Pulse, the audit trail, signed-in devices, and each person seeing only what their role needs.' },
  { component: SecurityHero, title: 'Security', minutes: 2,
    notes: '"Is our data safe?" will come up, so answer it before it\'s asked: each church sees only its own data, it\'s backed up every night, and the church can download all of it at any time.' },
  { component: SecurityArchitecture, title: 'Under the hood', minutes: 2,
    notes: 'For the technical people: Cloudflare in front; AWS Mumbai; the VPC across three availability zones with security groups; the load balancer with ACM TLS; ECS Fargate running the church app, diocese app and API; MongoDB on EC2; Redis; nightly encrypted backups to S3 kept 30 days; secrets in Secrets Manager; CloudWatch alarms, GuardDuty and New Relic watching; GitHub Actions builds and deploys every release.' },

  // Pilot plan
  { component: section('The Pilot', '10 churches · 90 days', '/images/ai/diocese-bg.jpg'), title: 'The pilot', minutes: 0.5 },
  { component: PilotJourney, title: '90-day journey', minutes: 2 },
  { component: WhatWeNeed, title: 'What we need', minutes: 1.5 },
  { component: OurPromise, title: 'Our promise', minutes: 2 },

  // ═══════════════ Q&A + NEXT STEPS (30 min) ═══════════════
  { component: QandA, title: 'Q&A', minutes: 25,
    notes: 'Spoken questions (set pilot.menti.qanda = true to also take upvoted Mentimeter questions). Open by asking: "What could stop your church from starting next month?" and answer the blockers first. Have the treasurer FAQ ready: opening balances, existing Tally data, multiple bank accounts, cancelled receipts.' },
  { component: PilotClosing, title: 'Next steps', minutes: 5,
    notes: 'Walk through what happens next: a weekly sync up, sharing member data and a sample subscription card, then a training session and they go live. Close with a group photo of the 10 pilot churches for the diocese newsletter.' },
];
