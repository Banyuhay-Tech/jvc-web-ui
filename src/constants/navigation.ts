export const LOGO_URL = '/logo.svg';

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
  { name: 'About', id: 'about', href: '/about/' },
  { name: 'Contact', id: 'contact', href: '/contact/' },
];

export const QUICK_LINKS = [
  { name: 'About', href: '/about/' },
  { name: 'Contact', href: '/contact/' },
];
