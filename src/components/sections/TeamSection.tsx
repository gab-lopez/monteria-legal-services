"use client";

import { motion } from "framer-motion";
import { team } from "@/data/team";
import { Phone } from "lucide-react";

export default function TeamSection() {
  return (
    <section
      className="py-24 bg-[#f8f7f4] min-h-screen flex items-center"
      id="equipo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#b08600] text-xs font-semibold tracking-[0.3em] uppercase">
            Nuestro Equipo
          </span>

          <h2
            className="mt-3 text-4xl sm:text-5xl font-bold text-[#15294a]"
            style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
          >
            Los Profesionales
          </h2>

          <div className="mt-5 mx-auto w-12 h-0.5 bg-[#b08600]" />

          <p className="mt-4 text-[#888888] max-w-xl mx-auto leading-relaxed text-sm">
            Un equipo de abogados comprometidos con la excelencia jurídica y la
            atención personalizada a cada cliente.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-slate-200 hover:border-[#b08600] hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Foto */}
              <div className="relative h-48 bg-[#15294a]/5 overflow-hidden shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#15294a]/10 flex items-center justify-center">
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

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#b08600] to-[#e7d451] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col flex-1">
                <h3
                  className="text-base font-bold text-[#15294a] mb-1 leading-snug"
                  style={{
                    fontFamily:
                      "var(--font-dm-serif), Georgia, serif",
                  }}
                >
                  {member.name}
                </h3>

                <p className="text-[#b08600] text-xs font-semibold tracking-[0.08em] uppercase mb-2 leading-relaxed">
                  {member.role}
                </p>

                <div className="w-6 h-0.5 bg-[#e7d451] mb-3" />

                <p className="text-[#888888] text-xs leading-relaxed mb-3 flex-1">
                  {member.bio}
                </p>

                {/* Teléfono */}
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-1.5 text-xs text-[#555555] hover:text-[#b08600] transition-colors mb-3"
                >
                  <Phone
                    size={11}
                    className="text-[#b08600] shrink-0"
                  />

                  {member.phone}
                </a>

                {/* Especialidades */}
                <div className="flex flex-wrap gap-1">
                  {member.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-0.5 border border-[#15294a]/15 text-[#15294a]/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}