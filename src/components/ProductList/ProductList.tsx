import { Group, PanelSpinner, Title } from "@vkontakte/vkui";
import { useGetProductsByCartIdQuery } from "../../api/get-products";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/features/cart/cartSlice";
import { RootState } from "../../redux/store";

const ProductList = () => {
  const [randomCartId, setRandomCartId] = useState<number>(1);
  const { data: cart, isLoading } = useGetProductsByCartIdQuery(randomCartId);
  const products = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();


  useEffect(() => {
    setRandomCartId(Math.floor(Math.random() * 20) + 1);
  }, []);

  useEffect(() => {
    cart?.products.forEach((product) => {
      dispatch(addProduct(product));
    });
  }, [cart, dispatch]);

  return (
    <Group>
      {products.map((product) => (
        <ProductCard key={product.id} {...product}></ProductCard>
      ))}
      {isLoading && <PanelSpinner />}
      {!products.length && !isLoading && (
        <Title level="3" style={{padding: 30}}>Ваша корзина пуста</Title>
      )}
    </Group>
  );
};

export default ProductList;
