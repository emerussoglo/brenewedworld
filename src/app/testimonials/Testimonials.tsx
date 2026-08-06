"use client";

import { useRef, useState, useEffect } from "react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  stars: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote:
      "Un accompagnement du premier plan jusqu'à la remise des clés. Les délais et le budget ont été respectés.",
    author: "Adjovi K.",
    role: "Particulier — Villa Calavi",
    stars: 5,
  },
  {
    id: "2",
    quote:
      "Le suivi de chantier était irréprochable : reporting clair chaque semaine et vraie maîtrise technique.",
    author: "Sikirou T.",
    role: "Directeur — PME agroalimentaire",
    stars: 5,
  },
  {
    id: "3",
    quote:
      "Des études sérieuses et bien documentées. BR World Group est devenu notre partenaire de référence.",
    author: "Marielle H.",
    role: "Responsable projets — Institution",
    stars: 5,
  },
  {
    id: "4",
    quote:
      "Une réactivité impressionnante et des matériaux de première qualité. Je recommande les yeux fermés.",
    author: "Koffi A.",
    role: "Promoteur immobilier — Cotonou",
    stars: 5,
  },
];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Duplication des éléments pour créer l'effet d'infinis sans coupure
  const displayItems = [...testimonialsData, ...testimonialsData];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.8; // Vitesse de défilement (en px par frame)

    const step = () => {
      if (!isPaused && container) {
        container.scrollLeft += speed;

        // Réinitialisation imperceptible lorsque la première moitié est défilée
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* En-tête */}
        <div className="testimonials-header">
          <div className="testimonials-badge">
            <span className="badge-line">—</span>
            <span>TÉMOIGNAGES</span>
          </div>
          <h2 className="testimonials-title">Ils nous font <span className="italic">confiance</span> </h2>
        </div>

        {/* Piste de défilement avec pause au survol */}
        <div
          className="testimonials-track-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="testimonials-track" ref={scrollRef}>
            {displayItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="testimonial-card"
              >
                {/* Guillemets rose magenta */}
                <div className="quote-icon">
                  <i className="fa-solid fa-quote-left"></i>
                </div>

                {/* Texte de l'avis */}
                <p className="testimonial-text">{item.quote}</p>

                <div className="card-divider"></div>

                {/* Info Auteur */}
                <div className="testimonial-footer">
                  <div className="author-info">
                    <h4 className="author-name">{item.author}</h4>
                    <p className="author-role">{item.role}</p>
                  </div>

                  {/* 5 Étoiles magenta */}
                  <div className="stars-rating">
                    {Array.from({ length: item.stars }).map((_, i) => (
                      <i key={i} className="fa-solid fa-star star-icon"></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}