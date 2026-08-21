import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ChartIncreaseIcon, Calculator01Icon, ReceiptIndianRupeeIcon,
  WhatsappIcon, CheckListIcon, Money01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';

// A 500-member parish, per year. Illustrative estimates.
const savings = [
  {
    icon: ReceiptIndianRupeeIcon,
    title: 'Fewer defaulters, better collection',
    sub: 'Auto statements & defaulter lists recover subscriptions that used to slip through',
    amount: 'XXXXX',
  },
  {
    icon: Calculator01Icon,
    title: 'Accounting & audit time',
    sub: 'Books always closed and audit ready. Saves an auditor at about ₹5,000 a month',
    amount: '₹60,000',
  },
  {
    icon: WhatsappIcon,
    title: 'Paperless receipts & statements',
    sub: 'WhatsApp receipts, digital statements & subscription cards. No printing or postage',
    amount: '₹18,000',
  },
  {
    icon: CheckListIcon,
    title: 'Office & record-keeping hours',
    sub: 'Members, masters & registers maintained once. No duplicate manual registers',
    amount: '₹18,000',
  },
];

function PayCard({ badge, badgeCol, amount, note, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.5 }}
      style={{ padding: '14px 18px', background: 'white', border: '1.5px solid var(--line)', borderRadius: 16, boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}
    >
      <span style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.05em', color: badgeCol, background: `${badgeCol}18`, padding: '3px 9px', borderRadius: 100 }}>{badge}</span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 9 }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-heading)' }}>{amount}</span>
        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>/ year</span>
      </div>
      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 2 }}>{note}</div>
    </motion.div>
  );
}

export default function DioceseROI() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.05}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 10,
          padding: '6px 15px', borderRadius: 100, background: 'var(--primary-bg)',
        }}>
          <HugeiconsIcon icon={ChartIncreaseIcon} size={15} color="#7367F0" strokeWidth={1.9} />
          <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.06em' }}>THE ROI · WHAT A CHURCH GAINS</span>
        </div>
      </FadeUpText>
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 6 }}>
          The Software That <span className="gradient-text">Pays for Itself</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.18}>
        <p style={{ marginBottom: 18, color: 'var(--text-muted)', maxWidth: 780, fontSize: '0.95rem' }}>
          Take a single <strong>500-member parish</strong> (about ₹36,00,000 a year in income). Here is the yearly math:
          what ChurchBell costs, against what it puts back in the box.
        </p>
      </FadeUpText>

      <div style={{ display: 'grid', gridTemplateColumns: '330px 1fr', gap: 22, width: '100%', maxWidth: 1060, alignItems: 'start' }}>
        {/* Left column: what you pay */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <FadeUpText delay={0.26}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
              <HugeiconsIcon icon={Calculator01Icon} size={16} color="var(--text-muted)" strokeWidth={1.8} />
              <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.07em', color: 'var(--text-muted)' }}>WHAT YOU PAY</span>
            </div>
          </FadeUpText>
          <PayCard badge="OPTION 1 · DIGITAL FUND" badgeCol="#7367F0" amount="₹36,000" note="≈ 1% of the church's income" delay={0.32} />
          <PayCard badge="OPTION 2 · PER-MEMBER" badgeCol="#00A3B4" amount="₹30,000" note="₹5 / member × 500 × 12 (₹3 ChurchBell + ₹2 diocese)" delay={0.4} />
        </div>

        {/* Right column: what you save */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34, duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '12px 20px', background: 'linear-gradient(135deg, #38D98A 0%, #1Fae68 100%)', borderRadius: 14, boxShadow: 'var(--shadow-md)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
              <HugeiconsIcon icon={Money01Icon} size={26} color="white" strokeWidth={1.7} />
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'white' }}>What ChurchBell saves you</span>
            </div>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>₹96,000+ <span style={{ fontSize: '0.78rem', fontWeight: 600, opacity: 0.9 }}>/ year</span></span>
          </motion.div>

          <StaggerContainer delay={0.5} staggerDelay={0.1} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {savings.map((s) => (
              <StaggerItem key={s.title}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '10px 16px', background: 'white', border: '1px solid var(--line)', borderRadius: 12, boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <HugeiconsIcon icon={s.icon} size={20} color="#7367F0" strokeWidth={1.7} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-heading)' }}>{s.title}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: 1.35 }}>{s.sub}</div>
                  </div>
                  <span style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--success)', flexShrink: 0 }}>{s.amount}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Net result */}
      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.5 }}
        style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap', justifyContent: 'center', padding: '14px 26px', background: 'var(--primary-bg)', borderRadius: 14, marginTop: 16, maxWidth: 1060 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1, minWidth: 340 }}>
          <HugeiconsIcon icon={ChartIncreaseIcon} size={24} color="#28C76F" strokeWidth={1.8} style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-heading)', margin: 0, lineHeight: 1.5 }}>
            Even before counting recovered collections, ChurchBell saves about <strong>₹96,000 a year</strong>,
            against a cost of <strong>₹30,000 to ₹36,000</strong>. The church still comes out
            <strong style={{ color: 'var(--primary)' }}> ₹60,000 or more ahead</strong>, every single year.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingLeft: 22, borderLeft: '2px solid rgba(115, 103, 240, 0.22)' }}>
          <span className="gradient-text" style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1 }}>2X+</span>
          <span style={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.09em', color: 'var(--text-muted)', marginTop: 3 }}>VALUE BACK, EVERY YEAR</span>
        </div>
      </motion.div>
    </div>
  );
}
