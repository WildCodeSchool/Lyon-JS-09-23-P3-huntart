import PropTypes from "prop-types";
import "./streetArtItem.css";
import { Link } from "react-router-dom";

function StreetArtItem({ id, name, linkImage }) {
  return (
    <div className="street-art-item">
      <Link to={`/streetart/${id}`}>
        <img src={`${linkImage}`} alt={`StreetArt ${id}`} />
        <h2>{name}</h2>
      </Link>
    </div>
  );
}

StreetArtItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  linkImage: PropTypes.string.isRequired,
};

export default StreetArtItem;
