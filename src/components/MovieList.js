import React from "react";

const MovieList = (props) => {



        return (
            <div className="row">
                {props.movies.map((movie) => (
                    <div className="col-lg-4" key={movie.id}>
                        <div className="card mb-4 shadow-sm">
                            <img
                                src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                                alt="Sample Movie"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.overview}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button
                                        type="button"
                                        className="btn btn-md btn-outline-danger"
                                        onClick={(event) => props.deleteMovieProp(movie)}
                                    >Delete</button>
                                    <h2><span className="badge text-bg-warning">{movie.vote_average.toFixed(1)}</span></h2>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        );

}

export default MovieList;
