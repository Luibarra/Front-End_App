import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EmptyDesk.module.css";
const EmptyDesk = () => {
  const navigate = useNavigate();

  const onScanStateOff1Click = useCallback(() => {
    navigate("/scananim2");
  }, [navigate]);

  const onCamerabutton1ImageClick = useCallback(() => {
    navigate("/emptydeskpressed");
  }, [navigate]);

  return (
    <div className={styles.emptydesk}>
      <div className={styles.setscanstep}>
        <img
          className={styles.emptydeskimageIcon}
          alt=""
          src="/emptydeskimage@2x.png"
        />
        <div className={styles.continousscanbutton}>
          <button
            className={styles.scanstateoff1}
            onClick={onScanStateOff1Click}
          />
          <img
            className={styles.scanstateon1Icon}
            alt=""
            src="/scanstateon-1@2x.png"
          />
        </div>
        <div className={styles.camerabutton}>
          <img
            className={styles.camerabutton1Icon}
            alt=""
            src="/camerabutton-1@2x.png"
            onClick={onCamerabutton1ImageClick}
          />
          <img
            className={styles.camerapressed1Icon}
            alt=""
            src="/camerapressed-1@2x.png"
          />
          <img
            className={styles.cameradisabled1Icon}
            alt=""
            src="/cameradisabled-1@2x.png"
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
                src="/collection-1@2x.png"
              />
              <img
                className={styles.collectionclick1Icon}
                alt=""
                src="/collectionclick-1@2x.png"
              />
            </div>
            <div className={styles.scanButton}>
              <img className={styles.scan1Icon} alt="" src="/scan-1@2x.png" />
              <img
                className={styles.scanclick1Icon}
                alt=""
                src="/scanclick-1@2x.png"
              />
            </div>
            <div className={styles.decksButtonv2}>
              <img className={styles.decks1Icon} alt="" src="/decks-1@2x.png" />
              <img
                className={styles.decksclicked1Icon}
                alt=""
                src="/decksclicked-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyDesk;
