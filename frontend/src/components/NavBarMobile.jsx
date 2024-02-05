import { Link } from "react-router-dom";
import "./navBarMobile.css";
import HomeSvg from "./svg/HomeSvg";
import OeuvreIcoSvg from "./svg/OeuvreIcoSvg";
import MessageIcoSvg from "./svg/MessageIcoSvg";
import SendIcoSvg from "./svg/SendIcoSvg";
import UserIcoSvg from "./svg/UserIcoSvg";

function NavbarMobile() {
  return (
    <div className="navbar-mobile">
      <Link to="/accueil" className="iconNavBar">
        <HomeSvg />
        <span>Accueil</span>
      </Link>
      <Link to="/streetart" className="iconNavBar">
        <OeuvreIcoSvg />
        <span>Oeuvres</span>
      </Link>
      <Link to="/post" className="iconNavBar">
        <SendIcoSvg />
        <span>Poster</span>
      </Link>
      <Link to="/contact" className="iconNavBar">
        <MessageIcoSvg />
        <span>contact</span>
      </Link>
      <Link to="/access" className="iconNavBar">
        <UserIcoSvg />
        <span>Compte</span>
      </Link>
    </div>
  );
}

export default NavbarMobile;
