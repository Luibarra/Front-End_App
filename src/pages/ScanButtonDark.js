import styles from "./ScanButtonDark.module.css";
const ScanButtonDark = () => {
  return (
    <div className={styles.scanbuttondark}>
      <div className={styles.scanissetstep}>
        <img
          className={styles.emptydeskimageIcon}
          alt=""
          src="/emptydeskimage1@2x.png"
        />
        <div className={styles.continousscanbutton}>
          <img
            className={styles.scanstateoff1Icon}
            alt=""
            src="/scanstateoff-1@2x.png"
          />
          <img
            className={styles.scanstateon1Icon}
            alt=""
            src="/scanstateon-11@2x.png"
          />
        </div>
        <div className={styles.camerabutton}>
          <img
            className={styles.camerabutton1Icon}
            alt=""
            src="/camerabutton-11@2x.png"
          />
          <img
            className={styles.camerapressed1Icon}
            alt=""
            src="/camerapressed-11@2x.png"
          />
          <img
            className={styles.cameradisabled1Icon}
            alt=""
            src="/cameradisabled-11@2x.png"
          />
        </div>
        <div className={styles.scanbarRegionv2}>
          <div className={styles.scanbarRegion}>
            <div className={styles.blockingBar}>
              <div className={styles.menubar} />
            </div>
            <div className={styles.collectionButton}>
              <img
                className={styles.collection1Icon}
                alt=""
                src="/collection-111@2x.png"
              />
              <img
                className={styles.collectionclick1Icon}
                alt=""
                src="/collectionclick-111@2x.png"
              />
            </div>
            <div className={styles.scanButton}>
              <img className={styles.scan1Icon} alt="" src="/scan-12@2x.png" />
              <img
                className={styles.scanclick1Icon}
                alt=""
                src="/scanclick-111@2x.png"
              />
            </div>
            <div className={styles.decksButtonv2}>
              <img
                className={styles.decks1Icon}
                alt=""
                src="/decks-121@2x.png"
              />
              <img
                className={styles.decksclicked1Icon}
                alt=""
                src="/decksclicked-12@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanButtonDark;