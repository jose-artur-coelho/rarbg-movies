import { MovieContainer } from "@/components/MovieContainer";
import styles from "./page.module.css";
import { movies } from "@/mocks/movies";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {movies.map((movie) => (
          <MovieContainer
            key={movie.id}
            posterUrl={movie.cover}
            title={movie.title}
            genres={movie.genres}
            length={movie.length}
            price={movie.price}
            year={movie.year}
          />
        ))}
      </div>
    </main>
  );
}
