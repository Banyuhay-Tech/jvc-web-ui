export const LOGO_URL = '/images/logo.png';

export interface NavLinkChild {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  id: string;
  href: string;
  children?: readonly NavLinkChild[];
}

export const NAV_LINKS: readonly NavLink[] = [
  { name: 'Home', id: 'home', href: '/' },
  { name: 'About Us', id: 'about', href: '/about/' },
  { name: 'Contact Us', id: 'contact', href: '/contact/' },
];

export const QUICK_LINKS = [
  { name: 'About Us', href: '/about/' },
  { name: 'Contact Us', href: '/contact/' },
];
