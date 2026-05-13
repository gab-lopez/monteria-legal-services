import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const links = [
  { label: "Áreas de Práctica", href: "/servicios" },
  { label: "El Equipo", href: "/equipo" },
  { label: "Contacto", href: "/contacto" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#15294a", color: "rgba(255,255,255,0.6)" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "4rem 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem" }}>

        {/* Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ color: "#ffffff", fontSize: "1.5rem", fontWeight: "700", fontFamily: "var(--font-dm-serif), Georgia, serif", letterSpacing: "0.05em" }}>
              Monteria
            </div>
            <div style={{ color: "#b08600", fontSize: "0.65rem", fontWeight: "600", letterSpacing: "0.25em", textTransform: "uppercase" }}>
              Legal Services
            </div>
          </div>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(255,255,255,0.5)", maxWidth: "280px", marginTop: "0.5rem" }}>
            Firma de abogados guatemalteca comprometida con la excelencia jurídica y la defensa de sus intereses.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "0.7rem", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Navegación
          </h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", listStyle: "none", margin: 0, padding: 0 }}>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "0.7rem", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Contacto
          </h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", listStyle: "none", margin: 0, padding: 0 }}>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem" }}>
              <Phone size={14} style={{ marginTop: "2px", flexShrink: 0, color: "#b08600" }} />
              +(502) 5865 6566
            </li>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem" }}>
              <Mail size={14} style={{ marginTop: "2px", flexShrink: 0, color: "#b08600" }} />
              info@monterialegalservices.com
            </li>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem" }}>
              <MapPin size={14} style={{ marginTop: "2px", flexShrink: 0, color: "#b08600" }} />
              Ciudad de Guatemala / Antigua Guatemala
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "1.25rem 2rem", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
          <span>© {new Date().getFullYear()} Monteria Legal Services. Todos los derechos reservados.</span>
          <span>Ciudad de Guatemala · Antigua Guatemala</span>
        </div>
      </div>
    </footer>
  );
}