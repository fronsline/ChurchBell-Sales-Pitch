import { motion } from 'framer-motion';

// Define section groupings for the slide list
const sections = [
  { label: 'Opening', from: 0, to: 5 },
  { label: 'People', from: 6, to: 11 },
  { label: 'Finance', from: 12, to: 18 },
  { label: 'Reports', from: 19, to: 22 },
  { label: 'Records', from: 23, to: 24 },
  { label: 'Masters & Assets', from: 25, to: 26 },
  { label: 'Admin', from: 27, to: 30 },
  { label: 'Pricing & Close', from: 31, to: 35 },
];

export default function SlideDrawer({ slides, currentSlide, onSelect, onClose }) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 300,
          background: 'rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(2px)',
        }}
      />

      {/* Drawer */}
      <motion.div
        initial={{ x: -340 }}
        animate={{ x: 0 }}
        exit={{ x: -340 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{
          position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 310,
          width: 320,
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRight: '1px solid var(--line)',
          boxShadow: '4px 0 30px rgba(115, 103, 240, 0.08)',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '20px 24px 16px',
          borderBottom: '1px solid var(--line)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/images/logo-color.png" alt="" style={{ height: 28 }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)' }}>
              Slides
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 28, height: 28, borderRadius: 8,
              border: '1px solid var(--line)', background: 'var(--bg-shade1)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600,
            }}
          >
            S
          </button>
        </div>

        {/* Slide list */}
        <div style={{
          flex: 1, overflowY: 'auto', padding: '12px 16px',
          scrollbarWidth: 'thin',
        }}>
          {sections.map((section) => {
            const sectionSlides = slides.slice(section.from, section.to + 1);
            if (sectionSlides.length === 0) return null;

            const isSectionActive = currentSlide >= section.from && currentSlide <= section.to;

            return (
              <div key={section.label} style={{ marginBottom: 16 }}>
                {/* Section label */}
                <div style={{
                  fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.08em', padding: '4px 8px', marginBottom: 4,
                  color: isSectionActive ? 'var(--primary)' : 'var(--text-muted)',
                }}>
                  {section.label}
                </div>

                {/* Slides in section */}
                {sectionSlides.map((slide, i) => {
                  const globalIndex = section.from + i;
                  const isActive = globalIndex === currentSlide;

                  return (
                    <button
                      key={globalIndex}
                      onClick={() => onSelect(globalIndex)}
                      style={{
                        width: '100%', textAlign: 'left',
                        padding: '8px 12px', marginBottom: 2,
                        borderRadius: 8, border: 'none', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', gap: 10,
                        background: isActive ? 'var(--primary-bg)' : 'transparent',
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.background = 'var(--bg-shade1)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <span style={{
                        width: 22, height: 22, borderRadius: 6,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.6rem', fontWeight: 700, flexShrink: 0,
                        background: isActive ? 'var(--primary)' : 'var(--bg-shade1)',
                        color: isActive ? 'white' : 'var(--text-muted)',
                      }}>
                        {globalIndex + 1}
                      </span>
                      <span style={{
                        fontSize: '0.78rem', fontWeight: isActive ? 600 : 400,
                        color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      }}>
                        {slide.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Footer hint */}
        <div style={{
          padding: '12px 24px', borderTop: '1px solid var(--line)',
          fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'center',
        }}>
          Press <span style={{
            padding: '2px 6px', background: 'var(--bg-shade1)',
            borderRadius: 4, fontWeight: 600, border: '1px solid var(--border)',
          }}>S</span> to toggle
        </div>
      </motion.div>
    </>
  );
}
