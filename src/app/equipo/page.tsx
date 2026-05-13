"use client";

import { motion } from "framer-motion";
import { team } from "@/data/team";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EquipoPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#b08600] text-xs font-semibold tracking-[0.3em] uppercase">
            Conózcanos
          </span>

          <h1
            className="mt-3 text-4xl sm:text-5xl font-bold text-[#15294a]"
            style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
          >
            Nuestro Equipo
          </h1>

          <div className="mt-5 mx-auto w-12 h-0.5 bg-[#b08600]" />

          <p className="mt-6 text-[#888888] max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Profesionales comprometidos con la excelencia jurídica y la
            atención personalizada a cada cliente.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-slate-200 hover:border-[#b08600] hover:shadow-lg transition-all duration-300"
            >
              {/* Foto */}
              <div className="relative h-64 sm:h-72 bg-[#f8f7f4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#15294a]/10 flex items-center justify-center">
                    <span
                      className="text-2xl font-bold text-[#15294a]/30"
                      style={{
                        fontFamily:
                          "var(--font-dm-serif), Georgia, serif",
                      }}
                    >
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b08600] to-[#e7d451] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3
                  className="text-lg font-bold text-[#15294a] mb-1 leading-snug"
                  style={{
                    fontFamily:
                      "var(--font-dm-serif), Georgia, serif",
                  }}
                >
                  {member.name}
                </h3>

                <p className="text-[#b08600] text-xs font-semibold tracking-[0.1em] uppercase mb-3 leading-relaxed">
                  {member.role}
                </p>

                <div className="w-6 h-0.5 bg-[#e7d451] mb-3" />

                <p className="text-[#888888] text-xs leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Teléfono */}
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-xs text-[#555555] hover:text-[#b08600] transition-colors mb-4"
                >
                  <Phone size={12} className="text-[#b08600]" />
                  {member.phone}
                </a>

                {/* Especialidades */}
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-0.5 border border-[#15294a]/15 text-[#15294a]/70 tracking-wide"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-[#f8f7f4] border border-slate-200 p-10 sm:p-14 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#15294a] mb-3"
            style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
          >
            ¿Listo para hablar con nuestro equipo?
          </h2>

          <p className="text-[#888888] mb-8 text-sm max-w-md mx-auto">
            Agenda una consulta gratuita y uno de nuestros abogados le atenderá
            personalmente.
          </p>

          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-[#15294a] hover:bg-[#1e3a6e] text-white font-semibold px-8 py-3.5 tracking-wide transition-colors text-sm"
          >
            Agendar consulta <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </main>
  );
}