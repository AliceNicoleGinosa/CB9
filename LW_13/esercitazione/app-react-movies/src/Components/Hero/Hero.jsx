import { useRef } from "react";
import SliderCard from "../SliderCard/SliderCard";
import styles from "./hero.module.scss";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
const Hero = ({ list = [] }) => {
  const heroContainerRef = useRef();
  const SliderCardRef = useRef();

  const handleClickIcons = (type) => {
    const SliderCardWidth = SliderCardRef.current?.offsetWidth;

    if (type === "left") {
      heroContainerRef.current.scroll({
        top: 0,
        left: heroContainerRef.current.scrollLeft - SliderCardWidth,
        behavior: "smooth",
      });
    } else {
      heroContainerRef.current.scroll({
        top: 0,
        left: heroContainerRef.current.scrollLeft + SliderCardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.generalContainer}>
      <div className={styles.iconsSliderWrap}>
        <MdArrowBackIosNew
          className={styles.icon}
          onClick={() => {
            handleClickIcons("left");
          }}
        />

        <MdArrowForwardIos
          className={styles.icon}
          onClick={() => {
            handleClickIcons();
          }}
        />
      </div>
      <section ref={heroContainerRef} className={styles.heroContainer}>
        {list?.map((movie, index) => (
          <SliderCard
            refProp={SliderCardRef}
            key={index}
            title={movie.original_title}
            imageUrl={movie.backdrop_path}
          />
        ))}
      </section>
    </div>
  );
};

export default Hero;
