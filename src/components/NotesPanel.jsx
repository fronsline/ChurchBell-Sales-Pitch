import { motion } from 'framer-motion';

const fmt = (m) => {
  const total = Math.round(m * 60);
  return `${Math.floor(total / 3600) ? `${Math.floor(total / 3600)}:` : ''}${String(Math.floor((total % 3600) / 60)).padStart(Math.floor(total / 3600) ? 2 : 1, '0')}:${String(total % 60).padStart(2, '0')}`;
};

// Presenter notes (toggle with N). Shows the slide's notes, its time budget, and where the
// planned clock should be once this slide is done, counted from the first slide.
export default function NotesPanel({ slides, currentSlide }) {
  const slide = slides[currentSlide];
  const timed = slides.some((s) => s.minutes);
  const endsAt = slides.slice(0, currentSlide + 1).reduce((sum, s) => sum + (s.minutes || 0), 0);
  const total = slides.reduce((sum, s) => sum + (s.minutes || 0), 0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      style={{
        position: 'fixed', left: 0, right: 0, margin: '0 auto', bottom: 70, zIndex: 300,
        width: 'min(860px, calc(100vw - 32px))', background: 'rgba(59, 53, 84, 0.94)', color: '#fff',
        borderRadius: 16, padding: '16px 22px', boxShadow: '0 12px 40px rgba(0,0,0,0.25)', fontSize: '0.95rem', lineHeight: 1.5,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginBottom: 6, fontSize: '0.8rem', opacity: 0.75 }}>
        <span>{slide.title}</span>
        {timed && (
          <span>
            {slide.minutes ? `${fmt(slide.minutes)} for this slide · ` : ''}done by {fmt(endsAt)} of {fmt(total)}
          </span>
        )}
      </div>
      <div>{slide.notes || <span style={{ opacity: 0.6 }}>No notes for this slide.</span>}</div>
    </motion.div>
  );
}
