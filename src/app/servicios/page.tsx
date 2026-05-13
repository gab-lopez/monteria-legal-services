"use client";

import { motion } from "framer-motion";
import { practiceAreas } from "@/data/services";
import { Scale, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#b08600] text-xs font-semibold tracking-[0.3em] uppercase">
            Nuestra Especialidad
          </span>
          <h1
            className="mt-3 text-4xl sm:text-5xl font-bold text-[#15294a]"
            style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
          >
            Áreas de Práctica
          </h1>
          <div className="mt-5 mx-auto w-12 h-0.5 bg-[#b08600]" />
          <p className="mt-6 text-[#888888] max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Ofrecemos asesoría jurídica integral con el más alto estándar
            profesional en cada área del derecho guatemalteco.
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-col gap-8">
          {practiceAreas.map((area, i) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group grid grid-cols-1 md:grid-cols-3 border border-slate-200 hover:border-[#b08600] hover:shadow-lg transition-all duration-300"
            >
              {/* Left — ícono y título */}
              <div className="bg-[#f8f7f4] p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200 group-hover:border-[#b08600]/30 transition-colors duration-300">
                <div>
                  <div className="w-12 h-12 border border-[#b08600]/30 flex items-center justify-center mb-6 group-hover:bg-[#b08600] group-hover:border-[#b08600] transition-all duration-300">
                    <Scale size={20} className="text-[#b08600] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="w-8 h-0.5 bg-[#e7d451] mb-4" />
                  <h2
                    className="text-2xl font-bold text-[#15294a] leading-snug"
                    style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                  >
                    {area.title}
                  </h2>
                </div>
                <button className="flex items-center gap-1 text-[#b08600] text-xs font-semibold tracking-wide uppercase mt-6 group-hover:gap-2 transition-all duration-300">
                  Consultar <ArrowRight size={12} />
                </button>
              </div>

              {/* Center — descripción */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-slate-200 group-hover:border-[#b08600]/30 transition-colors duration-300">
                <h3 className="text-xs font-semibold text-[#b08600] uppercase tracking-[0.2em] mb-4">
                  Descripción
                </h3>
                <p className="text-[#555555] text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>

              {/* Right — servicios */}
              <div className="p-8">
                <h3 className="text-xs font-semibold text-[#b08600] uppercase tracking-[0.2em] mb-4">
                  Servicios incluidos
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#555555]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b08600] shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-[#15294a] p-10 sm:p-14 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
          >
            ¿Tiene alguna consulta?
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Nuestro equipo está listo para atenderle y orientarle en su situación legal.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-[#b08600] hover:bg-[#c49a00] text-white font-semibold px-8 py-3.5 tracking-wide transition-colors text-sm"
          >
            Consulta Gratuita <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </main>
  );
}