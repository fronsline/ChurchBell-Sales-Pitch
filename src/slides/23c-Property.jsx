import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Building06Icon, Tick01Icon, Calendar03Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  'Every property (land, buildings, parsonage, shops, cemetery) with its title deed, patta and chitta',
  'Units and tenants (tenants need not be members), with agreements and renewals',
  'Rent invoices made every month on their own and sent to the tenant on WhatsApp',
  'GST tax invoice or bill of supply, numbered properly every year',
  'Collect rent by cash, UPI, bank or cheque. The receipt goes straight into your books',
  'A calendar of property tax, water, EB, insurance and licences, with reminders before each due date',
  'Deeds and papers stored safely. Confidential ones open only for the property admin',
  'Grave plots for the church cemetery, linked to the burial record',
];

// Sample rows: names and numbers are illustrative only.
const invoices = [
  { no: 'TI/26-27/0012', unit: 'Shop 1, Main Rd', tenant: 'Raj Traders', amount: '14,160', status: 'Paid' },
  { no: 'TI/26-27/0013', unit: 'Office 2A', tenant: 'Stellar Infotech', amount: '21,240', status: 'Overdue' },
  { no: 'BS/26-27/0007', unit: 'Flat, Annex', tenant: 'Mr. David K.', amount: '8,500', status: 'Pending' },
];

const dues = [
  { label: 'Property tax: Church compound', when: 'Due in 7 days', tone: 'var(--warning)' },
  { label: 'Building insurance: School block', when: 'Renews 15 Nov', tone: 'var(--text-muted)' },
];

const statusColor = { Paid: 'var(--success)', Overdue: 'var(--alert)', Pending: 'var(--warning)' };

export default function Property() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Property & Rent: <span className="gradient-text">Income, Not Headache</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 20, color: 'var(--text-muted)', fontSize: '0.96rem' }}>
            Churches own land, shops, halls and houses. ChurchBell keeps the papers, the rent and
            the tax dates in one place, and reminds you before anything is missed.
          </p>
        </FadeUpText>

        <StaggerContainer delay={0.35} staggerDelay={0.08} className="flex-col" style={{ gap: 11 }}>
          {features.map((feat) => (
            <StaggerItem key={feat}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <HugeiconsIcon icon={Tick01Icon} size={18} color="var(--success)" strokeWidth={2} style={{ marginTop: 3, flexShrink: 0 }} />
                <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: 1.45 }}>{feat}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div className="slide-right">
        <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 430, padding: 0, overflow: 'hidden' }}>
          {/* Header */}
          <div style={{
            background: 'var(--gradient-primary)', padding: '14px 22px', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ fontWeight: 600, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <HugeiconsIcon icon={Building06Icon} size={18} color="white" strokeWidth={1.5} /> Property Overview
            </span>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.65rem' }}>
              November 2026
            </span>
          </div>

          {/* KPI strip */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid var(--line)' }}>
            {[
              { v: '18/22', l: 'Units let', c: 'var(--text-heading)' },
              { v: '₹21,240', l: 'Rent overdue', c: 'var(--alert)' },
              { v: '2', l: 'Dues this month', c: 'var(--warning)' },
            ].map((k, i) => (
              <div key={k.l} style={{ padding: '10px 0', textAlign: 'center', borderRight: i < 2 ? '1px solid var(--line)' : 'none' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: k.c }}>{k.v}</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{k.l}</div>
              </div>
            ))}
          </div>

          {/* Invoice rows */}
          <div style={{ padding: '8px 22px 4px', fontSize: '0.62rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Rent invoices
          </div>
          {invoices.map((inv, i) => (
            <motion.div
              key={inv.no}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '9px 22px', borderBottom: '1px solid var(--line)',
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--text-heading)' }}>{inv.unit}</div>
                <div style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>
                  <span style={{ fontFamily: 'monospace', color: 'var(--primary)' }}>{inv.no}</span> · {inv.tenant}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-heading)' }}>₹{inv.amount}</div>
                <div style={{ fontSize: '0.64rem', fontWeight: 600, color: statusColor[inv.status] }}>{inv.status}</div>
              </div>
            </motion.div>
          ))}

          {/* Compliance calendar */}
          <div style={{ padding: '10px 22px 4px', fontSize: '0.62rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Coming up
          </div>
          {dues.map((d, i) => (
            <motion.div
              key={d.label}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '8px 22px', borderBottom: i < dues.length - 1 ? '1px solid var(--line)' : 'none',
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.15 + i * 0.1 }}
            >
              <HugeiconsIcon icon={Calendar03Icon} size={16} color="var(--primary)" strokeWidth={1.6} />
              <div style={{ flex: 1, fontSize: '0.78rem', color: 'var(--text-heading)' }}>{d.label}</div>
              <div style={{ fontSize: '0.66rem', fontWeight: 600, color: d.tone }}>{d.when}</div>
            </motion.div>
          ))}
          <div style={{ height: 6 }} />
        </GlassCard>
      </div>
    </div>
  );
}
