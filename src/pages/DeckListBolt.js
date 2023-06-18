import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DeckListBolt.module.css";
const DeckListBolt = () => {
  const navigate = useNavigate();

  const onCardClick = useCallback(() => {
    navigate("/boltpage-step");
  }, [navigate]);

  return (
    <div className={styles.decklistbolt}>
      <div className={styles.decklistBackground}>
        <div className={styles.background}>
          <div className={styles.background1} />
        </div>
        <div className={styles.backgroundBlocking}>
          <div className={styles.backgroundBlockingChild} />
        </div>
        <div className={styles.title}>
          <div className={styles.magicTheGathering}>My New Deck</div>
        </div>
        <div className={styles.title1}>
          <div className={styles.magicTheGathering}>Search Results</div>
        </div>
      </div>
      <div className={styles.blockingBar}>
        <div className={styles.menubar} />
      </div>
      <div className={styles.searchbarRegion}>
        <div className={styles.searchbar}>
          <div className={styles.searchbar1} />
          <div className={styles.search}>Lightning Bolt</div>
        </div>
        <div className={styles.searchButton}>
          <div className={styles.searchbar2} />
          <img className={styles.search1Icon} alt="" src="/search-1@2x.png" />
        </div>
        <div className={styles.filterList}>
          <div className={styles.searchbar3} />
          <img className={styles.filter1Icon} alt="" src="/filter-11@2x.png" />
        </div>
      </div>
      <div className={styles.settings}>
        <img
          className={styles.settings1Icon}
          alt=""
          src="/settings-1@2x.png"
        />
      </div>
      <div className={styles.dropdownArrow}>
        <img className={styles.settings1Icon} alt="" src="/expand-12@2x.png" />
      </div>
      <div className={styles.seperatingLine}>
        <div className={styles.seperatingLineChild} />
      </div>
      <div className={styles.title2}>
        <div className={styles.magicTheGathering}>Deck Editor</div>
      </div>
      <div className={styles.deckbarRegionv2}>
        <div className={styles.background}>
          <div className={styles.background}>
            <div className={styles.blockingBar1}>
              <div className={styles.menubar} />
            </div>
            <div className={styles.scanButton}>
              <img className={styles.scan1Icon} alt="" src="/scan1@3x.png" />
              <img
                className={styles.scanclick1Icon}
                alt=""
                src="/scanclick-12@2x.png"
              />
            </div>
            <div className={styles.collectionButton}>
              <img
                className={styles.collection1Icon}
                alt=""
                src="/collection1@3x.png"
              />
              <img
                className={styles.collectionclick1Icon}
                alt=""
                src="/collectionclick-12@2x.png"
              />
            </div>
            <div className={styles.decksButtonv2}>
              <img
                className={styles.decks1Icon}
                alt=""
                src="/decks-111@2x.png"
              />
              <img
                className={styles.decksclicked1Icon}
                alt=""
                src="/decksclicked-11@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <button className={styles.card} onClick={onCardClick}>
        <img
          className={styles.settings1Icon}
          alt=""
          src="/bonepickerskirge-11@2x.png"
        />
      </button>
    </div>
  );
};

export default DeckListBolt;
