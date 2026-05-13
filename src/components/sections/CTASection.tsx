"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#15294a] min-h-screen flex items-center relative overflow-hidden">
      {/* Patrón decorativo */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Línea dorada izquierda */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#b08600] to-transparent opacity-60" />

      {/* Glow dorado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#b08600] rounded-full opacity-5 blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#b08600] text-xs font-semibold tracking-[0.3em] uppercase">
            Contáctenos
          </span>

          <h2
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
          >
            ¿Necesita asesoría legal?
          </h2>

          <div className="mt-5 mx-auto w-12 h-0.5 bg-[#b08600]" />

          <p className="mt-6 text-white/60 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Agenda una consulta gratuita con nuestro equipo. Estamos listos
            para escucharle y ofrecerle la mejor solución a su situación legal.
          </p>
        </motion.div>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Link
            href="/contacto"
            className="bg-[#b08600] hover:bg-[#c49a00] text-white font-semibold px-8 py-3.5 tracking-wide transition-all duration-300 text-sm"
          >
            Consulta Gratuita
          </Link>

          <a
            href="https://wa.me/50258656566?text=Hola%20Monteria%20Legal%20Services%2C%20me%20interesa%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 hover:border-[#b08600] text-white hover:text-[#b08600] font-semibold px-8 py-3.5 tracking-wide transition-all duration-300 text-sm flex items-center justify-center gap-2"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </motion.div>

        {/* Contactos directos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-white/40 text-xs"
        >
          <a
            href="tel:+50258656566"
            className="flex items-center gap-2 hover:text-[#b08600] transition-colors"
          >
            <Phone size={13} />
            +(502) 5865 6566
          </a>

          <span className="hidden sm:block w-1 h-1 rounded-full bg-[#b08600]" />

          <a
            href="mailto:info@monterialegalservices.com"
            className="flex items-center gap-2 hover:text-[#b08600] transition-colors"
          >
            <Mail size={13} />
            info@monterialegalservices.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}