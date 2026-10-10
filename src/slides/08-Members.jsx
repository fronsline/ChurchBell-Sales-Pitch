import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { UserGroupIcon, Tick01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  'Complete member register: every family, every member',
  'Families linked to their family head',
  'Filters: age, gender, group, area, membership type',
  'Member profile with payments, house visits & attendance',
  'Family directory, ready to print',
  'We import your existing Excel, in any format',
  'Export to PDF & Excel',
];

const sampleMembers = [
  { name: 'John Thomas', type: 'Primary', phone: '98765 43210' },
  { name: 'Mary Abraham', type: 'Primary', phone: '98765 12345' },
  { name: 'Samuel Jacob', type: 'Secondary', phone: '91234 56789' },
  { name: 'Grace Philip', type: 'Temporary', phone: '99887 76543' },
];

export default function Members() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 32 }}>Member Management</h2>
        </FadeUpText>

        <StaggerContainer delay={0.3} staggerDelay={0.1} className="flex-col gap-md">
          {features.map((feat) => (
            <StaggerItem key={feat}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <HugeiconsIcon icon={Tick01Icon} size={18} color="var(--success)" strokeWidth={2} />
                <p style={{ fontSize: '1rem', margin: 0 }}>{feat}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div className="slide-right">
        <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 420, padding: 0, overflow: 'hidden' }}>
          {/* Header */}
          <div
            style={{
              background: 'var(--gradient-primary)',
              padding: '16px 24px',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <HugeiconsIcon icon={UserGroupIcon} size={18} color="white" strokeWidth={1.5} /> Members
            </span>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.7rem' }}>
              248 total
            </span>
          </div>

          {/* Table header */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr 1fr',
              padding: '12px 24px',
              background: 'var(--bg-shade1)',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            <span>Name</span>
            <span>Type</span>
            <span>Phone</span>
          </div>

          {/* Rows */}
          {sampleMembers.map((m, i) => (
            <motion.div
              key={m.name}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.4fr 1fr 1fr',
                padding: '14px 24px',
                borderBottom: '1px solid var(--line)',
                fontSize: '0.85rem',
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
            >
              <span style={{ fontWeight: 500, color: 'var(--text-heading)' }}>{m.name}</span>
              <span>
                <span className="tag tag-primary" style={{ fontSize: '0.65rem', padding: '3px 8px' }}>
                  {m.type}
                </span>
              </span>
              <span style={{ color: 'var(--text-muted)' }}>{m.phone}</span>
            </motion.div>
          ))}
        </GlassCard>
      </div>
    </div>
  );
}
