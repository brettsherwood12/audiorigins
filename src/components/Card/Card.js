import React from "react";
import HomeCard from "../../views/HomeCard";
import ErrorCard from "../../views/ErrorCard";
import "./Card.css";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      //error: false,
      imgUrl: "",
      name: "",
      genre: "",
      noun: "",
      place: "",
      year: "",
    };
  }
  componentDidUpdate(prevProps) {
    // trying to add error handling
    // if (this.props.artistdata.message && prevProps.artistData !== this.props.artistData) {
    //   this.setState({
    //     loaded: false,
    //     error: true,
    //   });
    // }
    if (prevProps.artistData !== this.props.artistData) {
      const int = Number(this.props.artistData.intMembers);
      const end = 1 + this.props.artistData.strBiographyEN.indexOf(".");
      const noun = int === 1 ? "" : int === 2 ? "duo" : "group";
      const year = int > 1 ? this.props.artistData.intFormedYear : this.props.artistData.intBornYear;
      const bio = this.props.artistData.strBiographyEN.slice(0, end);
      this.setState({
        loaded: true,
        error: false,
        imgUrl: this.props.artistData.strArtistFanart,
        name: this.props.artistData.strArtist,
        genre: this.props.artistData.strGenre,
        noun,
        place: this.props.artistData.strCountry,
        year,
        bio,
      });
    }
  }
  render() {
    return (
      <div className="card">
        {this.state.error && <ErrorCard />}
        {(this.state.loaded && (
          <>
            <img className="card-img-top" src={this.state.imgUrl} alt={this.state.name} />
            <div className="card-body">
              <h5 className="card-title">{this.state.name}</h5>
              {(this.state.noun && (
                <h6 className="card-subtitle">
                  {this.state.genre} {this.state.noun} formed in {this.state.place}, circa {this.state.year}.
                </h6>
              )) || (
                <h6 className="card-subtitle">
                  {this.state.genre} artist from {this.state.place}, born in {this.state.year}.
                </h6>
              )}
            </div>
            <div className="card-body">
              <p className="card-text text-muted">{this.state.bio}</p>
              <a
                href={`http://${this.props.artistData.strWebsite}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Checkout their website
              </a>
            </div>
          </>
        )) || <HomeCard />}
      </div>
    );
  }
}

export default Card;
