"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Category, works } from "@/data/works";
import { WorkCard } from "@/components/WorkCard";
import { Lightbox } from "@/components/Lightbox";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [lightboxWork, setLightboxWork] = useState<typeof works[0] | null>(null);

  const filteredWorks =
    selectedCategory === "All"
      ? works
      : works.filter((work) => work.category === selectedCategory);

  return (
    <main className="site-shell">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Photography Portfolio</p>
          <h1>Capturing Moments, Crafting Stories.</h1>
          <p className="hero-lede">
            A curated collection of visual narratives, exploring the beauty in everyday life and
            extraordinary landscapes.
          </p>
          <div className="hero-actions">
            <Link href="/about" className="button button--primary">
              About Me
            </Link>
            <Link href="/collections" className="button button--secondary">
              View Collections
            </Link>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel__card">
            <p className="panel-label">Explore</p>
            <ul className="route-list">
              <li>
                <strong>
                  <Link href="/about">About</Link>
                </strong>
                <span>Learn more about my journey and vision.</span>
              </li>
              <li>
                <strong>
                  <Link href="/collections">Collections</Link>
                </strong>
                <span>Browse works by category.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-shell">
        <div className="gallery-hero">
          <div>
            <p className="eyebrow">Featured Works</p>
            <h2>A Glimpse into My Lens.</h2>
            <p className="gallery-hero__lede">
              From bustling streets to serene landscapes, each photograph tells a unique story.
            </p>
          </div>
          <div className="gallery-hero__meta">
            <div className="stat-card">
              <strong>{works.length}</strong>
              <span>Works</span>
            </div>
            <div className="stat-card">
              <strong>4</strong>
              <span>Categories</span>
            </div>
          </div>
        </div>

        <div className="filter-bar">
          <div className="tab-row">
            {(["All", "Street", "Portrait", "Cinematic", "Landscape"] as const).map(
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
