import { useState } from "react";
import "./register.css";

function Register() {
  const [formData, setFormData] = useState({
    pseudo: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container-register">
      <h3>Inscription</h3>
      <form>
        <div className="label-register">
          <label htmlFor="pseudo">Pseudo : </label>
        </div>
        <input
          type="text"
          id="pseudo"
          name="pseudo"
          value={formData.pseudo}
          onChange={handleChange}
        />

        <div className="label-register">
          <label htmlFor="email">Email : </label>
        </div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <div className="label-register">
          <label htmlFor="password">Mot de passe : </label>
        </div>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="div-btn-register">
          <button className="btn-register" type="submit">
            Créer un compte
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
