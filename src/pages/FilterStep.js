import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FilterStep.module.css";
import { CardListFull, HeaderBar, Navbar, Searchbar, DefaultBackground, NoDecksBackground, DecklistBackground } from "../index";

const FilterStep = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onBlockingBarClick = useCallback(() => {
    // Please sync "HomeStepThree" to the project
  }, []);

  const onDropbutton2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onStandAloneButtonClick = useCallback(() => {
    navigate("/filterstep1");
  }, [navigate]);

  return (
    <div className={styles.filterstep2} data-animate-on-scroll>
      <DefaultBackground />
      <HeaderBar />
      <Searchbar />
      <CardListFull />
      <Navbar />
      
      <div className={styles.background}>
        <div className={styles.homebarRegion}>
          <div className={styles.background3} />
        </div>
      </div>
      <div className={styles.titlebannerv2}>
        <button className={styles.blockingBar2} onClick={onBlockingBarClick}>
          <div className={styles.menubar2} />
        </button>
        <b className={styles.adding1To}>Sort By Filters</b>
        <button className={styles.dropbutton2} onClick={onDropbutton2Click}>
          <img
            className={styles.settings1Icon}
            alt=""
            src="/dropbutton-1@2x.png"
          />
        </button>
      </div>
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

export default FilterStep;
