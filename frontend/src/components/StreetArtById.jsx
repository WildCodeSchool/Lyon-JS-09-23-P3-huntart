import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./streetArtById.css";

function StreetArtById() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3310/api/streetArt/${id}`
        );
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
      const response = await fetch(
        `http://localhost:3310/api/streetArt/${id}`,
        {
          method: "DELETE",
        }
      );

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
        <h2>{data.name}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default StreetArtById;
