import MovieCard from "../MovieCard/Moviecard";
import styles from "./carousel.module.scss";
import { useRef } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

const Carousel = ({ list = [], SetMovieId = () => {} }) => {
  const carouselContainerRef = useRef();
  const MovieCardRef = useRef();

  const handleClickIcon = (type) => {
    const MovieCardWidth = MovieCardRef.current?.offsetWidth;

    if (type === "left") {
      carouselContainerRef.current.scroll({
        top: 0,
        left: carouselContainerRef.current.scrollLeft - MovieCardWidth,
        behavior: "smooth",
      });
    } else {
      carouselContainerRef.current.scroll({
        top: 0,
        left: carouselContainerRef.current.scrollLeft + MovieCardWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={styles.generalCarouselContainer}>
      <div className={styles.carouselIconsContainer}>
        <MdArrowBackIosNew
          className={styles.carouselIcons}
          onClick={() => {
            handleClickIcon("left");
          }}
        />
        <MdArrowForwardIos
          className={styles.carouselIcons}
          onClick={() => {
            handleClickIcon();
          }}
        />
      </div>
      <section ref={carouselContainerRef} className={styles.carouselContainer}>
        {list?.map((movie, index) => (
          <MovieCard
            refProp={MovieCardRef}
            key={index}
            imageUrl={movie.poster_path}
            title={movie.original_title}
            movie={movie}
            handleCardClick={() => {
              SetMovieId(movie.id);
            }}
          />
        ))}
      </section>
    </div>
  );
};

export default Carousel;
