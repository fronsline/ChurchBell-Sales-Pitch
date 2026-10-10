import { AnimatePresence, motion } from 'framer-motion';
import { useSlideNavigation } from './hooks/useSlideNavigation';
import SlideLayout from './components/SlideLayout';
import SlideNav, { SlideOverview } from './components/SlideNav';
import SlideDrawer from './components/SlideDrawer';
import Background3D from './components/Background3D';
import NotesPanel from './components/NotesPanel';
import { useStageScale } from './hooks/useStageScale';

import { pickDeck } from './decks';

const { slides, fitToScreen } = pickDeck();

function App() {
  const nav = useSlideNavigation(slides.length);
  const CurrentSlide = slides[nav.currentSlide].component;
  const scale = useStageScale(fitToScreen);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', background: '#fff' }}>
      <Background3D />

      {/* Watermark logo, bottom left */}
      <img
        src="/images/logo-color.png"
        alt=""
        style={{
          position: 'fixed',
          bottom: 20,
          left: 24,
          height: 32,
          opacity: 0.5,
          pointerEvents: 'none',
          zIndex: 50,
        }}
      />

      <SlideLayout slideKey={nav.currentSlide} direction={nav.direction}>
        {scale === 1 ? (
          <CurrentSlide />
        ) : (
          // CSS zoom (not transform) so text stays crisp and layout reflows at the larger size.
          <div className="deck-stage" style={{ zoom: scale, width: "100%", height: "100%", "--deck-scale": scale }}>
            <CurrentSlide />
          </div>
        )}
      </SlideLayout>

      <SlideNav
        currentSlide={nav.currentSlide}
        totalSlides={nav.totalSlides}
        progress={nav.progress}
        onPrev={nav.prev}
        onNext={nav.next}
      />

      {/* Number jump indicator */}
      <AnimatePresence>
        {nav.numberBuffer && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'fixed',
              top: 24,
              right: 24,
              zIndex: 400,
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '2px solid var(--primary)',
              borderRadius: 16,
              padding: '14px 28px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              boxShadow: '0 8px 32px rgba(115, 103, 240, 0.2)',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Go to Slide
            </span>
            <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
              {nav.numberBuffer}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {nav.showNotes && <NotesPanel slides={slides} currentSlide={nav.currentSlide} />}
      </AnimatePresence>

      <AnimatePresence>
        {nav.showDrawer && (
          <SlideDrawer
            slides={slides}
            currentSlide={nav.currentSlide}
            onSelect={nav.goTo}
            onClose={() => nav.setShowDrawer(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {nav.showOverview && (
          <SlideOverview
            slides={slides}
            currentSlide={nav.currentSlide}
            onSelect={nav.goTo}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
