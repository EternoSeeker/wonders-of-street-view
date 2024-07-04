import PropTypes from "prop-types";
import "./location-info.css";
import pinIcon from "../../assets/pin-drop.svg";

const LocationInfo = ({
  locationName,
  locationAddress,
  locationDescription,
}) => {
  return (
    <div className="location-info">
      <div className="location-name">{locationName}</div>
      <div className="card-location">
        <img src={pinIcon} alt="pinIcon" />
        <div>{locationAddress}</div>
      </div>
      <div className="location-description">{locationDescription}</div>
    </div>
  );
};

LocationInfo.propTypes = {
  locationName: PropTypes.string.isRequired,
  locationAddress: PropTypes.string.isRequired,
  locationDescription: PropTypes.string.isRequired,
};

export default LocationInfo;
