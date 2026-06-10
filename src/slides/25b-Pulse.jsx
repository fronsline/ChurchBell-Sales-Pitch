import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  DashboardSquare01Icon, SmartPhone01Icon, Activity01Icon, Target01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const pillars = [
  { icon: Activity01Icon, label: 'Data Quality', sub: 'How complete your records are', score: 86, weight: '50%' },
  { icon: DashboardSquare01Icon, label: 'Engagement', sub: 'How actively features are used', score: 74, weight: '30%' },
  { icon: SmartPhone01Icon, label: 'Mobile Readiness', sub: 'Who can actually use the app', score: 79, weight: '20%' },
];

const actions = [
  '14 family heads are missing a mobile number — unblock app access',
  'Subscription payers missing key fields — fix to enable receipts',
  'Donations module activity dropped 40% — schedule a refresher',
];

export default function Pulse() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 6 }}>
          Pulse — <span className="gradient-text">Your Church's Health Score</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 32, color: 'var(--text-muted)', maxWidth: 640 }}>
          One number tells you how healthy your data is. Then it tells you exactly what to fix — in priority order.
        </p>
      </FadeUpText>

      <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 1050 }}>
        {/* Score ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ position: 'relative', width: 200, height: 200, flexShrink: 0 }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="86" fill="none" stroke="var(--line)" strokeWidth="16" />
            <motion.circle
              cx="100" cy="100" r="86" fill="none" stroke="url(#pulseGrad)" strokeWidth="16"
              strokeLinecap="round" transform="rotate(-90 100 100)"
              strokeDasharray={2 * Math.PI * 86}
              initial={{ strokeDashoffset: 2 * Math.PI * 86 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 86 * (1 - 0.82) }}
              transition={{ duration: 1.4, delay: 0.7, ease: 'easeOut' }}
            />
            <defs>
              <linearGradient id="pulseGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8D82FD" />
                <stop offset="100%" stopColor="#584CDB" />
              </linearGradient>
            </defs>
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-heading)', lineHeight: 1 }}>82</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>/ 100 Pulse</span>
          </div>
        </motion.div>

        {/* Pillars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, minWidth: 300 }}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 14, padding: '12px 18px',
                background: 'rgba(255,255,255,0.8)', border: '1px solid var(--line)',
                borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <HugeiconsIcon icon={p.icon} size={22} color="var(--primary)" strokeWidth={1.6} />
              </div>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-heading)' }}>{p.label}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{p.sub}</div>
                <div style={{ height: 6, background: 'var(--line)', borderRadius: 4, marginTop: 6, overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${p.score}%` }}
                    transition={{ duration: 1, delay: 0.9 + i * 0.15 }}
                    style={{ height: '100%', background: 'var(--gradient-primary)', borderRadius: 4 }}
                  />
                </div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary)' }}>{p.score}</div>
                <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>weight {p.weight}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Action queue */}
      <GlassCard delay={1.3} style={{ maxWidth: 1000, width: '100%', marginTop: 28, padding: '18px 24px', height: 'auto', flex: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <HugeiconsIcon icon={Target01Icon} size={20} color="var(--primary)" strokeWidth={1.6} />
          <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-heading)' }}>Action Queue</span>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>— the most impactful fixes this week</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {actions.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.5 + i * 0.12 }}
              style={{ display: 'flex', gap: 10, alignItems: 'flex-start', textAlign: 'left' }}
            >
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--primary-bg)', color: 'var(--primary)', fontWeight: 700, fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{a}</span>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
