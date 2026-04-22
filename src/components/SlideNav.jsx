import { motion } from 'framer-motion';

export default function SlideNav({ currentSlide, totalSlides, progress, onPrev, onNext }) {
  return (
    <>
      {/* Progress bar */}
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Slide counter */}
      <div className="slide-counter">
        <span className="slide-counter-current">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="slide-counter-sep">/</span>
        <span className="slide-counter-total">{String(totalSlides).padStart(2, '0')}</span>
      </div>

      {/* Nav arrows */}
      <div className="nav-arrows">
        <button
          className="nav-arrow nav-arrow-left"
          onClick={onPrev}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className="nav-arrow nav-arrow-right"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </>
  );
}

// Overview grid
export function SlideOverview({ slides, currentSlide, onSelect }) {
  return (
    <motion.div
      className="slide-overview"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="overview-grid">
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            className={`overview-item ${i === currentSlide ? 'active' : ''}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.02 }}
            onClick={() => onSelect(i)}
          >
            <div className="overview-number">{i + 1}</div>
            <div className="overview-label">{slide.title || `Slide ${i + 1}`}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
