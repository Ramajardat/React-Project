import React, { useState } from "react";

import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useCookies } from "react-cookie";
import { Link, redirect, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEffect } from "react";

const MySwal = withReactContent(Swal);

const patterns = {
  email: /(\w{4,}).?-?_?(\w{2,})?@([a-z\d]+).com/,
  password: /^[\w]{8,20}$/,
};
const RegisterContainer = () => {
  const [cookies, setCookie] = useCookies(["currentUser"]);
  const [allUsers, setAllusers] = useCookies(["allUsers"]);
  const [isRedirect, setRedirect] = useState("false");
  const [allUsersArray, setAllusersArray] = useState([]);
  const navigate = useNavigate();
  const handelSubmit = () => {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let ConfirmPassword = document.getElementById("ConfirmPassword").value;

    if (
      patterns.email.test(email) &&
      patterns.password.test(password) &&
      password == ConfirmPassword
    ) {
      console.log("tets");
      if (checkEmail(email)) {
        let newUser = { name: name, email: email, password: password };
        setAllusersArray([...allUsersArray, newUser]);
        console.log(allUsersArray);
        setCookie("currentUser", newUser, { path: "/" });
        setAllusers("AllUsers", [...allUsersArray, newUser], { path: "/" });
      } else {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "This Email is already used",
          denyButtonColor: "#8E05C2",
        });
      }
    } else {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Password or Email pattern ",
        denyButtonColor: "#8E05C2",
      });
    }
  };

  //   if (isRedirect) {
  //     navigate("/");
  //   }

  function checkEmail(E) {
    let rightUser = allUsersArray?.filter((user) => {
      if (user.email == E) return true;
    });
    if (rightUser[0] == null) {
      return true;
    }

    return false;
  }

  return (
    <Container className="mt-5 w-50">
      <h1>Register</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control id={"name"} type="text" placeholder="User name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control id={"email"} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id={"password"}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id={"ConfirmPassword"}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        <Link
          to="/login"
          className="text-gray-800 hover:shadow-lg"
          style={{ textDecoration: "none", color: "#59CE8F" }}
        >
          <small>Already have an account</small>
          <br></br>
        </Link>
        <br></br>
        <Button
          variant="success"
          style={{ backgroundColor: "#59CE8F" }}
          type="button"
          onClick={handelSubmit}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterContainer;
