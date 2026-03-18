globalThis.process ??= {}; globalThis.process.env ??= {};
const VISIT_US_CONTENT = {
  title: "Visit Us",
  branches: [
    {
      name: "KAWIT BRANCH",
      address: "Covelandia Rd., Sea Oil Gas Station,\nBalsahan, Kawit, Philippines",
      mapImage: "/images/kawit-map.png",
      phone: "09171330774",
      hours: "Mon-Sun: 9am-12pm, 2-6pm",
      facebookText: "Message JVC Kawit on Facebook!",
      facebookLink: "https://www.facebook.com/CaviteVet"
    },
    {
      name: "IMUS BRANCH",
      address: "Samson Bldg., Bayanihan Homes, Anabu\n2D, Imus, Philippines, 4103",
      mapImage: "/images/imus-map.png",
      phone: "09271122473",
      hours: "Mon-Sun: 9am-12pm, 2-6pm",
      facebookText: "Message JVC Imus on Facebook!",
      facebookLink: "https://www.facebook.com/profile.php?id=61572736326394"
    }
  ]
};

export { VISIT_US_CONTENT as V };
