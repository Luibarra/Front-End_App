import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResultStep.module.css";
import { CardListFull, HeaderBar, Navbar, Searchbar, DefaultBackground, NoDecksBackground, DecklistBackground } from "../index";

const ResultStep = () => {
  const navigate = useNavigate();

  const onCardDescBackgroundClick = useCallback(() => {
    navigate("/cardpage-step");
  }, [navigate]);

  return (
    <div className={styles.resultStep}>
      <div className={styles.background}>
        <div className={styles.background1} />
      </div>
      <div className={styles.cards}>
        <img
          className={styles.m11149LightningBolt1Icon}
          alt=""
          src="/m11149lightningbolt-1@2x.png"
        />
        <img
          className={styles.xsheoldredp20thep20apocalyIcon}
          alt=""
          src="/xsheoldredp20thep20apocalypse-1@2x.png"
        />
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <img
          className={styles.m11149LightningBolt2Icon}
          alt=""
          src="/m11149lightningbolt-1@2x.png"
        />
        <img
          className={styles.enSo26qosnro1Icon}
          alt=""
          src="/en-so26qosnro-1@2x.png"
        />
        <img className={styles.image2Icon} alt="" src="/image-1@2x.png" />
        <img
          className={styles.xsheoldredp20thep20apocalyIcon1}
          alt=""
          src="/xsheoldredp20thep20apocalypse-1@2x.png"
        />
        <img
          className={styles.enSo26qosnro2Icon}
          alt=""
          src="/en-so26qosnro-1@2x.png"
        />
        <img
          className={styles.xsheoldredp20thep20apocalyIcon2}
          alt=""
          src="/xsheoldredp20thep20apocalypse-1@2x.png"
        />
        <img
          className={styles.enSo26qosnro3Icon}
          alt=""
          src="/en-so26qosnro-1@2x.png"
        />
        <img
          className={styles.xsheoldredp20thep20apocalyIcon3}
          alt=""
          src="/xsheoldredp20thep20apocalypse-1@2x.png"
        />
        <img
          className={styles.m11149LightningBolt3Icon}
          alt=""
          src="/m11149lightningbolt-1@2x.png"
        />
        <img className={styles.image3Icon} alt="" src="/image-1@2x.png" />
        <img
          className={styles.m11149LightningBolt4Icon}
          alt=""
          src="/m11149lightningbolt-1@2x.png"
        />
      </div>
      <div className={styles.cards1}>
        <img
          className={styles.m11149LightningBolt1Icon}
          alt=""
          src="/m11149lightningbolt-1@2x.png"
        />
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <img
          className={styles.m11149LightningBolt2Icon}
          alt=""
          src="/m11149lightningbolt-1@2x.png"
        />
        <img className={styles.image2Icon} alt="" src="/image-1@2x.png" />
        <img
          className={styles.m11149LightningBolt3Icon}
          alt=""
          src="/m11149lightningbolt-1@2x.png"
        />
        <img className={styles.image3Icon} alt="" src="/image-1@2x.png" />
        <img
          className={styles.m11149LightningBolt4Icon}
          alt=""
          src="/m11149lightningbolt-1@2x.png"
        />
      </div>
      <div className={styles.homebarRegionv2}>
        <div className={styles.homebarRegion}>
          <div className={styles.blockingBar}>
            <div className={styles.menubar} />
          </div>
          <div className={styles.scanButton}>
            <img className={styles.scan1Icon} alt="" src="/scan-11@2x.png" />
            <img
              className={styles.scanclick1Icon}
              alt=""
              src="/scanclick-11@2x.png"
            />
          </div>
          <div className={styles.collectionButton}>
            <img
              className={styles.collection1Icon}
              alt=""
              src="/collection-11@2x.png"
            />
            <img
              className={styles.collectionclick1Icon}
              alt=""
              src="/collectionclick-11@2x.png"
            />
          </div>
          <div className={styles.decksButtonv2}>
            <img className={styles.decks1Icon} alt="" src="/decks-11@2x.png" />
            <img
              className={styles.decksclicked1Icon}
              alt=""
              src="/decksclicked-11@2x.png"
            />
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
          <img className={styles.filter1Icon} alt="" src="/filter-1@2x.png" />
        </div>
      </div>
      <div className={styles.settings}>
        <img className={styles.settings1Icon} alt="" src="/settings-1@2x.png" />
      </div>
      <div className={styles.dropdownArrow}>
        <img className={styles.settings1Icon} alt="" src="/expand-1@2x.png" />
      </div>
      <div className={styles.profile}>
        <img className={styles.settings1Icon} alt="" src="/profile-1@2x.png" />
      </div>
      <div className={styles.seperatingLine}>
        <div className={styles.seperatingLineChild} />
      </div>
      <div className={styles.title}>
        <div className={styles.magicTheGathering}>Magic: The Gathering</div>
      </div>
      <div className={styles.card}>
        <img
          className={styles.settings1Icon}
          alt=""
          src="/bonepickerskirge-1@2x.png"
        />
      </div>
      <button
        className={styles.carddescbackground}
        onClick={onCardDescBackgroundClick}
      >
        <div className={styles.homebarRegion}>
          <div className={styles.background3} />
        </div>
      </button>
    </div>
  );
};

export default ResultStep;
