import React from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_GL_ACCESS_TOKEN;

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      map: null,
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/light-v10",
      center: [-46, 47],
      zoom: 2.75,
    });
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
    this.setState({
      map,
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.coords !== this.props.coords) {
      this.state.map.flyTo({
        center: [this.props.coords[0], this.props.coords[1]],
        zoom: 8.75,
        essential: true,
      });
    }
  }
  render() {
    return (
      <div>
        <div className="map-container" ref={(el) => (this.mapContainer = el)} />
      </div>
    );
  }
}

export default Map;
