import { useState } from 'react';
import "./App.css";
import CardList from "./components/cards-list/cardList";
import TitleBar from "./components/title-bar/TitleBar";
import StreetViewPage from './components/street-view-page/StreetViewPage';
import DisplayBackArrow from './components/back-arrow/BackArrow';

function App() {
  const [locationId, setLocationId] = useState(null);

  const handleCardClick = (id) => {
    console.log("Card clicked:", id);
    setLocationId(id);
  };

  const handleBackClick = () => {
    setLocationId(null);
  };

  return (
    <div className="App">
      <TitleBar />
      {locationId === null ? (
        <CardList onCardClick={handleCardClick} />
      ) : (
        <>
          <DisplayBackArrow onClick={handleBackClick} />
          <StreetViewPage id={locationId} />
        </>
      )}
    </div>
  );
}

export default App;
