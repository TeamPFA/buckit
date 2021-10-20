import React, { useState } from 'react';
//import { Tooltip, Toast, Popover } from 'bootstrap';
import { Button, Form, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Signup = () => {
  const [usernameInput, setUsername] = useState('');
  const [passwordInput, setPassword] = useState('');

  const fetchData = () => {
    axios
      .post('/api/signup', {
        userId: uuidv4(),
        username: usernameInput,
        password: passwordInput,
      })
      //this is a really weird line under for line 20. wtf.
      .then(res => window.location = `/home`)
      .catch(err => console.error('ERR: ', err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <Container fluid className="login">
      <div className="loginCard">
        <Form onSubmit={handleSubmit}>
          <Form.Label>Enter Email<span class="text-danger"> *</span></Form.Label>
          <Form.Group className="mb-3">
            <Form.Control
              className="form-control"
              type="email"
              placeholder="example@gmail.com"
            />
          </Form.Group>
          <Form.Label>Create Username<span class="text-danger"> *</span></Form.Label>
          <Form.Group className="mb-3">
            <Form.Control
              className="form-control"
              type="username"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
              value={usernameInput}
            />
          </Form.Group>
          <Form.Label>Create Password<span class="text-danger"> *</span></Form.Label>
          <Form.Group className="mb-3">
            <Form.Control
              className="form-control"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={passwordInput}
            />
          </Form.Group>
          <Form.Group className="d-grid gap-2">
          <Link to={{ pathname: '/home',
                state: {username: usernameInput}}} >
            <Button variant="primary" type="submit">
              Confirm
            </Button>
            </Link>
          </Form.Group>
        </Form>
        {Error}
      </div>
    </Container>
  );
};

//userAccountsData = []  //user is not taken & available

export default Signup;
