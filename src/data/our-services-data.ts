export type ServiceIconName =
  | 'consultation'
  | 'surgery'
  | 'vaccination'
  | 'radiography'
  | 'grooming'
  | 'petHotel'
  | 'pharmacy'
  | 'laboratory'
  | 'confinement'
  | 'microscopy'
  | 'ultrasonography';

export const SERVICES_CONTENT = {
  title: "Our Services",
  branches: [
    {
      name: "KAWIT BRANCH",
      address:
        "Covelandia Rd., Sea Oil Gas Station,\nBalsahan, Kawit, Philippines",
      services: [
        { title: "Veterinary Consultation", iconName: 'consultation' as ServiceIconName },
        { title: "Surgery", iconName: 'surgery' as ServiceIconName },
        { title: "Vaccination", iconName: 'vaccination' as ServiceIconName },
        { title: "Radiography\n(X-Ray)", iconName: 'radiography' as ServiceIconName },
        { title: "Grooming", iconName: 'grooming' as ServiceIconName },
        { title: "Pet Hotel (Overnight Pet Boarding)", iconName: 'petHotel' as ServiceIconName },
        { title: "Pharmacy", iconName: 'pharmacy' as ServiceIconName },
        { title: "Laboratory Tests", iconName: 'laboratory' as ServiceIconName },
      ],
    },
    {
      name: "IMUS BRANCH",
      address:
        "Samson Bldg., Bayanihan Homes, Anabu\n2D, Imus, Philippines, 4103",
      services: [
        { title: "Veterinary Consultation", iconName: 'consultation' as ServiceIconName },
        { title: "Confinement", iconName: 'confinement' as ServiceIconName },
        { title: "Surgery", iconName: 'surgery' as ServiceIconName },
        { title: "Vaccination", iconName: 'vaccination' as ServiceIconName },
        { title: "Laboratory Tests", iconName: 'laboratory' as ServiceIconName },
        { title: "Microscopy", iconName: 'microscopy' as ServiceIconName },
        { title: "Ultrasonography", iconName: 'ultrasonography' as ServiceIconName },
        { title: "Pharmacy", iconName: 'pharmacy' as ServiceIconName },
      ],
    },
  ],
} as const;
