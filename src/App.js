import React from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Map from "./components/Map";
import { getCoordinates } from "./services/queries";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bandData: null,
      mapCoords: [-46, 47],
    };
  }
  handleNewBand = (bandData) => {
    const origin = bandData.strCountry;
    getCoordinates(origin).then((geoData) => {
      const mapCoords = geoData.features[0].center;
      this.setState({
        bandData,
        mapCoords,
      });
    });
  };
  render() {
    return (
      <div>
        <NavBar onNewBand={this.handleNewBand} />
        {this.state.bandData && <Card band={this.state.bandData} />}
        <Map coords={this.state.mapCoords} />
      </div>
    );
  }
}

export default App;
