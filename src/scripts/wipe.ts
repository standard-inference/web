// Section-entry wipe: a mask opens left to right, plus a 12px settle. No fades. Off for reduced motion.
export function wipe() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const ease = 'cubic-bezier(0.4,0,0.2,1)';
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        io.unobserve(el);
        el.style.transition = `clip-path 1000ms ${ease}, transform 1000ms ${ease}`;
        el.style.clipPath = 'inset(-12px -12px -12px -12px)';
        el.style.transform = 'none';
        setTimeout(() => {
          el.style.clipPath = '';
          el.style.transition = '';
        }, 1100);
      }),
    { threshold: 0.06 },
  );
  document.querySelectorAll<HTMLElement>('[data-wipe]').forEach((el) => {
    if (el.dataset.wiped) return;
    el.dataset.wiped = '1';
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    el.style.clipPath = 'inset(-12px 100% -12px -12px)';
    el.style.transform = 'translateY(12px)';
    io.observe(el);
  });
}
