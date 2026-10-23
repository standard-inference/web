// Section-entry wipe: a mask opens left to right, plus a 12px settle. No fades. Off for reduced motion.
// Reveal is driven by scroll position, not IntersectionObserver: Chromium clips the observed target by its own clip-path, so a fully masked section never reports as intersecting and would stay hidden forever.
export function wipe() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ease = 'cubic-bezier(0.4,0,0.2,1)';
  const pending = new Set<HTMLElement>();

  const reveal = (el: HTMLElement) => {
    pending.delete(el);
    el.style.transition = `clip-path 1000ms ${ease}, transform 1000ms ${ease}`;
    el.style.clipPath = 'inset(-12px -12px -12px -12px)';
    el.style.transform = 'none';
    setTimeout(() => {
      el.style.clipPath = '';
      el.style.transition = '';
    }, 1100);
  };

  let queued = false;
  const check = () => {
    queued = false;
    pending.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.94) reveal(el);
    });
    if (!pending.size) {
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
    }
  };
  const onScroll = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(check);
  };

  document.querySelectorAll<HTMLElement>('[data-wipe]').forEach((el) => {
    if (el.dataset.wiped) return;
    el.dataset.wiped = '1';
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    el.style.clipPath = 'inset(-12px 100% -12px -12px)';
    el.style.transform = 'translateY(12px)';
    pending.add(el);
  });
  if (!pending.size) return;
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  // Anything that never gets scrolled to (restored scroll position, hash jump) still appears.
  setTimeout(() => pending.forEach(reveal), 6000);
  check();
}
