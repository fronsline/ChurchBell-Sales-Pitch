import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Building06Icon, Tick01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  'Catalog every property — land, shops, buildings, parsonage',
  'Divide into rentable units & assign tenants',
  'Auto-generate monthly rent invoices',
  'Collect rent — cash, UPI, bank, cheque; track partial & paid',
  'WhatsApp invoices & receipts straight to tenants',
  'Store deeds, agreements & insurance — track expiry',
];

const invoices = [
  { unit: 'Shop 1 — Main Rd', tenant: 'Raj Traders', amount: '12,000', status: 'Paid' },
  { unit: 'Office 2A', tenant: 'Stellar Infotech', amount: '18,000', status: 'Overdue' },
  { unit: 'Hall — Annex', tenant: 'Grace Events', amount: '8,500', status: 'Pending' },
  { unit: 'Shop 3 — Bazaar', tenant: 'Anand Stores', amount: '10,000', status: 'Paid' },
];

const statusColor = { Paid: 'var(--success)', Overdue: 'var(--alert)', Pending: 'var(--warning)' };

export default function Property() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Property & Rent — <span className="gradient-text">Income, Not Headache</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 24, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            Churches own shops, halls and land. ChurchBell turns that real estate into an auditable, automated income stream.
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
          {/* Header */}
          <div style={{
            background: 'var(--gradient-primary)', padding: '16px 24px', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <HugeiconsIcon icon={Building06Icon} size={18} color="white" strokeWidth={1.5} /> Rent Collection
            </span>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.65rem' }}>
              June 2026
            </span>
          </div>

          {/* KPI strip */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--line)' }}>
            <div style={{ padding: '12px 0', textAlign: 'center', borderRight: '1px solid var(--line)' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-heading)' }}>18/22</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Units Occupied</div>
            </div>
            <div style={{ padding: '12px 0', textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--alert)' }}>₹45,000</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Overdue</div>
            </div>
          </div>

          {/* Rows */}
          {invoices.map((inv, i) => (
            <motion.div
              key={inv.unit}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '12px 24px', borderBottom: '1px solid var(--line)',
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
            >
              <div>
                <div style={{ fontWeight: 500, fontSize: '0.85rem', color: 'var(--text-heading)' }}>{inv.unit}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{inv.tenant}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-heading)' }}>₹{inv.amount}</div>
                <div style={{ fontSize: '0.68rem', fontWeight: 600, color: statusColor[inv.status] }}>{inv.status}</div>
              </div>
            </motion.div>
          ))}
        </GlassCard>
      </div>
    </div>
  );
}
