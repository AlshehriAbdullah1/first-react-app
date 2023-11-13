import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
// /b48924b6
import "./App.css";
import SearchIcon from "./search.svg";
const API_URL = "https://www.omdbapi.com/?apikey=b48924b6";

const App = () => {
  const movie1 = {
    Title: "Superman, Spiderman or Batman",
    Year: "2011",
    imdbID: "tt2084949",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  function searchChanged(e) {
    setSearchTerm(e.target.value);
  }
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={searchChanged}
        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>{" "}
      <div className="container">
        {movies?.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              Type={movie.Type}
              Title={movie.Title}
              Year={movie.Year}
              Poster={movie.Poster}
            />
          ))
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
