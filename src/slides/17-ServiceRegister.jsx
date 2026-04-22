import { motion } from 'framer-motion';
import { FadeUpText } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';
import { HugeiconsIcon } from '@hugeicons/react';
import { Book01Icon, LinkSquare01Icon, ReceiptIndianRupeeIcon, Tick01Icon } from '@hugeicons-pro/core-stroke-rounded';

const serviceFields = [
  { label: 'Date', value: 'Mar 16, 2026' },
  { label: 'Service Type', value: 'Sunday Worship' },
  { label: 'Preacher', value: 'Rev. Thomas Philip' },
  { label: 'Bible Reading', value: 'Psalm 23:1-6' },
  { label: 'Offering', value: 'Rs. 12,500' },
];

const transactionFields = [
  { label: 'Receipt No', value: 'R-2026-0156' },
  { label: 'Ledger', value: 'Sunday Offering' },
  { label: 'Amount', value: 'Rs. 12,500' },
  { label: 'Date', value: 'Mar 16, 2026' },
];

export default function ServiceRegister() {
  return (
    <div className="slide-center">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      <FadeUpText>
        <h2 style={{ marginBottom: 4 }}>
          Service Register — <span className="gradient-text">Digital & Connected</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.15}>
        <p style={{ marginBottom: 48, color: 'var(--text-muted)', maxWidth: 600 }}>
          Every service register entry is linked to its transactions. One system, everything connected.
        </p>
      </FadeUpText>

      <div style={{
        display: 'flex', alignItems: 'stretch', gap: 0,
        width: '100%', maxWidth: 950, justifyContent: 'center',
      }}>
        {/* Service Register Card */}
        <GlassCard delay={0.3} style={{ flex: 1, maxWidth: 360, padding: 0, overflow: 'hidden' }}>
          <div style={{
            background: 'var(--gradient-primary)',
            padding: '14px 20px',
            color: 'white',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <HugeiconsIcon icon={Book01Icon} size={22} color="white" />
            <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Service Register</span>
          </div>
          <div style={{ padding: '16px 20px' }}>
            {serviceFields.map((field, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '10px 0',
                borderBottom: i < serviceFields.length - 1 ? '1px solid var(--line)' : 'none',
              }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  {field.label}
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-heading)', fontWeight: 600 }}>
                  {field.value}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Connection: line — icon — line */}
        <div style={{
          display: 'flex', alignItems: 'center', alignSelf: 'center',
          flexShrink: 0, width: 120, marginTop: 5,
        }}>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            style={{ flex: 1, height: 0, borderTop: '3px dashed var(--primary)', transformOrigin: 'left' }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.4, type: 'spring' }}
            style={{
              width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
              background: 'var(--primary-bg)',
              border: '2px solid var(--primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <HugeiconsIcon icon={LinkSquare01Icon} size={18} color="var(--primary)" />
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.3, duration: 0.4 }}
            style={{ flex: 1, height: 0, borderTop: '3px dashed var(--primary)', transformOrigin: 'left' }}
          />
        </div>

        {/* Transaction Card */}
        <GlassCard delay={0.5} style={{ flex: 1, maxWidth: 360, padding: 0, overflow: 'hidden' }}>
          <div style={{
            background: 'linear-gradient(135deg, #28C76F 0%, #1FAF60 100%)',
            padding: '14px 20px',
            color: 'white',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <HugeiconsIcon icon={ReceiptIndianRupeeIcon} size={22} color="white" />
            <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Transaction Entry</span>
          </div>
          <div style={{ padding: '16px 20px' }}>
            {transactionFields.map((field, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '10px 0',
                borderBottom: i < transactionFields.length - 1 ? '1px solid var(--line)' : 'none',
              }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  {field.label}
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-heading)', fontWeight: 600 }}>
                  {field.value}
                </span>
              </div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              style={{
                marginTop: 8,
                padding: '8px 12px',
                background: '#E8FFF0',
                borderRadius: 8,
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: '0.8rem', color: 'var(--success)', fontWeight: 600,
              }}
            >
              <HugeiconsIcon icon={Tick01Icon} size={16} color="#7367F0" /> Auto-linked to service
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
