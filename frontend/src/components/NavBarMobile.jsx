import { Link } from "react-router-dom";
import "./navBarMobile.css";

function NavbarMobile() {
  return (
    <div className="navbar-mobile">
      <Link to="/page1" className="iconNavBar">
        <img
          src="/backend/public/assets/images/ico/art-white.png"
          alt="icône de la page de la liste des œuvres"
          className="iconNavBar"
        />
      </Link>
      <Link to="/profile" className="iconNavBar">
        <img
          src="/backend/public/assets/images/ico/profile-white.png"
          alt="icône de la page profil"
          className="iconNavBar"
        />
      </Link>
    </div>
  );
}

export default NavbarMobile;
