import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  SecurityCheckIcon, PulseRectangle01Icon, DocumentValidationIcon, FingerPrintIcon, UserLock01Icon, Tick01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';

// Pillar 09 of the website / brochure: Trust & Oversight.
const cards = [
  {
    icon: PulseRectangle01Icon, title: 'Pulse',
    blurb: 'A weekly health score for your church.',
    points: [
      'A score out of 100 every Sunday: complete records, modules in use, members on the app',
      'See how you compare with churches of a similar size',
      'A polished PDF summary in your inbox on the 1st of every month',
    ],
  },
  {
    icon: DocumentValidationIcon, title: 'Audit Trail',
    blurb: 'Every change recorded, in plain sentences.',
    points: [
      'Who changed what, when and from where, plus the full history of any record',
      'Tamper-evident: each entry is sealed to the one before it, and checked every night',
      'Every download recorded; instant alerts on critical changes and a weekly summary',
    ],
  },
  {
    icon: FingerPrintIcon, title: 'Security & Devices',
    blurb: 'Every login kept safe.',
    points: [
      'Sign in with a one-time code or a passkey (fingerprint or face). No passwords',
      'See every phone and computer signed in, and sign out one or all of them',
      'An alert on a sign-in from a new device, and on repeated failed attempts',
    ],
  },
  {
    icon: UserLock01Icon, title: 'Access',
    blurb: 'Each person sees only what their role needs.',
    points: [
      'Off, View or Manage for each area of the church',
      'Ready-made roles such as Treasurer, Secretary, Pastor and Auditor',
      'Give access until a set date, with a reminder before it ends; pause and resume any time',
    ],
  },
];

export default function TrustOversight() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.05}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14,
          padding: '7px 16px', borderRadius: 100, background: 'var(--primary-bg)',
        }}>
          <HugeiconsIcon icon={SecurityCheckIcon} size={17} color="#7367F0" strokeWidth={1.8} />
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.02em' }}>
            Trust &amp; Oversight
          </span>
        </div>
      </FadeUpText>

      <FadeUpText delay={0.12}>
        <h2 style={{ marginBottom: 8 }}>
          Run Your Church <span className="gradient-text">With Confidence</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 30, color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 720 }}>
          See how your church is doing, who did what, and who can see what. All in one place.
        </p>
      </FadeUpText>

      <StaggerContainer
        delay={0.3}
        staggerDelay={0.14}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, maxWidth: 1120, width: '100%' }}
      >
        {cards.map((c) => (
          <StaggerItem key={c.title}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              style={{
                height: '100%', display: 'flex', gap: 18, padding: '22px 24px', textAlign: 'left',
                background: 'white', border: '1px solid var(--line)', borderRadius: 20, boxShadow: 'var(--shadow-md)',
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 6px 18px rgba(115,103,240,0.3)',
              }}>
                <HugeiconsIcon icon={c.icon} size={26} color="white" strokeWidth={1.7} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.12rem', margin: 0, color: 'var(--text-heading)' }}>{c.title}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--primary)', fontWeight: 600, margin: '3px 0 12px' }}>{c.blurb}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {c.points.map((pt) => (
                    <div key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                      <HugeiconsIcon icon={Tick01Icon} size={17} color="#28C76F" strokeWidth={2.2} style={{ marginTop: 2, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
