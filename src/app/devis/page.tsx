"use client";

import { useState } from "react";
import Link from "next/link";

interface FormData {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  ville: string;
  typeProjet: string;
  budget: string;
  description: string;
}

const TOTAL_STEPS = 5;

const projectTypes = [
  { id: "genie-civil", label: "Génie Civil", icon: "fa-building" },
  { id: "architecture", label: "Architecture", icon: "fa-compass-drafting" },
  { id: "etudes-techniques", label: "Études techniques", icon: "fa-calculator" },
  { id: "controle-travaux", label: "Contrôle de travaux", icon: "fa-clipboard-check" },
  { id: "suivi-chantier", label: "Suivi de chantier", icon: "fa-helmet-safety" },
  { id: "commerce-automobile", label: "Commerce automobile", icon: "fa-car" },
];


  const budgetRanges = [
  { id: "moins-5m", label: "Moins de 5M FCFA", icon: "fa-seedling" },
  { id: "5m-15m", label: "5 à 15M FCFA", icon: "fa-chart-line" },
  { id: "15m-50m", label: "15 à 50M FCFA", icon: "fa-building-columns" },
  { id: "plus-50m", label: "Plus de 50M FCFA", icon: "fa-rocket" },
];

export default function DevisPage() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
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

  const handleSelectOption = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Données du formulaire finales :", formData);
    setIsSubmitted(true);
  };

  // Validation par étape
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return !!formData.typeProjet;
      case 2:
        return !!formData.budget;
      case 3:
        return !!formData.description.trim();
      case 4:
        return (
          !!formData.nom.trim() &&
          !!formData.prenom.trim() &&
          !!formData.email.trim() &&
          !!formData.telephone.trim() &&
          !!formData.ville.trim()
        );
      default:
        return true;
    }
  };

  const getLabelForType = (id: string) =>
    projectTypes.find((t) => t.id === id)?.label || id;

  const getLabelForBudget = (id: string) =>
    budgetRanges.find((b) => b.id === id)?.label || id;

  return (
    <main className="devis-page">
      {/* Hero Header */}
      <section className="devis-hero">
        <div className="container">
          <nav className="devis-breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="separator">/</span>
            <span className="current">Demander un devis</span>
          </nav>

          <h1 className="devis-hero-title">
            {currentStep === 0
              ? "Recevez une estimation sous 48 heures"
              : "Parlez-nous de votre projet"}
          </h1>
          <p className="devis-hero-subtitle">
            Un parcours simple et rapide pour définir vos besoins en quelques clics.
          </p>
        </div>
      </section>

      {/* Zone Formulaire Step-by-Step */}
      <section className="devis-content-section">
        <div className="container">
          <div className="devis-grid">
            {/* Colonne Principale */}
            <div className="devis-card-wrapper">
              {/* Barre de progression si le questionnaire a commencé */}
              {currentStep > 0 && !isSubmitted && (
                <div className="step-progress-header">
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${(currentStep / TOTAL_STEPS) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="step-counter">
                    Étape {currentStep} / {TOTAL_STEPS}
                  </span>
                </div>
              )}

              <div className="devis-form-card">
                {/* ÉTAPE 0 : INTRO / COMMENCER */}
                {currentStep === 0 && (
                  <div className="step-intro text-center">
                    <div className="intro-icon-circle">
                      <i className="fa-solid fa-clipboard-list"></i>
                    </div>
                    <h2>Parlez-nous de votre projet en 3 minutes.</h2>
                    <p>
                      Notre équipe analyse votre dossier et revient vers vous avec
                      un devis détaillé et transparent sous 24h.
                    </p>
                    <button
                      className="btn-start-wizard"
                      onClick={() => setCurrentStep(1)}
                    >
                      <span>Commencer le questionnaire</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                )}

                {/* ÉTAPE 1 : TYPE DE PROJET */}
                {currentStep === 1 && (
                  <div className="step-content">
                    <span className="step-category">VOTRE BESOIN</span>
                    <h2 className="step-question">
                      Quel est le type de votre projet ?
                    </h2>
                    <div className="options-grid">
                      {projectTypes.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          className={`option-card ${
                            formData.typeProjet === item.id ? "selected" : ""
                          }`}
                          onClick={() => handleSelectOption("typeProjet", item.id)}
                        >
                          <i className={`fa-solid ${item.icon} option-icon`}></i>
                          <span className="option-text">{item.label}</span>
                          {formData.typeProjet === item.id && (
                            <i className="fa-solid fa-circle-check check-icon"></i>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

               {/* ÉTAPE 2 : BUDGET ESTIMATIF */}
{currentStep === 2 && (
  <div className="step-content">
    <span className="step-category">FINANCEMENT</span>
    <h2 className="step-question">
      Quel est votre budget estimatif ?
    </h2>
    <div className="options-list">
      {budgetRanges.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`option-card-row ${
            formData.budget === item.id ? "selected" : ""
          }`}
          onClick={() => handleSelectOption("budget", item.id)}
        >
          <i className={`fa-solid ${item.icon} option-icon`}></i>
          <span className="option-text">{item.label}</span>
          {formData.budget === item.id && (
            <i className="fa-solid fa-circle-check check-icon"></i>
          )}
        </button>
      ))}
    </div>
  </div>
)}

                {/* ÉTAPE 3 : DESCRIPTION */}
                {currentStep === 3 && (
                  <div className="step-content">
                    <span className="step-category">DÉTAILS</span>
                    <h2 className="step-question">
                      Décrivez brièvement votre projet
                    </h2>
                    <div className="form-group">
                      <label htmlFor="description">
                        Description de votre besoin <span className="asterisk">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={6}
                        placeholder="Ex: Surface du terrain, nombre de niveaux, type de bâtiment, localisation précise, délais souhaités..."
                        value={formData.description}
                        onChange={handleChange}
                        autoFocus
                      ></textarea>
                    </div>

                    <div className="attachment-notice">
                      <i className="fa-solid fa-paperclip notice-icon"></i>
                      <span>
                        L&apos;envoi de plans et documents se fera après la soumission de cette demande.
                      </span>
                    </div>
                  </div>
                )}

                {/* ÉTAPE 4 : COORDONNÉES */}
                {currentStep === 4 && (
                  <div className="step-content">
                    <span className="step-category">VOS COORDONNÉES</span>
                    <h2 className="step-question">Comment pouvons-nous vous joindre ?</h2>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="nom">
                          Nom <span className="asterisk">*</span>
                        </label>
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          placeholder="Votre nom"
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
                          value={formData.prenom}
                          onChange={handleChange}
                          placeholder="Votre prénom"
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
                          value={formData.telephone}
                          onChange={handleChange}
                          placeholder="Ex: 01 49 95 95 49"
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
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="nom@exemple.com"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="ville">
                        Ville / Localisation <span className="asterisk">*</span>
                      </label>
                      <input
                        type="text"
                        id="ville"
                        name="ville"
                        value={formData.ville}
                        onChange={handleChange}
                        placeholder="Ex: Calavi, Cotonou..."
                      />
                    </div>
                  </div>
                )}

                {/* ÉTAPE 5 : RÉCAPITULATIF & SOUMISSION */}
                {currentStep === 5 && !isSubmitted && (
                  <form onSubmit={handleSubmit} className="step-content">
                    <span className="step-category">VERIFICATION</span>
                    <h2 className="step-question">Récapitulatif de votre demande</h2>
                    <p className="summary-intro">
                      Vérifiez les informations ci-dessous. Vous pouvez modifier n&apos;importe quelle section avant d&apos;envoyer.
                    </p>

                    <div className="summary-boxes">
                      {/* Box 1: Projet */}
                      <div className="summary-card">
                        <div className="summary-card-header">
                          <h4>
                            <i className="fa-solid fa-diagram-project"></i> Type de projet
                          </h4>
                          <button
                            type="button"
                            className="btn-edit"
                            onClick={() => setCurrentStep(1)}
                          >
                            <i className="fa-solid fa-pen-to-square"></i> Modifier
                          </button>
                        </div>
                        <p>{getLabelForType(formData.typeProjet) || "Non spécifié"}</p>
                      </div>

                      {/* Box 2: Budget */}
                      <div className="summary-card">
                        <div className="summary-card-header">
                          <h4>
                            <i className="fa-solid fa-wallet"></i> Budget estimatif
                          </h4>
                          <button
                            type="button"
                            className="btn-edit"
                            onClick={() => setCurrentStep(2)}
                          >
                            <i className="fa-solid fa-pen-to-square"></i> Modifier
                          </button>
                        </div>
                        <p>{getLabelForBudget(formData.budget) || "Non spécifié"}</p>
                      </div>

                      {/* Box 3: Description */}
                      <div className="summary-card">
                        <div className="summary-card-header">
                          <h4>
                            <i className="fa-solid fa-align-left"></i> Description
                          </h4>
                          <button
                            type="button"
                            className="btn-edit"
                            onClick={() => setCurrentStep(3)}
                          >
                            <i className="fa-solid fa-pen-to-square"></i> Modifier
                          </button>
                        </div>
                        <p className="summary-desc-text">
                          {formData.description || "Aucune description renseignée."}
                        </p>
                      </div>

                      {/* Box 4: Contact */}
                      <div className="summary-card">
                        <div className="summary-card-header">
                          <h4>
                            <i className="fa-solid fa-user"></i> Vos informations
                          </h4>
                          <button
                            type="button"
                            className="btn-edit"
                            onClick={() => setCurrentStep(4)}
                          >
                            <i className="fa-solid fa-pen-to-square"></i> Modifier
                          </button>
                        </div>
                        <ul className="summary-contact-list">
                          <li>
                            <strong>Nom :</strong> {formData.prenom} {formData.nom}
                          </li>
                          <li>
                            <strong>Tél :</strong> {formData.telephone}
                          </li>
                          <li>
                            <strong>Email :</strong> {formData.email}
                          </li>
                          <li>
                            <strong>Ville :</strong> {formData.ville}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <button type="submit" className="btn-submit-devis">
                      <span>Confirmer et envoyer la demande</span>
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                )}

                {/* ÉCRAN DE CONFIRMATION FINAL */}
                {isSubmitted && (
                  <div className="step-success text-center">
                    <div className="success-icon-circle">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <h2>Demande envoyée avec succès !</h2>
                    <p>
                      Merci <strong>{formData.prenom}</strong>. Notre équipe étudie votre dossier et vous contactera sous 24h.
                    </p>
                    <Link href="/" className="btn-start-wizard">
                      <span>Retourner à l&apos;accueil</span>
                      <i className="fa-solid fa-house"></i>
                    </Link>
                  </div>
                )}

                {/* BOUTONS DE NAVIGATION BAS */}
                {currentStep > 0 && currentStep < TOTAL_STEPS && !isSubmitted && (
                  <div className="wizard-navigation">
                    <button
                      type="button"
                      className="btn-wizard-back"
                      onClick={handlePrev}
                    >
                      <i className="fa-solid fa-arrow-left"></i>
                      <span>Retour</span>
                    </button>

                    <button
                      type="button"
                      className="btn-wizard-next"
                      onClick={handleNext}
                      disabled={!isStepValid()}
                    >
                      <span>Continuer</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Colonne Droite : Sidebar Informations */}
            <aside className="devis-sidebar">
              <div className="quick-call-card">
                <h3 className="quick-call-title">
                  Besoin d&apos;une réponse rapide ?
                </h3>
                <p className="quick-call-text">
                  Appelez-nous directement pendant nos heures d&apos;ouverture, nous sommes à votre disposition.
                </p>
                <a href="tel:0149959549" className="quick-call-btn">
                  <i className="fa-solid fa-phone"></i>
                  <span>01 49 95 95 49</span>
                </a>
              </div>

              <div className="process-card">
                <h3 className="process-card-title">Ce qui se passe ensuite</h3>
                <ul className="process-list">
                  <li>
                    <span className="step-number">1</span>
                    <p>
                      Analyse approfondie de vos besoins par nos ingénieurs.
                    </p>
                  </li>
                  <li>
                    <span className="step-number">2</span>
                    <p>Élaboration du devis et métrés sous 48h.</p>
                  </li>
                  <li>
                    <span className="step-number">3</span>
                    <p>
                      Prise de contact pour affiner les détails et planifier.
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