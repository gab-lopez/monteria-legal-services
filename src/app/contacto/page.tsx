"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const schema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre completo"),
  email: z.string().email("Correo electrónico inválido"),
  telefono: z.string().min(8, "Ingresa un teléfono válido"),
  asunto: z.string().min(3, "Ingresa el asunto"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono principal",
    value: "+(502) 5865 6566",
    href: "tel:+50258656566",
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "info@monterialegalservices.com",
    href: "mailto:info@monterialegalservices.com",
  },
  {
    icon: MapPin,
    label: "Sedes",
    value: "Ciudad de Guatemala / Antigua Guatemala",
    href: "#",
  },
];

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1000));

    console.log("Contacto:", data);

    setLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#b08600] text-xs font-semibold tracking-[0.3em] uppercase">
            Estamos aquí para usted
          </span>

          <h1
            className="mt-3 text-4xl sm:text-5xl font-bold text-[#15294a]"
            style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
          >
            Contáctenos
          </h1>

          <div className="mt-5 mx-auto w-12 h-0.5 bg-[#b08600]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2
                className="text-2xl font-bold text-[#15294a] mb-6"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                Información de contacto
              </h2>

              <div className="flex flex-col gap-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 border border-[#b08600]/30 flex items-center justify-center shrink-0 group-hover:bg-[#b08600] group-hover:border-[#b08600] transition-all duration-300">
                        <Icon
                          size={16}
                          className="text-[#b08600] group-hover:text-white transition-colors duration-300"
                        />
                      </div>

                      <div>
                        <p className="text-xs text-[#888888] font-medium uppercase tracking-wide mb-0.5">
                          {item.label}
                        </p>

                        <p className="text-[#15294a] text-sm font-medium">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/50258656566?text=Hola%20Monteria%20Legal%20Services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 transition-colors w-fit text-sm"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>

              Escribir por WhatsApp
            </a>

            {/* Horario */}
            <div className="border-l-2 border-[#b08600] pl-5">
              <h3 className="text-sm font-semibold text-[#15294a] mb-2 tracking-wide uppercase">
                Horario de atención
              </h3>

              <p className="text-[#888888] text-sm">
                Lunes a Viernes: 8:00 AM – 6:00 PM
              </p>

              <p className="text-[#888888] text-sm">
                Sábados: 9:00 AM – 12:00 PM
              </p>
            </div>
          </motion.div>

          {/* Right — formulario */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#f8f7f4] border border-slate-200 p-6 sm:p-8"
          >
            <h2
              className="text-2xl font-bold text-[#15294a] mb-6"
              style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
            >
              Envíenos un mensaje
            </h2>

            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center gap-4">
                <CheckCircle size={48} className="text-[#b08600]" />

                <h3
                  className="text-[#15294a] text-xl font-bold"
                  style={{
                    fontFamily: "var(--font-dm-serif), Georgia, serif",
                  }}
                >
                  Mensaje recibido
                </h3>

                <p className="text-[#888888] text-sm">
                  Nos pondremos en contacto con usted a la brevedad posible.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-[#b08600] text-sm hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
              >
                {/* Nombre */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#15294a] uppercase tracking-wide">
                    Nombre completo *
                  </label>

                  <input
                    {...register("nombre")}
                    placeholder="Juan Pérez"
                    className="border border-slate-200 bg-white px-4 py-3 text-sm text-[#333333] placeholder-slate-400 focus:outline-none focus:border-[#b08600] transition-colors"
                  />

                  {errors.nombre && (
                    <span className="text-red-500 text-xs">
                      {errors.nombre.message}
                    </span>
                  )}
                </div>

                {/* Email y teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#15294a] uppercase tracking-wide">
                      Correo electrónico *
                    </label>

                    <input
                      {...register("email")}
                      type="email"
                      placeholder="juan@empresa.com"
                      className="border border-slate-200 bg-white px-4 py-3 text-sm text-[#333333] placeholder-slate-400 focus:outline-none focus:border-[#b08600] transition-colors"
                    />

                    {errors.email && (
                      <span className="text-red-500 text-xs">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#15294a] uppercase tracking-wide">
                      Teléfono *
                    </label>

                    <input
                      {...register("telefono")}
                      placeholder="+502 0000 0000"
                      className="border border-slate-200 bg-white px-4 py-3 text-sm text-[#333333] placeholder-slate-400 focus:outline-none focus:border-[#b08600] transition-colors"
                    />

                    {errors.telefono && (
                      <span className="text-red-500 text-xs">
                        {errors.telefono.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Asunto */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#15294a] uppercase tracking-wide">
                    Asunto *
                  </label>

                  <input
                    {...register("asunto")}
                    placeholder="Ej: Consulta sobre contrato mercantil"
                    className="border border-slate-200 bg-white px-4 py-3 text-sm text-[#333333] placeholder-slate-400 focus:outline-none focus:border-[#b08600] transition-colors"
                  />

                  {errors.asunto && (
                    <span className="text-red-500 text-xs">
                      {errors.asunto.message}
                    </span>
                  )}
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#15294a] uppercase tracking-wide">
                    Mensaje *
                  </label>

                  <textarea
                    {...register("mensaje")}
                    rows={5}
                    placeholder="Describa brevemente su consulta..."
                    className="border border-slate-200 bg-white px-4 py-3 text-sm text-[#333333] placeholder-slate-400 focus:outline-none focus:border-[#b08600] transition-colors resize-none"
                  />

                  {errors.mensaje && (
                    <span className="text-red-500 text-xs">
                      {errors.mensaje.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#15294a] hover:bg-[#1e3a6e] disabled:opacity-60 text-white font-semibold py-3.5 flex items-center justify-center gap-2 transition-colors text-sm tracking-wide"
                >
                  {loading ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensaje <Send size={15} />
                    </>
                  )}
                </button>

                <p className="text-xs text-[#888888] text-center">
                  Su información es confidencial y no será compartida con
                  terceros.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}