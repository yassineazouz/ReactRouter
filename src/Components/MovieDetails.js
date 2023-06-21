import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Loading...</div>; // Add loading state or error handling
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Description: {movie.description}</p>
      <iframe
        title="Trailer"
        width="560"
        height="315"
        src={movie.trailerLink}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <Link to="/">Back</Link>
    </div>
  );
};

export default MovieDetail;
