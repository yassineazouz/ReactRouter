import React, { useState } from 'react';
import { BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import AddMovieForm from './Components/AddMovieForm';
import MovieDetail from './Components/MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleFilterChange = (title, rate) => {
    // Filtering logic here...
  };

  const handleMovieAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <Router>
      <div>
        <h1>Movie App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-movie">Add Movie</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Filter onFilterChange={handleFilterChange} />
            <MovieList movies={movies} />
          </Route>
          <Route path="/add-movie">
            <AddMovieForm onMovieAdd={handleMovieAdd} />
          </Route>
          <Route path="/movies/:id">
            <MovieDetail movies={movies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
