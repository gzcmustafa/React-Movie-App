import React from "react";
import { Link } from "react-router-dom";


class SearchBar extends React.Component {



  handleFormSubmit = (event) => {
    event.preventDefault();
  }


  render() {
    return (


      <form style={{ position: "relative", top: "10px" }} onSubmit={this.handleFormSubmit}>
        <div className="form-row mb-5" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="col-10" style={{ flex: 1 }}>
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
              placeholder="Search a movie"
            />
          </div>
          <div className="col-2" style={{ flex: '0 0 auto' }}>
            <Link

              to="/add"
              type="button"
              className="btn btn-md btn-success"
              style={{ marginLeft: '10px', width: "200px" }}
            >
              Add Movie
            </Link>
          </div>
        </div>
      </form>




    )
  }
}

export default SearchBar;
