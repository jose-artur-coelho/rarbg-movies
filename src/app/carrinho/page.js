"use client";
import { Arrow } from "@/components/Arrow";
import styles from "./page.module.css";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import MovieCartCard from "@/components/MovieCartCard";

export default function Carrinho() {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((total, movie) => {
    return total + movie.price;
  }, 0);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/">
          <Arrow />
        </Link>

        {cart.length > 0 ? (
          <div>
            <p style={{ textAlign: "center", fontSize: "20px" }}>
              Seus itens do carrinho:
            </p>
            <div className={styles.cartMovies}>
              {cart.map((m) => (
                <MovieCartCard
                  key={m.title}
                  title={m.title}
                  posterUrl={m.posterUrl}
                  price={m.price}
                />
              ))}
            </div>
            <div className={styles.checkout}>
              <p className={styles.totalValue}>Valor total: R$ {totalPrice}</p>
              <button className={styles.buyButton}>Comprar agora</button>
            </div>
          </div>
        ) : (
          <p
            style={{ textAlign: "center", fontWeight: "500", fontSize: "24px" }}
          >
            O carrinho está vazio.
          </p>
        )}
      </div>
    </main>
  );
}
