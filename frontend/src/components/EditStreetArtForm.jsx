import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditStreetArtForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3310/api/streetArt/${id}`
        );
        const result = await response.json();
        setFormData({ title: result.title, description: result.description });
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données du Street Art :",
          error
        );
      }
    };

    fetchData();
  }, [id]);

  const handleUpdateStreetArt = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3310/api/streetArt/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Street art mis à jour avec succès");
        navigate(`/streetart/${id}`);
      } else {
        console.error(
          "Erreur lors de la mise à jour du street art :",
          response.statusText
        );
        toast.error(
          `Erreur lors de la mise à jour du street art : ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du street art :", error);
      toast.error(
        `Erreur lors de la mise à jour du street art : ${error.message}`
      );
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleUpdateStreetArt}>
        <label htmlFor="title">Titre :</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="description">Description :</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit">Mettre à jour le Street Art</button>
      </form>
    </div>
  );
}

export default EditStreetArtForm;
