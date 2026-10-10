import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  JusticeScale01Icon, Calendar03Icon, Notification03Icon, LegalDocument01Icon,
  FileLockedIcon, InboxDownloadIcon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  {
    icon: JusticeScale01Icon,
    title: 'Cases & Hearings',
    desc: 'Court, case number, advocate: every hearing logged with its outcome and the next date',
  },
  {
    icon: Calendar03Icon,
    title: 'Legal Diary',
    desc: 'Day, week and month view. Print the week, or add it to Google, Apple or Outlook Calendar',
  },
  {
    icon: Notification03Icon,
    title: 'Reminders',
    desc: '7, 3 and 1 day before every hearing, deadline and notice reply, and on the day',
  },
  {
    icon: LegalDocument01Icon,
    title: 'Notices, Opinions & Enquiries',
    desc: 'Legal notices with reply dates, title opinions on property, and private enquiry commissions',
  },
  {
    icon: InboxDownloadIcon,
    title: 'In / Out Register',
    desc: 'Every legal paper that comes in or goes out, entered once and easy to find',
  },
  {
    icon: FileLockedIcon,
    title: 'Case Documents',
    desc: 'Everything kept with the case. Confidential papers open only for the legal admin',
  },
];

// Sample diary: names and dates are illustrative only.
const diary = [
  { day: 'Mon 9', kind: 'Hearing', title: 'O.S. 112/2024: Boundary dispute', tone: 'var(--primary)' },
  { day: 'Wed 11', kind: 'Reply due', title: 'Notice from Municipal Corporation', tone: 'var(--alert)' },
  { day: 'Fri 13', kind: 'Opinion', title: 'Title check: S.No. 214/3', tone: 'var(--success)' },
];

export default function LegalDesk() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Legal: <span className="gradient-text">Never Miss a Court Date</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 22, color: 'var(--text-muted)', fontSize: '0.96rem' }}>
            Land cases, notices and disputes often outlive the pastor who started them. Keep the
            whole file in the church, not in one person’s cupboard.
          </p>
        </FadeUpText>

        <StaggerContainer
          delay={0.3}
          staggerDelay={0.08}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <GlassCard delay={0} style={{ padding: '16px 16px', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <HugeiconsIcon icon={f.icon} size={22} color="#7367F0" strokeWidth={1.6} />
                  <h3 style={{ fontSize: '0.9rem', margin: 0 }}>{f.title}</h3>
                </div>
                <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>{f.desc}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div className="slide-right">
        <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 420, padding: 0, overflow: 'hidden' }}>
          <div style={{
            background: 'var(--gradient-primary)', padding: '14px 22px', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ fontWeight: 600, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <HugeiconsIcon icon={Calendar03Icon} size={18} color="white" strokeWidth={1.5} /> Legal Diary · This Week
            </span>
          </div>

          {diary.map((d, i) => (
            <motion.div
              key={d.title}
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '12px 22px', borderBottom: '1px solid var(--line)',
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.12 }}
            >
              <div style={{ width: 52, fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-heading)' }}>{d.day}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.64rem', fontWeight: 700, color: d.tone, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{d.kind}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-heading)' }}>{d.title}</div>
              </div>
            </motion.div>
          ))}

          {/* Reminder strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.25 }}
            style={{ padding: '14px 22px', borderBottom: '1px solid var(--line)', background: 'var(--primary-bg)' }}
          >
            <div style={{ fontSize: '0.66rem', color: 'var(--text-muted)', marginBottom: 6 }}>Legal Diary · evening reminder, 6 pm</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-heading)', fontWeight: 600 }}>
              Tomorrow: 1 hearing
            </div>
          </motion.div>

          {/* Confidential document */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.4 }}
            style={{ padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 10 }}
          >
            <HugeiconsIcon icon={FileLockedIcon} size={18} color="var(--alert)" strokeWidth={1.6} />
            <div style={{ flex: 1, fontSize: '0.78rem', color: 'var(--text-heading)' }}>Sale deed 1962.pdf</div>
            <span className="tag tag-alert" style={{ fontSize: '0.6rem' }}>Confidential</span>
          </motion.div>
        </GlassCard>

        <FadeUpText delay={1.5}>
          <p style={{ marginTop: 16, fontSize: '0.78rem', color: 'var(--text-muted)', maxWidth: 420, textAlign: 'center' }}>
            The diocese sees your legal register only if your church chooses to share it.
          </p>
        </FadeUpText>
      </div>
    </div>
  );
}
