import { Lupa } from "./Lupa";
import styles from "./Search.module.css";
export function Search() {
  return (
    <form>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="buscar..."
          value=""
        />
        <button type="submit" className={styles.searchButton}>
          <Lupa />
        </button>
      </div>
    </form>
  );
}
