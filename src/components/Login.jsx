import React, { useState } from 'react';
//import { Tooltip, Toast, Popover } from 'bootstrap';
import {
  Button,
  Form,
  Container,
  Image,
  Row,
  Column,
  Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [usernameInput, setUsername] = useState('');
  const [passwordInput, setPassword] = useState('');

  const fetchData = () => {
    axios
      .post('/api/login', {
        username: usernameInput,
        password: passwordInput,
      })
      .then((res) => res.json())
      .then((data) => console.log('DATA: ', data))
      .catch((err) => console.error('ERR: ', err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <Container fluid className="login">
      <div className="loginCard">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username *"
              onChange={(e) => setUsername(e.target.value)}
              value={usernameInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password *"
              onChange={(e) => setPassword(e.target.value)}
              value={passwordInput}
            />
          </Form.Group>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col>
              {' '}
              <Button
                className="mb-2 pull-right"
                variant="primary"
                type="submit"
              >
                Sign In
              </Button>
            </Col>
          </Row>

          <div className="text-center">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
