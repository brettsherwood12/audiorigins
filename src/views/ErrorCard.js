import React from "react";

const ErrorView = () => {
  return (
    <>
      <div className="card-body">
        <img src="%PUBLIC_URL%/NotFound.jpg" alt="error" />
        <h5 className="card-title">Error</h5>
        <p className="card-text">Looks like that artist doesn't exist at theaudiodb.com</p>
      </div>
    </>
  );
};

export default ErrorView;
