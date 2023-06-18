import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyDeck.module.css";
const MyDeck = () => {
  const navigate = useNavigate();

  const onFilterListContainerClick = useCallback(() => {
    navigate("/deckfilter");
  }, [navigate]);

  const onFilter1Click = useCallback(() => {
    navigate("/deckfilter");
  }, [navigate]);

  const onScan1Click = useCallback(() => {
    navigate("/picturestep");
  }, [navigate]);

  const onCollection1Click = useCallback(() => {
    // Please sync "HomeStepThree" to the project
  }, []);

  return (
    <div className={styles.mydeck}>
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
          <div className={styles.search}>
            <p className={styles.search1}>Search...</p>
          </div>
        </div>
        <div className={styles.searchButton}>
          <div className={styles.searchbar2} />
          <img className={styles.search1Icon} alt="" src="/search-1@2x.png" />
        </div>
        <div className={styles.filterList} onClick={onFilterListContainerClick}>
          <div className={styles.searchbar3} />
          <button className={styles.filter1} onClick={onFilter1Click} />
        </div>
      </div>
      <div className={styles.settings}>
        <img
          className={styles.settings1Icon}
          alt=""
          src="/settings-1@2x.png"
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
          src="/m11149lightningbolt-11@2x.png"
        />
        <img className={styles.image3Icon} alt="" src="/image-11@2x.png" />
        <img
          className={styles.m11149LightningBolt4Icon}
          alt=""
          src="/m11149lightningbolt-11@2x.png"
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
              <button className={styles.scan1} onClick={onScan1Click} />
              <img
                className={styles.scanclick1Icon}
                alt=""
                src="/scanclick-12@2x.png"
              />
            </div>
            <div className={styles.collectionButton}>
              <button
                className={styles.collection1}
                onClick={onCollection1Click}
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
    </div>
  );
};

export default MyDeck;
