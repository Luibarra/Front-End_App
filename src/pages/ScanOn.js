import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ScanOn.module.css";
const ScanOn = () => {
  const navigate = useNavigate();

  const onScanStateOff1Click = useCallback(() => {
    navigate("/scanbuttondark");
  }, [navigate]);

  return (
    <div className={styles.scanon}>
      <div className={styles.scanissetstep}>
        <img
          className={styles.emptydeskimageIcon}
          alt=""
          src="/emptydeskimage1@2x.png"
        />
        <div className={styles.continousscanbutton}>
          <button
            className={styles.scanstateoff1}
            onClick={onScanStateOff1Click}
          />
          <img
            className={styles.scanstateon1Icon}
            alt=""
            src="/scanstateon-111@2x.png"
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

export default ScanOn;
