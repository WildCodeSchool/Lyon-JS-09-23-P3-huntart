import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

function Signup() {
  const [addNewUser, setAddNewUser] = useState({
    pseudo: "",
    email: "",
    password: "",
  });
  const Navigate = useNavigate();

  // Gérer le changement pour distribuer les données dans les input
  const handleChange = (e) => {
    setAddNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3310/api/user",
        JSON.stringify(addNewUser),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      Navigate("/login");
    } catch (err) {
      console.error(err, "Votre inscription a mal fonctionné. ");
    }
  };
  return (
    <form className="login" onSubmit={handleClick}>
      <h3 className="signup">Signup</h3>
      <input
        type="pseudo"
        name="pseudo"
        onChange={handleChange}
        placeholder="pseudo"
      />
      <input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="email"
      />

      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
