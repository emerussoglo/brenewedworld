"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface SlideData {
  id: number;
  badge: string;
  badgeIcon: string;
  title: string;
  slogan: string;
  description: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  secondaryBtnText: string;
  secondaryBtnHref: string;
  bgImage: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    badge: "GÉNIE CIVIL",
    badgeIcon: "fa-solid fa-helmet-safety",
    title: "Bâtir des ouvrages solides et durables",
    slogan: "« Vos rêves, nos réalités »",
    description:
      "Bâtiments R+, villas, ouvrages d'art, voiries et réseaux divers réalisés avec une exigence absolue de qualité structurelle.",
    primaryBtnText: "Découvrir le génie civil",
    primaryBtnHref: "#services",
    secondaryBtnText: "Demander un devis",
    secondaryBtnHref: "/devis",
    bgImage: "/img/hero-genie-civil.jpg", // Assure-toi d'avoir ces images dans public/img/
  },
  {
    id: 2,
    badge: "ARCHITECTURE",
    badgeIcon: "fa-solid fa-compass-drafting",
    title: "Concevoir des espaces qui vous ressemblent",
    slogan: "« Vos rêves, nos réalités »",
    description:
      "Conception architecturale sur mesure, du concept aux plans d'exécution, avec modélisation 3D et rendus réalistes.",
    primaryBtnText: "Voir nos réalisations",
    primaryBtnHref: "#realisations",
    secondaryBtnText: "Demander un devis",
    secondaryBtnHref: "/devis",
    bgImage: "/img/hero-architecture.jpg",
  },
  {
    id: 3,
    badge: "ÉTUDES TECHNIQUES",
    badgeIcon: "fa-solid fa-calculator",
    title: "Des études fiables et bancables",
    slogan: "« Vos rêves, nos réalités »",
    description:
      "Études de structure et de sol, dimensionnement, métrés et devis quantitatifs estimatifs précis.",
    primaryBtnText: "Demander une étude",
    primaryBtnHref: "#devis",
    secondaryBtnText: "Demander un devis",
    secondaryBtnHref: "#devis",
    bgImage: "/img/hero-etudes.jpg",
  },
  {
    id: 4,
    badge: "CONTRÔLE & SUIVI",
    badgeIcon: "fa-solid fa-clipboard-check",
    title: "Sécuriser chaque étape du chantier",
    slogan: "« Vos rêves, nos réalités »",
    description:
      "Contrôle technique indépendant, essais matériaux, pilotage, coordination et reporting régulier.",
    primaryBtnText: "Nos missions de contrôle",
    primaryBtnHref: "#services",
    secondaryBtnText: "Demander un devis",
    secondaryBtnHref: "/devis",
    bgImage: "/img/hero-controle.jpg",
  },
  {
    id: 5,
    badge: "COMMERCE AUTOMOBILE",
    badgeIcon: "fa-solid fa-car",
    title: "Votre véhicule, importé et livré",
    slogan: "« Vos rêves, nos réalités »",
    description:
      "Importation et vente de véhicules soigneusement sélectionnés, contrôlés et livrés avec un accompagnement complet.",
    primaryBtnText: "Acheter un véhicule",
    primaryBtnHref: "#services",
    secondaryBtnText: "Demander un devis",
    secondaryBtnHref: "/devis",
    bgImage: "/img/hero-automobile.jpg",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Defilement automatique toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="hero-section">
      {/* Diapositives d'arrière-plan */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentIndex ? "active" : ""}`}
          style={{
            backgroundImage: `linear-gradient(rgba(18, 58, 68, 0.75), rgba(18, 58, 68, 0.82)), url(${slide.bgImage})`,
          }}
        >
          {index === currentIndex && (
            <div className="container hero-content">
              {/* Badge supérieur */}
              <div className="hero-badge">
                <i className={slide.badgeIcon}></i>
                <span>{slide.badge}</span>
              </div>

              {/* Titre & Slogan */}
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-slogan">{slide.slogan}</p>

              {/* Description */}
              <p className="hero-description">{slide.description}</p>

              {/* Boutons d'action */}
              <div className="hero-actions">
                <Link href={slide.primaryBtnHref} className="btn-hero-primary">
                  <span>{slide.primaryBtnText}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>

                <Link
                  href={slide.secondaryBtnHref}
                  className="btn-hero-secondary"
                >
                  <span>{slide.secondaryBtnText}</span>
                  <i className="fa-solid fa-file-signature"></i>
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Flèches de navigation */}
      <button
        className="hero-arrow hero-arrow-left"
        onClick={prevSlide}
        aria-label="Diapositive précédente"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <button
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}
        aria-label="Diapositive suivante"
      > 
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {/* Indicateurs de pagination (Dots) */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}