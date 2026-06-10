import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Coins01Icon, Building06Icon, Briefcase01Icon, Baby01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText } from '../components/AnimatedText';

const pillars = [
  { icon: Coins01Icon, label: 'Assessment' },
  { icon: Building06Icon, label: 'Property & Land' },
  { icon: Briefcase01Icon, label: 'Staff & HR' },
  { icon: Baby01Icon, label: "Children's Ministry" },
];

export default function DioceseClose() {
  return (
    <div className="slide-center" style={{ position: 'relative' }}>
      {/* Full-screen background image */}
      <div
        style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundImage: 'url(/images/ai/diocese-close.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0, pointerEvents: 'none',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.78)' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          background: 'rgba(255, 255, 255, 0.72)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: 24, padding: '48px 64px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1,
          boxShadow: '0 8px 32px rgba(115, 103, 240, 0.12)', maxWidth: 860,
        }}
      >
        <FadeUpText delay={0.3}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: 14, textAlign: 'center' }}>
            Let us build this <span className="gradient-text">for your diocese.</span>
          </h1>
        </FadeUpText>

        <FadeUpText delay={0.5}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.12rem', marginBottom: 36, textAlign: 'center', maxWidth: 620 }}>
            On the same platform your churches already trust — one connected, transparent,
            accountable diocese.
          </p>
        </FadeUpText>

        {/* Pillars */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.7 + i * 0.12 }}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                padding: '18px 24px', background: 'rgba(255,255,255,0.9)',
                border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', minWidth: 150,
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HugeiconsIcon icon={p.icon} size={24} color="var(--primary)" strokeWidth={1.6} />
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)' }}>{p.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          style={{ marginTop: 36, color: 'var(--primary)', fontWeight: 700, fontSize: '1.05rem', textAlign: 'center' }}
        >
          Designed with the diocese, for the diocese.
        </motion.p>
      </motion.div>
    </div>
  );
}
