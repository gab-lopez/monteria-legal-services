"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { label: "Áreas de Práctica", href: "/servicios" },
  { label: "El Equipo", href: "/equipo" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: "#ffffff",
      boxShadow: scrolled ? "0 2px 20px rgba(21,41,74,0.08)" : "none",
      transition: "box-shadow 0.4s ease",
    }}>

      {/* Línea superior degradada */}
      <div style={{
        height: "3px",
        background: "linear-gradient(90deg, #15294a, #b08600, #e7d451)",
      }} />

      {/* Nav principal */}
      <div style={{
        maxWidth: "80rem",
        margin: "0 auto",
        padding: "0 2rem",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: scrolled ? "none" : "0.5px solid #eeeeee",
        transition: "border 0.4s ease",
      }}>

        {/* Logo */}
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/logo-monteria-simple.png"
              alt="Monteria Legal Services"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{
              fontSize: "1.1rem",
              fontWeight: "700",
              color: "#15294a",
              letterSpacing: "0.05em",
              fontFamily: "var(--font-dm-serif), Georgia, serif",
            }}>
              Monteria
            </div>
            <div style={{
              fontSize: "0.6rem",
              fontWeight: "600",
              color: "#b08600",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}>
              Legal Services
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul style={{
          display: "flex",
          alignItems: "center",
          gap: "2.5rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
          className="hidden md:flex"
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} style={{ position: "relative" }}>
                <Link
                  href={link.href}
                  style={{
                    color: isActive ? "#15294a" : "#444444",
                    fontSize: "0.875rem",
                    fontWeight: isActive ? "600" : "500",
                    letterSpacing: "0.03em",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    paddingBottom: "4px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#b08600";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#444444";
                  }}
                >
                  {link.label}
                </Link>

                {/* Línea dorada activa */}
                {isActive && (
                  <motion.div
                    layoutId="activeLink"
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "#b08600",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/contacto"
              style={{
                backgroundColor: "#15294a",
                color: "#ffffff",
                fontSize: "0.8rem",
                fontWeight: "600",
                padding: "0.65rem 1.4rem",
                letterSpacing: "0.05em",
                textDecoration: "none",
                display: "block",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#b08600";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#15294a";
              }}
            >
              Consulta Gratuita
            </Link>
          </motion.div>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          style={{ color: "#15294a", background: "none", border: "none", cursor: "pointer" }}
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              backgroundColor: "#ffffff",
              borderTop: "0.5px solid #eeeeee",
            }}
          >
            <div style={{
              padding: "1.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}>
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    style={{ color: "#444444", fontSize: "0.875rem", fontWeight: "500", textDecoration: "none" }}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: links.length * 0.06 }}
              >
                <Link
                  href="/contacto"
                  style={{
                    backgroundColor: "#15294a",
                    color: "#ffffff",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    padding: "0.65rem 1.4rem",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "block",
                  }}
                  onClick={() => setOpen(false)}
                >
                  Consulta Gratuita
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}