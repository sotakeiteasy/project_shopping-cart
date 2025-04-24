import styles from "./header.module.scss";
import { Product } from "@/utils/types";
import { Link } from "react-router";

export default function Header({ cart }: { cart: Product[] }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={`${styles.navLink} ${styles.logo}`} to="/">
          My Store
        </Link>
        <Link className={styles.navLink} to="/catalog">
          Catalog
        </Link>
        <div className={styles.navGroup}>
          <Link
            className={styles.navLink}
            to="/cart"
          >
            Cart {cart.length}
          </Link>
        </div>
      </nav>
    </header>
  );
}
