export const company = {
  name: "African Brotherhood Mining Services & General Trading Limited",
  shortName: "ABMS Limited",
  tagline: "United in Strength. Driven by Excellence.",
  founded: "2026",
  founders: 19,
  hq: "Lusaka, Zambia",
  phone: "+260 977 176 214",
  email: "info@abmslimited.com",
  website: "www.abmslimited.com",
  address: "Barlastone Park, Lusaka West, Lusaka Province, Zambia",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const coreValues = [
  { code: "01", label: "Unity" },
  { code: "02", label: "Integrity & Transparency" },
  { code: "03", label: "Excellence" },
  { code: "04", label: "Innovation" },
  { code: "05", label: "Accountability" },
  { code: "06", label: "Safety Compliance" },
  { code: "07", label: "Professionalism & Partnership" },
  { code: "08", label: "Community Empowerment" },
];

export const vision =
  "To become a leading African-owned mining services and diversified trading company, recognized across Zambia and the region for operational excellence, reliability, integrity, and transformative impact.";

export const mission =
  "To deliver efficient, safe, innovative, and cost-effective mining and trading solutions that enhance client productivity, create sustainable value, and empower communities across Africa.";

export const whoWeAre = [
  "African Brotherhood Mining Services & General Trading Limited is a Zambian-registered company headquartered in Lusaka, established in 2026 by nineteen African professionals bringing together diverse expertise in mining, engineering, construction, logistics, procurement, and business development.",
  "The company was formed to combine this collective skill, experience, and vision to deliver reliable and sustainable mining services, mining support solutions, and comprehensive general trading services across Zambia and the wider African region. We serve clients throughout the country with professionalism, integrity, and operational excellence, understanding the operational demands of the mining industry and committing to services that meet strict safety and performance standards.",
];

export type Service = {
  id: string;
  rl: string; // bench elevation label, ties to the mining-bench motif
  code: string;
  title: string;
  intro: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "mining-services",
    rl: "RL 1310",
    code: "01",
    title: "Mining Services",
    intro:
      "Specialized services designed to support mining operations efficiently and safely.",
    items: [
      "Mining operational support services",
      "Mining equipment supply, maintenance, and support",
      "Earthmoving and excavation services",
      "Site preparation and logistical support",
      "Labour support services",
      "Mining consumables supply",
      "Maintenance coordination support and industrial plant maintenance",
    ],
  },
  {
    id: "mining-support-services",
    rl: "RL 1280",
    code: "02",
    title: "Mining Support Services",
    intro:
      "Comprehensive support solutions tailored to keep mining operations running without interruption.",
    items: [
      "Supply of mining tools and equipment",
      "Safety equipment (PPE) supply",
      "Industrial materials procurement",
      "Mechanical and electrical installations",
      "On-site operational assistance",
      "Transport and delivery coordination",
    ],
  },
  {
    id: "general-trading-supply",
    rl: "RL 1250",
    code: "03",
    title: "General Trading & Supply Services",
    intro:
      "Diversified general supply services to government institutions, private companies, contractors, and SMEs across Zambia.",
    items: [
      "Industrial and construction materials",
      "Construction materials and industrial tools",
      "Agricultural equipment supply",
      "Office equipment and stationery",
      "Electrical and mechanical supplies",
      "Cleaning materials and consumables",
      "Corporate procurement solutions",
    ],
  },
  {
    id: "logistics-procurement-advisory",
    rl: "RL 1220",
    code: "04",
    title: "Logistics, Procurement & Advisory Services",
    intro: "Services that support the full project lifecycle.",
    items: [
      "Logistics and procurement services",
      "Project consultancy and technical advisory",
      "Transport and delivery coordination",
    ],
  },
];

export const targetIndustries = [
  "Mining Companies",
  "Construction Firms",
  "Manufacturing Industries",
  "Government Institutions",
  "Agricultural Enterprises",
  "Energy & Utility Companies",
];

export const whyChooseUs = [
  "Combined expertise of 19 founding professionals across mining, engineering, construction, logistics, and procurement",
  "Strong understanding of Zambia's mining sector",
  "Strong technical and operational capability",
  "Reliable supplier networks and deep local market knowledge",
  "Competitive pricing structure",
  "Professional management and coordination",
  "Commitment to safety and regulatory compliance",
  "Client-focused, nationwide service capability",
];

export const provinces = [
  "Lusaka",
  "Copperbelt",
  "Central",
  "Southern",
  "Eastern",
  "Western",
  "North-Western",
  "Northern",
  "Muchinga",
  "Luapula",
];

export const commitmentPrinciples = [
  "Integrity and transparency",
  "Quality assurance",
  "Safety compliance",
  "Timely delivery",
  "Client-focused service",
];

export const commitmentQuote =
  "African Brotherhood Mining Services & General Trading Limited stands as a dependable partner in Zambia's mining and industrial sector. We are dedicated to building long-term partnerships through quality service delivery, operational efficiency, and an unwavering commitment to excellence.";

export const businessHours = {
  days: "Monday &ndash; Friday",
  hours: "08:00 &ndash; 17:00 (CAT)",
  note: "Confirm/edit these hours in lib/content.ts &mdash; not specified in the source company profile.",
};

export const faqs = [
  {
    q: "What services does ABMS Limited provide?",
    a: "We provide four integrated service lines: mining services, mining support services, general trading & supply, and logistics, procurement & advisory services. See the Services page for the full breakdown of each.",
  },
  {
    q: "Which areas of Zambia do you cover?",
    a: "We are headquartered in Lusaka and serve clients across all ten provinces of Zambia, from Lusaka to the mining regions nationwide.",
  },
  {
    q: "Do you supply safety equipment and PPE?",
    a: "Yes. Our mining support services include the supply of PPE, mining tools and equipment, industrial materials procurement, and mechanical and electrical installations.",
  },
  {
    q: "How do I request a quote?",
    a: "Use the contact form on our Contact page, or reach us directly by phone or email — our team will get back to you to discuss your requirements.",
  },
  {
    q: "Do you work with government institutions and SMEs?",
    a: "Yes. Beyond mining companies, our general trading and supply services also serve government institutions, private companies, contractors and SMEs across Zambia.",
  },
];

export const expertiseTeams = [
  {
    image: "person_1.jpg",
    label: "Core Expertise",
    title: "Mining & Engineering",
    text: "Specialists in mining operations, earthmoving, excavation and industrial plant maintenance.",
  },
  {
    image: "person_2.jpg",
    label: "Core Expertise",
    title: "Logistics & Procurement",
    text: "Coordinating transport, delivery, materials procurement and supplier networks nationwide.",
  },
  {
    image: "person_3.jpg",
    label: "Core Expertise",
    title: "Business Development & Trade",
    text: "Building partnerships across mining, construction, government and general trading sectors.",
  },
];

