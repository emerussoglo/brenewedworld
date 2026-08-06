import Image from "next/image";

interface Agency {
  id: string;
  name: string;
  tagline: string;
  city: string;
  locationLabel: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
  };
  image: string;
  mapsUrl: string;
  mapEmbedSrc?: string;
}

const agenciesData: Agency[] = [
  {
    id: "siege-calavi",
    name: "Siège — BR World Group",
    tagline: "Bureau principal & Direction technique",
    city: "Calavi",
    locationLabel: "Calavi, Bénin",
    phone: "01 56 10 00 00",
    email: "buildingrenewedworld@gmail.com",
    hours: {
      weekdays: "Lundi - Vendredi : 08H00 - 18H30",
      saturday: "Samedi : 09H00 - 15H00",
    },
    image: "/img/agencies/siege-calavi.jpg",
    mapsUrl: "https://maps.app.goo.gl/kKuC24kkNUB3fSGd8",
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.65487654321!2d2.345!3d6.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMDAuMCJOIDLCsDIwJzAwLjAiRQ!5e0!3m2!1sfr!2sbj!4v1600000000000",
  },
  {
    id: "agence-automobile-cotonou",
    name: "Agence Commerciale Automobile",
    tagline: "Showroom & Vente de véhicules",
    city: "Cotonou",
    locationLabel: "Cotonou, Bénin",
    phone: "01 56 10 00 00",
    email: "buildingrenewedworld@gmail.com",
    hours: {
      weekdays: "Lundi - Vendredi : 08H00 - 18H30",
      saturday: "Samedi : 09H00 - 15H00",
    },
    image: "/img/agencies/agence-cotonou.jpg",
    mapsUrl: "https://maps.google.com",
  },
];

export default function Agencies() {
  return (
    <section className="agencies-section" id="agences">
      <div className="container">
        {/* En-tête de section avec reveal */}
        <div className="agencies-header reveal">
          <div className="agencies-badge">
            <span className="badge-line">—</span>
            <span>NOS IMPLANTATIONS</span>
          </div>

          <h2 className="agencies-title">Nos Agences & Points de <span className="italic"> Contact </span> </h2>

          <p className="agencies-subtitle">
            Retrouvez-nous dans nos locaux à Calavi et Cotonou pour échanger sur
            vos projets de construction ou découvrir notre parc automobile.
          </p>
        </div>

        {/* Grille des Agences */}
        <div className="agencies-grid">
          {agenciesData.map((agency, index) => (
            <div
              key={agency.id}
              className={`agency-card reveal delay-${index + 1}`}
            >
              {/* Photo de façade avec Badge de ville */}
              <div className="agency-image-wrapper">
                <Image
                  src={agency.image}
                  alt={`Façade de l'agence ${agency.name}`}
                  fill
                  className="agency-image"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <span className="agency-city-badge">{agency.city}</span>
              </div>

              {/* Informations textuelles */}
              <div className="agency-content">
                <h3 className="agency-name">{agency.name}</h3>
                <p className="agency-tagline">{agency.tagline}</p>

                {/* Coordonnées */}
                <ul className="agency-info-list">
                  <li>
                    <i className="fa-solid fa-location-dot agency-icon"></i>
                    <span>{agency.locationLabel}</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone agency-icon"></i>
                    <a href={`tel:${agency.phone.replace(/\s+/g, "")}`}>
                      {agency.phone}
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope agency-icon"></i>
                    <a href={`mailto:${agency.email}`}>{agency.email}</a>
                  </li>
                  <li>
                    <i className="fa-regular fa-clock agency-icon"></i>
                    <div>
                      <div>{agency.hours.weekdays}</div>
                      <div>{agency.hours.saturday}</div>
                    </div>
                  </li>
                </ul>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}