"use client";

import { motion } from "framer-motion";
import { practiceAreas } from "@/data/services";
import { Scale, ArrowRight } from "lucide-react";

export default function PracticeAreasSection() {
  return (
    <>
      {/* Divisor decorativo */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 0",
        backgroundColor: "#ffffff",
        gap: "1rem",
      }}>
        <div style={{ height: "1px", width: "80px", backgroundColor: "#e7d451" }} />
        <div style={{ width: "6px", height: "6px", backgroundColor: "#b08600", transform: "rotate(45deg)" }} />
        <div style={{ height: "1px", width: "80px", backgroundColor: "#e7d451" }} />
      </div>

      <section className="py-16 bg-white min-h-screen flex items-center" id="areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-[#b08600] text-xs font-semibold tracking-[0.3em] uppercase">
              Nuestra Especialidad
            </span>
            <h2
              className="mt-3 text-4xl sm:text-5xl font-bold text-[#15294a]"
              style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
            >
              Áreas de Práctica
            </h2>
            <div className="mt-5 mx-auto w-12 h-0.5 bg-[#b08600]" />
            <p className="mt-6 text-[#888888] max-w-xl mx-auto leading-relaxed">
              Ofrecemos asesoría jurídica integral con el más alto estándar
              profesional en cada área del derecho.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, i) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group border border-slate-200 p-7 hover:border-[#b08600] hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-10 h-10 border border-[#b08600]/30 flex items-center justify-center mb-5 group-hover:bg-[#b08600] group-hover:border-[#b08600] transition-all duration-300">
                  <Scale size={18} className="text-[#b08600] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Línea dorada */}
                <div className="w-8 h-0.5 bg-[#e7d451] mb-4 group-hover:w-12 transition-all duration-300" />

                <h3
                  className="font-bold text-[#15294a] mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                >
                  {area.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed mb-5">
                  {area.description}
                </p>

                {/* Items */}
                <ul className="flex flex-col gap-1.5 mb-6">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#555555]">
                      <span className="w-1 h-1 rounded-full bg-[#b08600] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-1 text-[#b08600] text-xs font-semibold tracking-wide uppercase group-hover:gap-2 transition-all duration-300">
                  Ver más <ArrowRight size={12} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}