import axios from "../../axios.js";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../../Request.js";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner__browse"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner__browse__contants">
        <h1 className="banner__browser__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__browse__buttons">
          <button className="banner__browse__button">Play</button>
          <button className="banner__browse__button">My List</button>
        </div>
        <h4 className="banner__browse__decribtion">
          {truncate(
            movie?.overview,
            150
          )}
        </h4>
      </div>

      <div className="banner__browse--fadeBottom" />
    </header>
  );
}

export default Banner;
