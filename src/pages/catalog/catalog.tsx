import { useEffect, useState } from "react";
import styles from "./catalog.module.scss";
import { Product } from "@/utils/types";
import { ProductCard } from "@/components";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <main className={styles.catalog}>
      <h2>Catalog</h2>

      <section className={styles.filters}>
        <button>All</button>
        <button>New</button>
        <button>Sale</button>
      </section>

      <section className={styles.products}>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>Loading data...</div>
        )}
      </section>

      <section className={styles.infoSection}>
        <h3>Shopping Info</h3>
        <ul>
          <li>Free delivery over $50</li>
          <li>14-day returns & exchanges</li>
          <li>Support: support@example.com</li>
        </ul>
      </section>
    </main>
  );
}
