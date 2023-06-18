import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DeckPage.module.css";
const DeckPage = () => {
  const navigate = useNavigate();

  const onScan1Click = useCallback(() => {
    navigate("/picturestep");
  }, [navigate]);

  const onCollection1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLightaddContainerClick = useCallback(() => {
    navigate("/createdeckpage");
  }, [navigate]);

  const onLightadd1Click = useCallback(() => {
    navigate("/createdeckpage");
  }, [navigate]);

  return (
    <div className={styles.deckpage}>
      <div className={styles.background}>
        <div className={styles.background1} />
      </div>
      <div className={styles.backgroundBlocking}>
        <div className={styles.backgroundBlockingChild} />
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
      <div className={styles.deckbarRegionv2}>
        <div className={styles.deckbarRegion}>
          <div className={styles.deckbarRegion}>
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
                src="/decks-11@2x.png"
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
      <div className={styles.lightadd} onClick={onLightaddContainerClick}>
        <button className={styles.lightadd1} onClick={onLightadd1Click} />
      </div>
      <div className={styles.backgroundBlocking1}>
        <div className={styles.seperatingLineChild} />
      </div>
      <div className={styles.title1}>
        <div className={styles.magicTheGathering}>
          There are no Decks to be found...
        </div>
      </div>
    </div>
  );
};

export default DeckPage;
