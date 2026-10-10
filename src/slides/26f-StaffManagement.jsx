import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Briefcase01Icon, Tick01Icon, ChartIncreaseIcon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  'Every institution in one place: schools, colleges, hospitals, homes and offices',
  'Organised by department, with an organisation chart for the diocese',
  'One file per person: qualifications, documents and service history',
  'Salary and allowances with a dated pay history; pay, bank and ID details seen only by HR',
  'An onboarding checklist for each new joiner, and Excel import for existing staff',
  'Upcoming retirements, with reminders 90 and 30 days ahead',
];

const projection = [
  { year: 'Next 6 months', count: 3 },
  { year: '6 to 12 months', count: 5 },
  { year: '12 to 24 months', count: 8 },
];

const maxCount = 8;

export default function StaffManagement() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Workforce: <span className="gradient-text">Plan Before the Gap Appears</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 24, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            Every teacher and staff member across diocesan institutions, with their qualifications, documents
            and service. ChurchBell shows who retires when, so appointments are planned, not panicked.
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
        <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 430, padding: '24px 26px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <HugeiconsIcon icon={ChartIncreaseIcon} size={22} color="var(--primary)" strokeWidth={1.6} />
            <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-heading)' }}>Retirement Timeline</span>
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '0 0 22px' }}>
            Who retires in the next two years
          </p>

          {/* Bar chart */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 14, height: 180, padding: '0 4px' }}>
            {projection.map((p, i) => (
              <div key={p.year} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, height: '100%', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)' }}>{p.count}</span>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(p.count / maxCount) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.8 + i * 0.12, ease: 'easeOut' }}
                  style={{ width: '100%', maxWidth: 60, background: 'var(--gradient-primary)', borderRadius: '8px 8px 0 0', minHeight: 8 }}
                />
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>{p.year}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 20, padding: '12px 16px', background: 'var(--primary-bg)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <HugeiconsIcon icon={Briefcase01Icon} size={20} color="var(--primary)" strokeWidth={1.6} />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-heading)', fontWeight: 600 }}>
              16 retirements in the next 24 months: start hiring early
            </span>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
