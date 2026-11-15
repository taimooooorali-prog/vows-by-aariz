import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   Motion (GSAP) — all initial states are set via JS only, so
   content stays fully visible if JS or GSAP fails to load.
   ============================================================ */
if (!prefersReducedMotion) {
  // --- Split-text hero headline: wrap words in spans, then reveal ---
  document.querySelectorAll('.split-line').forEach((line) => {
    const nodes = [...line.childNodes];
    line.textContent = '';
    nodes.forEach((node) => {
      const words = [];
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent
          .split(/\s+/)
          .filter(Boolean)
          .forEach((w) => {
            const s = document.createElement('span');
            s.className = 'split-word';
            s.textContent = w;
            words.push(s);
          });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const s = document.createElement('span');
        s.className = 'split-word';
        s.appendChild(node);
        words.push(s);
      }
      words.forEach((w) => {
        line.appendChild(w);
        line.appendChild(document.createTextNode(' '));
      });
    });
  });

  gsap.from('.split-word', {
    yPercent: 115,
    duration: 1,
    stagger: 0.07,
    ease: 'power4.out',
    delay: 0.15,
  });

  // --- Scroll entrances: alternate directions by class ---
  const reveal = (selector, vars) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.from(el, {
        ...vars,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });
  };
  reveal('.reveal-up', { y: 36, opacity: 0 });
  reveal('.reveal-left', { x: -44, opacity: 0 });
  reveal('.reveal-right', { x: 44, opacity: 0 });

  // --- Clip-path image reveals ---
  gsap.utils.toArray('.reveal-img').forEach((el) => {
    gsap.from(el, {
      clipPath: 'inset(0 0 100% 0)',
      duration: 1.2,
      ease: 'power4.inOut',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });

  // --- Subtle parallax: hero image + wide band (desktop-weighted) ---
  const heroImg = document.querySelector('[data-parallax]');
  if (heroImg) {
    gsap.fromTo(
      heroImg,
      { yPercent: -3, scale: 1.08 },
      {
        yPercent: 3,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: { trigger: '[data-parallax-wrap]', start: 'top top', end: 'bottom top', scrub: true },
      }
    );
  }
  const bandImg = document.querySelector('[data-parallax-band]');
  if (bandImg) {
    gsap.fromTo(
      bandImg,
      { yPercent: -10 },
      {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: { trigger: bandImg.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
      }
    );
  }

  // --- Animated counters ---
  gsap.utils.toArray('.counter').forEach((el) => {
    const target = parseFloat(el.dataset.count || '0');
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => {
        el.textContent = obj.v.toFixed(decimals);
      },
      onComplete: () => {
        el.textContent = target.toFixed(decimals);
      },
    });
  });

  // --- Magnetic buttons (fine pointers only) ---
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.magnetic').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        gsap.to(el, {
          x: (e.clientX - r.left - r.width / 2) * 0.18,
          y: (e.clientY - r.top - r.height / 2) * 0.18,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1, 0.5)' });
      });
    });
  }
}

/* ============================================================
   Header state on scroll
   ============================================================ */
const header = document.getElementById('site-header');
const setHeader = () => {
  if (!header) return;
  const scrolled = window.scrollY > 40;
  header.classList.toggle('bg-ivory/90', scrolled);
  header.classList.toggle('backdrop-blur-md', scrolled);
  header.classList.toggle('shadow-card', scrolled);
};
setHeader();
window.addEventListener('scroll', setHeader, { passive: true });

/* ============================================================
   Gallery filters
   ============================================================ */
const chips = [...document.querySelectorAll('.filter-chip')];
const galleryItems = [...document.querySelectorAll('.gallery-item')];
const emptyNote = document.getElementById('gallery-empty');

const paintChips = (active) => {
  chips.forEach((chip) => {
    const isActive = chip === active;
    chip.setAttribute('aria-pressed', String(isActive));
    chip.classList.toggle('bg-espresso', isActive);
    chip.classList.toggle('text-ivory', isActive);
    chip.classList.toggle('border-espresso', isActive);
    chip.classList.toggle('border-sand', !isActive);
    chip.classList.toggle('text-espresso', !isActive);
    chip.classList.toggle('hover:border-gold', !isActive);
  });
};
paintChips(chips[0]);

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    paintChips(chip);
    const key = chip.dataset.filter;
    let visible = 0;
    const shown = [];
    galleryItems.forEach((item) => {
      const show = key === 'all' || item.dataset.category === key;
      item.classList.toggle('is-hidden', !show);
      if (show) {
        visible += 1;
        shown.push(item);
      }
    });
    if (emptyNote) emptyNote.classList.toggle('hidden', visible > 0);
    // Reset any stale inline reveal state, then fade reshown tiles in.
    // Without this, tiles reshown by a filter switch can stay blank
    // (stale opacity/transform + no re-trigger for in-view items).
    gsap.killTweensOf(galleryItems);
    gsap.set(galleryItems, { clearProps: 'opacity,transform' });
    if (!prefersReducedMotion && shown.length) {
      gsap.fromTo(
        shown,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.04,
          ease: 'power2.out',
          overwrite: true,
          clearProps: 'opacity,transform',
        }
      );
    }
    ScrollTrigger.refresh();
  });
});

/* ============================================================
   Lightbox (keyboard-operable, focus managed)
   ============================================================ */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const triggers = [...document.querySelectorAll('[data-lightbox-trigger]')];
let currentIndex = 0;
let lastFocused = null;

const visibleTriggers = () =>
  triggers.filter((t) => !t.closest('.gallery-item')?.classList.contains('is-hidden'));

const showPhoto = (index) => {
  const list = visibleTriggers();
  if (!list.length) return;
  currentIndex = (index + list.length) % list.length;
  const t = list[currentIndex];
  lightboxImg.src = t.dataset.full || '';
  lightboxImg.alt = t.dataset.alt || '';
  lightboxCaption.textContent = t.dataset.caption || '';
};

const openLightbox = (trigger) => {
  const list = visibleTriggers();
  lastFocused = document.activeElement;
  showPhoto(list.indexOf(trigger));
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
  document.getElementById('gallery-grid')?.addEventListener('click', (e) => {
    const t = e.target.closest('[data-lightbox-trigger]');
    if (t) openLightbox(t);
  });
  galleryItems.forEach((item) => {
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const t = item.querySelector('[data-lightbox-trigger]');
        if (t) openLightbox(t);
      }
    });
  });
  document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev')?.addEventListener('click', () => showPhoto(currentIndex - 1));
  document.getElementById('lightbox-next')?.addEventListener('click', () => showPhoto(currentIndex + 1));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPhoto(currentIndex - 1);
    if (e.key === 'ArrowRight') showPhoto(currentIndex + 1);
    // Minimal focus trap: keep Tab inside the dialog
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
   FAQ accordion
   ============================================================ */
document.querySelectorAll('.faq-item').forEach((item) => {
  const toggle = item.querySelector('.faq-toggle');
  toggle?.addEventListener('click', () => {
    const isOpen = item.dataset.open === 'true';
    document.querySelectorAll('.faq-item').forEach((other) => {
      other.dataset.open = 'false';
      other.querySelector('.faq-toggle')?.setAttribute('aria-expanded', 'false');
    });
    item.dataset.open = String(!isOpen);
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
});

/* ============================================================
   Booking form → mailto fallback (no backend)
   ============================================================ */
const form = document.getElementById('booking-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const contact = String(data.get('contact') || '').trim();
  const date = String(data.get('date') || '').trim();
  const city = String(data.get('city') || '').trim();
  const pkg = String(data.get('package') || '').trim();
  const message = String(data.get('message') || '').trim();
  const error = document.getElementById('form-error');

  if (!name || !contact) {
    if (error) {
      error.textContent = 'Please add your names and a phone number or email so we can reply.';
      error.classList.remove('hidden');
    }
    return;
  }
  error?.classList.add('hidden');

  const subject = `Wedding booking enquiry — ${name}`;
  const body = [
    `Names: ${name}`,
    `Contact: ${contact}`,
    `Event date: ${date || 'Not decided yet'}`,
    `City: ${city}`,
    `Package: ${pkg}`,
    '',
    message || '(No extra details shared.)',
  ].join('\n');

  window.location.href = `mailto:hello@vowsbyaariz.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
