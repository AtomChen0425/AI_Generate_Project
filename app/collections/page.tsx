"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Category, works } from "@/data/works";
import { WorkCard } from "@/components/WorkCard";
import { Lightbox } from "@/components/Lightbox";

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [lightboxWork, setLightboxWork] = useState<typeof works[0] | null>(null);

  const filteredWorks =
    selectedCategory === "All"
      ? works
      : works.filter((work) => work.category === selectedCategory);

  return (
    <main className="site-shell">
      <div className="page-header">
        <p className="eyebrow">Collections</p>
        <h1>Explore My Curated Galleries.</h1>
      </div>

      <div className="section-shell">
        <div className="filter-bar">
          <div className="tab-row">
            {(["All", "Street", "Flower", "Cinematic", "Landscape"] as const).map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  className={`tab ${selectedCategory === category ? "tab--active" : ""}`}
                  onClick={() => setSelectedCategory(category as Category | "All")}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        <motion.div layout className="masonry-grid">
          <AnimatePresence initial={false} mode="popLayout">
            {filteredWorks.map((work, index) => (
              <motion.article
                layout
                key={work.slug}
                className="work-card"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <WorkCard work={work} onOpen={setLightboxWork} priority={index === 0} />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox work={lightboxWork} onClose={() => setLightboxWork(null)} />
    </main>
  );
}
