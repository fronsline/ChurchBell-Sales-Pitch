import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ShieldEnergyIcon, UserShield01Icon, Audit01Icon, Shield01Icon,
  Building06Icon, Key01Icon, SquareLock02Icon, UserCheck01Icon, ShieldKeyIcon, SmartPhone01Icon,
  CheckmarkBadge01Icon, Download01Icon, LocationUser04Icon, Clock01Icon, Alert01Icon, Notification01Icon,
  LockKeyIcon, CloudServerIcon, DatabaseSyncIcon, FolderLibraryIcon, MoneyNotFoundIcon, CloudUploadIcon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';

// All 14 promises, organised into three plain-language themes, each line with its own icon
const groups = [
  {
    icon: UserShield01Icon, title: 'Who Gets In',
    items: [
      { icon: Building06Icon, t: 'One church can never see another church\'s data' },
      { icon: Key01Icon, t: 'Login by OTP, never passwords, so nothing is shared or stolen' },
      { icon: SquareLock02Icon, t: 'Role-based access, so no access means no entry' },
      { icon: UserCheck01Icon, t: 'Church & diocese admins fully own their own data' },
      { icon: ShieldKeyIcon, t: 'Brute-force and bot logins are rate-limited and blocked' },
      { icon: SmartPhone01Icon, t: 'Review your active devices and sign them out any time' },
    ],
  },
  {
    icon: Audit01Icon, title: 'Everything Is Watched',
    items: [
      { icon: CheckmarkBadge01Icon, t: 'Every login & change recorded, and tamper-proof' },
      { icon: Download01Icon, t: 'Downloads are tracked: who exported what, and where' },
      { icon: LocationUser04Icon, t: 'Login IP recorded; sign-ins from unusual places flagged' },
      { icon: Notification01Icon, t: 'A new device or location raises an instant alert' },
      { icon: Clock01Icon, t: 'Auto logout when idle' },
      { icon: Alert01Icon, t: 'Lockout after repeated wrong OTP attempts' },
    ],
  },
  {
    icon: Shield01Icon, title: 'Your Data Is Safe',
    items: [
      { icon: LockKeyIcon, t: 'Encrypted both in transit and at rest' },
      { icon: CloudServerIcon, t: 'Database locked in a private network, reachable only via secure tunnel' },
      { icon: DatabaseSyncIcon, t: 'Daily backups, recoverable for 30 days' },
      { icon: CloudUploadIcon, t: 'An off-site recovery copy is kept in a second region' },
      { icon: FolderLibraryIcon, t: 'Nothing is ever truly deleted' },
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
            Enterprise-grade security, built in
          </span>
        </div>
      </FadeUpText>

      <FadeUpText delay={0.12}>
        <h2 style={{ marginBottom: 8 }}>
          Security You Can <span className="gradient-text">Stake the Diocese On</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 34, color: 'var(--text-muted)', fontSize: '0.98rem', maxWidth: 720 }}>
          The same standards banks and hospitals run on, in plain language.
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

                {/* items — distributed to fill the full card height (balanced across cards) */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 16 }}>
                  {g.items.map((it) => (
                    <div key={it.t} style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
                      <span style={{
                        width: 38, height: 38, borderRadius: 11, flexShrink: 0,
                        background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <HugeiconsIcon icon={it.icon} size={20} color="#7367F0" strokeWidth={1.7} />
                      </span>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>{it.t}</span>
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
