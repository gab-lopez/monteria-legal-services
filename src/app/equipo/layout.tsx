import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El Equipo",
  description: "Conozca al equipo de abogados y consultores de Monteria Legal Services en Ciudad de Guatemala y Antigua Guatemala.",
  alternates: { canonical: "/equipo" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
