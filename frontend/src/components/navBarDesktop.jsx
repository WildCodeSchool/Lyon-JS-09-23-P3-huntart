import { Link } from "react-router-dom";
import "./navBarDesktop.css";

function NavbarDesktop() {
  return (
    <div className="navbar-desktop">
      <Link to="/streetart" className="textLink">
        Street Arts
      </Link>
      <Link to="/contact" className="textLink">
        Contact
      </Link>
    </div>
  );
}

export default NavbarDesktop;
