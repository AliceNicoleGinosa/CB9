import styles from "./moviecard.module.scss";
// import Modal from "../Modal/Modal";
// import { useState } from "react";
const MovieCard = ({ imageUrl, title, refProp, movie, handleCardClick }) => {
  // const [isModalVisible, SetisModalVisible] = useState(false);

  // const handleCardClick = () => {
  //   SetisModalVisible(true);
  // };
  return (
    <>
      <div ref={refProp} className={styles.movieCard}>
        <img src={`https://image.tmdb.org/t/p/w500${imageUrl}`} alt={title} />
        <button onClick={handleCardClick}>Discover</button>
      </div>
      {/* {isModalVisible && (
        <Modal
          handleCloseClick={() => {
            SetisModalVisible(false);
          }}
          movie={movie}
        />
      )} */}
    </>
  );
};

export default MovieCard;
