import "./card.css";
import PropTypes from "prop-types";
import pinIcon from "../../assets/pin-drop.svg";

function Card({ name, tagline, location, imageLink, imageAlt, onClick }) {
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };
  return (
    <div className="card-container" onClick={handleClick} role="button">
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
  onClick: PropTypes.func.isRequired,
};

export default Card;
