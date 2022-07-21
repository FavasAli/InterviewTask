import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import {useDispatch, useSelector } from "react-redux";
import {logout} from '../actions/userActions.js'

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const {  userInfo } = userLogin;

  const dispatch=useDispatch()


  return (
    <Navbar bg="dark" expand="lg">
      <Container>
          
      </Container>
    </Navbar>
  );
};

export default Header;
