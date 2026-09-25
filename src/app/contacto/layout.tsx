import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacte a Monteria Legal Services para una consulta legal en Ciudad de Guatemala o Antigua Guatemala.",
  alternates: { canonical: "/contacto" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
