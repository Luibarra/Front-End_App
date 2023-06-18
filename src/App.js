import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeStep from "./pages/HomeStep";
import EmptyDesk from "./pages/EmptyDesk";
import ResultStep from "./pages/ResultStep";
import CardPageStep from "./pages/CardPageStep";
import CardPageStep2 from "./pages/CardPageStep2";
import DeckListAfterFilter from "./pages/DeckListAfterFilter";
import DeckFilter from "./pages/DeckFilter";
import DeckPage from "./pages/DeckPage";
import CreateDeckPage from "./pages/CreateDeckPage";
import CreateDeckPageMid from "./pages/CreateDeckPageMid";
import DeckMadePage from "./pages/DeckMadePage";
import DeckFilter2 from "./pages/DeckFilter2";
import MyDeck from "./pages/MyDeck";
import Settings2 from "./pages/Settings2";
import Settings1 from "./pages/Settings1";
import CardInList2 from "./pages/CardInList2";
import CardInList1 from "./pages/CardInList1";
import DeckListBolt from "./pages/DeckListBolt";
import DeckListBoltSearch from "./pages/DeckListBoltSearch";
import CardPageStep1 from "./pages/CardPageStep1";
import CardAdded from "./pages/CardAdded";
import ScanButtonDark from "./pages/ScanButtonDark";
import ScanAnimStart from "./pages/ScanAnimStart";
import PictureStep from "./pages/PictureStep";
import PicTakenStep from "./pages/PicTakenStep";
import ScannedCardPageStep from "./pages/ScannedCardPageStep";
import ScannedCardAddedStep from "./pages/ScannedCardAddedStep";
import EmptyDeskPressed from "./pages/EmptyDeskPressed";
import ScanPressed from "./pages/ScanPressed";
import ScanOn from "./pages/ScanOn";
import ScanAnim2 from "./pages/ScanAnim2";
import ToastStep from "./pages/ToastStep";
import FilterStep from "./pages/FilterStep";
import FilterStep1 from "./pages/FilterStep1";
import ComponentsPage from "./pages/ComponentsPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/emptydesk":
        title = "";
        metaDescription = "";
        break;
      case "/result-step":
        title = "";
        metaDescription = "";
        break;
      case "/cardpage-step":
        title = "";
        metaDescription = "";
        break;
      case "/cardpage-step1":
        title = "";
        metaDescription = "";
        break;
      case "/decklistafterfilter":
        title = "";
        metaDescription = "";
        break;
      case "/deckfilter":
        title = "";
        metaDescription = "";
        break;
      case "/deckpage":
        title = "";
        metaDescription = "";
        break;
      case "/createdeckpage":
        title = "";
        metaDescription = "";
        break;
      case "/createdeckpagemid":
        title = "";
        metaDescription = "";
        break;
      case "/deckmadepage":
        title = "";
        metaDescription = "";
        break;
      case "/deckfilter2":
        title = "";
        metaDescription = "";
        break;
      case "/mydeck":
        title = "";
        metaDescription = "";
        break;
      case "/settings2":
        title = "";
        metaDescription = "";
        break;
      case "/settings1":
        title = "";
        metaDescription = "";
        break;
      case "/cardinlist2":
        title = "";
        metaDescription = "";
        break;
      case "/cardinlist1":
        title = "";
        metaDescription = "";
        break;
      case "/decklistbolt":
        title = "";
        metaDescription = "";
        break;
      case "/decklistboltsearch":
        title = "";
        metaDescription = "";
        break;
      case "/boltpage-step":
        title = "";
        metaDescription = "";
        break;
      case "/card-added":
        title = "";
        metaDescription = "";
        break;
      case "/scanbuttondark":
        title = "";
        metaDescription = "";
        break;
      case "/scananimstart":
        title = "";
        metaDescription = "";
        break;
      case "/picturestep":
        title = "";
        metaDescription = "";
        break;
      case "/pictakenstep":
        title = "";
        metaDescription = "";
        break;
      case "/scannedcardpagestep":
        title = "";
        metaDescription = "";
        break;
      case "/scannedcardaddedstep":
        title = "";
        metaDescription = "";
        break;
      case "/emptydeskpressed":
        title = "";
        metaDescription = "";
        break;
      case "/scanpressed":
        title = "";
        metaDescription = "";
        break;
      case "/scanon":
        title = "";
        metaDescription = "";
        break;
      case "/scananim2":
        title = "";
        metaDescription = "";
        break;
      case "/toaststep":
        title = "";
        metaDescription = "";
        break;
      case "/filterstep":
        title = "";
        metaDescription = "";
        break;
      case "/filterstep1":
        title = "";
        metaDescription = "";
        break;
      case "/componentspage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeStep />} />
      <Route path="/emptydesk" element={<EmptyDesk />} />
      <Route path="/result-step" element={<ResultStep />} />
      <Route path="/cardpage-step" element={<CardPageStep />} />
      <Route path="/cardpage-step1" element={<CardPageStep2 />} />
      <Route path="/decklistafterfilter" element={<DeckListAfterFilter />} />
      <Route path="/deckfilter" element={<DeckFilter />} />
      <Route path="/deckpage" element={<DeckPage />} />
      <Route path="/createdeckpage" element={<CreateDeckPage />} />
      <Route path="/createdeckpagemid" element={<CreateDeckPageMid />} />
      <Route path="/deckmadepage" element={<DeckMadePage />} />
      <Route path="/deckfilter2" element={<DeckFilter2 />} />
      <Route path="/mydeck" element={<MyDeck />} />
      <Route path="/settings2" element={<Settings2 />} />
      <Route path="/settings1" element={<Settings1 />} />
      <Route path="/cardinlist2" element={<CardInList2 />} />
      <Route path="/cardinlist1" element={<CardInList1 />} />
      <Route path="/decklistbolt" element={<DeckListBolt />} />
      <Route path="/decklistboltsearch" element={<DeckListBoltSearch />} />
      <Route path="/boltpage-step" element={<CardPageStep1 />} />
      <Route path="/card-added" element={<CardAdded />} />
      <Route path="/scanbuttondark" element={<ScanButtonDark />} />
      <Route path="/scananimstart" element={<ScanAnimStart />} />
      <Route path="/picturestep" element={<PictureStep />} />
      <Route path="/pictakenstep" element={<PicTakenStep />} />
      <Route path="/scannedcardpagestep" element={<ScannedCardPageStep />} />
      <Route path="/scannedcardaddedstep" element={<ScannedCardAddedStep />} />
      <Route path="/emptydeskpressed" element={<EmptyDeskPressed />} />
      <Route path="/scanpressed" element={<ScanPressed />} />
      <Route path="/scanon" element={<ScanOn />} />
      <Route path="/scananim2" element={<ScanAnim2 />} />
      <Route path="/toaststep" element={<ToastStep />} />
      <Route path="/filterstep" element={<FilterStep />} />
      <Route path="/filterstep1" element={<FilterStep1 />} />
      <Route path="/componentspage" element={<ComponentsPage />} />
    </Routes>
  );
}
export default App;
