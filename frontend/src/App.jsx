import "./components/font.css";
import Logo from "./components/Logo";
import "./components/logo.css";
import NavbarMobile from "./components/NavBarMobile";
import NavbarDesktop from "./components/navBarDesktop";
import StreetArtList from "./components/StreetArtList";

function App() {
  return (
    <div className="app-container">
      <header>
        <Logo />
        <NavbarDesktop />
      </header>
      <main>
        <StreetArtList />
      </main>
      <footer>
        <NavbarMobile />
      </footer>
    </div>
  );
}

export default App;
