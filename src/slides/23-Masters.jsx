import { HugeiconsIcon } from '@hugeicons/react';
import { Notebook01Icon, GridViewIcon, BookOpen01Icon, Tag01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const masters = [
  {
    icon: Notebook01Icon,
    title: 'Ledger',
    desc: 'Your chart of accounts: Income, Expense, Bank, Cash. Mark a ledger card-based to track subscriptions.',
  },
  {
    icon: GridViewIcon,
    title: 'Ledger Group',
    desc: 'Group income or expense ledgers under one heading for tidy reports.',
  },
  {
    icon: BookOpen01Icon,
    title: 'Bill Book',
    desc: 'Auto-numbered receipt & payment books with your prefix, financial year and, if you like, the month.',
  },
  {
    icon: Tag01Icon,
    title: 'Asset Categories',
    desc: 'Furniture, sound system, musical instruments, vehicles and more, each with its own icon.',
  },
];

export default function Masters() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          Masters: <span className="gradient-text">The Foundation</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 48, color: 'var(--text-muted)', maxWidth: 550 }}>
          Configure the building blocks that power your entire system
        </p>
      </FadeUpText>

      <StaggerContainer delay={0.3} staggerDelay={0.12} className="feature-grid" style={{ maxWidth: 950, gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {masters.map((m) => (
          <StaggerItem key={m.title}>
            <GlassCard style={{ textAlign: 'center', padding: '32px 20px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                <HugeiconsIcon icon={m.icon} size={44} color="#7367F0" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: '1rem', marginBottom: 8 }}>{m.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{m.desc}</p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Bill Book preview */}
      <FadeUpText delay={0.9}>
        <div style={{
          marginTop: 36, padding: '16px 28px',
          background: 'var(--primary-bg)', borderRadius: 12,
          display: 'flex', alignItems: 'center', gap: 16,
        }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Bill Number Preview:</span>
          <span style={{
            fontFamily: 'monospace', fontSize: '1rem', fontWeight: 700,
            color: 'var(--primary)', background: 'white', padding: '6px 14px',
            borderRadius: 8, border: '1px solid var(--line)',
          }}>
            GC-R-2026-2027-00042
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Church Code – Prefix – Financial Year – Sequence
          </span>
        </div>
      </FadeUpText>

      <FadeUpText delay={1.05}>
        <p style={{ marginTop: 18, fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: 760 }}>
          <span className="tag tag-primary" style={{ fontSize: '0.68rem', marginRight: 8 }}>Diocese standard</span>
          In a diocese, the standard income and expense ledgers come ready-made and stay locked,
          so every church's accounts add up the same way.
        </p>
      </FadeUpText>
    </div>
  );
}
