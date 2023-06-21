import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './styles.css';
const MovieList = ({ movies }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const filterMovies = (title, rate) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rate >= rate
    );
    setFilteredMovies(filtered);
  };

  return (
    <div>
      {filteredMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MovieList;
