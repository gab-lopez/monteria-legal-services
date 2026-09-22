"use client";

import { motion } from "framer-motion";
import { practiceAreas } from "@/data/services";
import { Briefcase, Stamp, Landmark, Handshake, Scale } from "lucide-react";

// Ícono por área, en el mismo orden que practiceAreas. Si se agrega una
// nueva área sin ícono asignado aquí, se usa Scale como respaldo.
const areaIcons: Record<string, typeof Scale> = {
  "empresaria-compliance": Briefcase,
  "regulatorio-marcas": Stamp,
  "patrimonial-sucesiones": Landmark,
  "contratos-solucion-conflictos": Handshake,
};

export default function PracticeAreasSection() {
  return (
    <section className="py-16 bg-[#15294a] min-h-screen flex items-center" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#e7d451] text-xs font-semibold tracking-[0.3em] uppercase">
            Nuestra Especialidad
          </span>
          <h2
            className="mt-3 text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
          >
            Áreas de Práctica
          </h2>
          <div className="mt-5 mx-auto w-12 h-0.5 bg-[#b08600]" />
          <p className="mt-6 text-white/60 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Desde el lanzamiento de negocios iniciales hasta el impulso de empresas ya en marcha, integramos la gestión contractual, notarial, extrajudicial, financiera y regulatoria para blindar sus operaciones y proteger su patrimonio personal y empresarial.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {practiceAreas.map((area, i) => {
            const Icon = areaIcons[area.id] ?? Scale;
            return (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-white/10 bg-white/5 p-6 hover:border-[#b08600] hover:bg-white/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 border border-[#b08600]/50 flex items-center justify-center mb-5 group-hover:bg-[#b08600] group-hover:border-[#b08600] transition-all duration-300">
                <Icon size={18} className="text-[#b08600] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Línea dorada */}
              <div className="w-8 h-0.5 bg-[#e7d451] mb-4 group-hover:w-12 transition-all duration-300" />

              <h3
                className="font-bold text-white mb-3 leading-snug"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                {area.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {area.description}
              </p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}