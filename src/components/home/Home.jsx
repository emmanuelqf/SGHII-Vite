import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";

const Home = () => {
  return (
    <div>
      <div className="col-md-9">
        <h1>Este es el Home</h1>
        <img
          src="./logo.png"
          alt="Logo"
          style={{ maxWidth: 500, height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Home;
