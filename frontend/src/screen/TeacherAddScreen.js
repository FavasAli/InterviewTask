import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {teacherAdds} from '../actions/teacherActions'

const TeacherAddScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);

  const teacherAdd = useSelector((state) => state.teacherAdd);
  const { error, teacher, loading } = teacherAdd;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }

  }, [userInfo, navigate]);

  // const data=new Date().toLocaleString()
  const submitHandler = (e) => {
    e.preventDefault();
     dispatch(teacherAdds(name, email, phone));
    navigate("/");
  };

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>TEACHERS</h1>
      <Row>
        <Col md={2} lg={2}></Col>
        <Col md={8} lg={8}>
          {loading && <Loader />}
          {error && <Message variant="danger"></Message>}
          <Form onSubmit={submitHandler}>

            <Form.Group controlId="name">
              <Form.Label>NAME</Form.Label>
              <Form.Control
                 type="name"
                 value={name}
                 placeholder="Enter name"
                 onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="number">
              <Form.Label>PHONE NUMBER</Form.Label>
              <Form.Control
                type="text"
                value={phone}
                placeholder="Enter Number"
                onChange={(e) => setPhone(e.target.value)}
              ></Form.Control>
            </Form.Group>
         
            <Button type="submit" variant="primary">
              Save
            </Button>
          </Form>
        </Col>
        <Col md={2} lg={2}></Col>
      </Row>
    </Container>
  );
};

export default TeacherAddScreen;
