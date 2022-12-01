import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "./MovieGrid.css";

const moviesURL = "https://api.themoviedb.org/3/movie/";
const apiKey = "8ed200f50a6942ca5bc8b5cdec27ff22";


const Home = () => {
  const [topMovies, setTopMovies]:any = useState([]);
  const getTopRatedMovies = async (url: any) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?api_key=${apiKey}`;
    getTopRatedMovies(topRatedUrl);
    console.log();
  }, []);

  return (
    <div className="container">
      <h2 className="title">Top melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Home;
