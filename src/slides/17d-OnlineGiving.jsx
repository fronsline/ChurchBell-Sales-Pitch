import { motion } from 'framer-motion';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import { HugeiconsIcon } from '@hugeicons/react';
import { SmartPhone01Icon, BankIcon, CheckmarkBadge01Icon, Calendar01Icon, Tick01Icon } from '@hugeicons-pro/core-stroke-rounded';

const steps = [
  {
    icon: SmartPhone01Icon,
    title: 'The member taps Give',
    text: 'In the ChurchBell app: an offering, or the subscription months still due, for the whole family.',
  },
  {
    icon: BankIcon,
    title: 'Their UPI app pays your church',
    text: 'Your church\'s own UPI ID and the amount are filled in. The money goes straight into your bank account.',
  },
  {
    icon: CheckmarkBadge01Icon,
    title: 'You check the bank, tap Accept',
    text: 'The entry is already in your books. On Accept, the official receipt goes out to the member.',
  },
];

const tags = ['No payment gateway', 'No KYC paperwork', 'Money never passes through ChurchBell', 'A ₹1 test before members can pay'];

const purposes = ['Thanks Offering', 'Building Fund', 'Harvest Festival'];

export default function OnlineGiving() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Online Giving: <span className="gradient-text">Straight to Your Church's UPI</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 24, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            Members who are away, or who simply prefer their phone, can pay subscriptions and offerings by UPI.
          </p>
        </FadeUpText>

        <StaggerContainer delay={0.35} staggerDelay={0.15} className="flex-col gap-md">
          {steps.map((s, i) => (
            <StaggerItem key={s.title}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, textAlign: 'left' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                  background: 'var(--gradient-primary)', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem',
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: 2, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <HugeiconsIcon icon={s.icon} size={18} color="#7367F0" /> {s.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', margin: 0, lineHeight: 1.55 }}>{s.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUpText delay={1.1}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24 }}>
            {tags.map((t) => (
              <span key={t} className="tag tag-success" style={{ fontSize: '0.72rem' }}>{t}</span>
            ))}
          </div>
        </FadeUpText>
      </div>

      <div className="slide-right">
        <motion.div
          className="phone-mockup"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="phone-screen" style={{ padding: '40px 14px 14px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-heading)', padding: '0 4px' }}>Give</div>

            {/* Subscription card */}
            <div style={{
              background: 'var(--gradient-primary)', color: 'white', borderRadius: 14, padding: '12px 14px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: '0.82rem' }}>
                <HugeiconsIcon icon={Calendar01Icon} size={16} color="white" /> Pay subscription
              </div>
              <div style={{ fontSize: '0.68rem', opacity: 0.85, marginTop: 4 }}>Months still due for your family</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                {['Aug', 'Sep', 'Oct'].map((m, i) => (
                  <span key={m} style={{
                    fontSize: '0.62rem', fontWeight: 600, padding: '3px 8px', borderRadius: 6,
                    background: i === 0 ? 'rgba(255,255,255,0.25)' : 'white',
                    color: i === 0 ? 'white' : 'var(--primary)',
                  }}>
                    {i === 0 ? `${m} ✓` : m}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ fontSize: '0.68rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '4px 4px 0' }}>
              Offerings
            </div>
            {purposes.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                style={{
                  background: 'white', borderRadius: 12, padding: '10px 12px', border: '1px solid var(--line)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-heading)' }}>{p}</div>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'white', background: 'var(--primary)', borderRadius: 8, padding: '4px 10px' }}>
                  Pay
                </span>
              </motion.div>
            ))}

            {/* Status after paying */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              style={{
                marginTop: 'auto', background: '#E8FFF0', borderRadius: 12, padding: '10px 12px',
                display: 'flex', alignItems: 'flex-start', gap: 8,
              }}
            >
              <HugeiconsIcon icon={Tick01Icon} size={16} color="#28C76F" style={{ marginTop: 2, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--success)' }}>Confirmed by the church</div>
                <div style={{ fontSize: '0.64rem', color: 'var(--text-secondary)' }}>Thanks Offering · ₹1,000 · Your receipt is ready.</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
