import React from "react";
import { Link } from "react-router-dom";
import "./../css/WelcomeBar.css";



class WelcomeBar extends React.Component {





    render() {
        return (


            <React.Fragment>
                <div className="background ">
                    <div className="container px-4 px-lg-5 d-flex h-100  align-items-center justify-content-center ">
                        <div className="d-flex justify-content-center">
                            <div className="text-center center-div">
                                <h1 className="text-dark mx-auto my-0 text-uppercase">React Movie App</h1>
                                <h2 className="text-dark  mx-auto mt-2 mb-5">Create your personal movie list with this app. <br /> Add new movies, delete old movies and edit movies.</h2>
                                <Link className="btn btn-danger  btn-start" to="/main">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>




        )
    }
}

export default WelcomeBar;
