"use client";

import Image from "next/image";
import { Work } from "@/data/works";

type WorkCardProps = {
  work: Work;
  onOpen: (work: Work) => void;
  priority?: boolean;
};

export function WorkCard({ work, onOpen, priority = false }: WorkCardProps) {
  return (
    <button type="button" className="work-card__button" onClick={() => onOpen(work)}>
      <div className="work-card__media">
        <Image
          src={work.image}
          alt={work.title}
          sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
          priority={priority}
        />
        <div className="work-card__overlay">
          <p className="work-card__category">{work.category}</p>
          <h3>{work.title}</h3>
          <p className="work-card__meta">
            <span>{work.focalLength}</span> / <span>{work.aperture}</span>
          </p>
        </div>
      </div>
      <div className="work-card__body">
        <h3>{work.title}</h3>
        <p className="work-card__meta">{work.category}</p>
      </div>
    </button>
  );
}
