import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar"
import axios from 'axios'
import AddMovie from "./AddMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeBar from "./WelcomeBar";
import EditMovie from "./EditMovie";

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: ""
  };

  async componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    const response = await axios.get("http://localhost:3002/movies")

    this.setState({ movies: response.data })
  }

  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`)
    const newMovieList = this.state.movies.filter(m => m.id !== movie.id)
    this.setState(state => ({ movies: newMovieList }))
  }

  searchMovie = (event) => {
    this.setState({ searchQuery: event.target.value })
  }

  addMovie = async (movie) => {
    await axios.post(`http://localhost:3002/movies/`, movie)
    this.setState(state => ({
      movies: state.movies.concat([movie])
    }))
    this.getMovies();
  }

  editMovie = async (id, updatedMovie) => {
    await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie)
    this.setState(state => ({
      movies: state.movies.map(movie =>
        movie.id === id ? updatedMovie : movie
      )
    }))
    this.getMovies();
  }

  render() {
    let filteredMovies = this.state.movies.filter(
      (movie) => {
        return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1;
      }
    ).sort((a, b) => {
      return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
    })

    return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<WelcomeBar />} />
            <Route exact path="main" element={
              <React.Fragment>
                <div className="row">
                  <div className="col-lg-12">
                    <SearchBar searchMovieProp={this.searchMovie} />
                  </div>
                </div>
                <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />
              </React.Fragment>
            } />
            <Route path="add" element={<AddMovie onAddMovie={(movie) => this.addMovie(movie)} />} />
            <Route path="main/edit/:id" element={<EditMovie onEditMovie={this.editMovie} />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
