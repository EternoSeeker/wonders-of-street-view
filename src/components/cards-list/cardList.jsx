import { useState, useEffect } from "react";
import Card from "../location-card/Card";
import "./card-list.css";
import data from "../../data/locations.json";
import PropTypes from "prop-types";

function CardList({ onCardClick }) {
  const [shuffledData, setShuffledData] = useState([]);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    setShuffledData(shuffleArray(data));
  }, []);
  
  return (
    <div className="card-list">
      {shuffledData.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          tagline={item.tagline}
          location={item.location}
          imageLink={item["image-link"] || "https://via.placeholder.com/300"}
          imageAlt={item["image-alt"]}
          onClick={() => onCardClick(item.id)}
        />
      ))}
    </div>
  );
}

CardList.propTypes = {
  onCardClick: PropTypes.func.isRequired,
};

export default CardList;
