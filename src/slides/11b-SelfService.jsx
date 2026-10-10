import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  FileEditIcon, FileValidationIcon, Tick01Icon, ArrowRight01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const editSteps = [
  'Member suggests a change in the app: new phone, address, dates',
  'The office sees old and new side by side',
  'Approve or reject in one tap, on the computer or the phone',
  'The member is told the result',
];

const bands = [
  { label: 'On track', note: 'paid 100% or more', color: 'var(--success)' },
  { label: 'Slightly below', note: '75–99% of declared', color: '#FF9F43' },
  { label: 'Well below', note: 'under 75% of declared', color: 'var(--alert)' },
];

export default function SelfService() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          Members Help <span className="gradient-text">Keep Records Right</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 36, color: 'var(--text-muted)', maxWidth: 640 }}>
          Fewer phone calls to the office. Fewer wrong numbers in the register.
        </p>
      </FadeUpText>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, maxWidth: 1050, width: '100%' }}>
        <GlassCard delay={0.3} style={{ padding: '28px 30px', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HugeiconsIcon icon={FileEditIcon} size={24} color="#7367F0" />
            </div>
            <h3 style={{ fontSize: '1.15rem', margin: 0 }}>Edit Requests</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {editSteps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}
              >
                <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--primary-bg)', color: 'var(--primary)', fontWeight: 700, fontSize: '0.78rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{step}</span>
              </motion.div>
            ))}
          </div>
          <div style={{ marginTop: 18, padding: '10px 14px', background: 'var(--bg-shade1)', borderRadius: 10, fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--text-muted)' }}>Mobile</span>
            <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>98765 43210</span>
            <HugeiconsIcon icon={ArrowRight01Icon} size={14} color="#7367F0" />
            <span style={{ fontWeight: 600, color: 'var(--text-heading)' }}>91234 56789</span>
            <span className="tag tag-success" style={{ fontSize: '0.68rem', marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <HugeiconsIcon icon={Tick01Icon} size={12} strokeWidth={2} /> Approve
            </span>
          </div>
        </GlassCard>

        <GlassCard delay={0.45} style={{ padding: '28px 30px', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HugeiconsIcon icon={FileValidationIcon} size={24} color="#7367F0" />
            </div>
            <h3 style={{ fontSize: '1.15rem', margin: 0 }}>Self Declaration</h3>
          </div>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 8px' }}>
            Each member&apos;s yearly declaration (a fixed amount, 3% or 1% of income, monthly or yearly) is recorded by the office and visible to the member in the app.
          </p>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 16px' }}>
            The <strong style={{ color: 'var(--text-heading)' }}>Declaration Defaulters</strong> report compares what each member declared with what they actually paid:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {bands.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.12 }}
                style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem' }}
              >
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: b.color, flexShrink: 0 }} />
                <span style={{ fontWeight: 600, color: 'var(--text-heading)', minWidth: 110 }}>{b.label}</span>
                <span style={{ color: 'var(--text-muted)' }}>{b.note}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
