import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Coins01Icon, Briefcase01Icon, WalletAdd01Icon, CloudServerIcon, JusticeScale01Icon, CheckmarkBadge01Icon, Calculator01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';

const existingFunds = [
  { icon: Coins01Icon, label: 'Gratuity Fund' },
  { icon: Briefcase01Icon, label: 'Harness Fund' },
  { icon: WalletAdd01Icon, label: 'Medical Fund' },
];

const benefits = [
  { icon: CheckmarkBadge01Icon, title: 'Familiar', desc: 'Collected exactly like the Medical & Harness funds, through the assessment. Nothing new to administer.' },
  { icon: JusticeScale01Icon, title: 'Fair', desc: 'Scales with each church\'s income, no counting heads. Bigger churches naturally contribute more.' },
  { icon: CheckmarkBadge01Icon, title: 'All-inclusive', desc: 'Covers the platform, the diocese app, support and updates. Onboarding stays free.' },
];

export default function DiocesePricingOption2() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.05}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12,
          padding: '6px 15px', borderRadius: 100, background: 'var(--primary-bg)',
        }}>
          <HugeiconsIcon icon={Calculator01Icon} size={15} color="#7367F0" strokeWidth={1.9} />
          <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.06em' }}>OPTION 2 · THE DIGITAL FUND</span>
        </div>
      </FadeUpText>

      <FadeUpText delay={0.12}>
        <h2 style={{ marginBottom: 8 }}>
          A Fund That <span className="gradient-text">Fits How the Diocese Works</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 26, color: 'var(--text-muted)', maxWidth: 760, fontSize: '0.96rem' }}>
          Every church already contributes to common diocesan funds. The Digital Fund is simply one more.
        </p>
      </FadeUpText>

      {/* existing funds + Digital Fund */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 26 }}>
        {existingFunds.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 + i * 0.08, duration: 0.45 }}
            style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '10px 16px', background: 'white', border: '1px solid var(--line)', borderRadius: 100, boxShadow: 'var(--shadow-sm)' }}
          >
            <HugeiconsIcon icon={f.icon} size={18} color="var(--text-muted)" strokeWidth={1.6} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{f.label}</span>
          </motion.div>
        ))}
        <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-muted)' }}>+</span>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.5, type: 'spring', stiffness: 200 }}
          style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 10, padding: '11px 20px', background: 'var(--gradient-primary)', borderRadius: 100, boxShadow: 'var(--shadow-glow)' }}
        >
          <HugeiconsIcon icon={CloudServerIcon} size={20} color="white" strokeWidth={1.7} />
          <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'white' }}>Digital Fund</span>
          <span style={{ fontSize: '0.56rem', fontWeight: 800, color: 'var(--primary)', background: 'white', padding: '2px 7px', borderRadius: 100 }}>NEW</span>
        </motion.div>
      </div>

      {/* The headline statement */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}
        style={{ marginBottom: 24, maxWidth: 860 }}
      >
        <p style={{ fontSize: '1.15rem', color: 'var(--text-heading)', margin: 0, lineHeight: 1.5, fontWeight: 600 }}>
          Each church contributes <span style={{ color: 'var(--primary)', fontWeight: 800 }}>1–2% of its income</span> to the Digital Fund,
          which runs ChurchBell for the entire diocese.
        </p>
      </motion.div>

      {/* benefits */}
      <StaggerContainer delay={0.95} staggerDelay={0.14} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, maxWidth: 1000, width: '100%' }}>
        {benefits.map((b) => (
          <StaggerItem key={b.title}>
            <div style={{ height: '100%', padding: '18px 20px', background: 'white', border: '1px solid var(--line)', borderRadius: 16, boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 8 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <HugeiconsIcon icon={b.icon} size={20} color="white" strokeWidth={1.7} />
                </div>
                <h3 style={{ fontSize: '1.02rem', margin: 0 }}>{b.title}</h3>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{b.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* example */}
      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.45, duration: 0.5 }}
        style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 18, padding: '13px 24px', background: 'var(--primary-bg)', borderRadius: 14 }}
      >
        <HugeiconsIcon icon={Coins01Icon} size={22} color="#7367F0" strokeWidth={1.7} style={{ flexShrink: 0 }} />
        <p style={{ fontSize: '0.9rem', color: 'var(--text-heading)', margin: 0 }}>
          For example, a church with <strong>₹10,00,000</strong> annual income contributes about
          <strong style={{ color: 'var(--primary)' }}> ₹10,000–20,000 a year</strong>.
        </p>
      </motion.div>
    </div>
  );
}
