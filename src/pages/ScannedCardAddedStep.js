import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ScannedCardAddedStep.module.css";
const ScannedCardAddedStep = () => {
  const navigate = useNavigate();

  const onTitleBannerv2Click = useCallback(() => {
    navigate("/emptydesk");
  }, [navigate]);

  const onDropbutton2ContainerClick = useCallback(() => {
    navigate("/emptydesk");
  }, [navigate]);

  const onAdded1Click = useCallback(() => {
    navigate("/emptydesk");
  }, [navigate]);

  return (
    <div className={styles.scannedcardaddedstep}>
      <div className={styles.cardpageaddedstep}>
        <div className={styles.picturetaken}>
          <img
            className={styles.bonepickerIcon}
            alt=""
            src="/bonepicker1@2x.png"
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
            <img
              className={styles.camerabutton1Icon}
              alt=""
              src="/camerabutton1@3x.png"
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
                src="/collection-11@2x.png"
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
        <div className={styles.carddescbackgroundvv2}>
          <div className={styles.scanbarRegion}>
            <div className={styles.scanbarRegion}>
              <div className={styles.background1} />
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
            <div className={styles.menubar1} />
            <b className={styles.addCardTo}>Add Card to...</b>
            <div className={styles.dropdownArrow}>
              <img
                className={styles.expand1Icon}
                alt=""
                src="/expand-11@2x.png"
              />
            </div>
          </div>
        </div>
        <img
          className={styles.bonepickerSkirge1Icon}
          alt=""
          src="/bonepickerskirge-15@2x.png"
        />
        <div className={styles.descriptionPop}>
          <div className={styles.descriptionPopChild} />
          <div className={styles.title}>Flying</div>
          <div className={styles.textDescribingThis}>
            This creature can't be blocked except by creatures with flying
            and/or reach.
          </div>
          <img
            className={styles.flyingDesc1Icon}
            alt=""
            src="/flyingdesc-1@2x.png"
          />
        </div>
        <div className={styles.cardeffecticon}>
          <div className={styles.cardeffecticonChild} />
          <img
            className={styles.flyingIcon1}
            alt=""
            src="/flyingicon-1@2x.png"
          />
        </div>
        <div className={styles.addButton} />
        <button className={styles.titlebannerv2} onClick={onTitleBannerv2Click}>
          <div className={styles.blockingBar1}>
            <div className={styles.menubar2} />
          </div>
          <div className={styles.adding1ToContainer}>
            <span className={styles.adding1ToContainer1}>
              <span className={styles.adding}>{`Adding `}</span>
              <b className={styles.adding}>1</b>
              <span className={styles.adding}>{` to `}</span>
              <b className={styles.adding}>Collection</b>
            </span>
          </div>
          <div
            className={styles.dropbutton2}
            onClick={onDropbutton2ContainerClick}
          >
            <img
              className={styles.expand1Icon}
              alt=""
              src="/dropbutton-1@2x.png"
            />
          </div>
        </button>
        <div className={styles.addButton1}>
          <img className={styles.add1Icon} alt="" src="/add111@3x.png" />
          <button className={styles.added1} onClick={onAdded1Click} />
        </div>
      </div>
    </div>
  );
};

export default ScannedCardAddedStep;
