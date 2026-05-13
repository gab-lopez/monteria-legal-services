export interface TeamMember {
  id: string;
  name: string;
  role: string;
  phone: string;
  bio: string;
  specialties: string[];
  image: string;
}

export const team: TeamMember[] = [
  {
    id: "jeaneth-divas",
    name: "Jeaneth Divas",
    role: "Abogada & Notaria",
    phone: "+(502) 5865 6566",
    bio: "Especialista con amplia trayectoria en litigios civiles y mercantiles. Comprometida con brindar soluciones legales precisas y efectivas para cada cliente.",
    specialties: ["Derecho Civil", "Derecho Mercantil", "Notariado"],
    image: "/team/jeaneth-divas.jpg",
  },
  {
    id: "elena-rodas",
    name: "Elena Rodas",
    role: "Consultora Senior Corporativa, Legal y Contractual",
    phone: "+(502) 4128 3993",
    bio: "Consultora senior con amplia experiencia en derecho corporativo y contractual. Especializada en asesoría a empresas y estructuración de contratos complejos.",
    specialties: ["Derecho Corporativo", "Derecho Contractual", "Asesoría Empresarial"],
    image: "/team/elena-rodas.jpg",
  },
  {
    id: "heidy-rios",
    name: "Heidy Rios",
    role: "Abogada Corporativa Senior y Compliance",
    phone: "+(502) 4769 4568",
    bio: "Abogada corporativa con especialización en compliance y cumplimiento normativo. Asesora a empresas en la implementación de programas de integridad y gestión de riesgos legales.",
    specialties: ["Derecho Corporativo", "Compliance", "Gestión de Riesgos"],
    image: "/team/heidy-rios.jpg",
  },
  {
    id: "carolina-felipe",
    name: "Carolina Felipe",
    role: "Consultora Junior Legal, Contractual y Registral",
    phone: "+(502) 4773 1400",
    bio: "Consultora especializada en derecho registral y contractual. Comprometida con la atención detallada y oportuna de cada expediente.",
    specialties: ["Derecho Registral", "Derecho Contractual", "Gestión Legal"],
    image: "/team/carolina-felipe.jpg",
  },
];