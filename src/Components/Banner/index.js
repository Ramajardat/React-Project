import React from "react";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import "./banner.css";

const BannerContainer = () => {
  return (
    <Carousel fade>
      <Carousel.Item
        style={{
          height: "550px",
        }}
      >
        <img
          className="d-block w-100 h-100"
          src="https://i.pinimg.com/originals/ef/2d/aa/ef2daa7778d00f25b58e18c2d43c1b7b.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Tv Series</h3>
          <p>are always there for you!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "550px" }}>
        <img
          style={{
            backgroundRepeat: "no-repeat center center",
            backgroundSize: "cover",
            WebkitBackgroundSize: "cover",
            objectFit: "cover",
          }}
          className="d-block w-100 h-100 "
          src="https://cupofjo.com/wp-content/uploads/2018/02/friends_trivia.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Tv Series</h3>
          <p>are always there for you!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "550px" }}>
        <img
          className="d-block w-100 h-100 "
          src="https://www.tjtoday.org/wp-content/uploads/2020/11/the-queens-gambit-900x506.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Tv Series</h3>
          <p>are always there for you!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerContainer;
