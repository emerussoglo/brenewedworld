import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="about-section" id="a-propos">
      <div className="container">
        {/* En-tête centré avec apparition verticale */}
        <div className="about-header reveal">
          <div className="about-badge">
            <span className="badge-line">—</span>
            <span>À PROPOS DE NOUS</span>
          </div> 

          <h2 className="about-title">
            Une entreprise pluridisciplinaire au service de <span className="italic">vos projets</span> 
          </h2>
        </div>

        {/* Grille 2 colonnes */}
        <div className="about-container">
          {/* Colonne Gauche : Image (Glisse depuis la gauche) */}
          <div className="about-image-wrapper reveal-left">
            <Image
              src="/img/bann2.jpeg"
              alt="Équipe BR World Group"
              width={650}
              height={500}
              className="about-image"
              priority
            />
          </div>

          {/* Colonne Droite : Textes et Actions (Glisse depuis la droite avec léger retard) */}
          <div className="about-content reveal-right delay-1">
            <p className="about-intro">
              Building Renewed World (BR World Group) est spécialisée dans le
              Génie Civil, l&apos;Architecture, l&apos;Étude, le Contrôle et le
              Suivi des travaux de BTP ainsi que dans le Commerce de Véhicules
              Automobiles.
            </p>

            <p className="about-description">
              Forte d&apos;une équipe pluridisciplinaire, qualifiée et expérimentée,
              l&apos;entreprise accompagne particuliers, entreprises et
              institutions dans la réalisation de projets durables et innovants.
              Créée le 16 juin 2021, BR World Group s&apos;impose comme un
              partenaire de confiance grâce à une gestion rigoureuse, un parc
              matériel performant et une approche centrée sur la satisfaction
              client.
            </p>

            <div className="about-actions reveal delay-2">
              <Link href="#services" className="btn-about-primary">
                <span>En savoir plus</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>

              <Link href="#realisations" className="btn-about-secondary">
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}