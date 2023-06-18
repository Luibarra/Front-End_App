import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Settings1.module.css";
const Settings1 = () => {
  const navigate = useNavigate();

  const onTitleBannerv2Click = useCallback(() => {
    navigate("/cardinlist1");
  }, [navigate]);

  const onBlockingBarClick = useCallback(() => {
    navigate("/cardinlist1");
  }, [navigate]);

  const onDropbutton2ContainerClick = useCallback(() => {
    navigate("/cardinlist1");
  }, [navigate]);

  const onStandAloneButtonClick = useCallback(() => {
    navigate("/settings2");
  }, [navigate]);

  return (
    <div className={styles.settings1}>
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
        <div className={styles.magicTheGathering}>My New Deck</div>
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
      <div className={styles.seperatingLine1}>
        <div className={styles.seperatingLineItem} />
      </div>
      <div className={styles.card}>
        <img
          className={styles.settings1Icon}
          alt=""
          src="/bonepickerskirge-11@2x.png"
        />
      </div>
      <div className={styles.card1}>
        <img
          className={styles.settings1Icon}
          alt=""
          src="/bonepickerskirge-11@2x.png"
        />
      </div>
      <div className={styles.carddescbackground}>
        <div className={styles.background}>
          <div className={styles.background3} />
        </div>
      </div>
      <button className={styles.titlebannerv2} onClick={onTitleBannerv2Click}>
        <button className={styles.blockingBar2} onClick={onBlockingBarClick}>
          <div className={styles.menubar2} />
        </button>
        <b className={styles.adding1To}>Deck Settings</b>
        <div
          className={styles.dropbutton2}
          onClick={onDropbutton2ContainerClick}
        >
          <img
            className={styles.settings1Icon}
            alt=""
            src="/dropbutton-1@2x.png"
          />
        </div>
      </button>
      <div className={styles.title3}>
        <div className={styles.magicTheGathering}>General</div>
      </div>
      <div className={styles.title4}>
        <div className={styles.magicTheGathering}>View</div>
      </div>
      <div className={styles.filter}>
        <img
          className={styles.unchecked1Icon}
          alt=""
          src="/unchecked-1@2x.png"
        />
        <div className={styles.owned}>Hold to “lift” card</div>
      </div>
      <div className={styles.filter1}>
        <img
          className={styles.unchecked1Icon}
          alt=""
          src="/unchecked-1@2x.png"
        />
        <div className={styles.owned}>Make me good at MTG</div>
      </div>
      <div className={styles.filter2}>
        <img
          className={styles.unchecked1Icon}
          alt=""
          src="/unchecked-1@2x.png"
        />
        <div className={styles.owned}>Whats another Setting</div>
      </div>
      <div className={styles.filter3}>
        <img
          className={styles.unchecked1Icon}
          alt=""
          src="/unchecked-1@2x.png"
        />
        <div className={styles.owned}>Collapsed View</div>
      </div>
      <button
        className={styles.standAloneButton}
        onClick={onStandAloneButtonClick}
      >
        <div className={styles.standAloneButtonChild} />
        <b className={styles.confirm}>Confirm</b>
      </button>
    </div>
  );
};

export default Settings1;
