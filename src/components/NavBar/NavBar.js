import React from "react";
import "./NavBar.css";
import { getBandData } from "../../services/queries";

class NavBar extends React.Component {
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
    getBandData(band)
      .then((data) => {
        let bandData = data.artists[0];
        this.props.onNewBand(bandData);
      })
      .catch((error) => {
        //this.props.onNewBand(error);
        console.log(error);
      });
  };
  render() {
    return (
      <div className="navbar bg-secondary">
        <form className="form-inline my-2" onSubmit={this.handleFormSubmit}>
          <input
            id="search-bar"
            className="form-control mr-2"
            type="text"
            placeholder="What artist?"
            aria-label="Search"
            onChange={this.handleInputChange}
            value={this.search}
          />
          <button className="btn">Find Out</button>
        </form>
        <a href="/" className="nav-link">
          Home
        </a>
      </div>
    );
  }
}

export default NavBar;
