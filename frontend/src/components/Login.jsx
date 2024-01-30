import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // TODO: add logic to connect

    try {
      // TODO: add promise to view the response
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      toast.success("Connexion réussie !");
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      toast.error("Erreur lors de la connexion. Veuillez réessayer.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="login-form-container">
      <div className="">
        <h2>Connexion</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="label-login">
          <label htmlFor="email">Email : </label>
        </div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <div className="label-login">
          <label htmlFor="password">Mot de passe : </label>
        </div>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="div-btn-login">
          <button className="btn-login" type="submit">
            Se connecter
          </button>{" "}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
