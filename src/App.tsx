import {
  AppRoot,
  SplitLayout,
  SplitCol,
  PanelHeader,
  usePlatform,
} from "@vkontakte/vkui";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
  const platform = usePlatform();

  return (
    <AppRoot>
      <SplitLayout
        header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
        className="layout"
      >
        <SplitCol autoSpaced className="col-3">
          <ProductList />
        </SplitCol>
        <SplitCol autoSpaced className="col-1"></SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
