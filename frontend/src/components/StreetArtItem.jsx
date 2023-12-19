import PropTypes from "prop-types";

function StreetArtItem({ id, name, url }) {
  return (
    <div className="street-art-item">
      <p>coucou</p>
      <img src={url} alt={`StreetArt ${id}`} />
      <p>{name}</p>
    </div>
  );
}

StreetArtItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default StreetArtItem;
