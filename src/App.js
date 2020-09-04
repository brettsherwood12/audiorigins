import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import Map from "./components/Map/Map";
import { getCoordinates } from "./services/queries";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      artistData: null,
      mapCoords: [-46, 47],
    };
  }
  handleNewBand = (artistData) => {
    const origin = artistData.strCountry;
    getCoordinates(origin).then((geoData) => {
      const mapCoords = geoData.features[0].center;
      this.setState({
        artistData,
        mapCoords,
      });
    });
    // .catch((error) => {
    //   console.log(error);
    // });
  };
  render() {
    return (
      <>
        <NavBar onNewBand={this.handleNewBand} />
        <Card artistData={this.state.artistData} />
        <Map coords={this.state.mapCoords} />
      </>
    );
  }
}

export default App;
