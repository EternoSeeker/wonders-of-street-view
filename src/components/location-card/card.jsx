import "./card.css";
import PropTypes from "prop-types";
import pinIcon from "../../assets/pin-drop.svg";
import { useState, useRef, useEffect } from "react";

function Card({ name, tagline, location, imageLink, imageAlt, onClick }) {
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };

  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const cardRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentCardRef = cardRef.current;

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  const animationClass = isVisible
    ? scrollDirection === "down"
      ? "visible-from-bottom"
      : "visible-from-top"
    : "";

  return (
    <div
      ref={cardRef}
      className={`card-container ${animationClass}`}
      onClick={handleClick}
      role="button"
    >
      <div className="card">
        <img className="card-image" src={imageLink} alt={imageAlt} />
      </div>
      <div>
        <div className="card-title">{name}</div>
        <div className="card-tagline">{tagline}</div>
      </div>

      <div className="card-location">
        <img src={pinIcon} alt="pinIcon" />
        <div>{location}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
