import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CardAdded.module.css";
const CardAdded = () => {
  const navigate = useNavigate();

  const onTitleBannerv2ContainerClick = useCallback(() => {
    navigate("/cardinlist1");
  }, [navigate]);

  const onBlockingBarClick = useCallback(() => {
    navigate("/cardinlist1");
  }, [navigate]);

  const onDropbutton2ContainerClick = useCallback(() => {
    navigate("/cardinlist1");
  }, [navigate]);

  const onAdded1Click = useCallback(() => {
    navigate("/cardinlist1");
  }, [navigate]);

  return (
    <div className={styles.cardAdded}>
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
      <div className={styles.cards}>
        <img
          className={styles.m11149LightningBolt1Icon}
          alt=""
          src="/m11149lightningbolt-11@2x.png"
        />
      </div>
      <div className={styles.deckbarRegionv2}>
        <div className={styles.background}>
          <div className={styles.background}>
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
      <div className={styles.title2}>
        <div className={styles.magicTheGathering}>Magic: The Gathering</div>
      </div>
      <div className={styles.card}>
        <img
          className={styles.settings1Icon}
          alt=""
          src="/bonepickerskirge-11@2x.png"
        />
      </div>
      <div className={styles.carddescbackgroundvv2}>
        <div className={styles.background}>
          <div className={styles.background}>
            <div className={styles.background3} />
          </div>
        </div>
        <div className={styles.cardselect}>
          <div className={styles.cardselectChild} />
          <div className={styles.cardselectItem} />
        </div>
        <div className={styles.cardselect1}>
          <div className={styles.cardselectChild} />
          <div className={styles.rectangleDiv} />
        </div>
        <div className={styles.cardselect2}>
          <div className={styles.cardselectChild} />
          <div className={styles.rectangleDiv} />
        </div>
        <div className={styles.cardselect3}>
          <div className={styles.cardselectChild} />
          <div className={styles.rectangleDiv} />
        </div>
        <div className={styles.dropdown}>
          <div className={styles.menubar2} />
          <b className={styles.addCardTo}>My New Deck</b>
          <div className={styles.dropdownArrow1}>
            <img
              className={styles.settings1Icon}
              alt=""
              src="/expand-12@2x.png"
            />
          </div>
        </div>
      </div>
      <div
        className={styles.titlebannerv2}
        onClick={onTitleBannerv2ContainerClick}
      >
        <button className={styles.blockingBar2} onClick={onBlockingBarClick}>
          <div className={styles.menubar3} />
        </button>
        <div className={styles.adding1ToContainer}>
          <span className={styles.adding1ToContainer1}>
            <span>{`Adding `}</span>
            <b>1</b>
            <span>{` to `}</span>
            <b>My New Deck</b>
          </span>
        </div>
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
      </div>
      <div className={styles.addButton}>
        <img className={styles.add1Icon} alt="" src="/add11@3x.png" />
        <button className={styles.added1} onClick={onAdded1Click} />
      </div>
      <div className={styles.card1}>
        <img
          className={styles.settings1Icon}
          alt=""
          src="/bonepickerskirge-13@2x.png"
        />
      </div>
    </div>
  );
};

export default CardAdded;
