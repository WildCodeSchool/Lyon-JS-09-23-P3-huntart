import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="container-home">
      <img
        className="imgHome"
        src="/assets/oeuvres/padlock.avif"
        alt="Mur tagué avec le mot `bientôt`"
      />
      <h2>Pour utiliser ce site il faut être connnecté !</h2>
      <div className="container-button-home">
        <Link to="/login">
          <button
            id="button-home-connect"
            className="comic-button"
            type="button"
          >
            Se connecter
          </button>
        </Link>
        <Link to="/access">
          <button
            id="button-home-connect"
            className="comic-button"
            type="button"
          >
            S'inscrire
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
