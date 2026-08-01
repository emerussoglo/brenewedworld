"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "#a-propos" },
  { name: "Services", href: "#services" },
  { name: "Réalisations", href: "#realisations" },
  { name: "Notre équipe", href: "#equipe" },
  { name: "Nos agences", href: "#agences" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Désactiver le scroll en arrière-plan lorsque le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo" onClick={closeMenu}>
          <Image
            src="/img/logo.jpeg"
            alt="BR World Group Logo"
            width={160}
            height={50}
            priority
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Liens Desktop */}
        <nav className="navbar-desktop-nav">
          <ul className="navbar-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bouton CTA Desktop */}
        <div className="navbar-desktop-cta">
          <Link href="#devis" className="btn-devis">
            <span>Demander un devis</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        {/* Bouton Hamburger Mobile */}
        <button
          className="mobile-toggle-btn"
          onClick={toggleMenu}
          aria-label="Ouvrir le menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Menu Overlay Mobile */}
      <div className={`mobile-menu-overlay ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <Link href="/" className="navbar-logo" onClick={closeMenu}>
            <Image
              src="/img/log.png"
              alt="BR World Group Logo"
              width={140}
              height={45}
              style={{ objectFit: "contain" }}
            />
          </Link>
          <button
            className="mobile-close-btn"
            onClick={closeMenu}
            aria-label="Fermer le menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav className="mobile-menu-nav">
          <ul className="mobile-links-list">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <li
                  key={link.name}
                  className="mobile-link-item"
                  style={{ animationDelay: `${0.08 * (index + 1)}s` }}
                >
                  <Link
                    href={link.href}
                    className={`mobile-nav-link ${isActive ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    <span>{link.name}</span>
                    <i className="fa-solid fa-chevron-right arrow-icon"></i>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className="mobile-cta-wrapper"
            style={{ animationDelay: `${0.08 * (navLinks.length + 1)}s` }}
          >
            <Link href="#devis" className="btn-devis full-width" onClick={closeMenu}>
              <span>Demander un devis</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}