import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Wallet01Icon, FileExportIcon, UserGroupIcon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];

const ledgerRows = [
  { name: 'Subscription', data: [500, 500, 500, 500, 500, 500, 500, 500, null, null, null, null] },
  { name: "Men's Fellowship", data: [100, 100, 100, 100, 100, 100, 100, 100, null, null, null, null] },
  { name: 'Building Fund', data: [null, null, 1000, null, null, 1000, null, null, null, null, null, null] },
];

function getTotal(data) {
  return data.reduce((s, v) => s + (v || 0), 0);
}

export default function SubscriptionCard() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          Subscription Card — <span className="gradient-text">Member Payment Passbook</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 36, color: 'var(--text-muted)', maxWidth: 650 }}>
          A complete year-at-a-glance view of every member's payments — like a bank passbook for the church
        </p>
      </FadeUpText>

      {/* Card mockup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ width: '100%', maxWidth: 1050 }}
      >
        <GlassCard style={{ padding: 0, overflow: 'hidden' }}>
          {/* Card header */}
          <div style={{
            background: 'var(--gradient-primary)', padding: '14px 24px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'white' }}>
              <HugeiconsIcon icon={Wallet01Icon} size={20} color="white" />
              <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Mr. John Samuel</span>
              <span style={{ opacity: 0.7, fontSize: '0.8rem' }}>|</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>FY 2025–2026</span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{
                padding: '4px 10px', borderRadius: 6, fontSize: '0.7rem',
                background: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 600,
              }}>
                Individual
              </div>
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem',
              textAlign: 'center',
            }}>
              <thead>
                <tr style={{ background: 'var(--bg-shade1)' }}>
                  <th style={{
                    padding: '10px 16px', textAlign: 'left', fontWeight: 600,
                    color: 'var(--text-heading)', borderBottom: '1px solid var(--line)',
                    minWidth: 120,
                  }}>
                    Ledger
                  </th>
                  {months.map((m, i) => (
                    <th key={m} style={{
                      padding: '10px 8px', fontWeight: 600, color: 'var(--text-heading)',
                      borderBottom: '1px solid var(--line)', minWidth: 58,
                    }}>
                      {m}
                    </th>
                  ))}
                  <th style={{
                    padding: '10px 12px', fontWeight: 700, color: 'var(--primary)',
                    borderBottom: '1px solid var(--line)', minWidth: 70,
                  }}>
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {ledgerRows.map((row, ri) => (
                  <motion.tr
                    key={row.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + ri * 0.1 }}
                    style={{ borderBottom: '1px solid var(--line)' }}
                  >
                    <td style={{
                      padding: '10px 16px', textAlign: 'left', fontWeight: 600,
                      color: 'var(--text-heading)',
                    }}>
                      {row.name}
                    </td>
                    {row.data.map((val, ci) => (
                      <td key={ci} style={{
                        padding: '10px 8px',
                        color: val ? 'var(--primary)' : 'var(--text-muted)',
                        fontWeight: val ? 600 : 400,
                      }}>
                        {val ? `₹${val}` : '–'}
                      </td>
                    ))}
                    <td style={{
                      padding: '10px 12px', fontWeight: 700, color: 'var(--primary)',
                    }}>
                      ₹{getTotal(row.data).toLocaleString()}
                    </td>
                  </motion.tr>
                ))}

                {/* Total row */}
                <motion.tr
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  style={{ background: 'var(--primary-bg)' }}
                >
                  <td style={{
                    padding: '10px 16px', textAlign: 'left', fontWeight: 700,
                    color: 'var(--primary)',
                  }}>
                    Total
                  </td>
                  {months.map((_, ci) => {
                    const colTotal = ledgerRows.reduce((s, r) => s + (r.data[ci] || 0), 0);
                    return (
                      <td key={ci} style={{
                        padding: '10px 8px', fontWeight: 700,
                        color: colTotal ? 'var(--primary)' : 'var(--text-muted)',
                      }}>
                        {colTotal ? `₹${colTotal}` : '–'}
                      </td>
                    );
                  })}
                  <td style={{
                    padding: '10px 12px', fontWeight: 700, color: 'var(--primary)',
                    fontSize: '0.9rem',
                  }}>
                    ₹{ledgerRows.reduce((s, r) => s + getTotal(r.data), 0).toLocaleString()}
                  </td>
                </motion.tr>
              </tbody>
            </table>
          </div>
        </GlassCard>
      </motion.div>

      {/* Bottom features */}
      <FadeUpText delay={1.0}>
        <div style={{ display: 'flex', gap: 32, marginTop: 32 }}>
          {[
            { icon: UserGroupIcon, text: 'Individual & Family card modes' },
            { icon: FileExportIcon, text: 'Export to PDF & Excel' },
            { icon: Wallet01Icon, text: 'Multi-year view — select multiple financial years' },
          ].map((f) => (
            <div key={f.text} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: '0.82rem', color: 'var(--text-secondary)',
            }}>
              <HugeiconsIcon icon={f.icon} size={16} color="#7367F0" />
              {f.text}
            </div>
          ))}
        </div>
      </FadeUpText>
    </div>
  );
}
