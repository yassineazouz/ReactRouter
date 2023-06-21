import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Description: {movie.description}</p>
      <img src={movie.posterURL} alt={movie.title} />
      <p>Rating: {movie.rating}</p>
      <Link to={`/movies/${movie.id}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;
