import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { UserMultiple02Icon, Tick01Icon, Search01Icon } from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText, StaggerContainer, StaggerItem } from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';

const features = [
  'One directory across the parishes that share, not 40 separate lists',
  'Members appear only from churches that have agreed to share them',
  'Filter by church, membership type, gender, family head or subscription payer',
  'A member dashboard: totals, families, age bands, gender and church-wise counts',
  'Open any member to see the family and, where the church shares finance, their giving',
  'Always current, because it reads each church\'s own register live',
];

const rows = [
  { name: 'Daniel Rajan', parish: "St. John's", area: 'Egmore' },
  { name: 'Grace Thomas', parish: 'Emmanuel', area: 'Mylapore' },
  { name: 'Samuel Devadas', parish: 'Christ Church', area: 'Vepery' },
  { name: 'Anitha Paul', parish: "Redeemer's", area: 'Tambaram' },
];

export default function DioceseMembers() {
  return (
    <div className="slide-split">
      <div className="slide-left">
        <FadeUpText delay={0.1}>
          <h2 style={{ marginBottom: 8 }}>
            Members: <span className="gradient-text">One Directory, Every Parish</span>
          </h2>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <p style={{ marginBottom: 24, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            Every member of every sharing parish in one living directory. Searchable, easy to filter,
            and never out of date. Sharing is each church's choice.
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
        <GlassCard delay={0.5} style={{ width: '100%', maxWidth: 430, padding: 0, overflow: 'hidden' }}>
          {/* Header */}
          <div style={{
            background: 'var(--gradient-primary)', padding: '16px 24px', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <HugeiconsIcon icon={UserMultiple02Icon} size={18} color="white" strokeWidth={1.5} /> Member Directory
            </span>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.65rem' }}>
              42 Parishes
            </span>
          </div>

          {/* KPI strip */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid var(--line)' }}>
            {[
              { v: '38,420', l: 'Members' },
              { v: '9,860', l: 'Families' },
              { v: '42', l: 'Parishes' },
            ].map((k, i) => (
              <div key={k.l} style={{ padding: '12px 0', textAlign: 'center', borderRight: i < 2 ? '1px solid var(--line)' : 'none' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary)' }}>{k.v}</div>
                <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{k.l}</div>
              </div>
            ))}
          </div>

          {/* Search bar mock */}
          <div style={{ padding: '12px 18px', borderBottom: '1px solid var(--line)' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px',
              background: 'var(--bg-shade1)', borderRadius: 8,
            }}>
              <HugeiconsIcon icon={Search01Icon} size={15} color="var(--text-muted)" />
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Search across all parishes…</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <motion.div
              key={r.name}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '11px 18px', borderBottom: i < rows.length - 1 ? '1px solid var(--line)' : 'none',
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
            >
              <div style={{
                width: 30, height: 30, borderRadius: '50%', background: 'var(--primary-bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.72rem', fontWeight: 700, color: 'var(--primary)', flexShrink: 0,
              }}>
                {r.name[0]}
              </div>
              <span style={{ flex: 1, fontSize: '0.84rem', fontWeight: 500, color: 'var(--text-heading)' }}>{r.name}</span>
              <span className="tag" style={{ fontSize: '0.6rem', padding: '3px 8px', background: 'var(--bg-shade1)', color: 'var(--text-secondary)' }}>
                {r.parish}
              </span>
            </motion.div>
          ))}
        </GlassCard>
      </div>
    </div>
  );
}
