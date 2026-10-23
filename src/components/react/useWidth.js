import { useEffect, useState } from 'react';

// Viewport width, 1440 on the server and first paint so hydration matches.
export function useWidth() {
  const [w, setW] = useState(1440);
  useEffect(() => {
    const on = () => setW(window.innerWidth);
    on();
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return w;
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => setReduced(matchMedia('(prefers-reduced-motion: reduce)').matches), []);
  return reduced;
}
