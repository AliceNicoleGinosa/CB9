import styles from "./modal.module.scss";
import { IoIosCloseCircle } from "react-icons/io";
import { AUTH_KEY } from "../../../constants";
import { useState, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Modal = ({ handleCloseClick, id }) => {
  const [Movie, SetMovieDetail] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${AUTH_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((moviedata) => {
        SetMovieDetail(moviedata);
      });
  }, []);
  return (
    <section className={styles.modalBackground} onClick={handleCloseClick}>
      {Movie?.title ? (
        <div className={styles.modalWindow}>
          <img
            src={`https://image.tmdb.org/t/p/w500${Movie?.backdrop_path}`}
            alt={Movie?.title}
            className={styles.modalImage}
          />
          <h3 className={styles.modalTitle}>{Movie?.title}</h3>
          <p className={styles.modalDescription}>{Movie?.overview}</p>
          <div className={styles.closeButtonContainer}>
            <IoIosCloseCircle
              className={styles.btnModal}
              onClick={handleCloseClick}
            />
          </div>
        </div>
      ) : (
        <AiOutlineLoading3Quarters className={styles.iconLoading} />
      )}
    </section>
  );
};

export default Modal;
