import "./components/font.css";
import Logo from "./components/Logo";
import "./components/logo.css";
import NavbarMobile from "./components/NavBarMobile";
import NavbarDesktop from "./components/navBarDesktop";
import "./App.css";
import StreetArtList from "./components/StreetArtList";

function App() {
  return (
    <div>
      <Logo />
      <StreetArtList />
      <NavbarMobile />
      <NavbarDesktop />
    </div>
  );
}

export default App;
