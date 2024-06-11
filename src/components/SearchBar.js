import React from "react";

class SearchBar extends React.Component {



  handleFormSumbit = (event) => {
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleFormSumbit}>
        <div className="form-row mb-5">
          <div className="col-12">
            <input
              onChange={this.props.searchMovieProp}
              className="form-control"
              placeholder="Search a movie"

            />
          </div>
        </div>
      </form>
    )
  }
}

export default SearchBar;
