import { useState, useEffect, useCallback, useRef } from 'react';

export function useSlideNavigation(totalSlides) {
  // ?slide=N opens the deck at slide N (1-based), handy for rehearsing one section.
  const [currentSlide, setCurrentSlide] = useState(() => {
    const n = parseInt(new URLSearchParams(window.location.search).get('slide'), 10);
    return n >= 1 && n <= totalSlides ? n - 1 : 0;
  });
  const [direction, setDirection] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [numberBuffer, setNumberBuffer] = useState('');

  // Refs for number-jump feature
  const numberTimerRef = useRef(null);
  const numberBufferRef = useRef('');

  const goTo = useCallback((index) => {
    if (index >= 0 && index < totalSlides) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
      setShowOverview(false);
      setShowDrawer(false);
    }
  }, [currentSlide, totalSlides]);

  const next = useCallback(() => {
    if (showOverview) return;
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide(s => s + 1);
    }
  }, [currentSlide, totalSlides, showOverview]);

  const prev = useCallback(() => {
    if (showOverview) return;
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(s => s - 1);
    }
  }, [currentSlide, showOverview]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  // Handle number input for slide jumping
  const handleNumber = useCallback((digit) => {
    // Clear previous timer
    if (numberTimerRef.current) clearTimeout(numberTimerRef.current);

    const newBuffer = numberBufferRef.current + digit;
    numberBufferRef.current = newBuffer;
    setNumberBuffer(newBuffer);

    // Set timer: navigate after 800ms of no more digits
    numberTimerRef.current = setTimeout(() => {
      const slideNum = parseInt(newBuffer, 10);
      if (slideNum >= 1 && slideNum <= totalSlides) {
        goTo(slideNum - 1); // Convert 1-based to 0-based
      }
      numberBufferRef.current = '';
      setNumberBuffer('');
    }, 800);
  }, [goTo, totalSlides]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      // Handle digit keys (0-9)
      if (e.key >= '0' && e.key <= '9') {
        e.preventDefault();
        handleNumber(e.key);
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prev();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          setShowNotes(s => !s);
          break;
        case 's':
        case 'S':
          e.preventDefault();
          setShowDrawer(s => !s);
          break;
        case 'Escape':
          e.preventDefault();
          if (showDrawer) setShowDrawer(false);
          else setShowOverview(s => !s);
          break;
        case 'Home':
          e.preventDefault();
          goTo(0);
          break;
        case 'End':
          e.preventDefault();
          goTo(totalSlides - 1);
          break;
      }
    };

    let touchStartX = 0;
    const handleTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
    const handleTouchEnd = (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
    };

    window.addEventListener('keydown', handleKey);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      if (numberTimerRef.current) clearTimeout(numberTimerRef.current);
    };
  }, [next, prev, goTo, toggleFullscreen, totalSlides, showDrawer, handleNumber]);

  return {
    currentSlide,
    direction,
    showNotes,
    showOverview,
    setShowOverview,
    showDrawer,
    setShowDrawer,
    numberBuffer,
    next,
    prev,
    goTo,
    totalSlides,
    progress: (currentSlide / (totalSlides - 1)) * 100,
  };
}
