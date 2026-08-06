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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log("Données envoyées :", formData);
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
                <a href="tel:0156100000" className="info-val">
                  01 56 10 00 00
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
                href="https://wa.me/2290156100000"
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

              <button type="submit" className="btn-submit">
                <span>Envoyer le message</span>
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}