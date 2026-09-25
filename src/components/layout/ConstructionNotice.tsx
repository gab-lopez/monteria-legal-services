"use client";

import { useState, useSyncExternalStore } from "react";
import { X, Hammer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "construction-notice-dismissed";

function wasDismissed() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

const noopSubscribe = () => () => {};

export default function ConstructionNotice() {
  // En el servidor se asume cerrado para no renderizarlo; en el cliente se lee sessionStorage.
  const dismissedBefore = useSyncExternalStore(noopSubscribe, wasDismissed, () => true);
  const [closed, setClosed] = useState(false);
  const visible = !dismissedBefore && !closed;

  const dismiss = () => {
    setClosed(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm z-[60]"
          style={{
            backgroundColor: "#15294a",
            color: "#ffffff",
            borderTop: "3px solid #b08600",
            boxShadow: "0 10px 30px rgba(21,41,74,0.25)",
            padding: "1rem 2.75rem 1rem 1rem",
          }}
        >
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
            <Hammer size={18} color="#e7d451" style={{ flexShrink: 0, marginTop: "2px" }} />
            <div>
              <p style={{
                fontSize: "0.95rem",
                margin: 0,
                fontFamily: "var(--font-dm-serif), Georgia, serif",
              }}>
                Sitio en construcción
              </p>
              <p style={{ fontSize: "0.8rem", margin: "0.25rem 0 0", lineHeight: 1.5, color: "rgba(255,255,255,0.8)" }}>
                Estamos preparando nuestro nuevo sitio web. Parte del contenido puede cambiar o estar incompleto.
              </p>
            </div>
          </div>
          <button
            onClick={dismiss}
            aria-label="Cerrar aviso"
            style={{
              position: "absolute",
              top: "0.6rem",
              right: "0.6rem",
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.7)",
              cursor: "pointer",
              padding: "0.25rem",
            }}
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
