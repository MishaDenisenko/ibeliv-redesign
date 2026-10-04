export const site = {
  name: "I Beliv Dental Studio",
  tagline: "Your family dentist in Davenport",
  phone: "(863) 420-3166",
  phoneHref: "tel:+18634203166",
  fax: "(863) 420-3866",
  email: "dentist@ibelivdentalstudio.com",
  address: {
    line1: "7700 Lake Wilson Rd.",
    city: "Davenport",
    state: "FL",
    zip: "33896",
    full: "7700 Lake Wilson Rd., Davenport, FL 33896",
  },
  mapsQuery: "I+Beliv+Dental+Studio+7700+Lake+Wilson+Rd+Davenport+FL+33896",
  since: 2011,
  rating: 4.8,
  reviewCount: 282,
  bookLabel: "Book an Appointment",
  legacySite: "https://www.ibelivdentalstudio.com",
  hours: [
    { days: "Monday – Thursday", time: "8:30 AM – 5:30 PM" },
    { days: "Friday", time: "8:30 AM – 1:30 PM" },
    { days: "Saturday – Sunday", time: "Closed" },
  ],
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Dentist", href: "#dentist" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

/** Benefit highlights — distinct from hero trust stats (rating, reviews, since). */
export const trustBenefits = [
  {
    title: "Honest, transparent care",
    description:
      "Clear diagnoses and treatment recommendations — only the work you need, explained with respect.",
  },
  {
    title: "A calm studio experience",
    description:
      "A welcoming office designed to help you relax, with music and in-room television during visits.",
  },
  {
    title: "Modern digital dentistry",
    description:
      "State-of-the-art technology in an eco-friendly digital studio, including advanced in-office options.",
  },
  {
    title: "Care in two languages",
    description:
      "Dr. Torres and our team communicate fluently in English and Spanish for every patient.",
  },
] as const;

export const services = [
  {
    title: "General & Family Dentistry",
    description:
      "Comprehensive exams, cleanings, fillings, extractions, and honest treatment planning for every member of your family.",
  },
  {
    title: "Cosmetic & Aesthetic Care",
    description:
      "Enhance your smile with cosmetic options in a relaxing studio atmosphere designed to help you feel at ease.",
  },
  {
    title: "Invisalign",
    description:
      "Clear aligner therapy for straighter smiles with a discreet, modern approach to orthodontic care.",
  },
  {
    title: "CEREC Same-Day Restorations",
    description:
      "Advanced in-office technology for efficient crown and restoration workflows when same-day care is appropriate.",
  },
  {
    title: "Biolase Laser Dentistry",
    description:
      "Digital, technology-forward treatment options supported by laser dentistry for select procedures.",
  },
  {
    title: "Preventive Care",
    description:
      "Routine prevention and education to protect long-term oral health — because we beliv in preventative care.",
  },
] as const;

export const dentist = {
  name: "Dr. Omayra Torres",
  shortName: "Dr. Torres",
  bio: [
    "Dr. Omayra Torres has operated private practices since 2002. She earned a Doctorate in Dental Medicine (DMD) in 2001 from the University of Puerto Rico, with a B.A. in General Sciences (Magna Cum Laude), and completed a General Practice Residency fellowship in 2002.",
    "She is a member of the American Dental Association and the Florida Dental Association. In 2011, Dr. Torres opened I Beliv Dental Studio to provide honest, high-quality dental care in Central Florida — building trusting relationships with patients and offering care in both English and Spanish.",
  ],
} as const;

export const reviews = [
  {
    quote:
      "Me, my husband and all 3 of our kids go to Dr. Torres. She is so patient and kind and gentle. She makes you feel at ease every time you visit her. Whether it is for a regular check up or for fillings and extractions, she is very calming and patient. We have been patients for over a year and I know she is very honest and isn't trying to just get your money. I would recommend using her for a second opinion if you have been told by other dentists that you need extensive dental work.",
    author: "Chrissy Hannan",
  },
  {
    quote:
      "I have been a patron of ibeliv dental studio for over three years. Never have I had a bad experience there. The staff is consistent and every time I go there they treat me with respect and in the same way, with professionalism and the best care possible. The dentist is one of the nicest health care professionals I've ever encountered. The office is clean, it is well decorated, smells good, has good music, and every room is equipped with a television set. Going to this office always brightens and improves not only my mood, but also my smile and I would never consider going anywhere else.",
    author: "Blake Dennis",
  },
  {
    quote:
      "I have been coming to see this dentist for the past 3 years. I absolutely give this Dentist a 5 star. I come all the way from Kissimmee to see her and I have no complaints. Unlike many dentist where all they want is your money and will do unecessary procedures she will not do any work that is not necessary. The max time I've waited is 20 minutes and I am usually in and out. The office smells great, almost like a spa. I have referred many friends and family to Dr. T and they all love her.",
    author: "Brenda Casillas",
  },
] as const;
