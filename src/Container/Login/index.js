import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function LoginContainer() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const [allUsers, setAllusers] = useCookies(["allUsers"]);

  const handelSubmit = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const currentUser = { email: email, password: password };
    if (checkUser()) {
      setCookie("currentUser", currentUser, { path: "/" });
      navigate("/");
    } else {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Email or password",
        denyButtonColor: "#8E05C2",
      });
    }

    function checkUser() {
      console.log(allUsers);
      let user = allUsers.AllUsers.filter(
        (user) => user.email == currentUser.email
      );
      if (user.length > 0) return true;
    }
  };

  return (
    <Container className="mt-5 w-50">
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control id={"email"} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id={"password"}
            type={"password"}
            placeholder="Password"
          />
        </Form.Group>
        <Link
          to="/register"
          className="text-gray-800 hover:shadow-lg"
          style={{ textDecoration: "none", color: "#59CE8F" }}
        >
          <small>Create new account</small>
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
}

export default LoginContainer;
