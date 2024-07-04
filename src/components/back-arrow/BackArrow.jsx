import backArrow from "../../assets/backArrow.svg";

const DisplayBackArrow = () => {
  return (
    <div className="back-arrow">
      <img src={backArrow} alt="Back Arrow" className="back-arrow-image" />
    </div>
  );
};

export default DisplayBackArrow;