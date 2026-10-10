import { useEffect, useState } from 'react';

// Slides are designed for a 1440×900 screen. On a projector or TV, scale the whole slide so it
// fills the screen instead of sitting small in the middle. Returns 1 when scaling is off.
const BASE_W = 1440;
const BASE_H = 900;

function scaleFor(enabled) {
  if (!enabled) return 1;
  const s = Math.min(window.innerWidth / BASE_W, window.innerHeight / BASE_H);
  return Math.max(0.75, s);
}

export function useStageScale(enabled) {
  const [scale, setScale] = useState(() => scaleFor(enabled));
  useEffect(() => {
    if (!enabled) return undefined;
    const onResize = () => setScale(scaleFor(true));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [enabled]);
  return scale;
}
