import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img className="card-img-top" src={props.band.strArtistFanart} alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.band.strArtist}</h5>
          <p className="card-text">{props.band.strBiographyEN}</p>
          <a href={props.band.strWebsite} className="btn btn-primary">
            Go to their website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
