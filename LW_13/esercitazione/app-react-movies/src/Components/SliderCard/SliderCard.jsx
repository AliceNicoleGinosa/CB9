import styles from "./slidercard.module.scss";

const SliderCard = ({ imageUrl, title, refProp }) => {
  return (
    <div ref={refProp} className={styles.sliderCardContainer}>
      <img
        src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
        className={styles.imageSlider}
        alt={title}
      />
      <h3 className={styles.titleSlider}>{title}</h3>
      <button className={styles.btnSlider}>Wanna watch?</button>
    </div>
  );
};

export default SliderCard;
