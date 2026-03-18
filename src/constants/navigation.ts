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
  { name: 'Our Services', id: 'about', href: '/#our-services' },
  { name: 'Contact Us', id: 'contact', href: '/#visit-us' },
];

export const QUICK_LINKS = [
  { name: 'Our Services', href: '/#our-services' },
  { name: 'Contact Us', href: '/#visit-us' },
];
