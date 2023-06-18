import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeStep.module.css";
import { CardListFull, HeaderBar, Navbar, Searchbar, DefaultBackground, NoDecksBackground, DecklistBackground } from "../index";

const HomeStep = () => {

  return (
    <div className={styles.homestep}>
      <DefaultBackground />
      <HeaderBar />
      <Searchbar />
      <CardListFull />
      <Navbar />
    </div>
  );
};

export default HomeStep;
