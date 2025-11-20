export interface ContactData {
  id: number;
  title: string;
  icon: string;
  description: string;
  color: string;
  phone: string;
  email: string;
  qrCode: string;
}

export const contactsData: ContactData[] = [
  {
    id: 1,
    title: "MISA One-Stop Shop",
    icon: "elements (1).svg" ,
    description: "MISA's One Stop Shop provides general business support and allows General Managers to handle commercial registration there, eliminating the need to go to the Saudi Chamber of Commerce",
    color: "#814A98", // violet
    phone: "+966 11 234 5678",
    email: "investment@investsaudi.sa",
    qrCode: "/temp/qr.png"
  },
  {
    id: 2,
    title: "Regional Office - Riyadh",
    icon: "elements (2).svg",
    description: "Visit our main headquarters in Riyadh for in-person consultations and comprehensive investment services.",
    color: "#00A7A2", // foundation-green
    phone: "+966 11 456 7890",
    email: "riyadh@investsaudi.sa",
    qrCode: "/temp/qr.png"
  },
  {
    id: 3,
    title: "Business Development",
    icon: "elements (3).svg",
    description: "Connect with our business development team to explore partnership opportunities and strategic investments.",
    color: "#001A2A", // foundation-blue-dark
    phone: "+966 11 678 9012",
    email: "business@investsaudi.sa",
    qrCode: "/temp/qr.png"
  },
  {
    id: 4,
    title: "Customer Relations",
    icon: "elements (4).svg",
    description: "Our customer relations team is here to assist with inquiries, feedback, and ongoing support for existing investors.",
    color: "#FF6B35", // orange accent
    phone: "+966 11 890 1234",
    email: "support@investsaudi.sa",
    qrCode: "/temp/qr.png"
  }
];

