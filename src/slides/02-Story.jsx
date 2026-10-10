import { motion } from 'framer-motion';
import { FadeUpText, GradientHeading, StaggerContainer, StaggerItem } from '../components/AnimatedText';

const milestones = [
  { year: '2016', label: 'The Dream' },
  { year: '2021', label: 'The Opportunity' },
  { year: '2022', label: 'First Church Goes Live' },
  { year: '2024', label: 'Word of Mouth Growth' },
  { year: '2025', label: 'Serving Multiple Churches' },
  { year: '2026', label: 'Across Dioceses & Borders' },
];

export default function Story() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 20 }}>
            This Became My <span className="gradient-text">Dream Project</span>
          </h2>
        </FadeUpText>

        <FadeUpText delay={0.3}>
          <div className="quote-block" style={{ maxWidth: 520 }}>
            I watched my own relatives, church treasurers, spend hours every Sunday
            after service, writing in multiple ledger books, filling out receipt books,
            stuffing receipts into subscription cards...
          </div>
        </FadeUpText>

        <FadeUpText delay={0.6}>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: 48, maxWidth: 520 }}>
            God gave me the talent in programming and I wanted to give it back to something useful.
            During COVID, a church gave me the opportunity and I started building this.
          </p>
        </FadeUpText>

      </div>

      <div className="slide-right">
        <motion.img
          src="/images/ai/old-ledgers.jpg"
          alt="Old ledger books and receipts"
          style={{
            width: '100%',
            maxWidth: 300,
            borderRadius: 12,
            marginBottom: 24,
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />

        <GradientHeading delay={0.3}>
          <span style={{ fontSize: '5rem' }}>2016</span>
        </GradientHeading>
        <FadeUpText delay={0.5}>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: 32 }}>
            When the dream started
          </p>
        </FadeUpText>

        <StaggerContainer delay={0.7} staggerDelay={0.15} className="flex-col gap-md" style={{ width: '100%', maxWidth: 300 }}>
          {milestones.map((m) => (
            <StaggerItem key={m.year}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: 'var(--gradient-primary)',
                    flexShrink: 0,
                  }}
                />
                <div style={{ borderLeft: '2px solid var(--line)', paddingLeft: 16 }}>
                  <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}>
                    {m.year}
                  </span>
                  <span style={{ color: 'var(--text-secondary)', marginLeft: 8, fontSize: '0.9rem' }}>
                    · {m.label}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
