import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DeckFilter.module.css";
const DeckFilter = () => {
  const navigate = useNavigate();

  const onTitleBannerv2Click = useCallback(() => {
    navigate("/mydeck");
  }, [navigate]);

  const onStandAloneButtonClick = useCallback(() => {
    navigate("/deckfilter2");
  }, [navigate]);

  return (
    <div className={styles.deckfilter}>
      <div className={styles.background}>
        <div className={styles.background1} />
      </div>
      <div className={styles.blockingBar}>
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
          <img className={styles.search1Icon} alt="" src="/search-11@2x.png" />
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
          src="/settings-11@2x.png"
        />
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
        <img className={styles.image1Icon} alt="" src="/image-11@2x.png" />
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
        <img className={styles.image2Icon} alt="" src="/image-11@2x.png" />
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
        <img className={styles.image3Icon} alt="" src="/image-11@2x.png" />
        <img
          className={styles.m11149LightningBolt4Icon}
          alt=""
          src="/m11149lightningbolt-1@2x.png"
        />
      </div>
      <div className={styles.dropdownArrow}>
        <img className={styles.settings1Icon} alt="" src="/expand-12@2x.png" />
      </div>
      <div className={styles.seperatingLine}>
        <div className={styles.seperatingLineChild} />
      </div>
      <div className={styles.title}>
        <div className={styles.magicTheGathering}>My New Deck</div>
      </div>
      <div className={styles.deckbarRegionv2}>
        <div className={styles.deckbarRegion}>
          <div className={styles.deckbarRegion}>
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
      <div className={styles.filterRegion}>
        <div className={styles.carddescbackground}>
          <div className={styles.deckbarRegion}>
            <div className={styles.background3} />
          </div>
        </div>
        <button className={styles.titlebannerv2} onClick={onTitleBannerv2Click}>
          <div className={styles.blockingBar2}>
            <div className={styles.menubar2} />
          </div>
          <b className={styles.adding1To}>Sort By Filters</b>
          <button className={styles.dropbutton2}>
            <img
              className={styles.settings1Icon}
              alt=""
              src="/dropbutton-1@2x.png"
            />
          </button>
        </button>
        <div className={styles.filter}>
          <img
            className={styles.unchecked1Icon}
            alt=""
            src="/unchecked-1@2x.png"
          />
          <div className={styles.owned}>Owned</div>
        </div>
        <div className={styles.filter1}>
          <img
            className={styles.unchecked1Icon}
            alt=""
            src="/unchecked-1@2x.png"
          />
          <div className={styles.owned}>Unowned</div>
        </div>
        <div className={styles.filter2}>
          <img
            className={styles.unchecked1Icon}
            alt=""
            src="/unchecked-1@2x.png"
          />
          <div className={styles.owned}>Creature</div>
        </div>
        <div className={styles.filter3}>
          <img
            className={styles.unchecked1Icon}
            alt=""
            src="/unchecked-1@2x.png"
          />
          <div className={styles.owned}>Instant</div>
        </div>
        <div className={styles.filter4}>
          <img
            className={styles.unchecked1Icon}
            alt=""
            src="/unchecked-1@2x.png"
          />
          <div className={styles.owned}>Sorcery</div>
        </div>
        <div className={styles.filter5}>
          <img
            className={styles.unchecked1Icon}
            alt=""
            src="/unchecked-1@2x.png"
          />
          <div className={styles.owned}>Enchantment</div>
        </div>
        <div className={styles.filter6}>
          <img
            className={styles.unchecked1Icon}
            alt=""
            src="/unchecked-1@2x.png"
          />
          <div className={styles.owned}>Artifact</div>
        </div>
        <div className={styles.filter7}>
          <img
            className={styles.unchecked1Icon}
            alt=""
            src="/unchecked-1@2x.png"
          />
          <div className={styles.owned}>Commanders</div>
        </div>
        <div className={styles.filter8}>
          <img
            className={styles.unchecked1Icon}
            alt=""
            src="/unchecked-1@2x.png"
          />
          <div className={styles.owned}>Planeswalker</div>
        </div>
        <div className={styles.filter9}>
          <img
            className={styles.unchecked1Icon}
            alt=""
            src="/unchecked-1@2x.png"
          />
          <div className={styles.owned}>Land</div>
        </div>
        <div className={styles.filter10}>
          <img
            className={styles.unchecked1Icon}
            alt=""
            src="/unchecked-1@2x.png"
          />
          <div className={styles.owned}>Land</div>
        </div>
        <div className={styles.filter11}>
          <img
            className={styles.unchecked1Icon}
            alt=""
            src="/unchecked-1@2x.png"
          />
          <div className={styles.owned}>Common</div>
        </div>
        <div className={styles.filter12}>
          <img
            className={styles.unchecked1Icon}
            alt=""
            src="/unchecked-1@2x.png"
          />
          <div className={styles.owned}>Uncommon</div>
        </div>
        <div className={styles.filter13}>
          <img
            className={styles.unchecked1Icon}
            alt=""
            src="/unchecked-1@2x.png"
          />
          <div className={styles.owned}>Rare</div>
        </div>
        <div className={styles.filter14}>
          <img
            className={styles.unchecked1Icon}
            alt=""
            src="/unchecked-1@2x.png"
          />
          <div className={styles.owned}>Mythic Rare</div>
        </div>
        <div className={styles.title1}>
          <div className={styles.magicTheGathering}>Collected</div>
        </div>
        <div className={styles.title2}>
          <div className={styles.magicTheGathering}>Rarity</div>
        </div>
        <div className={styles.title3}>
          <div className={styles.magicTheGathering}>Type</div>
        </div>
        <div className={styles.blackFilter}>
          <img className={styles.settings1Icon} alt="" src="/b-1@2x.png" />
        </div>
        <div className={styles.whiteFilter}>
          <img className={styles.settings1Icon} alt="" src="/b-11@2x.png" />
        </div>
        <div className={styles.blueFilter}>
          <img className={styles.settings1Icon} alt="" src="/b-12@2x.png" />
        </div>
        <div className={styles.redFilter}>
          <img className={styles.settings1Icon} alt="" src="/b-13@2x.png" />
        </div>
        <div className={styles.greenFilter}>
          <img className={styles.settings1Icon} alt="" src="/b-14@2x.png" />
        </div>
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

export default DeckFilter;
