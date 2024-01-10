import PropTypes from "prop-types";
import "./streetArtItem.css";

function StreetArtItem({ id, name, linkImage }) {
  return (
    <div className="street-art-item">
      <img src={`${linkImage}`} alt={`StreetArt ${id}`} />
      <h2>{name}</h2>
    </div>
  );
}

StreetArtItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  linkImage: PropTypes.string.isRequired,
};

export default StreetArtItem;
