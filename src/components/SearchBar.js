import React from "react";

class SearchBar extends React.Component {



  handleFormSumbit = (event) => {
    event.preventDefault();
  }


  render() {
    return (


      <form onSubmit={this.handleFormSumbit}>
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
            <button
              type="button"
              className="btn btn-md btn-danger"
              style={{ marginLeft: '10px' }}
            >
              Add Movie
            </button>
          </div>
        </div>
      </form>




    )
  }
}

export default SearchBar;
