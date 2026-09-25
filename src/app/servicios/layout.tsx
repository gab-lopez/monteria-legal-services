import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Áreas de Práctica",
  description: "Asesoría empresarial y compliance, regulatorio y marcas, protección patrimonial y sucesiones, contratos y solución de conflictos en Guatemala.",
  alternates: { canonical: "/servicios" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
