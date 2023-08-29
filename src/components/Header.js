import { Cart } from "./Cart";
import { Search } from "./Search";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>RARBG</h1>
      <div className={styles.searchCart}>
        <Search />
        <Cart color={"#0470d3"} width={30} height={30} />
      </div>
    </header>
  );
}
