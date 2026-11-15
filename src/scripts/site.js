import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const desktopMQ = window.matchMedia('(min-width: 1024px)');

/* ============================================================
   Subtle motion (GSAP) — initial states set via JS only, so
   content stays fully visible if JS or GSAP fails.
   ============================================================ */
if (!prefersReducedMotion) {
  // Gentle fade-up for section headings / blocks (once each).
  gsap.utils.toArray('.reveal').forEach((el) => {
    gsap.from(el, {
      y: 16,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      clearProps: 'opacity,transform',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  // Services showcase: subtle scroll-linked parallax, desktop only.
  // Different speeds per column, ±6% max.
  if (desktopMQ.matches) {
    document.querySelectorAll('[data-parallax-block]').forEach((block) => {
      const colA = block.querySelector('[data-parallax-col="a"]');
      const colB = block.querySelector('[data-parallax-col="b"]');
      if (colA) {
        gsap.fromTo(
          colA,
          { yPercent: 3 },
          {
            yPercent: -3,
            ease: 'none',
            scrollTrigger: { trigger: block, start: 'top bottom', end: 'bottom top', scrub: true },
          }
        );
      }
      if (colB) {
        gsap.fromTo(
          colB,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: { trigger: block, start: 'top bottom', end: 'bottom top', scrub: true },
          }
        );
      }
    });
  }
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

/* ============================================================
   Header state: transparent + white text over the hero; solid
   cream + dark text after ~95% of viewport height scrolled.
   ============================================================ */
const header = document.getElementById('site-header');
const setHeader = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > window.innerHeight * 0.95);
};
setHeader();
window.addEventListener('scroll', setHeader, { passive: true });
window.addEventListener('resize', setHeader);

/* ============================================================
   Mega menus (desktop, click to open)
   ============================================================ */
const megaTriggers = [...document.querySelectorAll('[data-mega-trigger]')];
const megaPanels = [...document.querySelectorAll('[data-mega-panel]')];
let openMegaKey = null;
let megaScrollLocked = false;

const lockScroll = () => {
  if (megaScrollLocked) return;
  megaScrollLocked = true;
  document.body.style.overflow = 'hidden';
};
const unlockScroll = () => {
  if (!megaScrollLocked) return;
  megaScrollLocked = false;
  document.body.style.overflow = '';
};

const closeMega = (refocusTrigger) => {
  if (!openMegaKey) return;
  const key = openMegaKey;
  openMegaKey = null;
  megaPanels.forEach((p) => p.classList.remove('is-open'));
  megaTriggers.forEach((t) => {
    t.setAttribute('aria-expanded', 'false');
    t.classList.remove('is-open');
  });
  unlockScroll();
  if (refocusTrigger) {
    document.querySelector(`[data-mega-trigger="${key}"]`)?.focus();
  }
};

const openMega = (key) => {
  openMegaKey = key;
  megaPanels.forEach((p) => p.classList.toggle('is-open', p.dataset.megaPanel === key));
  megaTriggers.forEach((t) => {
    const isActive = t.dataset.megaTrigger === key;
    t.setAttribute('aria-expanded', String(isActive));
    t.classList.toggle('is-open', isActive);
  });
  lockScroll();
};

megaTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const key = trigger.dataset.megaTrigger;
    if (openMegaKey === key) {
      closeMega(false);
    } else {
      openMega(key);
    }
  });
});

// Clicking a panel link navigates AND closes the menu.
megaPanels.forEach((panel) => {
  panel.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => closeMega(false));
  });
});

// Click outside the header closes; Escape closes and refocuses.
document.addEventListener('click', (e) => {
  if (openMegaKey && header && !header.contains(e.target)) closeMega(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && openMegaKey) closeMega(true);
});
desktopMQ.addEventListener('change', (e) => {
  if (!e.matches) closeMega(false);
});

/* ============================================================
   Mobile menu (fixed overlay) + accordions
   ============================================================ */
const menuOpenBtn = document.getElementById('mobile-menu-open');
const menuPanel = document.getElementById('mobile-menu');
const menuCloseBtn = document.getElementById('mobile-menu-close');
let menuScrollLocked = false;

const openMenu = () => {
  if (!menuPanel) return;
  menuPanel.hidden = false;
  menuPanel.classList.remove('hidden');
  menuOpenBtn?.setAttribute('aria-expanded', 'true');
  menuScrollLocked = true;
  document.body.style.overflow = 'hidden';
  menuCloseBtn?.focus();
};

const closeMenu = (refocus) => {
  if (!menuPanel || menuPanel.hidden) return;
  menuPanel.hidden = true;
  menuPanel.classList.add('hidden');
  menuOpenBtn?.setAttribute('aria-expanded', 'false');
  if (menuScrollLocked) {
    menuScrollLocked = false;
    document.body.style.overflow = '';
  }
  if (refocus) menuOpenBtn?.focus();
};

menuOpenBtn?.addEventListener('click', openMenu);
menuCloseBtn?.addEventListener('click', () => closeMenu(true));
menuPanel?.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => closeMenu(false));
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuPanel && !menuPanel.hidden) closeMenu(true);
});
desktopMQ.addEventListener('change', (e) => {
  if (e.matches) closeMenu(false);
});

// Mobile accordions: one group open at a time.
document.querySelectorAll('.m-acc').forEach((acc) => {
  const toggle = acc.querySelector('.m-acc-toggle');
  toggle?.addEventListener('click', () => {
    const willOpen = acc.dataset.open !== 'true';
    document.querySelectorAll('.m-acc').forEach((other) => {
      other.dataset.open = 'false';
      other.querySelector('.m-acc-toggle')?.setAttribute('aria-expanded', 'false');
    });
    acc.dataset.open = String(willOpen);
    toggle.setAttribute('aria-expanded', String(willOpen));
  });
});

/* ============================================================
   Hero slider: crossfade, autoplay 5s, keyboard + swipe
   ============================================================ */
const heroSection = document.querySelector('[data-hero-slider]');
if (heroSection) {
  const slides = [...heroSection.querySelectorAll('[data-hero-slide]')];
  const counter = document.getElementById('hero-counter');
  const status = document.getElementById('hero-status');
  const total = slides.length;
  let current = 0;
  let timer = null;

  const ensureLoaded = (index) => {
    const img = slides[index]?.querySelector('img');
    if (img && img.dataset.src && !img.src.includes(img.dataset.src)) {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    }
  };

  const goTo = (index, userInitiated) => {
    current = (index + total) % total;
    ensureLoaded(current);
    slides.forEach((s, i) => {
      s.classList.toggle('is-active', i === current);
      s.setAttribute('aria-hidden', String(i !== current));
    });
    if (counter) counter.textContent = `${current + 1} / ${total}`;
    if (status) status.textContent = `Slide ${current + 1} of ${total}`;
    if (userInitiated) restartAutoplay();
  };

  const startAutoplay = () => {
    if (prefersReducedMotion || timer) return;
    timer = window.setInterval(() => goTo(current + 1, false), 5000);
  };
  const stopAutoplay = () => {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  };
  const restartAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };

  document.getElementById('hero-prev')?.addEventListener('click', () => goTo(current - 1, true));
  document.getElementById('hero-next')?.addEventListener('click', () => goTo(current + 1, true));

  heroSection.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(current - 1, true);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(current + 1, true);
    }
  });

  // Swipe support
  let touchX = null;
  heroSection.addEventListener('touchstart', (e) => {
    touchX = e.changedTouches[0].clientX;
  }, { passive: true });
  heroSection.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1), true);
    touchX = null;
  }, { passive: true });

  heroSection.addEventListener('pointerenter', stopAutoplay);
  heroSection.addEventListener('pointerleave', startAutoplay);
  heroSection.addEventListener('focusin', stopAutoplay);
  heroSection.addEventListener('focusout', startAutoplay);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAutoplay();
    else startAutoplay();
  });

  // Load the deferred slides after first paint so they are ready.
  const loadDeferred = () => {
    slides.forEach((_, i) => ensureLoaded(i));
  };
  if (document.readyState === 'complete') loadDeferred();
  else window.addEventListener('load', loadDeferred);

  startAutoplay();
}

/* ============================================================
   Gallery slider: stepped, infinite loop, progress line,
   autoplay 9s pausing on hover/interaction
   ============================================================ */
const gallerySlider = document.querySelector('[data-gallery-slider]');
if (gallerySlider) {
  const track = document.getElementById('gallery-track');
  const progress = document.getElementById('gallery-progress');
  const originals = [...track.children];
  const total = originals.length;
  const CLONES = 5;

  // Clone the first slides for a seamless loop.
  for (let i = 0; i < CLONES; i += 1) {
    const clone = originals[i].cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.classList.add('is-clone');
    const btn = clone.querySelector('button');
    if (btn) btn.tabIndex = -1;
    track.appendChild(clone);
  }

  let index = 0;
  let timer = null;
  let animating = false;

  const stepWidth = () => {
    const first = track.children[0];
    const gap = parseFloat(getComputedStyle(track).columnGap || '16') || 16;
    return first.getBoundingClientRect().width + gap;
  };

  const paint = () => {
    track.style.transform = `translateX(${-index * stepWidth()}px)`;
    if (progress) {
      const p = ((index % total) + 1) / total;
      progress.style.transform = `scaleX(${p})`;
    }
  };

  const jumpWithoutAnim = (to) => {
    track.classList.add('no-anim');
    index = to;
    paint();
    // Force reflow so the next animated step starts from the new spot.
    void track.offsetWidth;
    track.classList.remove('no-anim');
  };

  const goTo = (to, userInitiated) => {
    if (animating) return;
    if (to > total) return;
    if (to === total) {
      // Stepped onto the clones: animate, then jump back silently.
      animating = true;
      index = total;
      paint();
      window.setTimeout(() => {
        jumpWithoutAnim(0);
        animating = false;
      }, 520);
    } else if (to < 0) {
      // Wrap backwards: jump to the clone zone, then step back animated.
      animating = true;
      jumpWithoutAnim(total);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          index = total - 1;
          paint();
          window.setTimeout(() => {
            animating = false;
          }, 520);
        });
      });
    } else {
      index = to;
      paint();
    }
    if (userInitiated) restartAutoplay();
  };

  const startAutoplay = () => {
    if (prefersReducedMotion || timer) return;
    timer = window.setInterval(() => goTo(index + 1, false), 9000);
  };
  const stopAutoplay = () => {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  };
  const restartAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };

  gallerySlider.querySelectorAll('[data-g-prev]').forEach((b) => b.addEventListener('click', () => goTo(index - 1, true)));
  gallerySlider.querySelectorAll('[data-g-next]').forEach((b) => b.addEventListener('click', () => goTo(index + 1, true)));
  // The heading arrow button lives outside the slider wrapper.
  document.querySelectorAll('#portfolio [data-g-next]').forEach((b) => {
    if (!gallerySlider.contains(b)) b.addEventListener('click', () => goTo(index + 1, true));
  });

  gallerySlider.addEventListener('pointerenter', stopAutoplay);
  gallerySlider.addEventListener('pointerleave', startAutoplay);
  gallerySlider.addEventListener('focusin', stopAutoplay);
  gallerySlider.addEventListener('focusout', startAutoplay);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAutoplay();
    else startAutoplay();
  });

  window.addEventListener('resize', () => {
    jumpWithoutAnim(index % total);
  });

  paint();
  startAutoplay();
}

/* ============================================================
   Lightbox: grouped (gallery / events), keyboard-operable,
   focus managed, trap-ish Tab handling
   ============================================================ */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
let lbList = [];
let lbIndex = 0;
let lastFocused = null;

const groupTriggers = (group) => {
  const seen = new Set();
  const list = [];
  document.querySelectorAll(`[data-lightbox-trigger][data-lb-group="${group}"]`).forEach((t) => {
    if (t.closest('.is-clone')) return;
    const key = t.dataset.lbIndex;
    if (seen.has(key)) return;
    seen.add(key);
    list.push(t);
  });
  return list;
};

const showPhoto = (i) => {
  if (!lbList.length) return;
  lbIndex = (i + lbList.length) % lbList.length;
  const t = lbList[lbIndex];
  lightboxImg.src = t.dataset.full || '';
  lightboxImg.alt = t.dataset.alt || '';
  lightboxCaption.textContent = t.dataset.caption || '';
};

const openLightbox = (trigger) => {
  lbList = groupTriggers(trigger.dataset.lbGroup || 'gallery');
  const pos = lbList.findIndex((t) => t.dataset.lbIndex === trigger.dataset.lbIndex);
  lastFocused = document.activeElement;
  showPhoto(pos >= 0 ? pos : 0);
  lightbox.hidden = false;
  lightbox.classList.remove('hidden');
  lightbox.classList.add('flex');
  document.body.style.overflow = 'hidden';
  document.getElementById('lightbox-close')?.focus();
  if (!prefersReducedMotion) {
    gsap.killTweensOf([lightbox, lightboxImg]);
    gsap.fromTo(lightbox, { opacity: 0 }, { opacity: 1, duration: 0.3, overwrite: true, clearProps: 'opacity' });
    gsap.fromTo(lightboxImg, { scale: 0.96 }, { scale: 1, duration: 0.35, ease: 'power2.out', overwrite: true, clearProps: 'transform' });
  }
};

const closeLightbox = () => {
  lightbox.classList.add('hidden');
  lightbox.classList.remove('flex');
  lightbox.hidden = true;
  document.body.style.overflow = '';
  if (lastFocused && lastFocused.focus) lastFocused.focus();
};

if (lightbox) {
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-lightbox-trigger]');
    if (t) openLightbox(t);
  });
  document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev')?.addEventListener('click', () => showPhoto(lbIndex - 1));
  document.getElementById('lightbox-next')?.addEventListener('click', () => showPhoto(lbIndex + 1));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPhoto(lbIndex - 1);
    if (e.key === 'ArrowRight') showPhoto(lbIndex + 1);
    if (e.key === 'Tab') {
      const focusables = [...lightbox.querySelectorAll('button')];
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

/* ============================================================
   About: Read More expands inline
   ============================================================ */
const aboutBtn = document.getElementById('about-more-btn');
const aboutMore = document.getElementById('about-more');
aboutBtn?.addEventListener('click', () => {
  const isOpen = aboutBtn.getAttribute('aria-expanded') === 'true';
  aboutBtn.setAttribute('aria-expanded', String(!isOpen));
  if (aboutMore) aboutMore.hidden = isOpen;
  aboutBtn.textContent = isOpen ? 'Read More About Us' : 'Show Less';
});

/* ============================================================
   Contact form → mailto fallback (no backend)
   ============================================================ */
const form = document.getElementById('booking-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const message = String(data.get('message') || '').trim();
  const error = document.getElementById('form-error');

  if (!name || !email || !email.includes('@')) {
    if (error) {
      error.textContent = 'Please add your name and a valid email address so we can reply.';
      error.classList.remove('hidden');
    }
    return;
  }
  error?.classList.add('hidden');

  const subject = `Wedding booking enquiry — ${name}`;
  const body = [`Name: ${name}`, `Email: ${email}`, '', message || '(No extra details shared.)'].join('\n');

  window.location.href = `mailto:hello@vowsbyaariz.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
