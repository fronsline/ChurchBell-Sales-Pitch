import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ChurchIcon, BookOpen01Icon, Coins01Icon, Building06Icon, JusticeScale01Icon, UserLock01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText } from '../components/AnimatedText';

const steps = [
  { icon: BookOpen01Icon, title: 'Set the standard ledger chart', desc: 'Start from a ready-made chart or your own; every church gets the same income and expense codes', tag: 'Required' },
  { icon: ChurchIcon, title: 'Onboard each church', desc: 'One form sets up the church, its ledgers, cash and bank, a bill book and its first admin', tag: 'Required' },
  { icon: Coins01Icon, title: 'Import assessment history', desc: 'Past years and arrears from Excel, so every church\'s balance is right from day one', tag: 'Required' },
  { icon: UserLock01Icon, title: 'Give officers access', desc: 'Each officer sees only the screens their work needs, on the web and the phone', tag: 'Required' },
  { icon: Building06Icon, title: 'Institutions and staff', desc: 'Schools, colleges and offices, with their staff imported from Excel', tag: 'Optional' },
  { icon: JusticeScale01Icon, title: 'Legal cases and property', desc: 'Open court cases with their next dates, and the land and buildings register', tag: 'Optional' },
];

export default function OnboardingDiocese() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          Onboarding the <span className="gradient-text">Diocese</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 28, color: 'var(--text-muted)', maxWidth: 620 }}>
          A one-time setup, and we do the heavy lifting with you. Four essentials get you live, and
          two more enrich the picture whenever you&rsquo;re ready.
        </p>
      </FadeUpText>

      <div style={{ position: 'relative', maxWidth: 760, width: '100%' }}>
        {/* vertical spine */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          style={{
            position: 'absolute', top: 26, bottom: 26, left: 25, width: 2,
            background: 'var(--line)', transformOrigin: 'top', zIndex: 0,
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {steps.map((s, i) => {
            const optional = s.tag === 'Optional';
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                style={{ display: 'flex', alignItems: 'center', gap: 18, position: 'relative', zIndex: 1 }}
              >
                {/* number node */}
                <div style={{
                  width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
                  background: optional ? 'white' : 'var(--gradient-primary)',
                  border: optional ? '2px dashed var(--primary)' : '3px solid white',
                  boxShadow: optional ? 'none' : '0 4px 14px rgba(115,103,240,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <HugeiconsIcon icon={s.icon} size={24} color={optional ? 'var(--primary)' : 'white'} strokeWidth={1.6} />
                </div>

                {/* card */}
                <div style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                  padding: '12px 20px', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)',
                  border: '1px solid var(--line)', borderRadius: 'var(--radius)', textAlign: 'left',
                }}>
                  <div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                      <span style={{ color: 'var(--primary)', marginRight: 8 }}>{i + 1}</span>{s.title}
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '2px 0 0' }}>{s.desc}</p>
                  </div>
                  <span className="tag" style={{
                    flexShrink: 0, fontSize: '0.6rem',
                    background: optional ? 'var(--bg-shade1)' : '#E8FFF0',
                    color: optional ? 'var(--text-muted)' : 'var(--success)',
                  }}>
                    {s.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
