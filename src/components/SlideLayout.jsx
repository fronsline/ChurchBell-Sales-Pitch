import { motion, AnimatePresence } from 'framer-motion';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? '-50%' : '50%',
    opacity: 0,
  }),
};

export default function SlideLayout({ children, slideKey, direction }) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={slideKey}
        className="slide"
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'spring', stiffness: 200, damping: 30 },
          opacity: { duration: 0.4 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Section header slide layout: big centered text with background image
export function SectionSlide({ title, subtitle, color = '#7367F0', bgImage }) {
  return (
    <div className="slide-center" style={{ position: 'relative' }}>
      {/* Full-screen background image */}
      {bgImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          {/* White overlay for readability */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(255, 255, 255, 0.75)',
          }} />
        </div>
      )}

      {/* Floating blobs, above background image */}
      <motion.div
        className="bg-blob bg-blob-1"
        style={{ opacity: 0.08, zIndex: 1 }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="bg-blob bg-blob-2"
        style={{ opacity: 0.08, zIndex: 1 }}
        animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="bg-blob bg-blob-3"
        style={{ opacity: 0.05, zIndex: 1 }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          borderRadius: 24,
          padding: '48px 80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          boxShadow: '0 8px 32px rgba(115, 103, 240, 0.1)',
        }}
      >
        <motion.div
          className="section-glow"
          style={{ background: `radial-gradient(ellipse, ${color}15 0%, transparent 70%)` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
