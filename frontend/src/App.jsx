import "./components/font.css";
import Logo from "./components/Logo";
import "./components/logo.css";
import NavbarMobile from "./components/NavBarMobile";
import NavbarDesktop from "./components/navBarDesktop";
import "./App.css";

function App() {
  return (
    <div>
      <Logo />
      <NavbarMobile />
      <NavbarDesktop />
    </div>
  );
}

export default App;
