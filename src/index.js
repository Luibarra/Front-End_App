import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

import AddCardButton from "./components/AddCardButton/AddCardButton";
import CameraButton from "./components/CameraButton/CameraButton";
import CardBolt from "./components/CardBolt/CardBolt";
import CardGleeful from "./components/CardGleeful/CardGleeful";
import CardListFull from "./components/CardListFull/CardListFull";
import CardResultsOne from "./components/CardResultsOne/CardResultsOne";
import DecklistBackground from './components/DecklistBackground/DecklistBackground'; 
import DefaultBackground from './components/DefaultBackground/DefaultBackground';
import DropdownField from "./components/DropdownField/DropdownField";
import DropPopButton from "./components/DropPopButton/DropPopButton";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Navbar from "./components/Navbar/Navbar";
import NoDecksBackground from './components/NoDecksBackground/NoDecksBackground';
import Searchbar from "./components/Searchbar/Searchbar";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export {AddCardButton, 
  CameraButton, 
  CardBolt, 
  CardGleeful, 
  CardListFull, 
  CardResultsOne,
  DecklistBackground,
  DefaultBackground, 
  DropdownField, 
  DropPopButton, 
  HeaderBar, 
  Navbar,
  NoDecksBackground, 
  Searchbar};