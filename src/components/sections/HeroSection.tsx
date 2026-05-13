"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">

      {/* Patrón de fondo sutil */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #15294a 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Línea dorada decorativa izquierda */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#b08600] to-transparent opacity-40" />

      {/* Glow dorado sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#e7d451] rounded-full opacity-10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10"
        >
          <Image
            src="/logo-monteria.png"
            alt="Monteria Legal Services"
            width={180}
            height={90}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Línea dorada decorativa */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto w-16 h-0.5 bg-[#b08600] mb-8"
        />

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#15294a] leading-tight mb-6"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          Soluciones Legales{" "}
          <span className="text-[#b08600] italic">Precisas</span>{" "}
          para Cada Cliente
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-[#888888] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Firma de abogados guatemalteca con presencia en Ciudad de Guatemala
          y Antigua Guatemala. Comprometidos con la excelencia jurídica y
          la defensa de sus intereses.
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contacto"
            className="bg-[#15294a] hover:bg-[#1e3a6e] text-white font-semibold px-8 py-3.5 tracking-wide transition-all duration-300"
          >
            Consulta Gratuita
          </Link>
          <Link
            href="/servicios"
            className="border border-[#15294a] text-[#15294a] hover:bg-[#15294a] hover:text-white font-semibold px-8 py-3.5 tracking-wide transition-all duration-300"
          >
            Áreas de Práctica
          </Link>
        </motion.div>
        
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}