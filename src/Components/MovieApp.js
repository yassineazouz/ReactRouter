import React, { useState } from 'react';
import './styles.css';

import MovieList from './MovieList';
import Filter from './Filter';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails';


const MovieApp = () => {
    const [movies, setMovies] = useState([]);
    const [titleFilter, setTitleFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');

    const handleTitleChange = (value) => {
        setTitleFilter(value);
    };

    const handleRateChange = (value) => {
        setRatingFilter(value);
    };

    const handleCardClick = (movie) => {
        console.log('Clicked on:', movie);
    };

    const handleAddMovie = () => {
       
        const newMovie = {
            id: movies.length + 1, 
            title: 'New Movie',
            description: 'A great new movie',
            posterURL: 'https://example.com/new-movie-poster.jpg',
            rating: 4.5,
            trailerLink: 'https://www.youtube.com/embed/1234567890',
        };

        setMovies([...movies, newMovie]);
    };

    const filteredMovies = movies.filter((movie) => {
        const matchTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
        const matchRating = movie.rating >= Number(ratingFilter);
        return matchTitle && matchRating;
    });

    return (
        <Router>
            <div>
                <h1>Movie App</h1>
                <Routes>
                <Route path="/" element={<div>Welcome to the Movie App Home Page!</div>} />

                    <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
                </Routes>

            </div>
        </Router>
    );
};

export default MovieApp;
