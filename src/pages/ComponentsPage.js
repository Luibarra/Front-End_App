import styles from "./ComponentsPage.module.css";
import { CardListFull, HeaderBar, Navbar, Searchbar, DefaultBackground, NoDecksBackground, DecklistBackground } from "../index";

const ComponentsPage = () => {

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

export default ComponentsPage;