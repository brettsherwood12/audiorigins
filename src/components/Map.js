import React from "react";
import mapboxgl from "mapbox-gl";
//import geocoder from "mapbox-gl-geocoder";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_GL_ACCESS_TOKEN;

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      lng: -46,
      lat: 47,
      zoom: 2.75,
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }
  render() {
    return (
      <div>
        <div className="coordinates-bar">
          Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}
        </div>
        <div className="map-container" ref={(el) => (this.mapContainer = el)} />
      </div>
    );
  }
}

export default Map;
