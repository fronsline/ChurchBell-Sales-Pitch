import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Home11Icon, Tick01Icon, LocationCheck01Icon, Note01Icon, ReceiptIndianRupeeIcon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  'Log every pastoral home visit: routine, birthday, anniversary, sick, bereavement, festival',
  'On the phone, the location is noted on its own for a quick check-in',
  'Notes for every visit, kept with the family',
  'Offering received? It becomes a proper receipt in the family head’s name',
  'Every family’s visit history on their profile',
  'Print a visit as PDF; export all visits to Excel',
];

const rows = [
  { icon: LocationCheck01Icon, label: 'Checked in', value: 'Anna Nagar, Chennai' },
  { icon: Note01Icon, label: 'Notes', value: 'Prayed for recovery after surgery' },
  { icon: ReceiptIndianRupeeIcon, label: 'Offertory', value: '₹ 500 · Receipt R-1043' },
];

export default function HouseVisit() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            House Visits: <span className="gradient-text">Every Visit Remembered</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 24, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            The pastor records a visit in seconds from the phone. The office sees it at once.
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

      <div className="slide-right">
        <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 420, padding: 0, overflow: 'hidden' }}>
          <div style={{
            background: 'var(--gradient-primary)', padding: '16px 24px', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <HugeiconsIcon icon={Home11Icon} size={18} color="white" strokeWidth={1.5} /> House Visit
            </span>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.65rem' }}>
              Sick visit
            </span>
          </div>

          <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--line)', textAlign: 'left' }}>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-heading)' }}>Mary Abraham &amp; family</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 2 }}>
              Visited by Rev. Samuel Jacob · 12 Oct 2026
            </div>
          </div>

          {rows.map((r, i) => (
            <motion.div
              key={r.label}
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 24px', borderBottom: '1px solid var(--line)', textAlign: 'left',
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.12 }}
            >
              <div style={{
                width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <HugeiconsIcon icon={r.icon} size={18} color="#7367F0" />
              </div>
              <div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{r.label}</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-heading)' }}>{r.value}</div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            style={{ padding: '12px 24px', display: 'flex', gap: 8 }}
          >
            <span className="tag tag-success" style={{ fontSize: '0.7rem' }}>Receipt in the books</span>
            <span className="tag tag-primary" style={{ fontSize: '0.7rem' }}>On the family&apos;s history</span>
          </motion.div>
        </GlassCard>
      </div>
    </div>
  );
}
