import { motion } from 'framer-motion';
import { FadeUpText, StaggerContainer, StaggerItem, GradientHeading } from '../components/AnimatedText';
import Counter from '../components/Counter';
import GlassCard from '../components/GlassCard';
import { HugeiconsIcon } from '@hugeicons/react';
import { Search01Icon, Baby01Icon, ChurchIcon, UserGroupIcon, Building01Icon, FileExportIcon, Home01Icon } from '@hugeicons-pro/core-stroke-rounded';

const useCases = [
  { icon: Search01Icon, text: 'Senior citizens above 80' },
  { icon: Baby01Icon, text: 'Kids below 12 for Sunday school' },
  { icon: ChurchIcon, text: 'Subscription payers' },
  { icon: UserGroupIcon, text: 'Family heads' },
  { icon: Building01Icon, text: 'Women in each area group' },
];

export default function MemberReports() {
  return (
    <div className="slide-center">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      <FadeUpText>
        <h2 style={{ marginBottom: 40 }}>
          Member Reports: <span className="gradient-text">Seconds, Not Hours</span>
        </h2>
      </FadeUpText>

      <div className="slide-split" style={{ maxWidth: 1100 }}>
        {/* Left: Use cases */}
        <div className="slide-left">
          <FadeUpText delay={0.2}>
            <h3 style={{ marginBottom: 16, color: 'var(--text-secondary)' }}>
              Instantly filter & generate reports for:
            </h3>
          </FadeUpText>

          <StaggerContainer staggerDelay={0.15} delay={0.4} className="flex-col gap-md">
            {useCases.map((item, i) => (
              <StaggerItem key={i}>
                <motion.div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '14px 20px',
                    background: 'var(--bg-shade1)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--line)',
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    color: 'var(--text-heading)',
                  }}
                  whileHover={{ x: 8, background: 'var(--primary-bg)', transition: { duration: 0.2 } }}
                >
                  <HugeiconsIcon icon={item.icon} size={24} color="#7367F0" />
                  {item.text}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Right: Counter + export cards */}
        <div className="slide-right" style={{ gap: 32 }}>
          <GlassCard delay={0.3} style={{ textAlign: 'center', padding: '40px 48px' }}>
            <div style={{ fontSize: '5rem', fontWeight: 700, lineHeight: 1 }}>
              <Counter from={0} to={13} duration={1.5} delay={0.8} className="gradient-text" />
            </div>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              marginTop: 12,
              fontWeight: 500,
            }}>
              filters you can combine: age, gender, group, area, type and more
            </p>
          </GlassCard>

          <div style={{ display: 'flex', gap: 16, width: '100%' }}>
            <GlassCard delay={0.6} style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
              <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
                <HugeiconsIcon icon={FileExportIcon} size={28} color="#7367F0" />
              </div>
              <h3 style={{ fontSize: '1rem' }}>PDF & Excel</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 4 }}>
                Print it or edit it
              </p>
            </GlassCard>

            <GlassCard delay={0.75} style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
              <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
                <HugeiconsIcon icon={Home01Icon} size={28} color="#7367F0" />
              </div>
              <h3 style={{ fontSize: '1rem' }}>Family Report</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 4 }}>
                One family's card, payments, visits & attendance
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
