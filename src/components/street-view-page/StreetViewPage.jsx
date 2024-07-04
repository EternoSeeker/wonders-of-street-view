import PropTypes from "prop-types";
import LocationInfo from "../title-description/location-info";
import DisplayMap from "../embed-map/display-map";
import StreetView from "../street-view/StreetView";
import data from "../../data/locations.json";
import "./streetViewPage.css";

const StreetViewPage = ({ id }) => {
  const locationData = data.find((location) => location.id === id);

  if (!locationData) {
    return Error("Location not found");
  }

  return (
    <div className="street-view-page">
      <div className="info-map-container">
        <LocationInfo
          locationName={locationData["name"]}
          locationAddress={locationData["location"]}
          locationDescription={locationData["description"]}
        />
        <DisplayMap
          latitude={locationData["coordinates"]["latitude"]}
          longitude={locationData["coordinates"]["longitude"]}
        />
      </div>
      <div className="street-view-container">
        <StreetView embedObject={locationData["embedStreetViewSrc"]} />
      </div>
    </div>
  );
};

StreetViewPage.propTypes = {
  id: PropTypes.number.isRequired,
};

export default StreetViewPage;