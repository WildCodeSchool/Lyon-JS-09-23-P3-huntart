import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import UseAuthContext from "../hook/useContext";
import "./streetArtPost.css";

function StreetArtPost() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    photo: null,
  });
  const { authUser } = UseAuthContext();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formDataObject = new FormData();
      formDataObject.append("name", formData.name);
      formDataObject.append("description", formData.description);
      formDataObject.append("photo", formData.photo);

      const response = await fetch(`${backendUrl}/api/streetart`, {
        method: "POST",
        body: formDataObject,
        headers: { Authorization: `Bearer ${authUser.token}` },
      });

      if (response.ok) {
        toast.success("Street art posté avec succès");
        setFormData({
          name: "",
          description: "",
          photo: null,
        });
        navigate("/streetart");
      } else {
        // Erreur
        toast.error("Erreur lors du post du street art");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de la demande :", error);
      toast.error("Erreur lors du post du street art");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  return (
    <div className="cardPostForm">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="photo">Image:</label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleImageChange}
        />

        <label htmlFor="name">Nom de l'oeuvre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <input type="submit" value="Poster" />
      </form>
    </div>
  );
}

export default StreetArtPost;
