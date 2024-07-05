import backArrow from "../../assets/backArrow.svg";
import PropTypes from "prop-types";

const DisplayBackArrow = ({ onClick }) => {
  return (
    <div className="back-arrow" onClick={onClick}>
      <img src={backArrow} alt="Back Arrow" className="back-arrow-image" />
    </div>
  );
};

DisplayBackArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DisplayBackArrow;