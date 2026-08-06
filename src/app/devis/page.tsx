"use client";

import { useState } from "react";
import Link from "next/link";

export default function DevisPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    ville: "",
    typeProjet: "",
    budget: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Données du formulaire :", formData);
    // Logique d'envoi API ici
  };

  return (
    <main className="devis-page">
      {/* En-tête / Hero Bleu Canard */}
      <section className="devis-hero"> 
        <div className="container">
          {/* Fil d'ariane */}
          <nav className="devis-breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="separator">/</span>
            <span className="current">Demander un devis</span>
          </nav>

          <h1 className="devis-hero-title">
            Recevez une estimation sous 48 heures
          </h1>

          <p className="devis-hero-subtitle">
            Plus votre description est précise, plus notre estimation sera juste.
            Nous revenons vers vous avec un devis détaillé et transparent.
          </p>
        </div>
      </section>

      {/* Section Contenu (Formulaire + Sidebar) */}
      <section className="devis-content-section">
        <div className="container">
          <div className="devis-grid">
            {/* Colonne Gauche : Formulaire */}
            <div className="devis-form-card reveal">
              <h2 className="form-card-title">Votre demande</h2>
              <p className="form-card-subtitle">
                Les champs marqués d&apos;un astérisque sont obligatoires.
              </p>

              <form onSubmit={handleSubmit} className="devis-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nom">
                      Nom <span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="prenom">
                      Prénom <span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      required
                      value={formData.prenom}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telephone">
                      Téléphone <span className="asterisk">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      required
                      value={formData.telephone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      E-mail <span className="asterisk">*</span>
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
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="ville">
                      Ville <span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      id="ville"
                      name="ville"
                      placeholder="Ex. Calavi"
                      required
                      value={formData.ville}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="typeProjet">
                      Type de projet <span className="asterisk">*</span>
                    </label>
                    <select
                      id="typeProjet"
                      name="typeProjet"
                      required
                      value={formData.typeProjet}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Sélectionnez...
                      </option>
                      <option value="genie-civil">Génie Civil</option>
                      <option value="architecture">Architecture</option>
                      <option value="etudes-techniques">Études techniques</option>
                      <option value="controle-travaux">Contrôle de travaux</option>
                      <option value="suivi-chantier">Suivi de chantier</option>
                      <option value="commerce-automobile">Commerce automobile</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">
                    Budget estimatif <span className="asterisk">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Sélectionnez...
                    </option>
                    <option value="moins-5m">Moins de 5 millions FCFA</option>
                    <option value="5m-15m">5 à 15 millions FCFA</option>
                    <option value="15m-50m">15 à 50 millions FCFA</option>
                    <option value="plus-50m">Plus de 50 millions FCFA</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="description">
                    Description du projet <span className="asterisk">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    placeholder="Surface, nombre de niveaux, localisation, délais souhaités..."
                    required
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Box information pièces jointes */}
                <div className="attachment-notice">
                  <i className="fa-solid fa-paperclip notice-icon"></i>
                  <span>
                    L&apos;ajout de pièces jointes (plans, photos, cahier des
                    charges) sera bientôt disponible. En attendant, envoyez-les à{" "}
                    <a href="mailto:buildingrenewedworld@gmail.com">
                      buildingrenewedworld@gmail.com
                    </a>
                    .
                  </span>
                </div>

                {/* Bouton d'envoi rose */}
                <button type="submit" className="btn-submit-devis">
                  <span>Envoyer ma demande</span>
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>

            {/* Colonne Droite : Sidebar (Besoin d'une réponse + Ce qui se passe ensuite) */}
            <aside className="devis-sidebar">
              {/* Carte Appel Rapide */}
              <div className="quick-call-card reveal delay-1">
                <h3 className="quick-call-title">Besoin d&apos;une réponse rapide ?</h3>
                <p className="quick-call-text">
                  Appelez-nous directement pendant les heures d&apos;ouverture, nous
                  étudions votre besoin immédiatement.
                </p>
                <a href="tel:0156100000" className="quick-call-btn">
                  <i className="fa-solid fa-phone"></i>
                  <span>01 56 10 00 00</span>
                </a>
              </div>

              {/* Carte Étapes */}
              <div className="process-card reveal delay-2">
                <h3 className="process-card-title">Ce qui se passe ensuite</h3>

                <ul className="process-list">
                  <li>
                    <span className="step-number">1</span>
                    <p>
                      Nous analysons votre demande et vous rappelons pour préciser
                      le besoin.
                    </p>
                  </li>
                  <li>
                    <span className="step-number">2</span>
                    <p>Nous réalisons les métrés et l&apos;estimation détaillée.</p>
                  </li>
                  <li>
                    <span className="step-number">3</span>
                    <p>
                      Nous vous transmettons le devis et planifions le démarrage.
                    </p> 
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}