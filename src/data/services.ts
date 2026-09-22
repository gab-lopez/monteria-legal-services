export interface PracticeArea {
  id: string;
  title: string;
  description: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "empresaria-compliance",
    title: "Empresarial y Compliance",
    description: "Brindamos acompañamiento estratégico a clientes guatemaltecos y extranjeros. Mediante una sólida red de corresponsales internacionales, ofrecemos asesoría empresarial y cumplimiento coordinado en Centroamérica, Panamá, el Caribe, Sudamérica, Norteamérica y Europa, abarcando países como México, Estados Unidos, Brasil, Colombia, Bolivia, Uruguay, República Dominicana y España.",  },
  {
    id: "regulatorio-marcas",
    title: "Regulatorio y Marcas",
    description: "Gestionamos de forma integral permisos, licencias y procesos regulatorios especializados incluyendo autorizaciones de promociones comerciales ante Gobernación Departamental, además de salvaguardar la propiedad intelectual mediante el registro y la protección estratégica de marcas y signos distintivos.",  },
  {
    id: "patrimonial-sucesiones",
    title: "Protección Patrimonial y Sucesiones",
    description: "Diseñamos estrategias de protección del patrimonio personal y familiar. Ofrecemos acompañamiento en la planificación sucesoria, estructuración de legados y gestión ordenada de bienes, asegurando la tranquilidad a largo plazo de las familias y sus activos.",  },
  {
    id: "contratos-solucion-conflictos",
    title: "Contratos y solución de conflictos",
    description: "Asesoramos en materia contractual y en la prevención y solución de conflictos, acompañando a nuestros clientes en la protección de su patrimonio mediante mecanismos de negociación extrajudicial y otras alternativas de solución de controversias.",  },
];