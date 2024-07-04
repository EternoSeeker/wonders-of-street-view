import PropTypes from "prop-types";
import LocationInfo from "../title-description/LocationInfo";
import DisplayMap from "../display-map/DisplayMap";
import StreetView from "../street-view/StreetView";
import data from "../../data/locations.json";
import "./street-view-page.css";

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
        <StreetView embedObject={locationData["embed-street-view-src"]} />
      </div>
    </div>
  );
};

StreetViewPage.propTypes = {
  id: PropTypes.number.isRequired,
};

export default StreetViewPage;