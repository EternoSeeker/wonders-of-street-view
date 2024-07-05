import { useState, useEffect } from "react";
import "./card-list.css";
import DisplayCard from "../location-card/DisplayCard";
import data from "../../data/locations.json";
import PropTypes from "prop-types";

function CardList({ onCardClick }) {
  const [shuffledData, setShuffledData] = useState([]);
  // const imageUrl = "https://res.cloudinary.com/dyebjngbm/image/upload/ar_5:4,w_300,c_fill/e_improve:outdoor:80/f_jpg/Wonders%20of%20street%20view/";
  const alternateImageUrl = "https://res.cloudinary.com/dyebjngbm/image/upload/ar_5:4,w_300,c_fill/e_improve:outdoor:80/f_jpg/";
  // const getImageUrl = (id) => {
  //   return `${imageUrl}loc-${id}.jpg`;
  // }
  const getAlternateImageUrl = (id) => {
    return `${alternateImageUrl}loc-${id}.jpg`;
  }
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
        <DisplayCard
          key={item.id}
          name={item.name}
          tagline={item.tagline}
          location={item.location}
          imageLink= {getAlternateImageUrl(item.id)}
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
