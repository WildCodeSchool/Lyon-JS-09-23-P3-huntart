import Login from "../components/Login";
import Register from "../components/Register";
import "./access.css";

function Access() {
  return (
    <div className="container-login-register">
      <h2>Espace d'accès</h2>
      <div className="forms-container">
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default Access;
