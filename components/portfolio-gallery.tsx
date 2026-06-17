"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { portfolioWorks } from "../data/portfolio";

type PortfolioGalleryProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  defaultCategory?: string;
  showSearch?: boolean;
};

const tabs = ["All", "Street", "Portrait", "Cinematic", "Landscape"];

export function PortfolioGallery({
  eyebrow,
  title,
  subtitle,
  defaultCategory = "All",
}: PortfolioGalleryProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeTab, setActiveTab] = useState(defaultCategory);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedId ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedId]);

  const visibleWorks = useMemo(() => {
    if (activeTab === "All") {
      return portfolioWorks;
    }

    return portfolioWorks.filter((work) => work.category === activeTab);
  }, [activeTab]);

  const selectedWork = portfolioWorks.find((work) => work.id === selectedId) ?? null;

  return (
    <>
      <section className="gallery-hero">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p className="gallery-hero__lede">{subtitle}</p>
        </div>

        <div className="gallery-hero__meta">
          <div className="stat-card">
            <strong>{portfolioWorks.length}</strong>
            <span>works</span>
          </div>
          <div className="stat-card">
            <strong>{new Set(portfolioWorks.map((work) => work.category)).size}</strong>
            <span>collections</span>
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
          >
            Theme: {theme}
          </button>
        </div>
      </section>

      <div className="filter-bar">
        <div className="tab-row" role="tablist" aria-label="Photo categories">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={activeTab === tab ? "tab tab--active" : "tab"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <motion.section layout className="masonry-grid" aria-label="photography gallery">
        <AnimatePresence initial={false} mode="popLayout">
          {visibleWorks.map((work) => (
            <motion.article
              layout
              key={work.id}
              className="work-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <button type="button" className="work-card__button" onClick={() => setSelectedId(work.id)}>
                <div className="work-card__media">
                  <img src={work.image} alt={work.alt} loading="lazy" />
                  <div className="work-card__overlay">
                    <p>{work.location}</p>
                    <span>
                      {work.focalLength} · {work.aperture} · {work.shutter}
                    </span>
                  </div>
                </div>

                <div className="work-card__body">
                  <div>
                    <p className="work-card__category">{work.category}</p>
                    <h3>{work.title}</h3>
                  </div>
                  <p className="work-card__meta">
                    {work.year} · {work.camera}
                  </p>
                </div>
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.section>

      <AnimatePresence>
        {selectedWork ? (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={selectedWork.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="lightbox__panel"
              initial={{ scale: 0.96, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 24 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" className="lightbox__close" onClick={() => setSelectedId(null)}>
                Close
              </button>

              <div className="lightbox__media">
                <img src={selectedWork.image} alt={selectedWork.alt} />
              </div>

              <div className="lightbox__copy">
                <p className="eyebrow">
                  {selectedWork.category} / {selectedWork.location}
                </p>
                <h3>{selectedWork.title}</h3>
                <p>{selectedWork.story}</p>

                <div className="metadata-row">
                  <span>{selectedWork.focalLength}</span>
                  <span>{selectedWork.aperture}</span>
                  <span>{selectedWork.shutter}</span>
                  <span>{selectedWork.iso}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
