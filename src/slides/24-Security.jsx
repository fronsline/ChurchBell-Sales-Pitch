import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Shield01Icon, Key01Icon, SquareLock02Icon, CloudServerIcon, CloudUploadIcon,
  UserShield01Icon, Audit01Icon, Download01Icon, LocationUser04Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';

const cards = [
  { icon: Shield01Icon, title: 'One church can\'t see another', desc: 'Each church\'s data is invisible to every other church.' },
  { icon: Key01Icon, title: 'Login by OTP, not passwords', desc: 'Nothing to share, nothing to steal, nothing to forget.' },
  { icon: SquareLock02Icon, title: 'No access, no entry', desc: 'People are given exactly the access they need, and nothing more.' },
  { icon: CloudServerIcon, title: 'Locked private network', desc: 'The database sits in a sealed room, reachable only through a secure tunnel.' },
  { icon: CloudUploadIcon, title: 'Daily backups · 30-day recall', desc: 'A fresh copy every day, recoverable for a full month.' },
  { icon: UserShield01Icon, title: 'You own your data', desc: 'Church and diocese admins keep full control of their own records.' },
  { icon: Audit01Icon, title: 'Every action recorded', desc: 'Every login and change is logged, and the log can\'t be secretly altered.' },
  { icon: Download01Icon, title: 'Downloads are tracked', desc: 'We log who exported what, and from which device.' },
  { icon: LocationUser04Icon, title: 'Login-location alerts', desc: 'The login IP is recorded; sign-ins from unusual places raise a warning.' },
];

export default function Security() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          Your Data: <span className="gradient-text">Locked Down, Always Watched</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 30, color: 'var(--text-muted)', maxWidth: 620 }}>
          Enterprise-grade security, in plain language. Nine promises about how your information is kept safe.
        </p>
      </FadeUpText>

      <StaggerContainer
        delay={0.3}
        staggerDelay={0.07}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 1000, width: '100%' }}
      >
        {cards.map((c) => (
          <StaggerItem key={c.title}>
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: 13, height: '100%',
              padding: '16px 18px', background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(20px)',
              border: '1px solid var(--line)', borderRadius: 'var(--radius)', textAlign: 'left',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 11, flexShrink: 0,
                background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <HugeiconsIcon icon={c.icon} size={21} color="#7367F0" strokeWidth={1.7} />
              </div>
              <div>
                <h3 style={{ fontSize: '0.86rem', margin: 0, marginBottom: 3, lineHeight: 1.3 }}>{c.title}</h3>
                <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.45 }}>{c.desc}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Footer strip — extra assurances */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        style={{
          marginTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10,
          maxWidth: 1000,
        }}
      >
        {[
          'Encrypted in transit & at rest',
          'Auto logout when idle',
          'Lockout on repeated wrong OTP',
          'Nothing is ever truly deleted',
          'We never sell your data',
        ].map((t) => (
          <span key={t} style={{
            fontSize: '0.74rem', fontWeight: 600, color: 'var(--primary)',
            padding: '7px 14px', background: 'var(--primary-bg)', borderRadius: 100,
          }}>
            🔒 {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
