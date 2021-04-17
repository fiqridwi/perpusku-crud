import React from "react";
//bootstrap
import { Jumbotron, Button } from "react-bootstrap";
//router
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Jumbotron>
      <h1>Books Data Management</h1>
      <p>Please provide user data.</p>
      <p>
        <Link to="/add">
          <Button variant="info">Add Data</Button>
        </Link>
      </p>
    </Jumbotron>
  );
};

export default Hero;
