import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ChurchIcon, HierarchySquare01Icon, UserMultiple02Icon, Coins01Icon,
  Wallet01Icon, Briefcase01Icon, Target02Icon, JusticeScale01Icon, Building06Icon,
  ConstructionIcon, Mail01Icon, Megaphone01Icon,
} from '@hugeicons-pro/core-stroke-rounded';
import { FadeUpText } from '../components/AnimatedText';

// Fixed canvas: every element lives in this same px space so lines + nodes never desync
const W = 860;
const H = 440;
const CX = W / 2;
const CY = 212;
const R = 176;
const HUB = 168;
const PARISH = 64;

const churches = [
  "St. George's", 'Emmanuel', "St. Paul's",
  "Christ Church", "Redeemer's", "St. Mary's",
];

const nodes = churches.map((name, i) => {
  const angle = (i / churches.length) * 2 * Math.PI - Math.PI / 2;
  return { name, x: CX + R * Math.cos(angle), y: CY + R * Math.sin(angle) };
});

const modules = [
  { label: 'Members', icon: UserMultiple02Icon },
  { label: 'Assessment', icon: Coins01Icon },
  { label: 'Finance', icon: Wallet01Icon },
  { label: 'Workforce', icon: Briefcase01Icon },
  { label: 'Talent', icon: Target02Icon },
  { label: 'Legal', icon: JusticeScale01Icon },
  { label: 'Property', icon: Building06Icon },
  { label: 'Construction', icon: ConstructionIcon },
  { label: 'Mail Box', icon: Mail01Icon },
  { label: 'Circulars', icon: Megaphone01Icon },
];

export default function DioceseVision() {
  return (
    <div className="slide-center">
      <FadeUpText delay={0.1}>
        <h2 style={{ marginBottom: 8 }}>
          One Platform, <span className="gradient-text">From Parish to Diocese</span>
        </h2>
      </FadeUpText>
      <FadeUpText delay={0.2}>
        <p style={{ marginBottom: 8, color: 'var(--text-muted)', maxWidth: 700 }}>
          Every parish runs its own books on ChurchBell. The Diocese app sits above them all, and what each
          church chooses to share rolls up into one live view for the Bishop and his officers.
        </p>
      </FadeUpText>

      <div style={{ position: 'relative', width: W, height: H, flexShrink: 0 }}>
        {/* flow lines parish -> hub (same fixed px space, NO scaling) */}
        <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          {nodes.map((n, i) => {
            const d = `M ${n.x} ${n.y} L ${CX} ${CY}`;
            return (
              <g key={n.name}>
                <path d={d} stroke="#7367F0" strokeOpacity={0.15} strokeWidth={2} fill="none" strokeLinecap="round" />
                <motion.path
                  d={d} stroke="#7367F0" strokeWidth={2} fill="none" strokeLinecap="round"
                  strokeDasharray="4 12"
                  initial={{ strokeDashoffset: 0, opacity: 0 }}
                  animate={{ strokeDashoffset: [0, -32], opacity: 1 }}
                  transition={{
                    strokeDashoffset: { duration: 1.3, repeat: Infinity, ease: 'linear' },
                    opacity: { duration: 0.4, delay: 0.9 + i * 0.08 },
                  }}
                />
              </g>
            );
          })}

          {/* pulsing ripples: SVG circles keep a constant 2px stroke at any radius */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx={CX} cy={CY} fill="none" stroke="#7367F0" strokeWidth={2}
              initial={{ r: HUB / 2, opacity: 0 }}
              animate={{ r: [HUB / 2, HUB / 2 + 78], opacity: [0.2, 0] }}
              transition={{ duration: 3.3, repeat: Infinity, delay: i * 1.1, ease: 'easeOut' }}
            />
          ))}
        </svg>

        {/* parish nodes: outer div positions (centred), inner motion animates */}
        {nodes.map((n, i) => (
          <div key={n.name} style={{ position: 'absolute', left: n.x, top: n.y, transform: 'translate(-50%, -50%)', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.5 + i * 0.1, type: 'spring', stiffness: 200 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
            >
              <div style={{
                width: PARISH, height: PARISH, borderRadius: '50%', background: 'white',
                border: '1px solid var(--line)', boxShadow: 'var(--shadow-md)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <HugeiconsIcon icon={ChurchIcon} size={31} color="var(--primary)" strokeWidth={1.5} />
              </div>
              <span style={{
                fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-heading)', whiteSpace: 'nowrap',
                background: 'rgba(255,255,255,0.85)', padding: '1px 8px', borderRadius: 100,
              }}>{n.name}</span>
            </motion.div>
          </div>
        ))}

        {/* central diocese hub: outer div centres it on (CX,CY); inner motion handles the entrance */}
        <div style={{ position: 'absolute', left: CX, top: CY, transform: 'translate(-50%, -50%)', zIndex: 3 }}>
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.3, type: 'spring', stiffness: 170 }}
            style={{
              width: HUB, height: HUB, borderRadius: '50%', background: 'var(--gradient-primary)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: 3, color: 'white', border: '5px solid white',
              boxShadow: '0 0 50px rgba(115,103,240,0.5)', textAlign: 'center',
            }}
          >
            <HugeiconsIcon icon={HierarchySquare01Icon} size={46} color="white" strokeWidth={1.6} />
            <div style={{ fontWeight: 800, fontSize: '1.1rem', lineHeight: 1.1 }}>Diocese</div>
            <div style={{ fontSize: '0.64rem', opacity: 0.9, maxWidth: 128, lineHeight: 1.25 }}>Bishop's single source of truth</div>
          </motion.div>
        </div>
      </div>

      {/* module roll-up chips */}
      <FadeUpText delay={1.4}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'nowrap', justifyContent: 'center', marginTop: 10, maxWidth: 1280 }}>
          {modules.map((m) => (
            <div key={m.label} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '6px 12px 6px 6px', background: 'white',
              border: '1px solid var(--line)', borderRadius: 100, boxShadow: 'var(--shadow-sm)',
            }}>
              <span style={{
                width: 28, height: 28, borderRadius: '50%', background: 'var(--primary-bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <HugeiconsIcon icon={m.icon} size={16} color="#7367F0" strokeWidth={1.7} />
              </span>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-heading)', whiteSpace: 'nowrap' }}>{m.label}</span>
            </div>
          ))}
        </div>
      </FadeUpText>
    </div>
  );
}
