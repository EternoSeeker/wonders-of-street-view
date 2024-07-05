import barBackground from "../../assets/bar-background.jpg";

const TitleBar = () => {
    return (
        <div className="title-bar">
            <img src={barBackground} alt="Background" className="title-bar-image" loading="lazy"/>
            <div className="title-text julius-sans-one-regular">Wonders of Street View</div>
        </div>
    );
};

export default TitleBar;
