import {
  AppRoot,
  SplitLayout,
  SplitCol,
  PanelHeader,
  usePlatform,
  Group,
  Title,
  Panel,
  View,
} from "@vkontakte/vkui";
import ProductList from "./components/ProductList/ProductList";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const App = () => {
  const platform = usePlatform();
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  return (
    <AppRoot>
      <SplitLayout
        header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
        style={{ display: "flex" }}
      >
        <SplitCol autoSpaced style={{ flex: 3 }}>
          <View activePanel="products">
            <Panel id="products">
              <PanelHeader>Товары</PanelHeader>
              <ProductList />
            </Panel>
          </View>
        </SplitCol>
        <SplitCol autoSpaced style={{ flex: 1 }}>
          <View activePanel="total-price">
            <Panel id="total-price">
              <PanelHeader></PanelHeader>
              <Group>
                <Title level="3" weight="2" style={{ padding: 30 }}>
                  Итого: {totalPrice} руб.
                </Title>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
