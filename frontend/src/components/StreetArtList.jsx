import { useState, useEffect } from "react";
import StreetArtItem from "./StreetArtItem";
import "./streetArtList.css";

function StreetArtList() {
  const [streetArtData, setStreetArtData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/streetart")
      .then((response) => response.json())
      .then((data) => setStreetArtData(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, []);

  return (
    <div className="street-art-list">
      {streetArtData.map((item) => (
        <StreetArtItem
          key={item.id}
          id={item.id}
          name={item.name}
          linkImage={item.linkImage}
        />
      ))}
    </div>
  );
}

export default StreetArtList;
