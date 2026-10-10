import { motion } from 'framer-motion';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';
import { HugeiconsIcon } from '@hugeicons/react';
import { CheckListIcon, PieChartIcon, Tick01Icon } from '@hugeicons-pro/core-stroke-rounded';

const defaulterNames = [
  { name: 'Thomas K.', area: 'Ward 3', months: 3 },
  { name: 'Mary Joseph', area: 'Ward 1', months: 2 },
  { name: 'Samuel P.', area: 'Ward 5', months: 4 },
  { name: 'Rachel M.', area: 'Ward 2', months: 1 },
];

const statementFeatures = [
  'Member contributions: month by month, fund by fund',
  'Ledger contributors: who gave to each fund',
  'Declaration defaulters: pledged vs. actually paid',
  'Pick any dates and ledgers, download in Excel',
];

export default function DefaultersStatements() {
  return (
    <div className="slide-center">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      <FadeUpText>
        <h2 style={{ marginBottom: 40 }}>
          <span className="gradient-text">Track & Verify</span>
        </h2>
      </FadeUpText>

      <div className="slide-split" style={{ maxWidth: 1100 }}>
        {/* Left: Monthly Defaulters */}
        <div className="slide-left" style={{ gap: 16 }}>
          <FadeUpText delay={0.2}>
            <div className="solution-card" style={{ textAlign: 'left', padding: 28 }}>
              <h3 style={{ marginBottom: 8, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <HugeiconsIcon icon={CheckListIcon} size={22} color="var(--primary)" /> Monthly Defaulters
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 20 }}>
                Pick a period and see, month by month, who hasn't paid. Filter by area or group, export to Excel. No more checking card by card.
              </p>

              {/* Month selector mockup */}
              <div style={{
                display: 'flex', gap: 8, marginBottom: 16,
              }}>
                {['Jan', 'Feb', 'Mar'].map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 8,
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      background: i === 2 ? 'var(--primary)' : 'var(--bg-shade1)',
                      color: i === 2 ? 'white' : 'var(--text-secondary)',
                      border: `1px solid ${i === 2 ? 'var(--primary)' : 'var(--line)'}`,
                      cursor: 'pointer',
                    }}
                  >
                    {m}
                  </motion.div>
                ))}
              </div>

              {/* Defaulter list */}
              <StaggerContainer staggerDelay={0.12} delay={0.9} className="flex-col gap-sm">
                {defaulterNames.map((d, i) => (
                  <StaggerItem key={i}>
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '10px 14px',
                      background: 'white',
                      borderRadius: 8,
                      border: '1px solid var(--line)',
                      borderLeft: '3px solid var(--primary)',
                    }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)' }}>
                          {d.name}
                        </span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                          {d.area}
                        </span>
                      </div>
                      <span className="tag tag-alert" style={{ fontSize: '0.65rem' }}>
                        {d.months} {d.months === 1 ? 'month' : 'months'} due
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 14, marginBottom: 0 }}>
                On the 1st of every month, members who missed last month get a gentle reminder in the ChurchBell app.
              </p>
            </div>
          </FadeUpText>
        </div>

        {/* Right: Statements & Insights */}
        <div className="slide-right" style={{ alignItems: 'stretch' }}>
          <FadeUpText delay={0.4}>
            <div className="solution-card" style={{ textAlign: 'left', padding: 28 }}>
              <h3 style={{ marginBottom: 8, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <HugeiconsIcon icon={PieChartIcon} size={22} color="var(--primary)" /> Statements & Insights
              </h3>

              <StaggerContainer staggerDelay={0.15} delay={0.8} className="flex-col gap-md" style={{ marginTop: 16 }}>
                {statementFeatures.map((feature, i) => (
                  <StaggerItem key={i}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '10px 14px',
                      background: 'white',
                      borderRadius: 8,
                      border: '1px solid var(--line)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      color: 'var(--text-heading)',
                    }}>
                      <HugeiconsIcon icon={Tick01Icon} size={18} color="#7367F0" />
                      {feature}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Mini grid mockup */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                style={{ marginTop: 20 }}
              >
                <div style={{
                  fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)',
                  textTransform: 'uppercase', marginBottom: 8, letterSpacing: '0.05em',
                }}>
                  Subscription Grid Preview
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  gap: 4,
                }}>
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m, i) => (
                    <div key={i} style={{
                      textAlign: 'center', fontSize: '0.6rem', fontWeight: 600,
                      color: 'var(--text-muted)', padding: '4px 0',
                    }}>
                      {m}
                    </div>
                  ))}
                  {[true, true, true, false, false, null].map((paid, i) => (
                    <div key={`s-${i}`} style={{
                      width: '100%', aspectRatio: '1', borderRadius: 4,
                      background: paid === true ? '#E8FFF0' : paid === false ? 'var(--primary-bg)' : 'var(--bg-shade1)',
                      border: `1px solid ${paid === true ? '#C3F7D5' : paid === false ? '#D6D0FF' : 'var(--line)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.7rem',
                    }}>
                      {paid === true ? '✓' : paid === false ? '✗' : '–'}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </FadeUpText>
        </div>
      </div>
    </div>
  );
}
