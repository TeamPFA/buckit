import React, { useState } from 'react';
//import { Tooltip, Toast, Popover } from 'bootstrap';
import { Button, Form, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [usernameInput, setUsername] = useState('');
  const [passwordInput, setPassword] = useState('');

  const fetchData = () => {
    axios
      .post('/api/signup', {
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
          <div>Enter Email</div>
          <Form.Group className="mb-3">
            <Form.Control
              className="form-control"
              type="email"
              placeholder="example@gmail.com"
            />
          </Form.Group>
          <div>Create Username</div>
          <Form.Group className="mb-3">
            <Form.Control
              className="form-control"
              type="username"
              onChange={(e) => setUsername(e.target.value)}
              value={usernameInput}
            />
          </Form.Group>
          <div>Create Password</div>
          <Form.Group className="mb-3">
            <Form.Control
              className="form-control"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={passwordInput}
            />
          </Form.Group>
          <Form.Group>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

//userAccountsData = []  //user is not taken & available

export default Signup;
