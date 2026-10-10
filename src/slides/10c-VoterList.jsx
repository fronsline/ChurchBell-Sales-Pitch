import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  CheckmarkBadge01Icon, Tick01Icon, CancelCircleIcon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  'Automatic voter eligibility for church elections',
  'Your rules: membership type, baptism, confirmation, minimum subscription, regular payment, no auction dues, declaration on time',
  'Start from a diocese template (Madras, Trichy-Tanjore, Vellore, Erode-Salem), then fine-tune',
  'One tap on "Why?" shows exactly why a member is not eligible',
  'Filter All / Eligible / Not eligible; search instantly',
  'Excel export: eligible voters, the reasons, and the rules used',
];

const roll = [
  { name: 'John Thomas', eligible: true, note: 'All checks passed' },
  { name: 'Mary Abraham', eligible: true, note: 'All checks passed' },
  { name: 'Samuel Jacob', eligible: false, note: '3 subscriptions lapsed' },
  { name: 'Grace Philip', eligible: false, note: 'Confirmation pending' },
  { name: 'Daniel Varghese', eligible: true, note: 'All checks passed' },
];

export default function VoterList() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Voter List: <span className="gradient-text">Fair, Transparent Elections</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 24, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            No more manually auditing registers before an election. Set the rules once, and every member is evaluated in seconds.
          </p>
        </FadeUpText>

        <StaggerContainer delay={0.35} staggerDelay={0.1} className="flex-col gap-md">
          {features.map((feat) => (
            <StaggerItem key={feat}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <HugeiconsIcon icon={Tick01Icon} size={18} color="var(--success)" strokeWidth={2} style={{ marginTop: 3, flexShrink: 0 }} />
                <p style={{ fontSize: '0.95rem', margin: 0 }}>{feat}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div className="slide-right">
        <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 420, padding: 0, overflow: 'hidden' }}>
          {/* Header */}
          <div style={{
            background: 'var(--gradient-primary)', padding: '16px 24px', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <HugeiconsIcon icon={CheckmarkBadge01Icon} size={18} color="white" strokeWidth={1.5} /> Voter List
            </span>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.65rem' }}>
              Madras Diocese
            </span>
          </div>

          {/* Summary strip */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid var(--line)' }}>
            {[
              { label: 'Eligible', value: 186, color: 'var(--success)' },
              { label: 'Not eligible', value: 62, color: 'var(--alert)' },
              { label: 'Total', value: 248, color: 'var(--text-heading)' },
            ].map((s) => (
              <div key={s.label} style={{ padding: '12px 0', textAlign: 'center', borderRight: '1px solid var(--line)' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Rows */}
          {roll.map((m, i) => (
            <motion.div
              key={m.name}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '12px 24px', borderBottom: '1px solid var(--line)',
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
            >
              <div>
                <div style={{ fontWeight: 500, fontSize: '0.88rem', color: 'var(--text-heading)' }}>{m.name}</div>
                <div style={{ fontSize: '0.7rem', color: m.eligible ? 'var(--text-muted)' : 'var(--alert)' }}>{m.note}</div>
              </div>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.72rem', fontWeight: 600, color: m.eligible ? 'var(--success)' : 'var(--alert)' }}>
                <HugeiconsIcon icon={m.eligible ? Tick01Icon : CancelCircleIcon} size={15} strokeWidth={2} />
                {m.eligible ? 'Eligible' : 'Why?'}
              </span>
            </motion.div>
          ))}
        </GlassCard>
      </div>
    </div>
  );
}
