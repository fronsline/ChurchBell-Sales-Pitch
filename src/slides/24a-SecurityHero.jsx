import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ShieldEnergyIcon, UserShield01Icon, Audit01Icon, Shield01Icon,
  Building06Icon, FingerPrintIcon, UserLock01Icon, Calendar01Icon, ShieldKeyIcon, LaptopIcon,
  DocumentValidationIcon, Download01Icon, Notification03Icon, Alert01Icon, Mail01Icon, Clock01Icon,
  MapsLocation01Icon, LockKeyIcon, DatabaseSyncIcon, DatabaseExportIcon, MoneyNotFoundIcon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';

// Eighteen promises, organised into three plain-language themes, each line with its own icon.
// Every line is checked against what the product actually does today.
const groups = [
  {
    icon: UserShield01Icon, title: 'Who Gets In',
    items: [
      { icon: Building06Icon, t: 'One church can never see another church\'s data' },
      { icon: FingerPrintIcon, t: 'Sign in with a one-time code or a passkey. No passwords to steal' },
      { icon: UserLock01Icon, t: 'Each person gets Off, View or Manage for each area of the church' },
      { icon: Calendar01Icon, t: 'Access can end on a set date, or be paused and resumed' },
      { icon: ShieldKeyIcon, t: 'Repeated wrong codes lock the login; bots are rate-limited' },
      { icon: LaptopIcon, t: 'See every signed-in phone and computer, and sign any of them out' },
    ],
  },
  {
    icon: Audit01Icon, title: 'Everything Is Recorded',
    items: [
      { icon: DocumentValidationIcon, t: 'Every change goes into a tamper-evident log, checked every night' },
      { icon: Download01Icon, t: 'Every download and export is recorded: who, what and when' },
      { icon: Notification03Icon, t: 'A sign-in from a new device or place alerts you at once' },
      { icon: Alert01Icon, t: 'Repeated failed sign-ins on your account alert you too' },
      { icon: Mail01Icon, t: 'Critical changes alert the admins you choose, plus a weekly summary' },
      { icon: Clock01Icon, t: 'Idle web sessions are signed out automatically' },
    ],
  },
  {
    icon: Shield01Icon, title: 'Your Data Is Safe',
    items: [
      { icon: MapsLocation01Icon, t: 'Hosted in India, on Amazon Web Services in Mumbai' },
      { icon: LockKeyIcon, t: 'Every connection is encrypted (HTTPS); login codes are never stored as plain text' },
      { icon: DatabaseSyncIcon, t: 'The database is backed up every night and kept for 30 days' },
      { icon: ShieldKeyIcon, t: 'Backups are stored encrypted, and a restore has been tested' },
      { icon: DatabaseExportIcon, t: 'Download all your church\'s data any time, in Excel, CSV or JSON' },
      { icon: MoneyNotFoundIcon, t: 'We never sell your data' },
    ],
  },
];

export default function SecurityHero() {
  return (
    <div className="slide-center">
      {/* top badge */}
      <FadeUpText delay={0.05}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14,
          padding: '7px 16px', borderRadius: 100, background: 'var(--primary-bg)',
        }}>
          <HugeiconsIcon icon={ShieldEnergyIcon} size={17} color="#7367F0" strokeWidth={1.8} />
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.02em' }}>
            Security built in, from day one
          </span>
        </div>
      </FadeUpText>

      <FadeUpText delay={0.12}>
        <h2 style={{ marginBottom: 8 }}>
          Security You Can <span className="gradient-text">Trust Every Day</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 34, color: 'var(--text-muted)', fontSize: '0.98rem', maxWidth: 720 }}>
          What keeps your church's records safe, in plain language.
        </p>
      </FadeUpText>

      <StaggerContainer
        delay={0.32}
        staggerDelay={0.16}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 26, maxWidth: 1180, width: '100%', alignItems: 'stretch' }}
      >
        {groups.map((g) => (
          <StaggerItem key={g.title}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              style={{
                height: '100%', display: 'flex', flexDirection: 'column',
                background: 'white', border: '1px solid var(--line)', borderRadius: 20,
                boxShadow: 'var(--shadow-md)', overflow: 'hidden',
              }}
            >
              {/* gradient accent bar */}
              <div style={{ height: 5, background: 'var(--gradient-primary)' }} />

              <div style={{ padding: '26px 24px', display: 'flex', flexDirection: 'column', flex: 1, textAlign: 'left' }}>
                {/* header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                    background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 6px 18px rgba(115,103,240,0.3)',
                  }}>
                    <HugeiconsIcon icon={g.icon} size={26} color="white" strokeWidth={1.7} />
                  </div>
                  <h3 style={{ fontSize: '1.16rem', margin: 0, color: 'var(--text-heading)' }}>{g.title}</h3>
                </div>

                {/* items: distributed to fill the full card height (balanced across cards) */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 14 }}>
                  {g.items.map((it) => (
                    <div key={it.t} style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
                      <span style={{
                        width: 38, height: 38, borderRadius: 11, flexShrink: 0,
                        background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <HugeiconsIcon icon={it.icon} size={20} color="#7367F0" strokeWidth={1.7} />
                      </span>
                      <span style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{it.t}</span>
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
