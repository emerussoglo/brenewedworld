"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Dans quels domaines intervient B-rWorld Group ?",
    answer:
      "Nous intervenons en génie civil, architecture, études techniques, contrôle et suivi de travaux de BTP, ainsi que dans le commerce de véhicules automobiles.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Remplissez le formulaire de la page « Demander un devis » ou appelez-nous. Nous revenons vers vous sous 24 heures ouvrées avec une estimation détaillée.",
  },
  {
    question: "Travaillez-vous avec les particuliers ?",
    answer:
      "Oui. Nous accompagnons les particuliers, les entreprises et les institutions, sur des projets de toutes tailles.",
  },
  {
    question: "Intervenez-vous en dehors de Calavi ?",
    answer:
      "Nous intervenons sur l'ensemble du territoire béninois et étudions toute demande dans la sous-région.",
  },
  {
    question: "Proposez-vous uniquement la construction ?",
    answer:
      "Non. Nous pouvons intervenir sur une seule mission (études, contrôle, suivi) comme sur un projet complet en clé en main.",
  },
  {
    question: "Comment se déroule l'achat d'un véhicule ?",
    answer:
      "Nous définissons ensemble votre besoin et votre budget, puis nous sélectionnons le véhicule, réalisons les contrôles et gérons les formalités jusqu'à la livraison.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        {/* En-tête de la section FAQ */}
        <div className="faq-header">
          <span className="faq-badge">FAQ</span>
          <h2 className="faq-title">Vos questions, <span className="italic">nos réponses</span> </h2>
        </div>

        {/* Liste des questions accordéon */}
        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "open" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq-question">
                  <h3>{item.question}</h3>
                  <button
                    type="button"
                    className="faq-toggle-btn"
                    aria-expanded={isOpen}
                    aria-label="Ouvrir la reponse"
                  >
                    <span className="icon-plus">{isOpen ? "−" : "+"}</span>
                  </button>
                </div>

                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}