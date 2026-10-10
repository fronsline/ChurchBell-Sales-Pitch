import { motion } from 'framer-motion';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import { HugeiconsIcon } from '@hugeicons/react';
import { Tick01Icon, SchoolBell01Icon, ArrowDown01Icon } from '@hugeicons-pro/core-stroke-rounded';

const manualSteps = [
  'Write Cash Book',
  'Write Ledger',
  'Write Day Book',
  'Write Receipt',
  'Put in Subscription Card',
];

const autoChecks = [
  'Cash Book & Ledger updated',
  'Day Book updated',
  'Subscription Card updated',
  'Receipt PDF generated',
  'WhatsApp + PDF to the member',
  'Shows in the member\'s app',
];

// Everything else the treasurer does from the same Finance menu.
const alsoTags = [
  'Receipts',
  'Payments',
  'Contra (bank ↔ cash)',
  'Family receipts, whole household at once',
  'Your own bill books & numbering',
  'Cancel a receipt, with the record kept',
];

export default function Transactions() {
  return (
    <div className="slide-center">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      <FadeUpText>
        <h2 style={{ marginBottom: 8 }}>
          Transactions: <span className="gradient-text">One Entry, Everything Updated</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 28, color: 'var(--text-muted)' }}>
          The most impactful change for your treasurer
        </p>
      </FadeUpText>

      <div className="vs-container">
        {/* BEFORE - Pain */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            textAlign: 'left', padding: 32,
            background: '#F8F5F0', border: '1px solid #E8E0D6',
            borderRadius: 'var(--radius)', height: '100%',
            display: 'flex', flexDirection: 'column',
          }}
        >
          <h3 style={{ color: '#8B7355', marginBottom: 20, textAlign: 'center', fontSize: '1.2rem' }}>
            Before
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 16, textAlign: 'center' }}>
            For every single transaction...
          </p>
          {manualSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 14px',
                background: 'rgba(139, 115, 85, 0.06)',
                borderRadius: 8,
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text-heading)',
              }}>
                <span style={{
                  width: 24, height: 24, borderRadius: '50%',
                  background: 'rgba(139, 115, 85, 0.12)', color: '#8B7355',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.7rem', fontWeight: 700, flexShrink: 0,
                }}>
                  {i + 1}
                </span>
                {step}
              </div>
              {i < manualSteps.length - 1 && (
                <div style={{ textAlign: 'center', padding: '4px 0', color: 'var(--text-muted)', fontSize: '1rem' }}>
                  <HugeiconsIcon icon={ArrowDown01Icon} size={16} color="var(--text-muted)" />
                </div>
              )}
            </motion.div>
          ))}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{
              marginTop: 16, textAlign: 'center', fontSize: '0.8rem',
              color: 'var(--primary)', fontWeight: 600,
            }}
          >
            ~ 5 minutes per entry
          </motion.p>
        </motion.div>

        {/* VS Divider */}
        <motion.div
          className="vs-divider"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 200 }}
        >
          VS
        </motion.div>

        {/* AFTER - Solution */}
        <motion.div
          className="solution-card"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: 'left', padding: 32 }}
        >
          <h3 style={{ color: 'var(--primary)', marginBottom: 20, textAlign: 'center', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <HugeiconsIcon icon={SchoolBell01Icon} size={22} color="var(--primary)" /> After: ChurchBell
          </h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{
              padding: '12px 16px',
              background: 'var(--gradient-primary)',
              borderRadius: 10,
              color: 'white',
              textAlign: 'center',
              fontWeight: 600,
              fontSize: '0.95rem',
              marginBottom: 20,
            }}
          >
            Create Receipt in ChurchBell
          </motion.div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 12, textAlign: 'center' }}>
            Automatically...
          </p>

          <StaggerContainer staggerDelay={0.18} delay={1.2} className="flex-col gap-sm">
            {autoChecks.map((check, i) => (
              <StaggerItem key={i}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '8px 12px',
                  background: 'rgba(115, 103, 240, 0.06)',
                  borderRadius: 8,
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--text-heading)',
                }}>
                  <HugeiconsIcon icon={Tick01Icon} size={20} color="#7367F0" />
                  {check}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            style={{
              marginTop: 16, textAlign: 'center', fontSize: '0.8rem',
              color: 'var(--success)', fontWeight: 600,
            }}
          >
            ~ 30 seconds. Done.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.0, duration: 0.5 }}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginTop: 24, maxWidth: 900 }}
      >
        {alsoTags.map((t) => (
          <span key={t} className="tag tag-primary">{t}</span>
        ))}
      </motion.div>
    </div>
  );
}
