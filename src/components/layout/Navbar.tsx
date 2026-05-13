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

      {/* Nav */}
      <div style={{
        maxWidth: "80rem",
        margin: "0 auto",
        padding: "0 1.25rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: scrolled ? "none" : "0.5px solid #eeeeee",
      }}>

        {/* Logo */}
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Image
              src="/logo-monteria-simple.png"
              alt="Monteria Legal Services"
              width={34}
              height={34}
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{
              fontSize: "1rem",
              fontWeight: "700",
              color: "#15294a",
              letterSpacing: "0.05em",
              fontFamily: "var(--font-dm-serif), Georgia, serif",
            }}>
              Monteria
            </div>
            <div style={{
              fontSize: "0.55rem",
              fontWeight: "600",
              color: "#b08600",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}>
              Legal Services
            </div>
          </div>
        </Link>

        {/* Desktop links — solo visible en md+ */}
        <ul style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          gap: "2rem",
          alignItems: "center",
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
                    fontSize: "0.85rem",
                    fontWeight: isActive ? "600" : "500",
                    letterSpacing: "0.03em",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
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

        {/* Desktop CTA — solo visible en md+ */}
        <div className="hidden md:flex">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contacto"
              style={{
                backgroundColor: "#15294a",
                color: "#ffffff",
                fontSize: "0.78rem",
                fontWeight: "600",
                padding: "0.6rem 1.2rem",
                letterSpacing: "0.05em",
                textDecoration: "none",
                display: "block",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#b08600"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#15294a"; }}
            >
              Consulta Gratuita
            </Link>
          </motion.div>
        </div>

        {/* Mobile hamburger — solo visible en mobile */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          style={{ color: "#15294a", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={22} />
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
            style={{ overflow: "hidden", backgroundColor: "#ffffff", borderTop: "0.5px solid #eeeeee" }}
          >
            <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    style={{
                      color: pathname === link.href ? "#15294a" : "#444444",
                      fontSize: "0.95rem",
                      fontWeight: pathname === link.href ? "600" : "400",
                      textDecoration: "none",
                      display: "block",
                      padding: "0.5rem 0",
                      borderBottom: "0.5px solid #f0f0f0",
                    }}
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
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    padding: "0.875rem",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "block",
                    marginTop: "0.25rem",
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