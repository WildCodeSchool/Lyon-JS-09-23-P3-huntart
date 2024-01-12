import { Link } from "react-router-dom";
import "./logo.css";

function Logo() {
  return (
    <Link to="/accueil" className="logo-link">
      <h1 className="logo">Hunt Art</h1>
    </Link>
  );
}

export default Logo;
