import { Arrow } from "@/components/Arrow";
import styles from "./page.module.css";
import Link from "next/link";

export default function Carrinho() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/">
          <Arrow />
        </Link>
      </div>
    </main>
  );
}
