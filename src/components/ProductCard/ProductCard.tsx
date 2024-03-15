import {
  Button,
  ButtonGroup,
  Card,
  Headline,
  IconButton,
  Image,
  Paragraph,
} from "@vkontakte/vkui";
import { Product } from "../../types/product.interface";
import styles from "./ProductCard.module.css";
import { useState } from "react";
import { Icon24DeleteOutline } from "@vkontakte/icons";
import { useDispatch } from "react-redux";
import {
  decrementTotalPrice,
  incrementTotalPrice,
  removeProduct,
} from "../../redux/features/cart/cartSlice";

const ProductCard = ({
  id,
  thumbnail,
  title,
  price,
  quantity: count,
}: Product) => {
  const [quantity, setQuantity] = useState(count);
  const dispatch = useDispatch();

  const handleQuantity = () => {
    return {
      increment: () => {
        if (quantity >= 10) {
          return;
        }
        setQuantity(quantity + 1);
        dispatch(incrementTotalPrice(price));
      },
      decrement: () => {
        if (quantity <= 1) {
          return;
        }
        setQuantity(quantity - 1);
        dispatch(decrementTotalPrice(price));
      },
    };
  };

  const deleteProduct = (product: Product) => {
    dispatch(removeProduct(product));
  };

  return (
    <Card
      mode="outline"
      className={styles.card}
      style={{ position: "relative" }}
    >
      <div className={styles.thumbnail}>
        <Image src={thumbnail} alt={title} widthSize={143} heightSize={143} />
      </div>
      <div>
        <Headline level="1" style={{ marginBottom: "5px" }}>
          {price} $
        </Headline>
        <Headline level="2">{title}</Headline>
        <ButtonGroup
          mode="horizontal"
          style={{
            position: "absolute",
            bottom: 12,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button onClick={handleQuantity().decrement} size="s">
            -
          </Button>
          <Paragraph>{quantity}</Paragraph>
          <Button onClick={handleQuantity().increment} size="s">
            +
          </Button>
          <IconButton
            onClick={() => deleteProduct({ id, price, quantity } as Product)}
            aria-label="Удалить 28"
            style={{
              display: "flex",
              alignItems: "center",
              opacity: 0.4,
              paddingRight: 5,
            }}
          >
            <Icon24DeleteOutline style={{ marginRight: -5 }} />
          </IconButton>
        </ButtonGroup>
      </div>
    </Card>
  );
};

export default ProductCard;
