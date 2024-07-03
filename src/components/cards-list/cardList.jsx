import Card from "../location-card/Card";
import "./card-list.css";
import data from "../../data/locations.json";

function CardList(){
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
                />
            ))}
        </div>
    );
}

export default CardList;