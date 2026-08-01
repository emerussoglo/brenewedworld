import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

const teamData: TeamMember[] = [
  {
    id: "rodrigue",
    name: "Rodrigue A.",
    role: "Directeur Général",
    description:
      "Ingénieur en génie civil, il pilote la stratégie et la qualité technique de l'ensemble des projets.",
    image: "/img/team/rodrigue.jpg",
  },
  {
    id: "nadia",
    name: "Nadia B.",
    role: "Architecte principale",
    description:
      "Elle conduit la conception architecturale, des esquisses jusqu'aux plans d'exécution.",
    image: "/img/team/nadia.jpg",
  },
  {
    id: "kevin",
    name: "Kevin D.",
    role: "Conducteur de travaux",
    description:
      "Il coordonne les équipes sur chantier et garantit le respect des plannings et de la sécurité.",
    image: "/img/team/kevin.jpg",
  },
  {
    id: "sylvie",
    name: "Sylvie M.",
    role: "Responsable commerciale",
    description:
      "Interlocutrice des clients, elle suit les devis, les contrats et l'activité automobile.",
    image: "/img/team/sylvie.jpg",
  },
];

export default function Team() {
  return (
    <section className="team-section" id="equipe">
      <div className="container">
        {/* En-tête centré */}
        <div className="team-header">
          <div className="team-badge">
            <span className="badge-line">—</span>
            <span>NOTRE ÉQUIPE</span>
          </div>

          <h2 className="team-title">
            Les femmes et les hommes derrière nos ouvrages
          </h2>

          <p className="team-subtitle">
            Ingénieurs, architectes, techniciens et commerciaux : des profils
            complémentaires, un seul standard de qualité.
          </p>
        </div>

        {/* Grille des membres (4 colonnes) */}
        <div className="team-grid">
          {teamData.map((member) => (
            <div key={member.id} className="team-card">
              {/* Photo du membre */}
              <div className="team-image-wrapper">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="team-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Infos textuelles (sans boutons de contact) */}
              <div className="team-content">
                <h3 className="team-member-name">{member.name}</h3>
                <span className="team-member-role">{member.role}</span>
                <p className="team-member-desc">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton global en bas de section */}
        <div className="team-footer-action">
          <Link href="/equipe" className="btn-all-team">
            <span>Découvrir toute l&apos;équipe</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}