"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Award, BookOpen, Handshake } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Confidencialidad Garantizada",
    description: "Cada caso es tratado con absoluta reserva y discreción profesional.",
  },
  {
    icon: Clock,
    title: "Respuesta Oportuna",
    description: "Atendemos sus consultas con prontitud y respeto por su tiempo.",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Cada cliente recibe un equipo dedicado exclusivamente a su caso.",
  },
  {
    icon: Award,
    title: "Excelencia Jurídica",
    description: "Trayectoria comprobada con resultados favorables para nuestros clientes.",
  },
  {
    icon: BookOpen,
    title: "Actualización Constante",
    description: "Nuestro equipo se mantiene al día con los cambios en la legislación guatemalteca.",
  },
  {
    icon: Handshake,
    title: "Compromiso Total",
    description: "Nos involucramos a fondo en cada caso hasta lograr la mejor solución posible.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-white min-h-screen flex items-center" id="por-que-elegirnos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Layout: texto izquierda, grid derecha en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — texto */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-[#b08600] text-xs font-semibold tracking-[0.3em] uppercase">
              Nuestra Diferencia
            </span>
            <h2
              className="mt-3 text-4xl sm:text-5xl font-bold text-[#15294a] leading-tight"
              style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
            >
              ¿Por qué elegir Monteria?
            </h2>
            <div className="mt-5 w-12 h-0.5 bg-[#b08600]" />
            <p className="mt-6 text-[#888888] leading-relaxed text-sm sm:text-base">
              Somos una firma guatemalteca que combina el rigor jurídico con
              un trato humano y cercano. Entendemos que cada situación legal
              es única y la abordamos con la seriedad que merece.
            </p>

            {/* Estadísticas */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { number: "10+", label: "Años de experiencia" },
                { number: "500+", label: "Casos resueltos" },
                { number: "2", label: "Sedes en Guatemala" },
                { number: "100%", label: "Compromiso con el cliente" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-[#b08600] pl-4">
                  <div
                    className="text-3xl font-bold text-[#15294a]"
                    style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs text-[#888888] mt-1 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — grid de razones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group p-6 border border-slate-200 hover:border-[#b08600] hover:shadow-md transition-all duration-300"
                >
                  <div className="w-9 h-9 border border-[#b08600]/30 flex items-center justify-center mb-4 group-hover:bg-[#b08600] group-hover:border-[#b08600] transition-all duration-300">
                    <Icon size={16} className="text-[#b08600] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3
                    className="font-bold text-[#15294a] mb-2 text-sm"
                    style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-[#888888] text-xs leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}