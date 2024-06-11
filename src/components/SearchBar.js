import React from "react";

class SearchBar extends React.Component {

  state = {
    searchQuery: ""
  }

  handleFormSumbit = (event) => {
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleFormSumbit}>
        <div className="form-row mb-5">
          <div className="col-12">
            <input
              onChange={(event) => this.setState({ searchQuery: event.target.value })}
              className="form-control"
              placeholder="Search a movie"
              value={this.state.searchQuery}
            />
          </div>
        </div>
      </form>
    )
  }
}

export default SearchBar;
