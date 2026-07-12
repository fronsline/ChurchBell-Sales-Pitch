import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { JusticeScale01Icon, Tick01Icon, Calendar03Icon, Notification01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  'A court-case register: court, case number, parties and current status',
  'Hearings diary and calendar, so the next date is always in front of you',
  'Sent and received legal notices, each with its deadline',
  'Multi-step reminders at 7, 3 and 1 days, and again on the day',
  'Link a case to the parish or property it concerns',
  'Every document attached to the case file, nothing left loose',
];

const reminders = [
  { label: 'T-7', done: true },
  { label: 'T-3', done: true },
  { label: 'T-1', done: false },
  { label: 'Day', done: false },
];

export default function DioceseLegal() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Legal: <span className="gradient-text">Never Miss a Hearing or a Notice</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 24, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            Every court case, hearing and legal notice the diocese is involved in, with reminders
            that fire well before the date, on both push and WhatsApp.
          </p>
        </FadeUpText>

        <StaggerContainer delay={0.35} staggerDelay={0.09} className="flex-col gap-md">
          {features.map((feat) => (
            <StaggerItem key={feat}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <HugeiconsIcon icon={Tick01Icon} size={18} color="var(--success)" strokeWidth={2} style={{ marginTop: 3, flexShrink: 0 }} />
                <p style={{ fontSize: '0.94rem', margin: 0 }}>{feat}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div className="slide-right">
        <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 420, padding: 0, overflow: 'hidden' }}>
          {/* Header */}
          <div style={{
            background: 'var(--gradient-primary)', padding: '16px 22px', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ fontWeight: 600, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <HugeiconsIcon icon={JusticeScale01Icon} size={18} color="white" strokeWidth={1.5} /> Case File
            </span>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.22)', color: 'white', fontSize: '0.6rem' }}>
              Ongoing
            </span>
          </div>

          {/* Case meta */}
          <div style={{ padding: '16px 22px', borderBottom: '1px solid var(--line)' }}>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: 4 }}>
              Diocese vs. M/s Coastal Developers
            </div>
            <div style={{ display: 'flex', gap: 16, fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              <span>O.S. 214 / 2024</span>
              <span>City Civil Court, Chennai</span>
            </div>
            <div style={{ marginTop: 8, fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
              Title dispute, linked to <strong style={{ color: 'var(--primary)' }}>Tambaram Glebe Land</strong>
            </div>
          </div>

          {/* Next hearing countdown */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '14px 22px',
            background: 'var(--bg-shade1)', borderBottom: '1px solid var(--line)',
          }}>
            <HugeiconsIcon icon={Calendar03Icon} size={26} color="var(--primary)" strokeWidth={1.6} />
            <div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Next Hearing</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-heading)' }}>14 Jul 2026 · in 7 days</div>
            </div>
          </div>

          {/* Reminder timeline */}
          <div style={{ padding: '16px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 14 }}>
              <HugeiconsIcon icon={Notification01Icon} size={15} color="var(--primary)" strokeWidth={1.6} />
              <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-heading)' }}>Reminder Schedule</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 11, left: 16, right: 16, height: 2, background: 'var(--line)' }} />
              {reminders.map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 + i * 0.15, type: 'spring', stiffness: 300 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, position: 'relative', zIndex: 1 }}
                >
                  <div style={{
                    width: 24, height: 24, borderRadius: '50%',
                    background: r.done ? 'var(--success)' : 'white',
                    border: r.done ? 'none' : '2px solid var(--primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {r.done && <HugeiconsIcon icon={Tick01Icon} size={13} color="white" strokeWidth={2.5} />}
                  </div>
                  <span style={{ fontSize: '0.64rem', fontWeight: 600, color: r.done ? 'var(--success)' : 'var(--text-muted)' }}>{r.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
