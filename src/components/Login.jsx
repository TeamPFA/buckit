import React, { useState } from 'react';
import { Tooltip, Toast, Popover } from 'bootstrap';
import { Button, Form, Container, Image } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const [usernameInput, setUsername] = useState('');
  const [passwordInput, setPassword] = useState('');
  
  const fetchData = () => {
    axios.post('/api/login', {
        username: usernameInput,
        password: passwordInput,
      })
      .then((res) => res.json())
      .then((data) => console.log('DATA: ', data))
      .catch((err) => console.error('ERR: ', err));
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetchData();
  };
  
  return (
    <Container fluid className="login">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            className="form-control"
            type="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={usernameInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            className="form-control"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={passwordInput}
          />
        </Form.Group>
        <Form.Group>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;
