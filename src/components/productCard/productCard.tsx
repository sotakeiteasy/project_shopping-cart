import styles from "./ProductCard.module.scss";
import { useState } from "react";
import { Product } from "@/utils/types";
import { useCart } from "@/utils/hooks/useCart";
import { Link } from "react-router";

export default function ProductCard({
  product,
  countCart = 0,
}: {
  product: Product;
  countCart?: number;
}) {
  const [count, setCount] = useState<number>(countCart);
  const { setCart } = useCart();

  const increaseCount = () => {
    setCount(count + 1);
    setCart((prev) => [...prev, product]);
  };

  const decreaseCount = () => {
    if (count === 0) return;
    setCount(count - 1);
    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === product.id);
      if (index === -1) return prev;
      const newCart = [...prev];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  const addToCart = (count: number) => {
    setCount(count + 1);
    setCart((prev) => [...prev, product])
  };

  return (
    <div key={product.id} className={styles.productCard}>
      <Link to={`/products/${product.id}`}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={`image of ${product.title}`} />
        </div>
        <h3>{product.title}</h3>
        <p>
          {product.rating.rate}⭐/ {product.rating.count}
        </p>
        <span className={styles.price}>{product.price}$</span>
      </Link>
      <span className={styles.buttons}>
        {count < 1 ?
          <button onClick={() => addToCart(count)} className={styles.buyButton}>
            Add to cart
          </button> :
          <Link to={`/cart`}>
            <button className={styles.buyButton}>
              In cart
            </button>
          </Link>}
        {count > 0 && (
          <>
            <button className={styles.numberBtn} onClick={decreaseCount}>
              -
            </button>
            {count}
            <button className={styles.numberBtn} onClick={increaseCount}>
              +
            </button>
          </>
        )}
      </span>
    </div>
  );
}
