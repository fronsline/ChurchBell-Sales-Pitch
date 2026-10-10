import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Mail01Icon, Tick01Icon, ArrowRight01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  'Log every letter, parcel, cheque or DD in or out, with its own reference and scanned copy',
  'Send each item to a department and a named officer; it lands in their My Mail',
  'They comment, forward, hold, resolve or return it, and every handover is recorded',
  'Due dates with reminders, and a turnaround view by department and by officer',
  'Reply on diocese letterhead from ready templates, with optional AI help for a first draft you review',
  'Officers log and work their mail from the ChurchBell app too',
];

const items = [
  { ref: 'IN/2026/10/0142', from: "St. Paul's, Vepery", subject: 'Building proposal', dept: 'Property', status: 'Assigned', color: 'var(--primary)', bg: 'var(--primary-bg)' },
  { ref: 'IN/2026/10/0141', from: 'District Collectorate', subject: 'Land survey notice', dept: 'Legal', status: 'In progress', color: 'var(--warning)', bg: '#FFF4E8' },
  { ref: 'IN/2026/10/0139', from: 'Emmanuel Church', subject: 'Cheque: assessment', dept: 'Treasury', status: 'Resolved', color: 'var(--success)', bg: '#E8FFF0' },
  { ref: 'OUT/2026/10/0057', from: 'To: Christ Church', subject: 'Appointment letter', dept: 'Bishop’s Office', status: 'Dispatched', color: 'var(--success)', bg: '#E8FFF0' },
];

export default function DioceseMailBox() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Mail Box: <span className="gradient-text">No Letter Lost on a Desk</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 24, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            Every piece of post the diocese office receives or sends, registered at the front desk and
            followed until it is answered.
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
        <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 450, padding: 0, overflow: 'hidden' }}>
          {/* Header */}
          <div style={{
            background: 'var(--gradient-primary)', padding: '16px 22px', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <HugeiconsIcon icon={Mail01Icon} size={18} color="white" strokeWidth={1.5} /> Mail Register
            </span>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.65rem' }}>
              October 2026
            </span>
          </div>

          {/* KPI strip */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid var(--line)' }}>
            {[
              { v: '142', l: 'Received', c: 'var(--primary)' },
              { v: '18', l: 'Open', c: 'var(--warning)' },
              { v: '3', l: 'Overdue', c: 'var(--alert)' },
            ].map((k, i) => (
              <div key={k.l} style={{ padding: '12px 0', textAlign: 'center', borderRight: i < 2 ? '1px solid var(--line)' : 'none' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: k.c }}>{k.v}</div>
                <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{k.l}</div>
              </div>
            ))}
          </div>

          {/* Rows */}
          {items.map((r, i) => (
            <motion.div
              key={r.ref}
              style={{
                padding: '11px 20px', borderBottom: i < items.length - 1 ? '1px solid var(--line)' : 'none',
                display: 'flex', alignItems: 'center', gap: 12,
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                  <span style={{ fontSize: '0.62rem', fontFamily: 'monospace', fontWeight: 600, color: 'var(--primary)' }}>{r.ref}</span>
                  <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>{r.dept}</span>
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)' }}>{r.subject}</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{r.from}</div>
              </div>
              <span className="tag" style={{ fontSize: '0.6rem', padding: '3px 8px', background: r.bg, color: r.color, flexShrink: 0 }}>
                {r.status}
              </span>
            </motion.div>
          ))}

          {/* Handover hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              padding: '11px 0', background: 'var(--primary-bg)', fontSize: '0.76rem',
              color: 'var(--primary)', fontWeight: 600,
            }}
          >
            Front desk
            <HugeiconsIcon icon={ArrowRight01Icon} size={14} color="var(--primary)" />
            Department
            <HugeiconsIcon icon={ArrowRight01Icon} size={14} color="var(--primary)" />
            Officer
            <HugeiconsIcon icon={ArrowRight01Icon} size={14} color="var(--primary)" />
            Answered
          </motion.div>
        </GlassCard>
      </div>
    </div>
  );
}
