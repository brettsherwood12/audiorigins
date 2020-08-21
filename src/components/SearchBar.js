import React from "react";

const apikey = process.env.REACT_APP_LASTFM_API_KEY;
const url = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.getLocation = this.getLocation.bind(this);
    this.state = {
      isLoaded: false,
      data: [],
    };
  }

  getLocation(event) {
    event.preventDefault();
    const userInput = document.getElementById("search-bar").value;
    const urlToFetch = `${url}${userInput}&api_key=${apikey}&format=json`;
    fetch(urlToFetch)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        // this.setState({
        //   isLoaded: true,
        //   data: json,
        // });
      });
  }

  render() {
    return (
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input
            id="search-bar"
            className="form-control mr-sm-2"
            type="text"
            placeholder="What artist?"
            aria-label="Search"
          />
          <button
            type="submit"
            onClick={this.getLocation}
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
