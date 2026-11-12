export const BRAND = {
  name: "VM Overseas",
  tagline: "FLY HIGH",
  est: "2021",
  heroImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=75",
  heroImageAlt: "Classic university building across a green campus lawn",
  secondaryHero: "https://images.unsplash.com/photo-1769283998994-f8f892a90dc9?auto=format&fit=crop&w=1600&q=75",
  secondaryHeroAlt: "Angular campus building with reflective glass windows",
  storyImage: "https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=1600&q=75",
  storyImageAlt: "Graduate holding a mortarboard cap at a graduation ceremony",
  graduationImage: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=1600&q=75",
  graduationImageAlt: "International graduates in black robes tossing caps",
  skylineImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=75",
  skylineImageAlt: "Graduation celebration overlooking an international city skyline",
};

export const NAV_LINKS = [
  { label: "Home", to: "/", id: "home" },
  { label: "About Us", to: "/about", id: "about" },
  { label: "Destinations", to: "/destinations", id: "destinations" },
  { label: "Services", to: "/services", id: "services" },
  { label: "Contact", to: "/contact", id: "contact" },
];

export const DESTINATIONS = [
  {
    id: "usa",
    name: "United States",
    tag: "USA",
    path: "/destinations/usa",
    image: "https://images.unsplash.com/photo-1777651860848-e519486205c8?auto=format&fit=crop&w=1600&q=75",
    imageAlt: "Iconic American landmark and skyline",
    blurb: "The world's largest international student community, home to an unmatched breadth of universities, research opportunities and flexible academic pathways.",
    why: [
      "More globally ranked universities than any other country, across every discipline and budget band.",
      "Flexible curricula that let students explore subjects before committing to a major.",
      "Optional Practical Training (OPT) pathways that can extend valuable work experience after graduation.",
      "A deep culture of research funding, assistantships and on-campus opportunities for deserving profiles.",
    ],
    fields: ["Computer Science & AI", "Business & Management", "Engineering", "Data Science & Analytics", "Medicine & Life Sciences", "Finance & Economics"],
    considerations: [
      "University fit matters more than rank alone — we assess course structure, faculty, location and total cost together.",
      "Costs vary widely between public and private institutions; we map options against your realistic budget before shortlisting.",
      "Standardised test expectations (SAT/GRE/GMAT, English proficiency) differ by university and program.",
      "Application timelines, essay requirements and recommendation strategy differ significantly from other destinations.",
    ],
    planning: "US applications typically open 12–15 months before intake. A strong plan sequences test preparation, university research, essays and recommendations well ahead of Early and Regular Decision deadlines. We help you build that calendar backwards from your target intake, so nothing is rushed.",
    heroNote: "Home to thousands of accredited institutions welcoming international students each year.",
  },
  {
    id: "uk",
    name: "United Kingdom",
    tag: "UK",
    path: "/destinations/uk",
    image: "https://images.unsplash.com/photo-1784655191659-e2dfbd5d870e?auto=format&fit=crop&w=1600&q=75",
    imageAlt: "Historic British architecture and city streets",
    blurb: "Centuries of academic heritage with focused, shorter degree programmes — undergraduate degrees in three years and master's degrees often in one.",
    why: [
      "Shorter, focused degrees that can reduce the overall cost and time of studying abroad.",
      "Historic universities alongside modern, career-driven institutions in global cities.",
      "The Graduate Route allows eligible students to remain and seek work after completing their degree.",
      "A single, centralised application culture (UCAS for undergraduates) that rewards early, well-prepared applications.",
    ],
    fields: ["Law & International Relations", "Business & Finance", "Engineering & Technology", "Medicine & Healthcare", "Arts, Design & Media", "Social Sciences"],
    considerations: [
      "Course choice is declared up front — picking the right programme matters as much as picking the right university.",
      "Russell Group and other selective universities expect strong academic alignment and a compelling personal statement.",
      "Tuition and living costs differ sharply between London and other cities; we plan budgets city by city.",
      "CAS issuance and visa timelines must be planned backwards from course start dates.",
    ],
    planning: "UK undergraduate applications through UCAS have fixed deadlines, and competitive courses close early. Postgraduate timelines vary by university. We structure your personal statement, references and offer strategy around these dates so your application arrives prepared, not hurried.",
    heroNote: "Three-year degrees, one-year master's, and a Graduate Route built for international careers.",
  },
  {
    id: "australia",
    name: "Australia",
    tag: "AUS",
    path: "/destinations/australia",
    image: "https://images.unsplash.com/photo-1759093886523-f8d225d7c01e?auto=format&fit=crop&w=1600&q=75",
    imageAlt: "Australian city skyline and harbour",
    blurb: "World-ranked universities in liveable, multicultural cities — with post-study work pathways and a strong student support framework.",
    why: [
      "Consistently high-ranking universities, including the research-intensive Group of Eight.",
      "Multicultural cities regularly listed among the world's most liveable for students.",
      "Post-study work rights that let eligible graduates build experience after their degree.",
      "Transparent admission criteria and a structured, well-regulated international education system.",
    ],
    fields: ["Engineering & IT", "Nursing & Health Sciences", "Business & Accounting", "Hospitality & Tourism", "Environmental Science", "Education"],
    considerations: [
      "Intakes in February and July allow flexible planning — choosing the right one affects your whole timeline.",
      "Entry requirements are comparatively transparent; we match your academic profile to realistic options.",
      "Genuine Student requirements and financial documentation need careful, honest preparation.",
      "City choice — Sydney, Melbourne, Brisbane, Perth, Adelaide — changes both cost and lifestyle considerably.",
    ],
    planning: "Australian admissions move on rolling timelines, but popular programmes fill early. We help you sequence English tests, documentation and offer acceptance so Confirmation of Enrolment and visa steps proceed without last-minute pressure.",
    heroNote: "Two major intakes a year and post-study work pathways in the world's most liveable student cities.",
  },
  {
    id: "germany",
    name: "Germany",
    tag: "DEU",
    path: "/destinations/germany",
    image: "https://images.unsplash.com/photo-1764379865633-b677cfcb114c?auto=format&fit=crop&w=1600&q=75",
    imageAlt: "German city architecture and historic streets",
    blurb: "Tuition-free or low-cost public universities, engineering excellence, and Europe's strongest industrial economy.",
    why: [
      "Public universities charge little or no tuition for international students at many institutions.",
      "World leadership in engineering, automotive, manufacturing and applied sciences.",
      "A growing catalogue of English-taught bachelor's and master's programmes.",
      "An 18-month post-study residence option for graduates seeking employment in Germany.",
    ],
    fields: ["Mechanical & Automotive Engineering", "Computer Science", "Renewable Energy", "Physics & Natural Sciences", "Data & Business Analytics", "Robotics & Automation"],
    considerations: [
      "German-taught programmes require certified language proficiency; English-taught options need careful filtering.",
      "APS certification and uni-assist evaluation add steps to the application that must be started early.",
      "Academic calendars and application windows differ from other destinations — timing errors cost a full semester.",
      "Blocked account and financial proof requirements must be planned well before visa appointments.",
    ],
    planning: "German applications demand early document preparation: APS verification, uni-assist evaluation, certified translations and, where needed, language certificates. We map each step against semester deadlines so your file is complete before windows open.",
    heroNote: "Engineering excellence with little or no tuition at many public universities.",
  },
  {
    id: "singapore",
    name: "Singapore",
    tag: "SGP",
    path: "/destinations/singapore",
    image: "https://images.unsplash.com/photo-1759358291258-900fc11b28f7?auto=format&fit=crop&w=1600&q=75",
    imageAlt: "Singapore skyline and waterfront at dusk",
    blurb: "Asia's global education hub — compact, safe and connected, with universities that rank among the very best in the world.",
    why: [
      "Globally top-ranked institutions such as NUS and NTU, plus leading international campuses.",
      "A safe, efficient, English-speaking environment at the crossroads of Asia.",
      "Strong industry linkage — internships and career exposure across finance, technology and logistics.",
      "Proximity to home for many students, with direct connectivity across Asia and beyond.",
    ],
    fields: ["Business & Finance", "Computer Science & AI", "Engineering", "Logistics & Supply Chain", "Biomedical Sciences", "Hospitality Management"],
    considerations: [
      "Public universities are highly selective; we position your profile honestly against admission standards.",
      "Private and international institutions offer credible alternative pathways — we help you evaluate quality carefully.",
      "Tuition Grant schemes and service obligations need clear explanation before you commit.",
      "Student's Pass processing is efficient but requires accurate, complete documentation.",
    ],
    planning: "Singapore's top universities have early application windows and demanding academic expectations. We help you assess competitiveness realistically, prepare strong applications, and line up credible alternatives so your plans never rest on a single outcome.",
    heroNote: "Asia's education hub — global rankings, safety, and industry access in one city-state.",
  },
  {
    id: "europe",
    name: "Europe",
    tag: "EUR",
    path: "/destinations/europe",
    image: "https://images.unsplash.com/photo-1776861963167-fb0334d15555?auto=format&fit=crop&w=1600&q=75",
    imageAlt: "Classic European cityscape with historic architecture",
    blurb: "Beyond the big names — France, Netherlands, Ireland, Italy, Spain and the Nordics offer world-class English-taught programmes, often at a fraction of the cost.",
    why: [
      "Thousands of English-taught degrees across the Netherlands, Ireland, France, Italy, Spain and the Nordics.",
      "Competitive tuition and living costs compared to traditional destinations, with strong value for quality.",
      "Erasmus culture and Schengen mobility that make Europe a genuinely international classroom.",
      "Post-study residence and job-search options in several countries for international graduates.",
    ],
    fields: ["Business & International Management", "Engineering & Technology", "Art, Design & Architecture", "Hospitality & Culinary Arts", "Data Science", "Sustainability Studies"],
    considerations: [
      "Every country — often every university — has its own application system, calendar and document rules.",
      "Country choice should follow course fit, budget and language comfort, not brand familiarity.",
      "Visa and residence permit processes vary widely; documentation quality decides timelines.",
      "Some countries offer strong post-study work options — we factor that into the shortlist from day one.",
    ],
    planning: "European applications reward students who choose countries deliberately. We compare systems side by side — tuition, entry rules, deadlines, language, post-study options — and build a shortlist where each country is a conscious choice, not a default.",
    heroNote: "One continent, dozens of systems — English-taught degrees with remarkable value.",
  },
];

export const SERVICES = [
  { icon: "UserCheck", title: "Student Profile Assessment", text: "A careful review of your academic record, test scores, interests and goals — the honest foundation every good plan is built on." },
  { icon: "Globe2", title: "Destination Guidance", text: "Clear comparisons of countries, systems, costs and post-study pathways so your destination is a decision, not a guess." },
  { icon: "ListChecks", title: "University & Course Shortlisting", text: "A personalised shortlist aligned with your profile, aspirations and budget — ambitious options balanced with realistic ones." },
  { icon: "FileText", title: "Application Assistance", text: "Step-by-step support through applications, statements and requirements — presented accurately and submitted on time." },
  { icon: "FolderCheck", title: "Documentation Guidance", text: "Checklists, formats and verification guidance for academic, financial and identity documents — organised and complete." },
  { icon: "Stamp", title: "Visa Process Guidance", text: "Structured guidance through visa requirements, documentation and interview preparation — honest about every step." },
  { icon: "Plane", title: "Pre-Departure Guidance", text: "Briefings on travel, accommodation, banking, insurance and settling in — so you arrive prepared, not anxious." },
];

export const WHY_CHOOSE = [
  { icon: "HeartHandshake", title: "Personalised Guidance", text: "Every student is different. Your plan is built around your profile, your aspirations and your circumstances — never a template." },
  { icon: "Wallet", title: "Budget-Aligned Recommendations", text: "We shortlist universities that respect your financial capacity, so dreams are planned responsibly, not recklessly." },
  { icon: "MessageSquareText", title: "Transparent Communication", text: "Clear timelines, honest assessments and straightforward answers. You always know where you stand." },
  { icon: "ClipboardList", title: "Structured Support", text: "A defined process from first conversation to departure — every step tracked, every deadline respected." },
];

export const CONTACT = {
  whatsapp: "919849126874",
  phone: "+91 98491 26874",
  email: "connect@vmoverseas.com",
  phoneTel: "+919849126874",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=AGR+Plaza+Kompally+Hyderabad",
  address: "3rd Floor, AGR PLAZA, opp. Cine Planet, Ruby Block, Brundavan Colony, Kompally, Hyderabad, Secunderabad, Telangana 500100",
};

export const FAQS = [
  { q: "Do you guarantee admission or a visa?", a: "No — and you should be cautious of anyone who does. Admission decisions rest with universities and visa decisions with immigration authorities. What we do guarantee is honest assessment, careful preparation and transparent guidance at every step." },
  { q: "How early should I start planning?", a: "Ideally 12–18 months before your intended intake. Strong applications need time for test preparation, university research, essays and documentation. That said, come talk to us — we'll tell you honestly what's achievable in your timeframe." },
  { q: "How do you shortlist universities for me?", a: "We start with your academic profile, course preferences, career goals and budget. The shortlist we build together balances ambition with realism — universities where you can thrive, at a cost your family can sustain." },
  { q: "What does the first consultation involve?", a: "A relaxed conversation about your background and goals. We assess your profile, explain your realistic options across destinations, and outline a plan. There's no obligation — just clarity about your next steps." },
];

export const DISCLAIMER = "VM Overseas is an independent international education consulting firm. We provide guidance and support; we do not guarantee university admission, student visas, scholarships, or employment outcomes. Admission and visa decisions rest entirely with universities and immigration authorities.";


// SAMPLE CONTENT: replace with real, permission-cleared reviews, then set TESTIMONIALS_ARE_SAMPLE to false.
export const TESTIMONIALS_ARE_SAMPLE = false;

export const TESTIMONIALS = [
  { quote: "They asked about my goals and my family's budget before suggesting a single university. The shortlist felt like it was made for me, not copied from a list.", name: "Ananya Reddy", detail: "Postgraduate applicant, Karimnagar" },
  { quote: "Honest from the first call. They explained what was realistic and what was not, and never promised outcomes. That made us trust them.", name: "Suresh Kumar", detail: "Parent of an undergraduate applicant, Kompally" },
  { quote: "Documents, deadlines, visa preparation: everything was laid out step by step. I always knew what to do next and by when.", name: "Rohit Sharma", detail: "Masters applicant, Warangal" },
];
