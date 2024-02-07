import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./streetArtById.css";

function StreetArtById() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/streetArt/${id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails du Street Art :",
          error
        );
      }
    };

    fetchData();
  }, [id]);

  const handleDeleteStreetArt = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/streetArt/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Street art supprimé avec succès");
        navigate("/streetart");
      } else {
        console.error(
          "Erreur lors de la suppression du street art :",
          response.statusText
        );
        toast.error(
          `Erreur lors de la suppression du street art : ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du street art :", error);
      toast.error(
        `Erreur lors de la suppression du street art : ${error.message}`
      );
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-streetArt">
      <div className="container-img-streetArt div-tape1">
        <img src={data.linkImage} alt={`StreetArt ${id}`} />
      </div>{" "}
      <div className="container-txt-streetArt div-tape2">
        <button
          type="button"
          onClick={handleDeleteStreetArt}
          className="btn btn-danger"
        >
          Supprimer le Street Art
        </button>
        <button type="button" className="edit-button">
          <Link to={`/streetart/${id}/edit`} className="edit-link">
            Modifier le Street Art
          </Link>
        </button>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default StreetArtById;
