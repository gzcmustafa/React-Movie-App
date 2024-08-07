import React from 'react'
import serialize from 'form-serialize'
import { useNavigate } from 'react-router-dom'
import "./../css/AddMovie.css";





const AddMovie = (props) => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newMovie = serialize(e.target, { hash: true });
        props.onAddMovie(newMovie);
        navigate('/main');
    }

    const navigate = useNavigate();



        return (

            <div className="container">
                <h2 style={{ color: "green  ", fontSize: "50px" }} className=''>Add Movie</h2>
                <form className="mt-5" onSubmit={handleFormSubmit}>
                    <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled />
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text"
                                className="form-control"
                                name="name" />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rating" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageURL" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control"
                                name="overview" rows="5"></textarea>
                        </div>
                    </div>
                    <input style={{ position: "relative", top: "20px" }} type="submit" className="btn btn-success btn-block" value="Add Movie" />
                </form>
            </div>

        )

}

export default AddMovie