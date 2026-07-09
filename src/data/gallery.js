export const galleryCategories = [
  { id: 'all', label: 'All Events' },
  { id: 'corporate', label: 'Corporate Events' },
  { id: 'exhibitions', label: 'Exhibitions & Trade Shows' },
  { id: 'experiential', label: 'Experiential Activations' }
];

export const galleryItems = [
  {
    id: 1,
    category: 'corporate',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=75&auto=format',
    alt: 'Corporate conference with large crowd'
  },
  {
    id: 2,
    category: 'corporate',
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=75&auto=format',
    alt: 'Corporate conference networking session'
  },
  {
    id: 3,
    category: 'corporate',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=75&auto=format',
    alt: 'Award ceremony elegant stage hall'
  },
  {
    id: 4,
    category: 'corporate',
    src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=75&auto=format',
    alt: 'Corporate conference staging and AV production'
  },
  {
    id: 5,
    category: 'exhibitions',
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=75&auto=format',
    alt: 'Trade show exhibition floor and booths'
  },
  {
    id: 6,
    category: 'exhibitions',
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=75&auto=format',
    alt: 'Exhibition hall custom fabrication stall'
  },
  {
    id: 7,
    category: 'exhibitions',
    src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=75&auto=format',
    alt: 'Tech expo customized pavilion setup'
  },
  {
    id: 8,
    category: 'exhibitions',
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=75&auto=format',
    alt: 'Premium product display trade show stand'
  },
  {
    id: 9,
    category: 'experiential',
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=75&auto=format',
    alt: 'Premium experiential brand activation setup'
  },
  {
    id: 10,
    category: 'experiential',
    src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=75&auto=format',
    alt: 'Immersive projection experiential brand installation'
  },
  {
    id: 11,
    category: 'experiential',
    src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=75&auto=format',
    alt: 'High-end corporate product launch sound & light production'
  },
  {
    id: 12,
    category: 'corporate',
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=75&auto=format',
    alt: 'Corporate retreat and outdoor leadership team building'
  }
];

export const gallerySections = [
  {
    id: 'corporate',
    category: 'corporate',
    label: 'Corporate Events & Retreats',
    items: galleryItems.filter(item => item.category === 'corporate')
  },
  {
    id: 'exhibitions',
    category: 'exhibitions',
    label: 'Exhibitions & Trade Shows',
    items: galleryItems.filter(item => item.category === 'exhibitions')
  },
  {
    id: 'experiential',
    category: 'experiential',
    label: 'Experiential Activations & Launches',
    items: galleryItems.filter(item => item.category === 'experiential')
  }
];
