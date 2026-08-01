import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Colonne 1 : Logo & Presentation */}
        <div className="footer-col footer-brand">
          <div className="footer-logo-card">
            <Image
              src="/img/log.png"
              alt="BR World Group Logo"
              width={150}
              height={50}
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="footer-description">
            Building Renewed World (BR World Group) accompagne particuliers,
            entreprises et institutions dans le génie civil, l&apos;architecture, les
            études, le contrôle et le suivi de travaux, ainsi que le commerce
            automobile.
          </p>
          <p className="footer-slogan">« Vos rêves, nos réalités »</p>
        </div>

        {/* Colonne 2 : Liens rapides */}
        <div className="footer-col">
          <h4 className="footer-title">LIENS RAPIDES</h4>
          <ul className="footer-links">
            <li>
              <Link href="/">
                <i className="fa-solid fa-chevron-right arrow-bullet"></i> Accueil
              </Link>
            </li>
            <li>
              <Link href="#a-propos">
                <i className="fa-solid fa-chevron-right arrow-bullet"></i> À propos
              </Link>
            </li>
            <li>
              <Link href="#services">
                <i className="fa-solid fa-chevron-right arrow-bullet"></i> Services
              </Link>
            </li>
            <li>
              <Link href="#realisations">
                <i className="fa-solid fa-chevron-right arrow-bullet"></i> Réalisations
              </Link>
            </li>
            <li>
              <Link href="#equipe">
                <i className="fa-solid fa-chevron-right arrow-bullet"></i> Notre équipe
              </Link>
            </li>
            <li>
              <Link href="#agences">
                <i className="fa-solid fa-chevron-right arrow-bullet"></i> Nos agences
              </Link>
            </li>
            <li>
              <Link href="#faq">
                <i className="fa-solid fa-chevron-right arrow-bullet"></i> FAQ
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <i className="fa-solid fa-chevron-right arrow-bullet"></i> Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Nos Services */}
        <div className="footer-col">
          <h4 className="footer-title">NOS SERVICES</h4>
          <ul className="footer-links">
            <li>
              <Link href="#services">
                <i className="fa-solid fa-chevron-right arrow-bullet"></i> Génie Civil
              </Link>
            </li>
            <li>
              <Link href="#services">
                <i className="fa-solid fa-chevron-right arrow-bullet"></i> Architecture
              </Link>
            </li>
            <li>
              <Link href="#services">
                <i className="fa-solid fa-chevron-right arrow-bullet"></i> Études techniques
              </Link>
            </li>
            <li>
              <Link href="#services">
                <i className="fa-solid fa-chevron-right arrow-bullet"></i> Contrôle de travaux
              </Link>
            </li>
            <li>
              <Link href="#services">
                <i className="fa-solid fa-chevron-right arrow-bullet"></i> Suivi de chantier
              </Link>
            </li>
            <li>
              <Link href="#services">
                <i className="fa-solid fa-chevron-right arrow-bullet"></i> Commerce automobile
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonne 4 : Coordonnées & Réseaux */}
        <div className="footer-col">
          <h4 className="footer-title">COORDONNÉES</h4>
          <ul className="footer-contact">
            <li>
              <i className="fa-solid fa-location-dot icon-pink"></i>
              <span>Calavi, Bénin</span>
            </li>
            <li>
              <i className="fa-solid fa-phone icon-pink"></i>
              <a href="tel:0127010101">01 27 01 01 01</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope icon-pink"></i>
              <a href="mailto:buildingrenewedworld@gmail.com">
                buildingrenewedworld@gmail.com
              </a>
            </li>
            <li className="hours-item">
              <i className="fa-regular fa-clock icon-pink"></i>
              <div>
                <p>Lundi - Vendredi : 08H00 - 18H30</p>
                <p>Samedi : 09H00 - 15H00</p>
              </div>
            </li>
          </ul>

          <div className="footer-socials">
            <a
              href="https://wa.me/2290127010101"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Barre du bas avec copyright */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>© 2026 Building Renewed World — BR World Group. Tous droits réservés.</p>
          <p className="created-date">Créée le 16 juin 2021 · Calavi, Bénin</p>
        </div>
      </div>
    </footer>
  );
}