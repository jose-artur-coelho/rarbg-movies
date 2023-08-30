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
    <section className={styles.detailsContainer}>
      <img
        src={posterUrl}
        alt="movie poster"
        width={278}
        height={395}
        style={{ marginBottom: "10px" }}
      />
      <p style={{ fontWeight: 700, textAlign: "center" }}>{title}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <div className={styles.movieDetails}>
          <p style={{ fontSize: "14px", fontWeight: "300" }}>{genres}</p>
          <p style={{ fontSize: "14px", fontWeight: "300" }}>{year}</p>
          <p style={{ fontSize: "14px", fontWeight: "300" }}>{length}</p>
        </div>
        <p style={{ fontSize: "25px", fontWeight: "600" }}>R$ {price}</p>
      </div>
      <div className={styles.addToCartButton}>
        <span style={{ color: "#FFF" }}>ADICIONAR AO CARRINHO</span>
        <Cart color={"#fff"} width={18} height={18} />
      </div>
    </section>
  );
}
