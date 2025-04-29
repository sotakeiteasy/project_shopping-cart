import styles from "./Header.module.scss";
import { Product } from "@/utils/types";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

export default function Header({ cart }: { cart: Product[] }) {
  const path = useLocation().pathname
  console.log(path)
  const [activeCat, setActiveCat] = useState<string>(path)

  useEffect(() => {
    setActiveCat(path)
  }, [path])

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={`${styles.navLink} ${styles.logo} ${activeCat === '/' ? styles.active : ''}`} to="/">
          My Store
        </Link>
        <Link className={`${styles.navLink} ${activeCat === '/catalog' ? styles.active : ''}`} to="/catalog">
          Catalog
        </Link>
        <div className={styles.navGroup}>
          <Link
            className={`${styles.navLink} ${activeCat === '/cart' ? styles.active : ''}`}
            to="/cart"
          >
            Cart {cart.length}
          </Link>
        </div>
      </nav>
    </header>
  );
}
