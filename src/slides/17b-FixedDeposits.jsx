import { motion } from 'framer-motion';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';
import { HugeiconsIcon } from '@hugeicons/react';
import { Tick01Icon, BankIcon, Notification03Icon } from '@hugeicons-pro/core-stroke-rounded';

const features = [
  'Every deposit in one register: bank, amount, rate, start and maturity',
  'Interest entered as a real receipt in your books, with TDS noted',
  'Reminders 30, 15, 7 and 1 day before maturity, to the people you choose',
  'Renew or close in a few clicks. A renewed deposit stays linked to the old one',
  'Deposit register and interest income reports, in PDF or Excel',
];

const deposits = [
  { bank: 'SBI, Anna Nagar', amount: '₹5,00,000', matures: '12 Nov 2026', status: 'Maturing soon', bg: '#FFF4E8', color: 'var(--warning)' },
  { bank: 'Indian Bank, T. Nagar', amount: '₹2,50,000', matures: '30 Mar 2027', status: 'Active', bg: 'var(--primary-bg)', color: 'var(--primary)' },
  { bank: 'Canara Bank, Vellore', amount: '₹1,00,000', matures: '01 Oct 2026', status: 'Matured', bg: '#E8FFF0', color: 'var(--success)' },
];

export default function FixedDeposits() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Fixed Deposits: <span className="gradient-text">Never Miss a Maturity</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 24, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            The church's deposits are often in a file, with a bank, in someone's memory. ChurchBell keeps them
            in one place and tells you before each one matures.
          </p>
        </FadeUpText>

        <StaggerContainer delay={0.35} staggerDelay={0.1} className="flex-col gap-md">
          {features.map((feat) => (
            <StaggerItem key={feat}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <HugeiconsIcon icon={Tick01Icon} size={18} color="var(--success)" strokeWidth={2} style={{ marginTop: 3, flexShrink: 0 }} />
                <p style={{ fontSize: '0.95rem', margin: 0 }}>{feat}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div className="slide-right" style={{ gap: 20 }}>
        <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 440, padding: 0, overflow: 'hidden' }}>
          <div style={{
            background: 'var(--gradient-primary)', padding: '14px 22px', color: 'white',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <HugeiconsIcon icon={BankIcon} size={20} color="white" />
            <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Fixed Deposit Register</span>
          </div>

          {deposits.map((d, i) => (
            <motion.div
              key={d.bank}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.12 }}
              style={{
                display: 'grid', gridTemplateColumns: '1.5fr 1fr auto', alignItems: 'center', gap: 10,
                padding: '12px 22px', borderBottom: i < deposits.length - 1 ? '1px solid var(--line)' : 'none',
                textAlign: 'left',
              }}
            >
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)' }}>{d.bank}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Matures {d.matures}</div>
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)', textAlign: 'right' }}>{d.amount}</span>
              <span className="tag" style={{ fontSize: '0.62rem', padding: '3px 8px', background: d.bg, color: d.color }}>
                {d.status}
              </span>
            </motion.div>
          ))}
        </GlassCard>

        {/* Reminder notification */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          style={{
            width: '100%', maxWidth: 440, display: 'flex', alignItems: 'flex-start', gap: 12,
            padding: '14px 18px', background: 'white', borderRadius: 14,
            border: '1px solid var(--line)', boxShadow: '0 8px 24px rgba(115, 103, 240, 0.12)', textAlign: 'left',
          }}
        >
          <div style={{
            width: 36, height: 36, borderRadius: 10, background: 'var(--primary-bg)', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <HugeiconsIcon icon={Notification03Icon} size={18} color="#7367F0" />
          </div>
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-heading)' }}>Fixed deposit maturing soon</div>
            <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Hi Treasurer, Building Fund FD (SBI, Anna Nagar) matures on 12 Nov 2026 (in 30 days). Maturity value ₹5,42,500.
            </div>
          </div>
        </motion.div>

        <FadeUpText delay={1.6}>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>
            Reminders come in the ChurchBell app, and on WhatsApp if your church switches it on.
          </p>
        </FadeUpText>
      </div>
    </div>
  );
}
