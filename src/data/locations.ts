export interface LocationHours {
  day: string;
  time: string;
}

export interface Location {
  id: string;
  name: string;
  subtitle: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  hoursDetail: LocationHours[];
  lat: number;
  lng: number;
  description: string;
  mapQuery: string;
}

export const LOCATIONS: Location[] = [
  {
    id: "yonge",
    name: "Yonge Street",
    subtitle: "Yonge St & Alexandra Blvd",
    address: "2714 Yonge Street, Toronto, ON M4N 2H9",
    phone: "416-483-2301",
    email: "yonge@prayoshathreadingbar.ca",
    hours: "Mon–Sat 10AM–7PM",
    hoursDetail: [
      { day: "Monday", time: "10:00 AM – 7:00 PM" },
      { day: "Tuesday", time: "10:00 AM – 7:00 PM" },
      { day: "Wednesday", time: "10:00 AM – 7:00 PM" },
      { day: "Thursday", time: "10:00 AM – 7:00 PM" },
      { day: "Friday", time: "10:00 AM – 7:00 PM" },
      { day: "Saturday", time: "10:00 AM – 7:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    lat: 43.7095,
    lng: -79.3985,
    description:
      "Located at the heart of Yonge & Alexandra, our flagship location offers a full range of threading, waxing, and facial services in a relaxing, welcoming environment.",
    mapQuery: "2714+Yonge+Street+Toronto+ON+M4N+2H9",
  },
  {
    id: "church",
    name: "Church Street",
    subtitle: "Bloor St East & Church St",
    address: "616 Church Street, Toronto, ON M4Y 2G2",
    phone: "416-923-2301",
    email: "church@prayoshathreadingbar.ca",
    hours: "Mon–Sat 10AM–7PM",
    hoursDetail: [
      { day: "Monday", time: "10:00 AM – 7:00 PM" },
      { day: "Tuesday", time: "10:00 AM – 7:00 PM" },
      { day: "Wednesday", time: "10:00 AM – 7:00 PM" },
      { day: "Thursday", time: "10:00 AM – 7:00 PM" },
      { day: "Friday", time: "10:00 AM – 7:00 PM" },
      { day: "Saturday", time: "10:00 AM – 7:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    lat: 43.6685,
    lng: -79.3808,
    description:
      "Conveniently situated near Bloor & Church, this location is perfect for a quick visit before or after work. Walk-ins welcome!",
    mapQuery: "616+Church+Street+Toronto+ON+M4Y+2G2",
  },
  {
    id: "harbour",
    name: "Harbour Square",
    subtitle: "Bay St & Queens Quay",
    address: "47B/33 Harbour Square, Toronto, ON M5J 2G2",
    phone: "416-366-2301",
    email: "harbour@prayoshathreadingbar.ca",
    hours: "Mon–Sat 10AM–7PM",
    hoursDetail: [
      { day: "Monday", time: "10:00 AM – 7:00 PM" },
      { day: "Tuesday", time: "10:00 AM – 7:00 PM" },
      { day: "Wednesday", time: "10:00 AM – 7:00 PM" },
      { day: "Thursday", time: "10:00 AM – 7:00 PM" },
      { day: "Friday", time: "10:00 AM – 7:00 PM" },
      { day: "Saturday", time: "10:00 AM – 7:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    lat: 43.6394,
    lng: -79.3763,
    description:
      "Our waterfront location at Harbour Square offers stunning views and a full suite of beauty services. A hidden gem by the lake.",
    mapQuery: "33+Harbour+Square+Toronto+ON+M5J+2G2",
  },
  {
    id: "bathurst",
    name: "Bathurst Street",
    subtitle: "St. Clair West & Bathurst St",
    address: "1500 Bathurst St, Unit 5, Toronto, ON M5P 3L3",
    phone: "416-654-2301",
    email: "bathurst@prayoshathreadingbar.ca",
    hours: "Mon–Sat 10AM–7PM",
    hoursDetail: [
      { day: "Monday", time: "10:00 AM – 7:00 PM" },
      { day: "Tuesday", time: "10:00 AM – 7:00 PM" },
      { day: "Wednesday", time: "10:00 AM – 7:00 PM" },
      { day: "Thursday", time: "10:00 AM – 7:00 PM" },
      { day: "Friday", time: "10:00 AM – 7:00 PM" },
      { day: "Saturday", time: "10:00 AM – 7:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    lat: 43.6811,
    lng: -79.4117,
    description:
      "Nestled in the St. Clair West neighbourhood, our Bathurst location serves the midtown community with expert threading and waxing services.",
    mapQuery: "1500+Bathurst+St+Toronto+ON+M5P+3L3",
  },
  {
    id: "danforth",
    name: "Danforth Avenue",
    subtitle: "Danforth Ave & Broadview",
    address: "348 Danforth Avenue, Toronto, ON M4K 1N8",
    phone: "416-778-2301",
    email: "danforth@prayoshathreadingbar.ca",
    hours: "Mon–Sat 10AM–7PM",
    hoursDetail: [
      { day: "Monday", time: "10:00 AM – 7:00 PM" },
      { day: "Tuesday", time: "10:00 AM – 7:00 PM" },
      { day: "Wednesday", time: "10:00 AM – 7:00 PM" },
      { day: "Thursday", time: "10:00 AM – 7:00 PM" },
      { day: "Friday", time: "10:00 AM – 7:00 PM" },
      { day: "Saturday", time: "10:00 AM – 7:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    lat: 43.6774,
    lng: -79.3528,
    description:
      "Our newest East Toronto location on the vibrant Danforth strip. Full services available with easy TTC access from Broadview station.",
    mapQuery: "348+Danforth+Avenue+Toronto+ON+M4K+1N8",
  },
];
