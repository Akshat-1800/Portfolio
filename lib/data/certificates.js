export const certificates = [
  {
    id: 1,
    title: "Google IT Support Certificate",
    issuer: "Google Career Certificates",
    year: "2026",
    image: "https://res.cloudinary.com/djozpdgv1/image/upload/f_auto,q_auto,w_800/v1770473930/Google_IT_Support_qw0d2a.png",
    credentialUrl: "https://www.credly.com/go/mocnS0jB",
    featured: true
  },
  {
    id: 2,
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    year: "2025",
    image: "https://res.cloudinary.com/djozpdgv1/image/upload/f_auto,q_auto,w_800/v1770473930/Bits_and_Bytes_of_Computer_Networking_hnpllj.png",
    credentialUrl: "https://coursera.org/verify/XW6XGERT6UDW",
    featured: true
  },
  {
    id: 3,
    title: "Introduction to Machine Learning",
    issuer: "IIT Madras on NPTEL",
    year: "2025",
    image: "https://res.cloudinary.com/djozpdgv1/image/upload/f_auto,q_auto,w_800/v1770473931/NPTEL_Machine_Learning_kufcc8.png",
    credentialUrl: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS46S35480006204384492",
    featured: false
  },
  {
    id: 4,
    title: "AWS Certification Course",
    issuer: "Intellipat Academy",
    year: "2025",
    image: "https://res.cloudinary.com/djozpdgv1/image/upload/f_auto,q_auto,w_800/v1770473931/AWS_certification_intellipat_kzk7sk.png",
    credentialUrl: "",
    featured: false
  },
  {
    id: 5,
    title: "AWS Technical Essentials",
    issuer: "AWS Training and Certification",
    year: "2025",
    image: "https://res.cloudinary.com/djozpdgv1/image/upload/f_auto,q_auto,w_800/v1770473931/AWS_technical_essentials_qtnhp7.png",
    credentialUrl: "",
    featured: false
  },
  {
    id: 6,
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS Training and Certification",
    year: "2025",
    image: "https://res.cloudinary.com/djozpdgv1/image/upload/f_auto,q_auto,w_800/v1770473930/AWS_training_b1fjlb.png",
    credentialUrl: "",
    featured: false
  },
  {
    id: 7,
    title: "Python Essentials",
    issuer: "Vityarthi",
    year: "2024",
    image: "https://res.cloudinary.com/djozpdgv1/image/upload/f_auto,q_auto,w_800/v1770473930/Python_Essentials_xnarnr.png",
    credentialUrl: "https://www.vityarthi.com/certificate/c9fb631504",
    featured: false
  },
  {
    id: 8,
    title: "Programming in Java",
    issuer: "Vityarthi",
    year: "2024",
    image: "https://res.cloudinary.com/djozpdgv1/image/upload/f_auto,q_auto,w_800/v1770473930/Programming_in_Java_qtmx1u.png",
    credentialUrl: "https://www.vityarthi.com/certificate/dOSsb2qaCE3H",
    featured: false
  }
];

export const getFeaturedCertificates = () => certificates.filter(c => c.featured);
export const getOtherCertificates = () => certificates.filter(c => !c.featured);
