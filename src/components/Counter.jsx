import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Counter({ from = 0, to, duration = 2, prefix = '', suffix = '', delay = 0, className = '' }) {
  const ref = useRef(null);
  const [value, setValue] = useState(from);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const start = Date.now();
      const diff = to - from;

      const step = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(from + diff * eased));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, from, to, duration, delay]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {prefix}{value.toLocaleString()}{suffix}
    </motion.span>
  );
}
