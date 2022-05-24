/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../ui/button";
import { H2, H3 } from "../ui/heading";
import {IMG, P} from "../ui/p";
import styles from "./Hero.module.css";

function Hero() {
  const [film, setFilm] = useState("");
  async function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    const response = await fetch(url);
    const data = await response.json();

    setFilm(data);
  }
  useEffect(fetchMovie, []);
  console.log(film);
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <H2>{film.Title}</H2>
          <H3>
            {film.Genre}
          </H3>
          <P>
            {film.Plot}
          </P>
          <Button variant="orange">Watch</Button>
        </div>
        <div className="hero__right">
          <IMG
            src={film.Poster}
            alt={film.Title}
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;