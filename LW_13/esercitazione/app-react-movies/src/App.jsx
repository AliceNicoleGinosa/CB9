import styles from "./app.module.scss";
import Navigation from "./Components/Navigation/Navigation";
import { AUTH_KEY } from "../constants";
import { useEffect, useState } from "react";
import Hero from "./Components/Hero/Hero";
import Carousel from "./Components/Carousel/Carousel";
import Modal from "./Components/Modal/Modal";
const App = () => {
  const [nowPlayingSlider, SetnowPlayingSlider] = useState([]);
  const [nowPlaying, SetnowPlaying] = useState([]);
  const [upComing, SetupComing] = useState([]);
  const [movieId, SetMovieId] = useState(0);
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/now_playing", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${AUTH_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((nowplayingSlider) =>
        SetnowPlayingSlider(
          nowplayingSlider.results.filter((_, index) => index < 5)
        )
      );
    fetch("https://api.themoviedb.org/3/movie/now_playing", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${AUTH_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((nowplaying) => SetnowPlaying(nowplaying.results));

    fetch("https://api.themoviedb.org/3/movie/upcoming", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${AUTH_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((upcoming) => SetupComing(upcoming.results));
  }, []);

  return (
    <main>
      <Navigation />
      <Hero list={nowPlayingSlider} />
      <h2 className={styles.titleCarouselSection}>Trending</h2>
      <section className={styles.sectionCarousel}>
        <Carousel list={nowPlaying} SetMovieId={SetMovieId} />
      </section>
      <h2 className={styles.titleCarouselSection}>What's next</h2>
      <section className={styles.sectionCarousel}>
        <Carousel list={upComing} SetMovieId={SetMovieId} />
      </section>
      {movieId && (
        <Modal
          id={movieId}
          handleCloseClick={() => {
            SetMovieId(0);
          }}
        />
      )}
    </main>
  );
};

export default App;
