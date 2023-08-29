/* eslint-disable @next/next/no-img-element */
import { Cart } from "./Cart";
import styles from "./MovieContainer.module.css";
export function MovieContainer({
  posterUrl,
  title,
  price,
  genres,
  year,
  length,
}) {
  return (
    <section style={styles.detailsContainer}>
      <img
        src={posterUrl}
        alt="movie poster"
        width="278"
        height={395}
        style={{ marginBottom: "10px" }}
      />
      <p>{title}</p>
      <div>
        <div style={{ display: "grid" }}>
          <p>{genres}</p>
          <p>{year}</p>
          <p>{length}</p>
        </div>
        <p>R$ {price}</p>
      </div>
      <button>
        ADICIONAR AO CARRINHO
        <Cart />
      </button>
    </section>
  );
}
