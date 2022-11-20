import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsStackOverflow,
  BsGoogle,
  BsGithub,
  BsYoutube,
} from "react-icons/bs";

// import {
//   BsFacebook,
//   BsLinkedin,
//   BsTwitter,
//   BsStackOverflow,
//   BsGoogle,
//   BsGithub,
//   BsYoutube,
// } from "react-icons/bs";
import "./style.css";
const ContactContainer = () => {
  return (
    <div>
      <Container className="mt-5 w-50">
        <h1>Contact us </h1>
        <Col className="mb-5 mt-5">
          {/* <h3 className="head_3">Follow us  </h3> */}
          <ul className="socialIconsList">
            <li>
              <a
                rel="noreferrer"
                href="https://www.facebook.com/themoviedb/"
                target="_blank"
              >
                <BsFacebook />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/themoviedb/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                href="https://twitter.com/themoviedb"
                target="_blank"
              >
                <BsTwitter />
              </a>
            </li>

            <li>
              <a
                rel="noreferrer"
                href="https://www.themoviedb.org/"
                target="_blank"
              >
                <BsGoogle />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                href="https://github.com/themoviedb"
                target="_blank"
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                href="https://www.youtube.com/c/themoviedb"
                target="_blank"
              >
                <BsYoutube />
              </a>
            </li>
          </ul>
        </Col>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>phone number</Form.Label>
            <Form.Control type="text" placeholder="phone number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" placeholder="Message" />
          </Form.Group>
          <Button
            variant="success"
            style={{ backgroundColor: "#59CE8F" }}
            type="submit"
          >
            Send
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactContainer;
