import { Link } from "react-router-dom";
import "./navBarMobile.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavbarMobile() {
  return (
    <div className="navbar-mobile">
      <Link to="/accueil" className="iconNavBar">
        <img
          className="ico"
          alt="Bouton Accueil"
          src="/assets/ico/home-5-xxl.png"
        />
      </Link>
      <Link to="/streetart" className="iconNavBar">
        <img
          className="ico"
          alt="Bouton Liste des Street Arts"
          src="/assets/ico/instagram-3-xxl.png"
        />
      </Link>
      <Link to="/contact" className="iconNavBar">
        <img
          className="ico"
          alt="Bouton contact"
          src="/assets/ico/email-xxl.png"
        />
      </Link>
    </div>
  );
}

export default NavbarMobile;
