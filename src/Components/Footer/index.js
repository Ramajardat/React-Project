import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsStackOverflow,
  BsGoogle,
  BsGithub,
  BsYoutube,
} from "react-icons/bs";
const FooterComponent = () => {
  return (
    <>
      <footer className="myFooter bottom">
        <Container className="bottom">
          <Col className="col-12 bottom">
            <div className="footerCopyright">
              <small>© TV SERIES WEBSITE 2022 .</small>
            </div>
          </Col>
        </Container>
      </footer>
    </>
  );
};

export default FooterComponent;
