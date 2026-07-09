export const navigationLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Corporate Events',
    path: '/corporate-events',
   dropdown: [
  { label: 'Conferences & Seminars', path: '/corporate-events#conferences' },
  { label: 'Product Launches', path: '/corporate-events#product-launches' },
  { label: 'Leadership Summits', path: '/corporate-events#summits' },
  { label: 'Award Ceremonies', path: '/corporate-events#awards' },
  { label: 'Corporate Retreats', path: '/corporate-events#retreats' },
  { label: 'Trade Shows & Expos', path: '/corporate-events#trade-shows' }
]
  },
  {
  label: 'Gallery',
  path: '/gallery'
},  
{ label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' }
];

export const socialLinks = [
  { name: 'Facebook', url: '#', icon: 'facebook' },
  { name: 'Twitter/X', url: '#', icon: 'twitter' },
  { name: 'Instagram', url: '#', icon: 'instagram' },
  { name: 'LinkedIn', url: '#', icon: 'linkedin' }
];
