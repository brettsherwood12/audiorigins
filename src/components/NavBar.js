import React from "react";
import SearchBar from "./SearchBar";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <h3>Where is that band from?</h3>
      <div className="container justify-content-end" id="navbarSupportedContent">
        <SearchBar onNewBand={props.onNewBand} />
      </div>
    </nav>
  );
};

export default NavBar;
