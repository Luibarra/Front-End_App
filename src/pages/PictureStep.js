import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PictureStep.module.css";
const PictureStep = () => {
  const navigate = useNavigate();

  const onCamerabutton1Click = useCallback(() => {
    navigate("/scannedcardpagestep");
  }, [navigate]);

  const onCollection1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDecks1Click = useCallback(() => {
    navigate("/deckpage");
  }, [navigate]);

  return (
    <div className={styles.picturestep}>
      <div className={styles.picturestep1}>
        <img
          className={styles.bonepickerIcon}
          alt=""
          src="/bonepicker@2x.png"
        />
        <div className={styles.continousscanbutton}>
          <img
            className={styles.scanstateoff1Icon}
            alt=""
            src="/scanstateoff-12@2x.png"
          />
          <img
            className={styles.scanstateon1Icon}
            alt=""
            src="/scanstateon-12@2x.png"
          />
        </div>
        <div className={styles.camerabutton}>
          <button
            className={styles.camerabutton1}
            onClick={onCamerabutton1Click}
          />
          <img
            className={styles.camerapressed1Icon}
            alt=""
            src="/camerapressed-111@2x.png"
          />
          <img
            className={styles.cameradisabled1Icon}
            alt=""
            src="/cameradisabled-111@2x.png"
          />
        </div>
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
                src="/collectionclick-11@2x.png"
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
              <button className={styles.decks1} onClick={onDecks1Click} />
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

export default PictureStep;
