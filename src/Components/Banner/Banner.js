import React, { useState, useEffect } from "react";
import axios from "../../axios";
import request from "../../requests";
import classes from "./Banner.module.css";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(request.fetchNetflixOriginals)
      .then((req) => {
        setMovie(
          req.data.results[
            Math.floor(Math.random() * req.data.results.length - 1)
          ]
        );
        return req;
      })
      .catch((err) => console.log(err));
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className={classes.Banner}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className={classes.BannerContent}>
        <h1 className={classes.BannerTitle}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={classes.BannerButtons}>
          <button className={classes.BannerButton}>Play</button>
          <button className={classes.BannerButton}>My List</button>
        </div>

        <h1 className={classes.BannerDescription}>
          {truncate(movie?.overview, 150)}
        </h1>

        <div className={classes.BannerFadeBottom}></div>
      </div>
    </div>
  );
};

export default Banner;
