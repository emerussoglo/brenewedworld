"use client";

import { useState } from "react";
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

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="realisations-page">
      {/* Hero Banner avec Fil d'Ariane */}
    {/* Hero Banner avec Fil d'Ariane */}
<section className="realisations-hero">
  <div className="container">
    <nav className="realisations-breadcrumb">
      <Link href="/">Accueil</Link>
      <span className="breadcrumb-separator">/</span>
      <span className="active">Réalisations</span>
    </nav>

    <h1 className="realisations-hero-title">Toutes nos réalisations</h1>

    <p className="realisations-hero-subtitle">
      Explorez l'ensemble de nos projets en génie civil, architecture, contrôle
      technique et fournitures d'équipements.
    </p>

    {/* Filtres par catégories */}
    <div className="filter-buttons">
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
</section>

      {/* Grille des Projets */}
      <section className="realisations-grid-section">
        <div className="container">
          <div className="projects-static-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-static-card">
                <div className="project-image-wrapper">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="project-image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}