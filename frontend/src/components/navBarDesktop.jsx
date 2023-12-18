import { Link } from "react-router-dom";
import "./navBarDesktop.css";

function NavbarDesktop() {
  return (
    <div className="navbar-desktop">
      <Link to="/page1">Page 1</Link>
      <Link to="/profile">Profil</Link>
    </div>
  );
}

export default NavbarDesktop;
