import React from "react";
import { getBandOrigin } from "../services/queries";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
    };
  }
  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      searchTerm: value,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const band = this.state.searchTerm;
    getBandOrigin(band).then((data) => {
      const bandData = data.artists[0];
      this.props.onNewBand(bandData);
    });
  };
  render() {
    return (
      <div>
        <form className="form-inline my-2 my-lg-0" onSubmit={this.handleFormSubmit}>
          <input
            id="search-bar"
            className="form-control mr-sm-2"
            type="text"
            placeholder="What band?"
            aria-label="Search"
            onChange={this.handleInputChange}
            value={this.search}
          />
          <button type="submit" className="btn btn-outline-success my-2 my-sm-0">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
