import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CardPageStep.module.css";
const CardPageStep = () => {
  const navigate = useNavigate();

  const onTitleBannerv2Click = useCallback(() => {
    navigate("/result-step");
  }, [navigate]);

  const onAdd1Click = useCallback(() => {
    navigate("/cardpage-step1");
  }, [navigate]);

  return (
    <div className={styles.cardpagestep}>
      <div className={styles.background}>
        <div className={styles.background1} />
      </div>
      <div className={styles.cards}>
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
      <div className={styles.carddescbackgroundvv2}>
        <div className={styles.homebarRegion}>
          <div className={styles.homebarRegion}>
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
          <b className={styles.addCardTo}>Add Card to...</b>
          <div className={styles.dropdownArrow1}>
            <img
              className={styles.settings1Icon}
              alt=""
              src="/expand-11@2x.png"
            />
          </div>
        </div>
      </div>
      <button className={styles.titlebannerv2} onClick={onTitleBannerv2Click}>
        <div className={styles.blockingBar2}>
          <div className={styles.menubar3} />
        </div>
        <div className={styles.adding1ToContainer}>
          <span className={styles.adding1ToContainer1}>
            <span className={styles.adding}>{`Adding `}</span>
            <b className={styles.adding}>1</b>
            <span className={styles.adding}>{` to `}</span>
            <b className={styles.adding}>Collection</b>
          </span>
        </div>
        <div className={styles.dropbutton2}>
          <img
            className={styles.settings1Icon}
            alt=""
            src="/dropbutton-1@2x.png"
          />
        </div>
      </button>
      <div className={styles.addButton}>
        <button className={styles.add1} onClick={onAdd1Click} />
        <img className={styles.added1Icon} alt="" src="/added-1@2x.png" />
      </div>
      <div className={styles.descriptionPop}>
        <div className={styles.descriptionPopChild} />
        <div className={styles.title1}>Destroy</div>
        <div className={styles.textDescribingThis}>
          When a permanent is destroyed, it is moved from the battlefield to its
          owner’s graveyard.
        </div>
        <img
          className={styles.flyingDesc1Icon}
          alt=""
          src="/flyingdesc-1@2x.png"
        />
      </div>
      <div className={styles.card}>
        <img
          className={styles.settings1Icon}
          alt=""
          src="/bonepickerskirge-1@2x.png"
        />
      </div>
      <div className={styles.cardeffecticon}>
        <div className={styles.cardeffecticonChild} />
        <img className={styles.flyingIcon1} alt="" src="/flyingicon-1@2x.png" />
      </div>
    </div>
  );
};

export default CardPageStep;
