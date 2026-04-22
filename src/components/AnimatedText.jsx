import { motion } from 'framer-motion';

// Fade up text with stagger
export function FadeUpText({ children, delay = 0, className = '', as = 'div' }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </Tag>
  );
}

// Text that reveals word by word
export function WordReveal({ text, delay = 0, className = '' }) {
  const words = text.split(' ');
  return (
    <span className={className} style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.3em' }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// Typewriter effect
export function TypeWriter({ text, delay = 0, speed = 0.03, className = '' }) {
  const chars = text.split('');
  const typingEndTime = delay + chars.length * speed + 0.5;
  return (
    <span className={className}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.01, delay: delay + i * speed }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

// Large heading with gradient
export function GradientHeading({ children, delay = 0, className = '' }) {
  return (
    <motion.h1
      className={`gradient-text ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.h1>
  );
}

// Stagger children
export function StaggerContainer({ children, staggerDelay = 0.1, delay = 0, className = '', style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
    >
      {children}
    </motion.div>
  );
}
