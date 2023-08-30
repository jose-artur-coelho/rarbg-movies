import { Cart } from "./Cart";
import { Search } from "./Search";
import styles from "./Header.module.css";
import Link from "next/link";

export function Header() {
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
              <p className={styles.cartNumber}>0</p>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}
