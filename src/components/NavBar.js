import React from "react";
import SearchBar from './SearchBar'

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <h3>Where is that band from?</h3>
        <div className="container justify-content-end" id="navbarSupportedContent">
            <SearchBar />
        </div>
      </nav>
    );
  }
}

export default NavBar;
