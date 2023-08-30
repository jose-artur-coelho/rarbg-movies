/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/MovieCartCard.module.css";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function MovieCartCard({ title, posterUrl, price }) {
  const { removeMovie } = useContext(CartContext);

  function handleRemoveMovie() {
    removeMovie(title);
  }
  return (
    <div>
      <img
        src={posterUrl}
        alt={`${title} poster`}
        className={styles.posterImg}
      />
      <p className={styles.movieTitle}>{title}</p>
      <p className={styles.moviePrice}>R$ {price}</p>
      <p onClick={handleRemoveMovie} className={styles.removeButton}>
        Remover
      </p>
    </div>
  );
}
