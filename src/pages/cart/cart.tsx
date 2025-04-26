import styles from "./cart.module.scss";
import { ProductCard } from "@/components";
import { Product } from "@/utils/types";
import { useCart } from "@/utils/hooks/useCart";

function groupProducts(cart: Product[]) {
  const grouped = [];

  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    const prevProduct = grouped[grouped.length - 1];
    if (prevProduct && prevProduct.id === product.id) {
      prevProduct.count++;
    } else {
      grouped.push({ ...product, count: 1 });
    }
  }
  return grouped;
}

export default function Cart() {
  const { cart } = useCart();
  const groupedProducts = groupProducts(cart);
  const price = Math.round(cart.reduce((sum, count) => sum + count.price, 0) * 100) / 100;

  return (
    <main>
      <div className={styles.cart}>
        <div className={styles.products}>
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            groupedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                countCart={product.count}
              />
            ))
          )}
        </div>
        <div className={styles.checkout}>
          <h2>Placing an order</h2>
          <div className={styles.total}>
            <span>Price of ads:</span>
            <span>{price} $</span>
          </div>
          {price <= 50 ? (
            <div className={styles.total}>
              <span>Delivery: </span>
              <span>5$</span>
            </div>
          ) : (
            <div className={styles.total}>
              <span className={styles.crossout}>Delivery: </span>
              <span className={styles.crossout}>0$</span>
            </div>
          )}
          {price <= 50 ? (
            <div className={styles.total}>
              <span>Total: </span>
              <span>{price + 5}$</span>
            </div>
          ) : (
            <div className={styles.total}>
              <span>Total: </span>
              <span>{price}$</span>
            </div>
          )}
          <button
            className={styles.checkoutButton}
            disabled={cart.length === 0}
          >
            Place an order
          </button>
        </div>
      </div>
    </main>
  );
}
