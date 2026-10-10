import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ChurchIcon, UserGroupIcon, ReceiptIndianRupeeIcon, Notebook01Icon, BirthdayCakeIcon,
  CheckListIcon, WhatsappIcon, Analytics01Icon, SmartPhone01Icon, Building06Icon,
  Calendar03Icon, Rocket01Icon, Tick01Icon, Message01Icon, CallRinging01Icon,
  CloudIcon, UserCheck01Icon, FileExportIcon, BookOpen01Icon, Shield01Icon,
  Coins01Icon, ChartIncreaseIcon, Notification01Icon,
  CalendarCheckIn01Icon, FilterIcon, Tag01Icon, Search01Icon, UserMultiple02Icon, MoneyBag02Icon, MusicNote01Icon,
  BookOpen02Icon, JusticeScale01Icon, SecurityCheckIcon, } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem, GradientHeading } from '../../components/AnimatedText';
import GlassCard from '../../components/GlassCard';
import { pilot } from '../../decks/madras-pilot.config';

const Icon = ({ icon, size = 28, color = '#7367F0' }) => (
  <HugeiconsIcon icon={icon} size={size} color={color} strokeWidth={1.5} />
);

function Heading({ children, sub, delay = 0.1 }) {
  return (
    <>
      <FadeUpText delay={delay}>
        <h2 style={{ marginBottom: sub ? 8 : 36 }}>{children}</h2>
      </FadeUpText>
      {sub && (
        <FadeUpText delay={delay + 0.1}>
          <p style={{ marginBottom: 36, color: 'var(--text-muted)', maxWidth: 720 }}>{sub}</p>
        </FadeUpText>
      )}
    </>
  );
}

/* ───────────────────────── Agenda ───────────────────────── */

// Numbers skip the break: 1, ☕, 2, 3.
const agendaRows = pilot.agenda.map((a, i) => ({
  ...a, n: pilot.agenda.slice(0, i + 1).filter((x) => !x.isBreak).length,
}));

export function Agenda() {
  return (
    <div className="slide-center">
      <Heading>
        Today's <span className="gradient-text">Plan</span>
      </Heading>
      <StaggerContainer delay={0.3} staggerDelay={0.12} style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 900, width: '100%' }}>
        {agendaRows.map((a) => {
          return (
            <StaggerItem key={a.title}>
              <GlassCard
                style={{
                  padding: a.isBreak ? '12px 28px' : '20px 28px', textAlign: 'left', height: 'auto',
                  display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 24,
                  background: a.isBreak ? 'var(--bg-shade1)' : undefined,
                }}
              >
                <span style={{ fontSize: a.isBreak ? '1.2rem' : '2.2rem', fontWeight: 800, minWidth: 40, textAlign: 'center', color: a.isBreak ? 'var(--text-muted)' : 'var(--primary)' }}>
                  {a.isBreak ? '☕' : a.n}
                </span>
                <div>
                  <h3 style={{ fontSize: a.isBreak ? '1rem' : '1.25rem', margin: 0, color: a.isBreak ? 'var(--text-muted)' : undefined }}>{a.title}</h3>
                  {a.items.length > 0 && (
                    <p style={{ margin: '4px 0 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{a.items.join(' · ')}</p>
                  )}
                </div>
              </GlassCard>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
}

/* ───────────────────── After the Mentimeter round ───────────────────── */

// Challenges church teams raised in earlier conversations, in their own words. Only real ones:
// the last card (voter list) was added from the product side, so drop it if no church has said it.
const heard = [
  { said: 'Keeping the member register up to date', icon: UserGroupIcon },
  { said: 'Finding all the members above 80', icon: FilterIcon },
  { said: 'Sending a bereavement message to every member', icon: Notification01Icon },
  { said: 'Writing ledgers and receipts, and filling the subscription cards', icon: ReceiptIndianRupeeIcon },
  { said: 'Tracking auction dues and reminding members', icon: Tag01Icon },
  { said: 'Keeping baptism, burial and other registers', icon: BookOpen01Icon },
  { said: 'Preparing finance reports for the Pastorate Committee', icon: FileExportIcon },
  { said: 'Keeping track of church assets', icon: Building06Icon },
  { said: 'Preparing the updated birthday and anniversary list every week', icon: BirthdayCakeIcon },
  { said: 'Preparing the voter list before elections', icon: CheckListIcon },
];

export function NotAlone() {
  return (
    <div className="slide-center">
      <Heading sub="What other church teams told us in our earlier conversations.">
        You're <span className="gradient-text">Not Alone</span>
      </Heading>
      <StaggerContainer delay={0.3} staggerDelay={0.07} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18, maxWidth: 1300, width: '100%' }}>
        {heard.map((h) => (
          <StaggerItem key={h.said}>
            <GlassCard style={{ padding: '26px 20px', textAlign: 'left', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14 }}>
              <Icon icon={h.icon} size={30} />
              <p style={{ fontStyle: 'italic', fontSize: '1.08rem', lineHeight: 1.45, color: 'var(--text-heading)', margin: 0 }}>
                "{h.said}"
              </p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

/* ───────────────────────── Roles ───────────────────────── */

const roles = [
  {
    role: 'Pastor', icon: ChurchIcon,
    line: 'Know every family. Every birthday.',
    gets: ['Member & family register', 'Birthdays & anniversaries every week', 'House visits logged from the phone', 'Order of service on every phone', 'Voter list for elections', 'Church health at a glance (Pulse)'],
  },
  {
    role: 'Treasurer', icon: Coins01Icon,
    line: 'Write once. Every book balances.',
    gets: ['Receipts & payments in seconds', 'WhatsApp receipt to the member', 'PC Meeting report in one click', 'Defaulters, auction dues & cards', 'Budget vs actual', 'Offerings by UPI from the app'],
  },
  {
    role: 'Secretary', icon: Notebook01Icon,
    line: 'Every record, found in seconds.',
    gets: ['Baptism, wedding, burial registers', 'Groups & committee', 'Member reports & exports', 'Notices to every member\'s phone', 'Letters on the church letterhead', 'Events & attendance'],
  },
];

export function ThreeRoles() {
  return (
    <div className="slide-center">
      <Heading sub="The pastor, treasurer and secretary each get their own view of the same data.">
        Three Roles. <span className="gradient-text">One System.</span>
      </Heading>
      <StaggerContainer delay={0.3} staggerDelay={0.15} className="feature-grid feature-grid-3" style={{ maxWidth: 1050 }}>
        {roles.map((r) => (
          <StaggerItem key={r.role}>
            <GlassCard style={{ padding: '28px 24px', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                <Icon icon={r.icon} size={30} />
                <h3 style={{ margin: 0, fontSize: '1.3rem' }}>{r.role}</h3>
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 14, whiteSpace: 'nowrap' }}>{r.line}</p>
              {r.gets.map((g) => (
                <div key={g} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: '0.88rem', padding: '5px 0' }}>
                  <Icon icon={Tick01Icon} size={16} /> {g}
                </div>
              ))}
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

/* ───────────────────────── Module map (everything at a glance) ───────────────────────── */

// The brochure's nine pillars (ChurchBell-Website/lib/content.ts) plus everything built since,
// so the room sees the same structure as the brochure in their hands.
const moduleGroups = [
  { group: 'People', icon: UserMultiple02Icon, modules: ['Members & Families', 'Special Dates', 'Groups', 'House Visits', 'Committee', 'Voter List', 'Self Declaration', 'Edit Requests'] },
  { group: 'Finance', icon: MoneyBag02Icon, modules: ['Receipts & Payments', 'WhatsApp Receipts', 'Auction', 'Service Register', 'Fixed Deposits', 'Budget', 'Online Giving (UPI)', 'Assessment'] },
  { group: 'Reports', icon: Analytics01Icon, modules: ['PC Meeting R&P', 'Trial Balance', 'Day Book', 'Defaulters', 'Statements', 'Tally Export', 'Export Center'] },
  { group: 'Worship', icon: MusicNote01Icon, modules: ['Order of Service', 'Song Library', 'Liturgy', 'Live Presentation', 'Worship Books', 'Bible & Daily Verse'] },
  { group: 'Events, Notices & To-Do', icon: CalendarCheckIn01Icon, modules: ['Event Calendar', 'Attendance', 'Notice Board', 'To-Do Lists', 'Reminders'] },
  { group: 'Records', icon: BookOpen02Icon, modules: ['Baptism', 'Confirmation', 'Wedding', 'Burial'] },
  { group: 'Property & Assets', icon: Building06Icon, modules: ['Properties & Land', 'Tenants & Rent', 'Assets', 'Maintenance'] },
  { group: 'Legal & Letters', icon: JusticeScale01Icon, modules: ['Cases & Hearings', 'Title Opinions', 'Legal Notices', 'Letters & Templates'] },
  { group: 'Trust & Oversight', icon: SecurityCheckIcon, modules: ['Pulse Score', 'Audit Trail', 'Security & Devices', 'Access Control'] },
];

export function ModuleMap() {
  return (
    <div className="slide-center">
      <Heading sub="A quick tour of everything first. After the break we'll go deep into the few you'll use every week.">
        Everything in <span className="gradient-text">One Place</span>
      </Heading>
      <StaggerContainer delay={0.3} staggerDelay={0.06} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, maxWidth: 1240, width: '100%' }}>
        {moduleGroups.map((g) => (
          <StaggerItem key={g.group}>
            <GlassCard style={{ padding: '16px 18px', textAlign: 'left', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <Icon icon={g.icon} size={24} />
                <h3 style={{ margin: 0, fontSize: '1rem' }}>{g.group}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {g.modules.map((m) => (
                  <span
                    key={m}
                    style={{
                      fontSize: '0.74rem', padding: '3px 10px', borderRadius: 999,
                      background: 'var(--primary-bg)', color: 'var(--primary-dark)', border: '1px solid #D6D0FF',
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <FadeUpText delay={1.2}>
        <p style={{ marginTop: 20, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          Admin App · Member App · WhatsApp · SMS · Push alerts · web app in English and Tamil
        </p>
      </FadeUpText>
    </div>
  );
}

/* ───────────────────────── Phones out ───────────────────────── */

export function PhonesOut() {
  const steps = [
    { icon: SmartPhone01Icon, title: 'Install ChurchBell', desc: 'Play Store / App Store: search "ChurchBell"' },
    { icon: CallRinging01Icon, title: 'Log in with your mobile number', desc: 'The one you gave at registration; you\'ll get an OTP' },
    { icon: Search01Icon, title: 'Look around', desc: 'Your family, receipts, events and this week\'s birthdays' },
  ];
  return (
    <div className="slide-center">
      <Heading sub="You've been added as members of our demo church, so everything you see is sample data.">
        Phones Out. <span className="gradient-text">Try It Yourself.</span>
      </Heading>
      <StaggerContainer delay={0.3} staggerDelay={0.2} className="feature-grid feature-grid-3" style={{ maxWidth: 1000 }}>
        {steps.map((s, i) => (
          <StaggerItem key={s.title}>
            <GlassCard style={{ padding: '30px 24px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 10 }}>STEP {i + 1}</div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}><Icon icon={s.icon} size={40} /></div>
              <h3 style={{ fontSize: '1.05rem', marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{s.desc}</p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

/* ───────────────────────── Break ───────────────────────── */

function useCountdown(seconds) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    const started = Date.now();
    const t = setInterval(() => setLeft(Math.max(0, seconds - Math.floor((Date.now() - started) / 1000))), 500);
    return () => clearInterval(t);
  }, [seconds]);
  return left;
}

export function BreakTimer() {
  const left = useCountdown(15 * 60);
  const mm = String(Math.floor(left / 60)).padStart(2, '0');
  const ss = String(left % 60).padStart(2, '0');
  return (
    <div className="slide-center">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <FadeUpText delay={0.1}><h2 style={{ marginBottom: 12 }}>Tea Break</h2></FadeUpText>
      <FadeUpText delay={0.2}>
        <div style={{ fontSize: '7rem', fontWeight: 800, color: left === 0 ? 'var(--success)' : 'var(--primary)', fontVariantNumeric: 'tabular-nums', lineHeight: 1.1 }}>
          {left === 0 ? 'Welcome back!' : `${mm}:${ss}`}
        </div>
      </FadeUpText>
      <FadeUpText delay={0.4}>
        <p style={{ marginTop: 24, color: 'var(--text-secondary)', maxWidth: 640 }}>
          While you're having tea, open the app and look up your own family in the demo church.
          Then think about the question you most want answered after the break.
        </p>
      </FadeUpText>
    </div>
  );
}

/* ───────────────────────── Pilot plan ───────────────────────── */

const journey = [
  { when: 'Week 0', title: 'Share member data', desc: 'Your member list in any format, your subscription card and any ledger list', icon: FileExportIcon },
  { when: 'Week 1', title: 'We set you up', desc: 'Members imported, ledgers ready, logins for all three of you', icon: Rocket01Icon },
  { when: 'Week 2', title: 'Training session', desc: '1 hour with your pastor, treasurer, secretary and app champion', icon: UserCheck01Icon },
  { when: 'Day 30', title: 'Register complete', desc: 'Every family entered, special dates live, first receipts issued', icon: UserGroupIcon },
  { when: 'Day 60', title: 'Books run on ChurchBell', desc: 'All receipts and payments entered; month-end reports from the app', icon: ReceiptIndianRupeeIcon },
  { when: 'Day 90', title: 'Members on the app', desc: 'Family heads use the app; review with the diocese', icon: SmartPhone01Icon },
];

export function PilotJourney() {
  return (
    <div className="slide-center">
      <Heading sub="Getting each church live takes 90 days. We do the heavy lifting.">
        The <span className="gradient-text">90-Day</span> Pilot
      </Heading>
      <div style={{ position: 'relative', maxWidth: 1150, width: '100%' }}>
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.6, delay: 0.4, ease: 'easeOut' }}
          style={{ position: 'absolute', top: 26, left: '8%', right: '8%', height: 3, background: 'var(--gradient-primary)', transformOrigin: 'left' }}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, position: 'relative' }}>
          {journey.map((j, i) => (
            <motion.div
              key={j.when}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.18 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <div style={{ width: 54, height: 54, borderRadius: '50%', background: '#fff', border: '3px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, boxShadow: 'var(--shadow-md)' }}>
                <Icon icon={j.icon} size={24} />
              </div>
              <span className="tag tag-primary" style={{ marginBottom: 8 }}>{j.when}</span>
              <h3 style={{ fontSize: '0.92rem', marginBottom: 6 }}>{j.title}</h3>
              <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', margin: 0 }}>{j.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const asks = [
  { icon: UserCheck01Icon, title: 'One app champion', desc: 'A young, tech-comfortable member who helps the office and the congregation' },
  { icon: FileExportIcon, title: 'Your member list', desc: 'In any format: Excel, a register photo, or an old system export. We clean it up.' },
  { icon: ReceiptIndianRupeeIcon, title: 'Subscription card & ledgers', desc: 'A photo of your subscription card, and your ledger list if you have one, so we set up your ledgers' },
  { icon: Calendar03Icon, title: 'Two hours a week', desc: 'From the office for the first month, while entry becomes a habit' },
];

export function WhatWeNeed() {
  return (
    <div className="slide-center">
      <Heading sub="Here's all we need from each pilot church.">
        What We Need <span className="gradient-text">From You</span>
      </Heading>
      <StaggerContainer delay={0.3} staggerDelay={0.12} className="feature-grid feature-grid-4" style={{ maxWidth: 1100 }}>
        {asks.map((a) => (
          <StaggerItem key={a.title}>
            <GlassCard style={{ padding: '28px 20px', textAlign: 'center', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}><Icon icon={a.icon} size={36} /></div>
              <h3 style={{ fontSize: '1rem', marginBottom: 8 }}>{a.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>{a.desc}</p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

const promises = [
  { icon: WhatsappIcon, title: 'Pilot WhatsApp group', desc: 'All 10 churches + our team. Questions answered the same day.' },
  { icon: CalendarCheckIn01Icon, title: 'Weekly office hour', desc: 'Online, every week, for any question your team has' },
  { icon: ChartIncreaseIcon, title: 'Monthly Pulse review', desc: 'A friendly scoreboard across the pilot churches and a review with the diocese' },
  { icon: Shield01Icon, title: 'Your data stays yours', desc: 'Only your church sees it. Backed up every night, and you can download all of it any time' },
];

export function OurPromise() {
  return (
    <div className="slide-center">
      <Heading sub="What every pilot church gets from us.">
        Our <span className="gradient-text">Promise</span>
      </Heading>
      <StaggerContainer delay={0.3} staggerDelay={0.12} className="feature-grid feature-grid-4" style={{ maxWidth: 1100 }}>
        {promises.map((a) => (
          <StaggerItem key={a.title}>
            <GlassCard style={{ padding: '28px 20px', textAlign: 'center', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}><Icon icon={a.icon} size={36} color="#28C76F" /></div>
              <h3 style={{ fontSize: '1rem', marginBottom: 8 }}>{a.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>{a.desc}</p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <FadeUpText delay={1}>
        <div style={{ marginTop: 36, background: 'var(--primary-bg)', border: '1px solid #D6D0FF', borderRadius: 'var(--radius)', padding: '18px 30px', maxWidth: 760 }}>
          <p style={{ color: 'var(--primary)', fontStyle: 'italic', margin: 0 }}>
            At day 90, our pilot pastors present their own story at the diocesan meeting, not us.
          </p>
        </div>
      </FadeUpText>
    </div>
  );
}

/* ───────────────────────── Q&A + close ───────────────────────── */

export function QandA() {
  return (
    <div className="slide-center">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <FadeUpText delay={0.1}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}><Icon icon={Message01Icon} size={56} /></div>
      </FadeUpText>
      <GradientHeading delay={0.2} className="text-large">Your Questions</GradientHeading>
      <FadeUpText delay={0.4}>
        <p style={{ marginTop: 16, color: 'var(--text-secondary)', maxWidth: 640 }}>
          {pilot.menti.qanda
            ? 'Ask out loud, or post on Mentimeter and upvote the questions you also want answered.'
            : 'Ask us anything about ChurchBell or the pilot. No question is too small.'}
        </p>
      </FadeUpText>
      {pilot.menti.qanda && (
        <FadeUpText delay={0.6}>
          <div style={{ marginTop: 28, fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)' }}>
            {pilot.menti.url} · {pilot.menti.code}
          </div>
        </FadeUpText>
      )}
    </div>
  );
}

export function PilotClosing() {
  const contacts = [
    { icon: CallRinging01Icon, text: pilot.support.phone },
    { icon: WhatsappIcon, text: `WhatsApp: ${pilot.support.whatsapp}` },
    { icon: Message01Icon, text: pilot.support.email },
    { icon: CloudIcon, text: pilot.support.web },
  ];
  const next = [
    'Weekly sync up',
    'Share member data and a sample subscription card',
    'A training session, and your church goes live',
  ];
  return (
    <div className="slide-center">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <motion.img src="/images/logo-color.png" alt="ChurchBell" style={{ height: 80, marginBottom: 24 }}
        initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} />
      <FadeUpText delay={0.2}>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 800, marginBottom: 28 }}>Let's begin, together.</h1>
      </FadeUpText>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 900, width: '100%' }}>
        <GlassCard delay={0.4} style={{ padding: '24px 28px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: 12 }}>What happens next</h3>
          {next.map((n, i) => (
            <div key={n} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '7px 0', borderBottom: i < next.length - 1 ? '1px solid var(--line)' : 'none' }}>
              <Icon icon={CheckListIcon} size={20} /> <span style={{ fontSize: '0.92rem' }}>{n}</span>
            </div>
          ))}
        </GlassCard>
        <GlassCard delay={0.55} style={{ padding: '24px 28px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: 12 }}>Reach us any time</h3>
          {contacts.map((c, i) => (
            <div key={c.text} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '7px 0', borderBottom: i < contacts.length - 1 ? '1px solid var(--line)' : 'none' }}>
              <Icon icon={c.icon} size={20} /> <span style={{ fontSize: '0.92rem' }}>{c.text}</span>
            </div>
          ))}
        </GlassCard>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} style={{ marginTop: 32 }}>
        <GradientHeading delay={1.3} className="text-large">Connected. United. Blessed.</GradientHeading>
      </motion.div>
    </div>
  );
}
