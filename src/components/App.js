import React from "react";
import MovieList from "./MovieList";

class App extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        name: "Interstellar",
        rating: 8.9,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content",
        imageURL:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      },
      {
        id: 2,
        name: "Suits",
        rating: 8.9,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content",
        imageURL:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vQiryp6LioFxQThywxbC6TuoDjy.jpg",
      },
      {
        id: 3,
        name: "The Dark Knight",
        rating: 8.9,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content",
        imageURL:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
    ],
  };

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter(m => m.id !== movie.id)
    this.setState({
      movies: newMovieList
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

          </div>
        </div>
        <MovieList
          movies={this.state.movies}
          deleteMovieProp={this.deleteMovie} />
      </div>
    );
  }
}
export default App;
