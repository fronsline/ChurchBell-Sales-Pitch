import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Target02Icon, Tick01Icon, UserCheck01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  'A standing candidate pool with qualifications, documents and availability',
  'Job postings tied to the vacancies Workforce projects',
  'Application pipeline: Applied, Shortlist, Interview, Offer, Hired',
  'Smart-Match radar that ranks the best-fit candidates for each posting',
  'Hire in one click, and it becomes a staff record in Workforce',
];

const pipeline = [
  { stage: 'Applied', count: 24, color: '#7367F0' },
  { stage: 'Shortlist', count: 11, color: '#7367F0' },
  { stage: 'Interview', count: 6, color: '#F79C39' },
  { stage: 'Offer', count: 2, color: '#28C76F' },
  { stage: 'Hired', count: 1, color: '#28C76F' },
];

const matches = [
  { name: 'Ruth Abraham', role: 'Maths Teacher · Bishop\'s HSS', score: 94 },
  { name: 'Joel Stephen', role: 'Accountant · Diocese Office', score: 88 },
  { name: 'Hannah Kurian', role: 'Lab Asst · St. Paul\'s', score: 81 },
];

export default function DioceseTalent() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Talent Acquisition: <span className="gradient-text">From Vacancy to Hire</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 24, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            When Workforce flags a retirement, Talent fills it with a vetted candidate bench, open postings,
            and a smart-match radar that ranks the right people for each role.
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
        <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 430, padding: '22px 24px' }}>
          {/* Pipeline funnel */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 6 }}>
            <HugeiconsIcon icon={Target02Icon} size={20} color="var(--primary)" strokeWidth={1.6} />
            <span style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-heading)' }}>Application Pipeline</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 96, marginTop: 12, marginBottom: 18 }}>
            {pipeline.map((p, i) => (
              <div key={p.stage} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, height: '100%', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: p.color }}>{p.count}</span>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(p.count / 24) * 100}%` }}
                  transition={{ duration: 0.7, delay: 0.8 + i * 0.1, ease: 'easeOut' }}
                  style={{ width: '100%', background: p.color, borderRadius: '6px 6px 0 0', minHeight: 6, opacity: 0.85 }}
                />
                <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 600, textAlign: 'center' }}>{p.stage}</span>
              </div>
            ))}
          </div>

          {/* Smart-match radar */}
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <HugeiconsIcon icon={UserCheck01Icon} size={16} color="var(--primary)" strokeWidth={1.6} />
              <span style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-heading)' }}>Smart-Match · Maths Teacher</span>
            </div>
            {matches.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + i * 0.12 }}
                style={{ marginBottom: 9 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 3 }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-heading)' }}>{m.name}</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--success)' }}>{m.score}%</span>
                </div>
                <div style={{ fontSize: '0.66rem', color: 'var(--text-muted)', marginBottom: 4 }}>{m.role}</div>
                <div style={{ height: 5, background: 'var(--bg-shade1)', borderRadius: 4, overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${m.score}%` }}
                    transition={{ duration: 0.7, delay: 1.4 + i * 0.12, ease: 'easeOut' }}
                    style={{ height: '100%', background: 'var(--gradient-primary)', borderRadius: 4 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
