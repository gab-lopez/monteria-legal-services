"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16 pb-8 sm:pb-16 md:pb-0">

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
          className="flex justify-center mb-6 sm:mb-10"
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
          className="mx-auto w-16 h-0.5 bg-[#b08600] mb-6 sm:mb-8"
        />

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#15294a] leading-tight mb-4 sm:mb-6"
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
          className="text-[#888888] text-base sm:text-xl max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed"
        >
          El respaldo multidisciplinario que su empresa y sus proyectos necesitan en Guatemala.  Dirigidos por una visión de negocios real y estratégica, con la óptica de la administración y perspectiva gerencial.
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
            className="hidden sm:inline-block border border-[#15294a] text-[#15294a] hover:bg-[#15294a] hover:text-white font-semibold px-8 py-3.5 tracking-wide transition-all duration-300"
          >
            Áreas de Práctica
          </Link>
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />

      {/* Flecha invitando a scrollear */}
      <motion.a
        href="#areas"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("areas")?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Ir a Áreas de Práctica"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full text-[#15294a] hover:text-[#b08600] transition-colors duration-300"
        style={{ filter: "drop-shadow(0 4px 8px rgba(21,41,74,0.35))" }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={26} />
      </motion.a>
    </section>
  );
}