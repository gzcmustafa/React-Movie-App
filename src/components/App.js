import React from "react";
import SearchBar from "./SearchBar";
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
        name: "The Flash",
        rating: 8.9,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content",
        imageURL:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yZevl2vHQgmosfwUdVNzviIfaWS.jpg",
      },
      {
        id: 3,
        name: "Arrow",
        rating: 8.9,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content",
        imageURL:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg",
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar />
          </div>
        </div>
        <MovieList />
      </div>
    );
  }
}
export default App;
