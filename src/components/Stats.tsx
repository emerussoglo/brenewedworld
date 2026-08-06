"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  id: string;
  icon: string; // Classe FontAwesome ou icône SVG
  targetValue: number;
  suffix?: string;
  label: string;
}

const statsData: StatItem[] = [
  {
    id: "projets",
    icon: "fa-solid fa-city",
    targetValue: 120,
    suffix: "+",
    label: "Projets livrés",
  },
  {
    id: "experts",
    icon: "fa-solid fa-users",
    targetValue: 45,
    suffix: "+",
    label: "Experts mobilisés",
  },
  {
    id: "clients",
    icon: "fa-solid fa-face-smile",
    targetValue: 98,
    suffix: "%",
    label: "Clients satisfaits",
  },
  {
    id: "expertise",
    icon: "fa-solid fa-award",
    targetValue: 5,
    suffix: "",
    label: "Années d'expertise",
  },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(statsData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Déclenche l'animation une seule fois
        }
      },
      {
        threshold: 0.25, // Déclenche quand 25% de la section est visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation d'incrémentation des chiffres dès que la section devient visible
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // Durée totale de l'animation en ms (2 secondes)
    const frameDuration = 1000 / 60; // 60 images par seconde (~16ms)
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;

    const counterInterval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Fonction d'assouplissement easeOutQuad pour un effet fluide à la fin
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const nextCounts = statsData.map((stat) =>
        Math.min(Math.floor(stat.targetValue * easeProgress), stat.targetValue)
      );

      setCounts(nextCounts);

      if (frame >= totalFrames) {
        clearInterval(counterInterval);
        // Garantit qu'on atteint la valeur finale exacte
        setCounts(statsData.map((s) => s.targetValue));
      }
    }, frameDuration);

    return () => clearInterval(counterInterval);
  }, [isVisible]);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className={`stat-card ${isVisible ? "reveal-active" : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icône Rose */}
              <div className="stat-icon-wrapper">
                <i className={`${stat.icon} stat-icon`}></i>
              </div>

              {/* Chiffre Animé */}
              <div className="stat-number">
                {counts[index]}
                <span className="stat-suffix">{stat.suffix}</span>
              </div>

              {/* Libellé */}
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}