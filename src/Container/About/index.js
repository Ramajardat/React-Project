import React from "react";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const AboutContainer = () => {
  return (
    <div class="container">
      <h1 className="mt-5">About</h1>
      <div
        class="section section-padding pb-0 mt-5 "
        style={{ color: "black", textAlign: "left", marginTop: "100px" }}
      >
        <div class="">
          <div class="row learts-mb-n30">
            <div class=" col-md-6 col-12 align-self-center learts-mb-30">
              <img
                src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iJl3YTEV9KNo/v1/-1x-1.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="col-md-6 col-12 text-center learts-mb-30">
              <div
                class="about-us3"
                style={{
                  color: "white",
                  textAlign: "left",
                  marginTop: "70px",
                }}
              >
                {/* <h2 class="title">TV SERIES</h2> */}
                <div class="desc">
                  <p>
                    Tv Series are always there for you! We are great places to
                    find out what a series is all about. The more information
                    you can gather on a series or film, the better informed
                    you’ll be when you decide whether to watch it or not. Movie
                    review sites don’t really have any effect on box office
                    sales, but they can make a huge difference in determining
                    what kind of an impact a movie will have on consumers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <div class="section section-padding pb-0 ">
        <div class="">
          <div class="row learts-mb-n30">
            <div class="col-md-6 col-12 align-self-center learts-mb-30 ">
              <div class="about-us3 text-light">
                {/* <h2 class="title">Shawshank</h2> */}
                <div class="desc">
                  <p class="">
                    If you love the series, and you’re constantly looking for
                    the best ways to keep up to date with what’s new and what’s
                    upcoming, then one of these sites is going to be perfect for
                    you.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-12 text-center learts-mb-30 ">
              <img
                src="https://i.pinimg.com/564x/0f/7e/bd/0f7ebdf1f725d15a0b65a4dae0da87f9.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
