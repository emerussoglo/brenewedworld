"use client";

import { useState, useRef, useEffect, UIEvent } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  category: "genie-civil" | "architecture" | "controle-suivi" | "automobile";
  categoryLabel: string;
  description: string;
  location: string;
  date: string;
  image: string;
}

const projectsData: Project[] = [
  {
    id: "villa-calavi",
    title: "Villa contemporaine — Calavi",
    category: "architecture",
    categoryLabel: "Architecture",
    description:
      "Conception et construction d'une villa duplex de 320 m² avec finitions haut de gamme.",
    location: "Calavi, Bénin",
    date: "Mars 2024",
    image: "/img/projects/villa-calavi.jpg",
  },
  {
    id: "immeuble-r4",
    title: "Immeuble de bureaux R+4",
    category: "genie-civil",
    categoryLabel: "Génie Civil",
    description:
      "Réalisation d'un immeuble tertiaire avec façade rideau et structure béton armé.",
    location: "Cotonou, Bénin",
    date: "Septembre 2024",
    image: "/img/projects/immeuble-bureaux.jpg",
  },
  {
    id: "voirie-assainissement",
    title: "Voirie & assainissement",
    category: "genie-civil",
    categoryLabel: "Génie Civil",
    description:
      "Travaux de voirie urbaine, caniveaux et réseaux d'évacuation sur 2,4 km.",
    location: "Abomey-Calavi, Bénin",
    date: "Juin 2023",
    image: "/img/projects/voirie.jpg",
  },
  {
    id: "complexe-scolaire",
    title: "Complexe scolaire",
    category: "architecture",
    categoryLabel: "Architecture",
    description:
      "Construction d'un complexe de 12 salles de classe autour d'un patio arboré.",
    location: "Porto-Novo, Bénin",
    date: "Janvier 2025",
    image: "/img/projects/complexe-scolaire.jpg",
  },
  {
    id: "mission-controle",
    title: "Mission de contrôle technique",
    category: "controle-suivi",
    categoryLabel: "Contrôle & Suivi",
    description:
      "Contrôle de conformité et essais matériaux sur un chantier industriel.",
    location: "Sèmè-Kpodji, Bénin",
    date: "Novembre 2024",
    image: "/img/projects/controle-technique.jpg",
  },
  {
    id: "flotte-automobile",
    title: "Livraison de flotte automobile",
    category: "automobile",
    categoryLabel: "Automobile",
    description:
      "Importation et livraison d'une flotte de véhicules pour une entreprise locale.",
    location: "Cotonou, Bénin",
    date: "Avril 2025",
    image: "/img/projects/flotte-auto.jpg",
  },
];

const categories = [
  { key: "all", label: "Tous" },
  { key: "genie-civil", label: "Génie Civil" },
  { key: "architecture", label: "Architecture" },
  { key: "controle-suivi", label: "Contrôle & Suivi" },
  { key: "automobile", label: "Automobile" },
];

export default function Realisations() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const isAdjustingRef = useRef<boolean>(false);

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const isAll = activeCategory === "all";

  // Duplication uniquement en mode "Tous"
  const displayProjects = isAll
    ? [
        ...filteredProjects,
        ...filteredProjects,
        ...filteredProjects,
        ...filteredProjects,
      ]
    : filteredProjects;

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    if (!isAll || isAdjustingRef.current) return;

    const container = e.currentTarget;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    const cards = container.querySelectorAll<HTMLElement>(".project-card");

    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);

    const singleSetWidth = container.scrollWidth / 4;

    if (container.scrollLeft <= singleSetWidth * 0.5) {
      isAdjustingRef.current = true;
      container.scrollLeft += singleSetWidth * 2;
      setTimeout(() => {
        isAdjustingRef.current = false;
      }, 50);
    } else if (container.scrollLeft >= singleSetWidth * 2.5) {
      isAdjustingRef.current = true;
      container.scrollLeft -= singleSetWidth * 2;
      setTimeout(() => {
        isAdjustingRef.current = false;
      }, 50);
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      if (isAll) {
        const singleSetWidth = container.scrollWidth / 4;
        container.scrollLeft = singleSetWidth * 1.5;
      } else {
        container.scrollLeft = 0;
      }
    }
  }, [activeCategory, isAll]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section className="projects-section" id="realisations">
      <div className="container">
        {/* En-tête centré */}
        <div className="projects-header reveal">
          <div className="projects-badge">
            <span className="badge-line">—</span>
            <span>NOS RÉALISATIONS</span>
          </div>

          <h2 className="projects-title">
            Des ouvrages qui parlent <span className="italic">pour nous</span>
          </h2>

          <p className="projects-subtitle">
            Villas, immeubles, voiries, équipements publics et flottes
            automobiles : découvrez les projets et infrastructures déjà
            réalisés.
          </p>

          {/* Boutons de Filtres */}
          <div className="filter-buttons reveal delay-1">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                className={`filter-btn ${
                  activeCategory === cat.key ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Carrousel Horizontal */}
        <div className="carousel-wrapper">
          {isAll && (
            <button
              type="button"
              className="carousel-arrow prev-arrow"
              onClick={scrollLeft}
              aria-label="Projet précédent"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          )}

          <div
            className={`projects-carousel ${!isAll ? "is-filtered" : ""}`}
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            {displayProjects.map((project, index) => {
              // En mode filtré, toutes les cartes affichées gardent leur taille normale/active
              const isCentered = !isAll || index === activeIndex;

              return (
                <div
                  key={`${project.id}-${index}`}
                  className={`project-card ${isCentered ? "is-centered" : ""}`}
                >
                  <div className="project-image-wrapper">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="project-image"
                      sizes="(max-width: 768px) 80vw, 340px"
                    />
                    <span className="project-category-tag">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="project-content">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-meta">
                      <span className="meta-item">
                        <i className="fa-solid fa-location-dot meta-icon"></i>
                        {project.location}
                      </span>
                      <span className="meta-item">
                        <i className="fa-regular fa-calendar meta-icon"></i>
                        {project.date}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {isAll && (
            <button
              type="button"
              className="carousel-arrow next-arrow"
              onClick={scrollRight}
              aria-label="Projet suivant"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          )}
        </div>

        {/* Bouton Voir tout */}
        <div className="projects-footer-action reveal delay-2">
          <Link href="/realisations" className="btn-all-projects">
            <span>Voir toute la galerie</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}