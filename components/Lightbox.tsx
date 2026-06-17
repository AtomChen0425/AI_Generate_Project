"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Work } from "@/data/works";

type LightboxProps = {
  work: Work | null;
  onClose: () => void;
};

const repo = "AI_Generate_Project";
const getAssetPath = (path: string) => {
  if (path.startsWith("http")) return path;

  const base =
    process.env.NODE_ENV === "production"
      ? `/${repo}`
      : "";

  return `${base}${path}`;
};
export function Lightbox({ work, onClose }: LightboxProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!work) {
      return;
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }

      if (event.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        );

        if (focusables.length === 0) {
          event.preventDefault();
          return;
        }

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus?.();
    };
  }, [work, onClose]);

  return (
    <AnimatePresence>
      {work && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lightbox"
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="lightbox__panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={work.title}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="lightbox__close"
              onClick={onClose}
            >
              Close
            </button>
            <div className="lightbox__media">
              <Image src={getAssetPath(work.image)} alt={work.title} priority />
            </div>
            <div className="lightbox__copy">
              <h3>{work.title}</h3>
              <p>{work.category}</p>
              <div className="metadata-row">
                <span>{work.focalLength}</span>
                <span>{work.aperture}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
