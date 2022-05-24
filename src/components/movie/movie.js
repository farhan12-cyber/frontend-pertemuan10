import styles from "./movie.module.css";
function Movie(props) {
  // di destructing data nya
  const {movie} = props;
    return (
        <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src={movie.poster}
              alt=""/>
            <h3 className={styles.movie__title}>{movie.title}</h3>
            <p className={styles.movie__date}>{movie.year}</p>
          </div>
    );
}
export default Movie;