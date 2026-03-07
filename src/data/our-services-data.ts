export const SERVICES_CONTENT = {
  title: "Our Services",
  branches: [
    {
      name: "KAWIT BRANCH",
      address:
        "Covelandia Rd., Sea Oil Gas Station,\nBalsahan, Kawit, Philippines",
      service: {
        title: "Veterinary\nConsultation",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 5c-1.5 0-2.5 1-3 2-1.5 0-3 1-3 2.5 0 1 1.5 2 1.5 2v3c0 1.5 1 3 2.5 3h4c1.5 0 2.5-1.5 2.5-3v-3c0 0 1.5-1 1.5-2C18 7 16.5 6 15 6c-.5-1-1.5-2-3-2z"></path>
          <path d="M7 10c-2 0-3 1-3 2.5 0 1.5 2 2.5 3 2.5"></path>
          <path d="M14 16v4m-2-2h4"></path>
          <circle cx="9" cy="9" r="0.5" fill="currentColor"></circle>
          <circle cx="15" cy="9" r="0.5" fill="currentColor"></circle>
        </svg>`,
      },
    },
    {
      name: "IMUS BRANCH",
      address:
        "Samson Bldg., Bayanihan Homes, Anabu\n2D, Imus, Philippines, 4103",
      service: {
        title: "Confinement",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          <circle cx="15" cy="15" r="4"></circle>
          <path d="M13.5 13.5a1 1 0 1 1 1-1"></path>
          <path d="M15 12.5a1 1 0 1 1 1-1"></path>
          <path d="M16.5 13.5a1 1 0 1 1 1-1"></path>
          <path d="M15 15.5a1.5 1.5 0 1 1 0-3"></path>
        </svg>`,
      },
    },
  ],
} as const;
