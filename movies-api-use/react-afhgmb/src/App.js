import React, { useState } from 'react';
import './style.css';

import MovieCard from './MovieCard';

export default function App() {
  const [moviesList, setMoviesList] = useState([]);
  const fetchMoviesHandler = () => {
    fetch('https://swapi.dev/api/films')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const movies = data.results.map((movieData) => {
          return {
            id: movieData.eposide_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });

        setMoviesList(movies);
        console.log(moviesList);
      });
  };

  return (
    <React.Fragment>
      <div className="container">
        <button onClick={fetchMoviesHandler}>Get Movies</button>
      </div>
      {moviesList.map((movie) => {
        return (
          <MovieCard
            name={movie.title}
            description={movie.openingText}
            releaseDate={movie.releaseDate}
          />
        );
      })}
    </React.Fragment>
  );
}
