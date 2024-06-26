import "./card.css";
import PropTypes from "prop-types";
import pinIcon from "../../../tempfiles/pin-drop.svg";

function Card({name, tagline, location, imageLink, imageAlt}) {
  return (
    <div className="card-container">
      <div className="card">
        <img className="card-image" src={imageLink} alt={imageAlt} />
      </div>
      <div>
        <div className="card-title">{name}</div>
        <div className="card-tagline">{tagline}</div>
      </div>

      <div className="card-location">
        <img src={pinIcon} alt="pinIcon" />
        <div>{location}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default Card;
