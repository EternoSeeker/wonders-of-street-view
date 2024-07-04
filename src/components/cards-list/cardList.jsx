import Card from "../location-card/Card";
import "./card-list.css";
import data from "../../data/locations.json";
import PropTypes from "prop-types";

function CardList({ onCardClick }){
    return (
        <div className = "card-list">
            {data.map((item) =>(
                <Card
                key = {item.id}
                name = {item.name}
                tagline = {item.tagline}
                location = {item.location}
                imageLink = {item["image-link"] || "https://via.placeholder.com/300"}
                imageAlt = {item["image-alt"]}
                onClick = {() => onCardClick(item.id)}
                />
            ))}
        </div>
    );
}

CardList.propTypes = {
    onCardClick: PropTypes.func.isRequired,
};

export default CardList;