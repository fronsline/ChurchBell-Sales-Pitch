import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { ServerStack01Icon, CloudServerIcon, CancelCircleIcon, Tick01Icon, BankIcon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';

const onPrem = [
  'One fire, flood or theft and the records are gone for good',
  'Power or the server fails, and the whole office stops',
  'A PC anyone can access, and someone must keep it patched',
  'Lakhs upfront for a server, UPS and AC, plus IT staff every year',
  'Works only inside the office walls',
  'Outgrow it and you must buy bigger hardware',
];

const cloud = [
  'Backed up every night, with 30 days of copies kept safely in storage',
  'Professionally run servers, watched by automatic health alarms day and night',
  'Encrypted connections, and no office PC for anyone to tamper with',
  'No hardware to buy, just a small predictable monthly fee',
  'Reachable from any parish, any device, anytime',
  'Grows with the diocese, with no new hardware to buy',
];

function Card({ side, items }) {
  const isCloud = side === 'cloud';
  const accent = isCloud ? 'var(--primary)' : '#EA5455';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100%',
      background: 'white', border: `1px solid ${isCloud ? '#D6D0FF' : '#F6D5D5'}`,
      borderRadius: 20, boxShadow: 'var(--shadow-md)', overflow: 'hidden',
    }}>
      {/* header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 13, padding: '16px 22px',
        background: isCloud ? 'var(--gradient-primary)' : 'rgba(234,84,85,0.08)',
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12, flexShrink: 0,
          background: isCloud ? 'rgba(255,255,255,0.2)' : 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <HugeiconsIcon icon={isCloud ? CloudServerIcon : ServerStack01Icon} size={24} color={isCloud ? 'white' : '#EA5455'} strokeWidth={1.7} />
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '1.08rem', fontWeight: 800, color: isCloud ? 'white' : 'var(--text-heading)' }}>
            {isCloud ? 'ChurchBell on Cloud' : 'On-Premise Server'}
          </div>
          <div style={{ fontSize: '0.74rem', color: isCloud ? 'rgba(255,255,255,0.85)' : 'var(--text-muted)' }}>
            {isCloud ? 'Managed for you on AWS, in Mumbai' : 'A computer in the church office'}
          </div>
        </div>
      </div>

      {/* items */}
      <div style={{ padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1, justifyContent: 'space-between' }}>
        {items.map((it) => (
          <div key={it} style={{ display: 'flex', alignItems: 'flex-start', gap: 11, textAlign: 'left' }}>
            <HugeiconsIcon icon={isCloud ? Tick01Icon : CancelCircleIcon} size={19} color={accent} strokeWidth={2} style={{ marginTop: 1, flexShrink: 0 }} />
            <span style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>{it}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhyCloud() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          Why the Cloud, <span className="gradient-text">Not a Server in the Office?</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 30, color: 'var(--text-muted)', maxWidth: 720 }}>
          The same question every institution faces. Here is why the cloud is the safer, simpler choice
          for a whole diocese.
        </p>
      </FadeUpText>

      <StaggerContainer
        delay={0.35}
        staggerDelay={0.15}
        style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 22, alignItems: 'stretch', maxWidth: 1080, width: '100%' }}
      >
        <StaggerItem><Card side="onprem" items={onPrem} /></StaggerItem>
        <StaggerItem>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%', background: 'var(--gradient-primary)',
              color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: '0.95rem', boxShadow: 'var(--shadow-glow)',
            }}>VS</div>
          </div>
        </StaggerItem>
        <StaggerItem><Card side="cloud" items={cloud} /></StaggerItem>
      </StaggerContainer>

      {/* closing analogy */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        style={{
          display: 'flex', alignItems: 'center', gap: 14, marginTop: 26, maxWidth: 980,
          padding: '16px 26px', background: 'var(--primary-bg)', borderRadius: 16,
        }}
      >
        <div style={{
          width: 46, height: 46, borderRadius: 12, flexShrink: 0, background: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <HugeiconsIcon icon={BankIcon} size={24} color="#7367F0" strokeWidth={1.6} />
        </div>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-heading)', margin: 0, textAlign: 'left', lineHeight: 1.55 }}>
          On-premise is locking your records in a cupboard at the office. The cloud is a{' '}
          <strong style={{ color: 'var(--primary)' }}>bank vault</strong>: safer, always open, and watched around the clock.
        </p>
      </motion.div>
    </div>
  );
}
