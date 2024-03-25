import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";
import UseAuthContext from "../hook/useContext";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { dispatch } = UseAuthContext();
  const Navigate = useNavigate();
  const handleChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        JSON.stringify(loginData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const userData = response.data;
      dispatch({ type: "LOGIN", payload: userData });
      localStorage.setItem("user", JSON.stringify(userData));
      Navigate("/streetart");
    } catch (err) {
      console.error(err, "An error occurred during login");
    }
  };
  return (
    <form className="login" onSubmit={handleClick}>
      <h3 className="loging">Se connecter</h3>

      <input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />

      <button id="button-home-connect" className="comic-button" type="submit">
        Connexion
      </button>
    </form>
  );
}

export default Login;
