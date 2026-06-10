import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Baby01Icon, Tick01Icon, IdentityCardIcon, School01Icon,
  BookOpen01Icon, FavouriteIcon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  'A complete register of every child in the diocese',
  'A unique Child ID for each child — for life',
  'Type a name → instantly see school, standard & details',
  'Documents uploaded and kept safe per child',
  'Child-support tracking — who sponsors, and their details',
  'Reports & safeguarding records, always to hand',
];

const childRows = [
  { label: 'Child ID', value: 'DIO-CHD-2041', icon: IdentityCardIcon },
  { label: 'School', value: 'St. John\'s Matric. School', icon: School01Icon },
  { label: 'Standard', value: 'Grade 6 — Section B', icon: BookOpen01Icon },
];

export default function ChildrenMinistry() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Children's Ministry — <span className="gradient-text">Every Child, Known & Cared For</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 24, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            The next generation of the diocese — documented, supported and never lost in paperwork.
            One search brings up a child's whole story.
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
        <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 400, padding: 0, overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ background: 'var(--gradient-primary)', padding: '22px 24px', color: 'white', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <HugeiconsIcon icon={Baby01Icon} size={30} color="white" strokeWidth={1.5} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.15rem' }}>Anitha R.</div>
              <div style={{ fontSize: '0.78rem', opacity: 0.9 }}>Age 11 · Emmanuel Parish</div>
            </div>
          </div>

          {/* Detail rows */}
          {childRows.map((row, i) => (
            <motion.div
              key={row.label}
              style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 24px', borderBottom: '1px solid var(--line)' }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.12 }}
            >
              <HugeiconsIcon icon={row.icon} size={20} color="var(--primary)" strokeWidth={1.5} />
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{row.label}</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-heading)' }}>{row.value}</div>
              </div>
            </motion.div>
          ))}

          {/* Support badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            style={{ margin: 18, padding: '14px 16px', background: 'var(--primary-bg)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: 12 }}
          >
            <HugeiconsIcon icon={FavouriteIcon} size={22} color="var(--primary)" strokeWidth={1.6} />
            <div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Child Support</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>Sponsored — Mr. David K. (UK)</div>
            </div>
          </motion.div>
        </GlassCard>
      </div>
    </div>
  );
}
