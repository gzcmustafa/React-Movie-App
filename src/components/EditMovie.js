// EditMovie.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditMovie = ({ onEditMovie }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState({
        name: "",
        rating: "",
        overview: "",
        imageURL: ""
    });

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get(`http://localhost:3002/movies/${id}`);
            setMovie(response.data);
        };
        fetchMovie();
    }, [id]);

    const onInputChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onEditMovie(id, movie);
        navigate('/main');
    };

    return (
        <div className="container">
            <h2>Edit Movie</h2>
            <form className="mt-5" onSubmit={handleFormSubmit}>
                <input className="form-control" id="disabledInput" type="text" placeholder="Edit the form to edit a movie.." disabled />
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input type="text"
                            className="form-control"
                            name="name"
                            value={movie.name}
                            onChange={onInputChange} />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Rating</label>
                        <input
                            type="text"
                            className="form-control"
                            name="rating"
                            value={movie.rating}
                            onChange={onInputChange} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            name="imageURL"
                            value={movie.imageURL}
                            onChange={onInputChange} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea
                            className="form-control"
                            name="overview" rows="5"
                            value={movie.overview}
                            onChange={onInputChange}></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Edit Movie" />
            </form>
        </div>
    );
};

export default EditMovie;
