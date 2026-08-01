"use client";

import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-actions">
      {/* Bouton Retour en haut */}
      <button
        className={`scroll-to-top ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Retour en haut de page"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      {/* Bouton WhatsApp Flottant */}
      <a
        href="https://wa.me/2290127010101"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Contacter sur WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  );
}