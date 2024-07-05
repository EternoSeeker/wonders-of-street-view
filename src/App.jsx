import { useState } from 'react';
import "./App.css";
import CardList from "./components/cards-list/CardList";
import TitleBar from "./components/title-bar/TitleBar";
import StreetViewPage from './components/street-view-page/StreetViewPage';
import DisplayBackArrow from './components/back-arrow/DisplayBackArrow';

function App() {
  const [locationId, setLocationId] = useState(null);

  const handleCardClick = (id) => {
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
