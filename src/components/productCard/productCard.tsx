import styles from "./productCard.module.scss";
import { useState } from "react";
import { Product } from "@/utils/types";
import { useCart } from "@/utils/hooks/useCart";

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
    setCart((prev) => [...prev, product]);
  };

  return (
    <div key={product.id} className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={`image of ${product.title}`} />
      </div>
      <h3>{product.title}</h3>
      <p>
        {product.rating.rate}⭐/ {product.rating.count}
      </p>
      <span className={styles.price}>{product.price}$</span>
      <span className={styles.buttons}>
        <button onClick={() => addToCart(count)} className={styles.buyButton}>
          {count > 0 ? "In cart" : "Add to cart"}
        </button>
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
