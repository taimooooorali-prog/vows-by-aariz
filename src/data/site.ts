/* Shared fictional demo content for Vows by Aariz (v3).
   All copy, names, prices and testimonials are original placeholders. */

export interface ShowcaseImage {
  src: string;
  alt: string;
  ratio: string; // tailwind aspect class
  w: number;
  h: number;
}

export interface Service {
  n: number;
  title: string;
  desc: string;
  price: string;
  showId: string; // services showcase block anchor
  svcId: string; // prices row anchor
  images: [ShowcaseImage, ShowcaseImage, ShowcaseImage];
}

const G = (file: string, alt: string, ratio: string): ShowcaseImage => ({
  src: `/images/${file}`,
  alt,
  ratio,
  w: 900,
  h: 1200,
});

export const SERVICES: Service[] = [
  {
    n: 1,
    title: 'Wedding Photography',
    desc: 'Full-day documentary coverage with an editorial eye — the stolen glances, the happy tears, the baraat in full flight, hand-edited in our warm signature style.',
    price: 'PKR 85,000',
    showId: 'show-1',
    svcId: 'svc-1',
    images: [
      G('gallery-12.webp', 'Bride and groom in traditional attire posing indoors in modern bridal fashion', 'aspect-[3/4]'),
      G('gallery-02.webp', 'Couple in traditional South Asian wedding attire sharing a romantic moment outdoors', 'aspect-[4/5]'),
      G('gallery-14.webp', 'Couple in traditional attire holding hands outdoors during their wedding photoshoot', 'aspect-[3/4]'),
    ],
  },
  {
    n: 2,
    title: 'Cinematic Films',
    desc: 'Your wedding as a film, not a recording. A short teaser to share the following week, and a full-length feature scored to music that feels like your story.',
    price: 'PKR 120,000',
    showId: 'show-2',
    svcId: 'svc-2',
    images: [
      G('gallery-05.webp', 'Black and white silhouette portrait of a bride and groom at sunset', 'aspect-[3/4]'),
      G('gallery-11.webp', 'Outdoor evening event space lit with fairy lights and draped curtains', 'aspect-[4/5]'),
      G('gallery-09.webp', 'Sunset-lit outdoor wedding reception setup with adorned tables and chairs', 'aspect-[3/4]'),
    ],
  },
  {
    n: 3,
    title: 'Mehndi & Sangeet',
    desc: 'Henna, yellow, dancing aunties and two families becoming one. We shoot the colour and the chaos of your pre-wedding nights up close.',
    price: 'PKR 45,000',
    showId: 'show-3',
    svcId: 'svc-3',
    images: [
      G('gallery-08.webp', 'Bride in red and yellow covering her face with henna-decorated hands, wearing a flower garland at her mehndi', 'aspect-[3/4]'),
      G('gallery-06.webp', 'Close-up of a bride’s hands decorated with intricate henna', 'aspect-[4/5]'),
      G('gallery-07.webp', 'Close-up of a couple’s hands during a wedding ritual with henna art', 'aspect-[3/4]'),
    ],
  },
  {
    n: 4,
    title: 'Nikkah Ceremony',
    desc: 'The quietest, most sacred hour of your wedding, kept with care. Soft, unobtrusive coverage that never interrupts the moment.',
    price: 'PKR 40,000',
    showId: 'show-4',
    svcId: 'svc-4',
    images: [
      G('gallery-01.webp', 'Close-up of a smiling bride with her eyes closed hugging her groom', 'aspect-[3/4]'),
      G('gallery-04.webp', 'Black and white photograph of a wedding couple holding hands', 'aspect-[4/5]'),
      G('gallery-13.webp', 'Traditional couple in classic wedding attire sharing a joyful moment indoors', 'aspect-[3/4]'),
    ],
  },
  {
    n: 5,
    title: 'Rukhsati & Baraat',
    desc: 'The dhol, the dancing entrance, the goodbye that makes everyone cry. High-energy coverage from the first beat to the last hug.',
    price: 'PKR 60,000',
    showId: 'show-5',
    svcId: 'svc-5',
    images: [
      G('gallery-15.webp', 'Bride in a red lehenga with a veil looking down at the henna on her hands', 'aspect-[3/4]'),
      G('gallery-03.webp', 'Indian bride and groom in traditional attire embracing joyfully outdoors', 'aspect-[4/5]'),
      G('gallery-05.webp', 'Black and white silhouette portrait of a bride and groom at sunset', 'aspect-[3/4]'),
    ],
  },
  {
    n: 6,
    title: 'Pre-Wedding Shoots',
    desc: 'Relaxed couple sessions before the big day — at a haveli, in the hills, or over chai at your favourite dhaba. Get comfortable in front of the lens.',
    price: 'PKR 50,000',
    showId: 'show-6',
    svcId: 'svc-6',
    images: [
      { src: '/images/about.webp', alt: 'Newlyweds in traditional attire embracing under twinkling lights', ratio: 'aspect-[3/4]', w: 900, h: 1350 },
      G('gallery-02.webp', 'Couple in traditional South Asian wedding attire sharing a romantic moment outdoors', 'aspect-[4/5]'),
      G('gallery-14.webp', 'Couple in traditional attire holding hands outdoors during their wedding photoshoot', 'aspect-[3/4]'),
    ],
  },
  {
    n: 7,
    title: 'Family Portraits',
    desc: 'Three generations in one frame, without the herding. Patient, organised group portraits plus the candid family moments in between.',
    price: 'PKR 35,000',
    showId: 'show-7',
    svcId: 'svc-7',
    images: [
      G('gallery-13.webp', 'Traditional couple in classic wedding attire sharing a joyful moment indoors', 'aspect-[3/4]'),
      G('gallery-10.webp', 'Lavish wedding table with floral arrangements and hanging lights', 'aspect-[4/5]'),
      G('gallery-03.webp', 'Indian bride and groom in traditional attire embracing joyfully outdoors', 'aspect-[3/4]'),
    ],
  },
];

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
  event: string;
  w: number;
  h: number;
}

export const GALLERY: GalleryPhoto[] = [
  { src: '/images/gallery-01.webp', alt: 'Close-up of a smiling bride with her eyes closed hugging her groom', caption: 'The quiet embrace', event: 'Nikkah · Lahore', w: 900, h: 1200 },
  { src: '/images/gallery-02.webp', alt: 'Couple in traditional South Asian wedding attire sharing a romantic moment outdoors', caption: 'Golden hour vows', event: 'Baraat · Islamabad', w: 900, h: 1200 },
  { src: '/images/gallery-03.webp', alt: 'Indian bride and groom in traditional attire embracing joyfully outdoors', caption: 'Pure joy', event: 'Walima · Karachi', w: 900, h: 1200 },
  { src: '/images/gallery-04.webp', alt: 'Black and white photograph of a wedding couple holding hands', caption: 'Hand in hand', event: 'Nikkah · Lahore', w: 900, h: 1200 },
  { src: '/images/gallery-05.webp', alt: 'Black and white silhouette portrait of a bride and groom at sunset', caption: 'Silhouette at dusk', event: 'Rukhsati · Murree', w: 900, h: 1200 },
  { src: '/images/gallery-06.webp', alt: 'Close-up of a bride’s hands decorated with intricate henna', caption: 'Henna stories', event: 'Mehndi · Lahore', w: 900, h: 1200 },
  { src: '/images/gallery-07.webp', alt: 'Close-up of a couple’s hands during a wedding ritual with henna art', caption: 'The ritual', event: 'Mehndi · Faisalabad', w: 900, h: 1200 },
  { src: '/images/gallery-08.webp', alt: 'Bride in red and yellow covering her face with henna-decorated hands, wearing a flower garland at her mehndi', caption: 'Mehndi joy', event: 'Mehndi · Lahore', w: 900, h: 1200 },
  { src: '/images/gallery-09.webp', alt: 'Sunset-lit outdoor wedding reception setup with adorned tables and chairs', caption: 'The setting', event: 'Walima · Islamabad', w: 900, h: 1200 },
  { src: '/images/gallery-10.webp', alt: 'Lavish wedding table with floral arrangements and hanging lights', caption: 'Table for two hundred', event: 'Walima · Lahore', w: 900, h: 1200 },
  { src: '/images/gallery-11.webp', alt: 'Outdoor evening event space lit with fairy lights and draped curtains', caption: 'A thousand lights', event: 'Qawwali Night · Lahore', w: 900, h: 1200 },
  { src: '/images/gallery-12.webp', alt: 'Bride and groom in traditional attire posing indoors in modern bridal fashion', caption: 'The portrait', event: 'Baraat · Lahore', w: 900, h: 1200 },
  { src: '/images/gallery-13.webp', alt: 'Traditional couple in classic wedding attire sharing a joyful moment indoors', caption: 'Laughter, kept', event: 'Nikkah · Karachi', w: 900, h: 1200 },
  { src: '/images/gallery-14.webp', alt: 'Couple in traditional attire holding hands outdoors during their wedding photoshoot', caption: 'Walking together', event: 'Baraat · Hunza', w: 900, h: 1200 },
  { src: '/images/gallery-15.webp', alt: 'Bride in a red lehenga with a veil looking down at the henna on her hands', caption: 'The bride, in red', event: 'Baraat · Lahore', w: 900, h: 1200 },
];

export interface EventCard {
  id: string;
  names: string;
  detail: string;
  photo: GalleryPhoto;
}

export const EVENTS: EventCard[] = [
  { id: 'evt-1', names: 'Ayesha & Bilal', detail: 'Nikkah · Lahore', photo: GALLERY[0] },
  { id: 'evt-2', names: 'Mahnoor & Hamza', detail: 'Mehndi · Karachi', photo: GALLERY[7] },
  { id: 'evt-3', names: 'Zara & Daniyal', detail: 'Baraat · Islamabad', photo: GALLERY[1] },
  { id: 'evt-4', names: 'Hira & Omar', detail: 'Walima · Lahore', photo: GALLERY[2] },
  { id: 'evt-5', names: 'Sana & Ali', detail: 'Qawwali Night · Faisalabad', photo: GALLERY[10] },
  { id: 'evt-6', names: 'Noor & Hassan', detail: 'Rukhsati · Hunza', photo: GALLERY[4] },
];

export interface MegaLink {
  label: string;
  href: string;
}

export interface MegaMenu {
  key: string;
  label: string;
  panelId: string;
  heading: string;
  photo: string;
  photoAlt: string;
  links: MegaLink[];
}

export const MEGA_MENUS: MegaMenu[] = [
  {
    key: 'services',
    label: 'Services',
    panelId: 'mega-services',
    heading: 'Services',
    photo: '/images/gallery-12.webp',
    photoAlt: 'Bride and groom in traditional attire posing indoors in modern bridal fashion',
    links: [
      ...SERVICES.map((s) => ({ label: s.title, href: `#${s.showId}` })),
      { label: 'View All Services', href: '#services' },
    ],
  },
  {
    key: 'events',
    label: 'Events',
    panelId: 'mega-events',
    heading: 'Events',
    photo: '/images/gallery-08.webp',
    photoAlt: 'Bride in red and yellow covering her face with henna-decorated hands at her mehndi',
    links: [
      { label: 'Nikkah', href: '#evt-1' },
      { label: 'Mehndi', href: '#evt-2' },
      { label: 'Baraat', href: '#evt-3' },
      { label: 'Walima', href: '#evt-4' },
      { label: 'Qawwali Night', href: '#evt-5' },
      { label: 'Rukhsati', href: '#evt-6' },
      { label: 'Dholki', href: '#events' },
      { label: 'Engagement', href: '#events' },
    ],
  },
  {
    key: 'packages',
    label: 'Packages',
    panelId: 'mega-packages',
    heading: 'Packages',
    photo: '/images/gallery-02.webp',
    photoAlt: 'Couple in traditional South Asian wedding attire sharing a romantic moment outdoors',
    links: [
      ...SERVICES.map((s) => ({ label: s.title, href: `#${s.svcId}` })),
      { label: 'Custom Quote', href: '#contact' },
    ],
  },
];
