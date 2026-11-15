import type { Faq } from "@/lib/faq-data";

export interface ServiceInfo {
  slug: string;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  vehicle: "car" | "auto";
  bullets: string[];
  places?: string[];
  faqs: Faq[];
}

export const SERVICES: ServiceInfo[] = [
  {
    slug: "car-travel",
    name: "Car Travel & Taxi",
    tagline:
      "Comfortable car travel and taxi service for local journeys, outstation travel, and long-distance trips.",
    metaTitle: "Car Taxi Service in Anakapalli & Madugula | CAR & AUTO TRAVELS",
    metaDescription:
      "Arrange local taxi, pickup and outstation car trips from Madugula and Anakapalli to Visakhapatnam and nearby areas. Call or WhatsApp 9000728564 to discuss your trip.",
    vehicle: "car",
    bullets: [
      "Local car and taxi travel in Visakhapatnam, Anakapalli, Madugula and nearby areas",
      "Outstation car travel for longer journeys and customer-requested destinations",
      "One-way and return trips arranged by call or WhatsApp",
      "Trips run in our white Swift Desire car",
    ],
    faqs: [
      {
        q: "How do I book a car trip?",
        a: "Call 9000728564 or send your trip details on WhatsApp (+91 9000728564). Bookings are confirmed by call or WhatsApp only.",
      },
      {
        q: "Which car do you use?",
        a: "Car and taxi trips run in our white Swift Desire car.",
      },
      {
        q: "How much does a car trip cost?",
        a: "Fares are not published online. Call us with your journey details and we will agree the fare before you travel.",
      },
    ],
  },
  {
    slug: "auto-travel",
    name: "Auto Travel",
    tagline: "Convenient local auto travel for quick pickup, drop, and nearby journeys.",
    metaTitle: "Local Auto Travel in Madugula & Anakapalli | CAR & AUTO TRAVELS",
    metaDescription:
      "Arrange local auto (three-wheeler) travel for nearby pickup, drop and short journeys in Madugula, Anakapalli and nearby areas. Call 9000728564.",
    vehicle: "auto",
    bullets: [
      "Quick local auto travel for pickup and drop",
      "Handy for nearby journeys and short local trips",
      "Easy to arrange by call or WhatsApp",
    ],
    faqs: [
      {
        q: "Do you provide autos for short local trips?",
        a: "Yes. Our auto service covers quick pickup, drop and nearby journeys around Madugula, Anakapalli and nearby areas.",
      },
      {
        q: "How do I arrange an auto?",
        a: "Call 9000728564 or message us on WhatsApp (+91 9000728564) with your pickup and drop locations.",
      },
      {
        q: "Is auto travel available for outstation trips?",
        a: "Auto travel is for quick local journeys. For outstation and long-distance trips we use our Swift Desire car — see our Long-Distance Travel service.",
      },
    ],
  },
  {
    slug: "pickup-drop",
    name: "Pickup & Drop",
    tagline: "Reliable one-way pickup and drop services.",
    metaTitle: "Pickup & Drop Travel in Anakapalli & Visakhapatnam | CAR & AUTO TRAVELS",
    metaDescription:
      "Discuss one-way pickup and drop trips across Visakhapatnam, Anakapalli, Madugula and nearby areas. Call or WhatsApp 9000728564 to arrange a trip.",
    vehicle: "car",
    bullets: [
      "One-way pickup from your location",
      "Direct drop at your destination",
      "Available across Visakhapatnam, Anakapalli, Madugula and nearby areas",
    ],
    faqs: [
      {
        q: "What is a pickup and drop service?",
        a: "A reliable one-way ride: we pick you up at your location and drop you directly at your destination.",
      },
      {
        q: "Which areas do you cover?",
        a: "Pickup and drop runs across Visakhapatnam, Anakapalli, Madugula and nearby areas of Andhra Pradesh.",
      },
      {
        q: "How do I book a pickup?",
        a: "Call 9000728564 or message us on WhatsApp with your pickup point, destination and time. Bookings are confirmed by call or WhatsApp only.",
      },
    ],
  },
  {
    slug: "long-distance",
    name: "Long-Distance Travel",
    tagline: "Outstation car travel for longer journeys and customer-requested destinations.",
    metaTitle: "Outstation Car Travel from Anakapalli | CAR & AUTO TRAVELS",
    metaDescription:
      "Arrange outstation car travel from Anakapalli and nearby areas to Tirupati, Annavaram, Kakinada, Vijayawada and other requested destinations. Discuss fares by phone: 9000728564.",
    vehicle: "car",
    bullets: [
      "Outstation car travel in our Swift Desire",
      "Popular long-distance and pilgrimage destinations across Andhra Pradesh",
      "Customer-requested destinations welcome",
    ],
    places: [
      "Tirupati",
      "Annavaram",
      "Kakinada",
      "Visakhapatnam",
      "Narsipatnam",
      "Chodavaram",
      "Vijayawada",
      "Vijayanagaram",
      "Sri Kakulam",
      "Sri Sailam",
      "Aruku",
      "Gandikota",
      "Lepakshi",
    ],
    faqs: [
      {
        q: "Which long-distance destinations do you cover?",
        a: "Popular destinations include Tirupati, Annavaram, Kakinada, Visakhapatnam, Narsipatnam, Chodavaram, Vijayawada, Vijayanagaram, Sri Kakulam, Sri Sailam, Aruku, Gandikota and Lepakshi.",
      },
      {
        q: "Can you take me somewhere that is not on the list?",
        a: "Yes. Customer-requested destinations are welcome. Tell us where you want to go when you call or message on WhatsApp.",
      },
      {
        q: "How is the fare decided for a long trip?",
        a: "Long-distance fares are agreed by phone before travel. They are not published online.",
      },
    ],
  },
];

export const SERVICE_SLUGS = SERVICES.map((service) => service.slug);
