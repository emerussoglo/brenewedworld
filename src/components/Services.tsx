import Link from "next/link";

interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: "genie-civil",
    icon: "fa-solid fa-helmet-safety",
    title: "Génie Civil",
    description:
      "Construction de bâtiments, ouvrages d'art, voiries et réseaux divers avec une exigence absolue de qualité structurelle.",
    features: [
      "Bâtiments R+ et villas",
      "Ouvrages d'art",
      "VRD & assainissement",
    ],
  },
  {
    id: "architecture",
    icon: "fa-solid fa-compass-drafting",
    title: "Architecture",
    description:
      "Conception architecturale sur mesure, du concept aux plans d'exécution, avec modélisation 3D et rendus réalistes.",
    features: [
      "Esquisses & APS/APD",
      "Modélisation 3D",
      "Permis de construire",
    ],
  },
  {
    id: "etudes-techniques",
    icon: "fa-solid fa-ruler-combined",
    title: "Études techniques",
    description:
      "Études de structure, de sol, dimensionnement, métrés et devis quantitatifs estimatifs fiables et bancables.",
    features: [
      "Notes de calcul",
      "Métrés & DQE",
      "Études de faisabilité",
    ],
  },
  {
    id: "controle-travaux",
    icon: "fa-solid fa-clipboard-check",
    title: "Contrôle de travaux",
    description:
      "Contrôle technique indépendant, vérification de conformité et essais pour sécuriser chaque étape du chantier.",
    features: [
      "Conformité normative",
      "Essais matériaux",
      "Rapports de contrôle",
    ],
  },
  {
    id: "suivi-chantier",
    icon: "fa-solid fa-diagram-project",
    title: "Suivi de chantier",
    description:
      "Pilotage, coordination et reporting régulier : délais maîtrisés, budget tenu, qualité constante.",
    features: [
      "Planning & OPC",
      "Reporting hebdomadaire",
      "Réception des travaux",
    ],
  },
  {
    id: "commerce-automobile",
    icon: "fa-solid fa-car",
    title: "Commerce automobile",
    description:
      "Importation et vente de véhicules soigneusement sélectionnés, contrôlés et livrés avec accompagnement complet.",
    features: [
      "Véhicules neufs & occasions",
      "Import sur commande",
      "Formalités & livraison",
    ],
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* En-tête de la section avec reveal */}
        <div className="services-header reveal">
          <div className="services-badge">
            <span className="badge-line">—</span>
            <span>NOS SERVICES</span>
          </div>

          <h2 className="services-title">
            Six expertises, une seule exigence : la qualité
          </h2>

          <p className="services-subtitle">
            Du premier croquis à la remise des clés, nous couvrons l&apos;ensemble
            de la chaîne de valeur du bâtiment — et bien plus.
          </p>
        </div>

        {/* Grille des cartes services (3x2) */}
        <div className="services-grid">
          {servicesData.map((service, index) => {
            // Calcule le délai (delay-1, delay-2, delay-3) par ligne de 3 éléments
            const delayClass = `delay-${(index % 3) + 1}`;

            return (
              <div
                key={service.id}
                className={`service-card reveal ${delayClass}`}
              >
                {/* Icône avec fond arrondi pastel */}
                <div className="service-icon-wrapper">
                  <i className={service.icon}></i>
                </div>

                {/* Titre & Description */}
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">
                  {service.description}
                </p>

                {/* Liste à puces avec coches */}
                <ul className="service-features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fa-solid fa-check service-check-icon"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Lien bas de carte */}
                <Link
                  href={`/contact?service=${service.id}`}
                  className="service-link"
                >
                  <span>Demander un devis</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}