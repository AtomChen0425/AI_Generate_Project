"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="site-shell">
      <div className="page-header">
        <p className="eyebrow">About Me</p>
        <h1>Capturing the World, One Frame at a Time.</h1>
      </div>

      <div className="about-grid">
        <div className="portrait-card">
          <div className="portrait-card__media">
            <Image src="/portrait.jpg" alt="Professional Portrait" width={1400} height={1750} priority />
          </div>
        </div>

        <div className="about-copy">
          <div className="about-block">
            <h2>My Journey</h2>
            <p>
              Photography for me began as a simple curiosity, a way to document the world around me.
              Over the years, it evolved into a profound passion and a medium through which I express
              my unique perspective. I believe every moment holds a story, and my mission is to capture
              those fleeting narratives with authenticity and artistry.
            </p>
            <p>
              My work often explores the interplay of light and shadow, the raw emotions of individuals,
              and the grandeur of natural landscapes. I&apos;m constantly seeking new challenges and
              opportunities to push the boundaries of my craft.
            </p>
          </div>

          <div className="about-block">
            <h2>Gear & Tech</h2>
            <ul className="stack-list">
              <li>
                <strong>Camera Body:</strong> Sony Alpha a7 III
              </li>
              <li>
                <strong>Lenses:</strong> Sony FE 24-70mm f/2.8 GM, Sony FE 85mm f/1.4 GM, Sigma 35mm
                f/1.4 Art
              </li>
              <li>
                <strong>Editing Software:</strong> Adobe Lightroom, Adobe Photoshop
              </li>
              <li>
                <strong>Other:</strong> DJI Mavic 3 (Drone), Peak Design Tripod, various filters
              </li>
            </ul>
          </div>

          <div className="about-block">
            <h2>Connect</h2>
            <p>
              I&apos;m always open to collaborations, commissions, or just a chat about photography.
              Feel free to reach out.
            </p>
            <div className="contact-links">
              <a href="mailto:hello@example.com">Email</a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
