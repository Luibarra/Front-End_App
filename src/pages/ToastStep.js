import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ToastStep.module.css";
const ToastStep = () => {
  const navigate = useNavigate();

  const onCollection1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.toaststep}>
      <div className={styles.toaststep1}>
        <img className={styles.img79301Icon} alt="" src="/img-7930-11@2x.png" />
        <div className={styles.scanbarRegionv2}>
          <div className={styles.scanbarRegion}>
            <div className={styles.blockingBar}>
              <div className={styles.menubar} />
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
            <div className={styles.scanButton}>
              <img className={styles.scan1Icon} alt="" src="/scan-12@2x.png" />
              <img
                className={styles.scanclick1Icon}
                alt=""
                src="/scanclick-11@2x.png"
              />
            </div>
            <div className={styles.decksButtonv2}>
              <img
                className={styles.decks1Icon}
                alt=""
                src="/decks-12@2x.png"
              />
              <img
                className={styles.decksclicked1Icon}
                alt=""
                src="/decksclicked-12@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.cardaddRegion}>
          <div className={styles.toast}>
            <div className={styles.menubar1} />
            <div className={styles.informativeTextGoesContainer}>
              <span className={styles.informativeTextGoesContainer1}>
                <b>1 Soul Shatter</b>
                <span>{` added to `}</span>
                <b>Collection</b>
              </span>
            </div>
          </div>
          <div className={styles.seperatingLine}>
            <div className={styles.seperatingLineChild} />
          </div>
          <div className={styles.change}>change</div>
        </div>
        <div className={styles.continousscanbutton}>
          <img
            className={styles.scanstateoff1Icon}
            alt=""
            src="/scanstateoff-16@2x.png"
          />
          <img
            className={styles.scanstateon1Icon}
            alt=""
            src="/scanstateon-18@2x.png"
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
      </div>
    </div>
  );
};

export default ToastStep;
