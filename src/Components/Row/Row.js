import React, { useState, useEffect } from "react";
import axios from "../../axios";
import classes from "./Row.module.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  useEffect(() => {
    axios
      .get(props.fetchURL)
      .then((req) => {
        setMovies(req.data.results);
        return req;
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.fetchURL]);

  const rowClass = [classes.RowPoster];
  if (props.isLarge) {
    rowClass.push(classes.RowPosterLarge);
  }

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParam = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParam.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className={classes.Row}>
      <h2>{props.title}</h2>
      <div className={classes.RowPosters}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={rowClass.join(" ")}
            src={`${base_url}${
              props.isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

export default Row;
