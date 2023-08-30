"use client";
import { Cart } from "./Cart";
import { Search } from "./Search";
import styles from "@/styles/Header.module.css";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>RARBG</h1>
      <div className={styles.searchCart}>
        <Search />
        <Link href="/carrinho">
          <div style={{ display: "flex", padding: "0 1rem" }}>
            <button className={styles.cartButton}>
              <Cart color={"#0470d3"} width={25} height={25} />
            </button>
            <div className={styles.cartData}>
              <p className={styles.cartNumber}>{cart.length}</p>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}
