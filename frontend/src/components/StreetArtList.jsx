import { useState, useEffect } from "react";
import StreetArtItem from "./StreetArtItem";
import "./streetArtList.css";

function StreetArtList() {
  const [streetArtData, setStreetArtData] = useState([]);

  useEffect(() => {
    fetch("/json/streetArtList.json")
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
          url={item.url}
        />
      ))}
    </div>
  );
}

export default StreetArtList;
