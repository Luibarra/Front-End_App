import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateDeckPage.module.css";
const CreateDeckPage = () => {
  const navigate = useNavigate();

  const onTitleBannerv2Click = useCallback(() => {
    navigate("/deckpage");
  }, [navigate]);

  const onDropbutton2Click = useCallback(() => {
    navigate("/deckpage");
  }, [navigate]);

  const onAdd1Click = useCallback(() => {
    navigate("/deckmadepage");
  }, [navigate]);

  const onTypeboxContainerClick = useCallback(() => {
    navigate("/createdeckpagemid");
  }, [navigate]);

  const onEnterNameClick = useCallback(() => {
    navigate("/createdeckpagemid");
  }, [navigate]);

  return (
    <div className={styles.createdeckpage}>
      <div className={styles.background}>
        <div className={styles.background1} />
      </div>
      <div className={styles.deckbarRegionv2}>
        <div className={styles.deckbarRegion}>
          <div className={styles.deckbarRegion}>
            <div className={styles.blockingBar}>
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
      <div className={styles.blockingBar1}>
        <div className={styles.menubar} />
      </div>
      <div className={styles.searchbarRegion}>
        <div className={styles.searchbar}>
          <div className={styles.searchbar1} />
          <div className={styles.search}>
            <p className={styles.search1}>Search...</p>
          </div>
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
        <img className={styles.settings1Icon} alt="" src="/settings1@3x.png" />
      </div>
      <div className={styles.dropdownArrow}>
        <img className={styles.settings1Icon} alt="" src="/expand-12@2x.png" />
      </div>
      <div className={styles.profile}>
        <img className={styles.settings1Icon} alt="" src="/profile1@3x.png" />
      </div>
      <div className={styles.seperatingLine}>
        <div className={styles.seperatingLineChild} />
      </div>
      <div className={styles.title}>
        <div className={styles.magicTheGathering}>Magic: The Gathering</div>
      </div>
      <div className={styles.background}>
        <div className={styles.deckbarRegion}>
          <div className={styles.background3} />
        </div>
      </div>
      <button className={styles.titlebannerv2} onClick={onTitleBannerv2Click}>
        <div className={styles.blockingBar2}>
          <div className={styles.menubar2} />
        </div>
        <div className={styles.adding1ToContainer}>
          <span className={styles.adding1ToContainer1}>
            <span className={styles.createA}>{`Create a `}</span>
            <b className={styles.createA}>Modern</b>
            <span className={styles.createA}> Deck</span>
          </span>
        </div>
        <button className={styles.dropbutton2} onClick={onDropbutton2Click}>
          <img
            className={styles.settings1Icon}
            alt=""
            src="/dropbutton-1@2x.png"
          />
        </button>
      </button>
      <div className={styles.addButton}>
        <button className={styles.add1} onClick={onAdd1Click} />
        <img className={styles.added1Icon} alt="" src="/added-11@2x.png" />
      </div>
      <div className={styles.typebox} onClick={onTypeboxContainerClick}>
        <div className={styles.searchbar4} />
        <textarea
          className={styles.enterName}
          placeholder="Enter Name..."
          onClick={onEnterNameClick}
        />
      </div>
      <div className={styles.deckboxicon1}>
        <img
          className={styles.settings1Icon}
          alt=""
          src="/deckboxicon-1@2x.png"
        />
      </div>
      <div className={styles.dropdown}>
        <div className={styles.menubar3} />
        <b className={styles.addCardTo}>Modern Format</b>
        <div className={styles.dropdownArrow1}>
          <img
            className={styles.settings1Icon}
            alt=""
            src="/expand-12@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateDeckPage;
