"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // État pour contrôler la modale (pop-up)
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "success" | "error";
    title: string;
    message: string;
  }>({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setModalState({
          isOpen: true,
          type: "success",
          title: "Message envoyé !",
          message:
            "Merci ! Votre message a bien été transmis. Nos équipes vous répondront dans les plus brefs délais.",
        });
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setModalState({
          isOpen: true,
          type: "error",
          title: "Échec de l'envoi",
          message:
            result.message ||
            "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
        });
      }
    } catch (error) {
      console.error("Erreur:", error);
      setModalState({
        isOpen: true,
        type: "error",
        title: "Erreur de connexion",
        message:
          "Impossible de contacter le serveur. Veuillez vérifier votre connexion internet et réessayer.",
      });
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="contact-page">
      {/* Hero Section Banner */}
      <section className="contact-hero">
        <div className="contact-container">
          <nav className="contact-breadcrumb">
            <a href="/">Accueil</a> <span>/</span> <span className="active">Contact</span>
          </nav>
          <h1 className="contact-hero-title">Parlons de votre projet</h1>
          <p className="contact-hero-subtitle">
            Une question, un besoin d'étude, une visite de chantier ? Nos équipes vous répondent rapidement.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="contact-content-section">
        <div className="contact-container contact-grid">
          
          {/* Colonne de gauche : Cartes d'informations */}
          <div className="contact-info-column">
            
            {/* Téléphone */}
            <div className="info-card">
              <div className="info-icon-box">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="info-text">
                <span className="info-label">TÉLÉPHONE</span>
                <a href="tel:0149959549" className="info-val">
                  01 49 95 95 49
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="info-card">
              <div className="info-icon-box">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="info-text">
                <span className="info-label">E-MAIL</span>
                <a href="mailto:buildingrenewedworld@gmail.com" className="info-val">
                  buildingrenewedworld@gmail.com
                </a>
              </div>
            </div>

            {/* Adresse */}
            <div className="info-card">
              <div className="info-icon-box">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="info-text">
                <span className="info-label">ADRESSE</span>
                <p className="info-val text-dark">Calavi, Bénin</p>
              </div>
            </div>

            {/* Horaires & Réseaux */}
            <div className="info-card hours-card">
              <span className="info-label">HORAIRES</span>
              
              <div className="hours-list">
                <div className="hours-row">
                  <span>Lundi - Vendredi</span>
                  <strong>08H00 - 18H30</strong>
                </div>
                <div className="hours-row">
                  <span>Samedi</span>
                  <strong>09H00 - 15H00</strong>
                </div>
              </div>

              {/* Icones Réseaux */}
              <div className="social-links">
                <a href="#" className="social-btn" aria-label="WhatsApp">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="#" className="social-btn" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="social-btn" aria-label="TikTok">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </div>

              {/* Bouton WhatsApp */}
              <a
                href="https://wa.me/2290149959549"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <i className="fa-brands fa-whatsapp"></i>
                Écrire sur WhatsApp
              </a>
            </div>

          </div>

          {/* Colonne de droite : Formulaire */}
          <div className="contact-form-card">
            <h2 className="form-title">Formulaire de contact</h2>
            <p className="form-subtitle">
              Tous les champs marqués d'un astérisque sont obligatoires.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">
                    Nom complet <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Téléphone <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  E-mail <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Objet <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Ex. Étude d'une villa"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Décrivez votre besoin en quelques lignes..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-submit" disabled={loading}>
                <span>{loading ? "Envoi en cours..." : "Envoyer le message"}</span>
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* MODALE POP-UP PREMIER PLAN */}
      {modalState.isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture au clic sur la carte
          >
            <div className={`modal-icon-box ${modalState.type}`}>
              {modalState.type === "success" ? (
                <i className="fa-solid fa-circle-check"></i>
              ) : (
                <i className="fa-solid fa-circle-xmark"></i>
              )}
            </div>

            <h3 className="modal-title">{modalState.title}</h3>
            <p className="modal-message">{modalState.message}</p>

            <button
              type="button"
              className={`modal-btn ${modalState.type}`}
              onClick={closeModal}
            >
              D'accord
            </button>
          </div>
        </div>
      )}
    </div>
  );
}