import { useState } from 'react';
import "./App.css";
import CardList from "./components/cards-list/cardList";
import TitleBar from "./components/title-bar/TitleBar";

function App() {
  return (
    <>
      <TitleBar />
      <CardList />
    </>
  );
}

export default App;
