import { useEffect, useState } from "react";
import styles from "./Catalog.module.scss";
import { Product } from "@/utils/types";
import { ProductCard } from "@/components";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [activeCat, setActiveCat] = useState<string | null>()

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await response.json();
      setProducts(data);
      const uniqueCat = Array.from(new Set(data.map(prod => prod.category)))
      setCategories(uniqueCat)
      setFilteredProducts(data)
    }
    getProducts();
  }, []);

  const filterCategory = (cat: string) => {
    if (cat === activeCat) {
      setActiveCat(null)
      setFilteredProducts(products)

    } else {
      setActiveCat(cat)
      const newFilteredProducts = products.filter((prod) => prod.category === cat)
      setFilteredProducts(newFilteredProducts)
    }
  }

  return (
    <main className={styles.catalog}>
      {/* <h2>Catalog</h2> */}

      <section className={styles.filters}>
        {categories.length > 0 ? (
          categories.map(category => (
            <button className={`${styles.catButtons} ${activeCat === category ? styles.active : ''}`} onClick={() => filterCategory(category)} key={category}>{category}</button>
          ))
        ) : <div>Loading data...</div>}
      </section>

      <section className={styles.products}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
