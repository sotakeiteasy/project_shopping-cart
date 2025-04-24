import styles from "./App.module.scss";
import { Home, Catalog, Cart } from "./pages";
import { Header } from "./components";

import { useState } from "react";
import { Product } from "@/utils/types";
import { useCart } from "@/utils/hooks/useCart";
import { CartContext } from "@/utils/contexts/CartContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const Layout = () => {
  const { cart } = useCart();
  return (
    <>
      <Header cart={cart} />
      <main className={styles.container}>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025 MyStore. All rights reserved.</p>
      </footer>
    </>
  );
};

export default function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "catalog",
          element: <Catalog />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <RouterProvider router={router} />;
    </CartContext.Provider>
  );
}
