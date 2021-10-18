import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';
import { Button, Form, Container, Image, Row, Column, Col, Card, ListGroup,ListGroupItem, InputGroup, FormControl, CloseButton } from 'react-bootstrap';

const Buckit = () => {
  return (
    <Card variant="Light" border="primary" style={{ width: '18rem' }}>
        
  <Card.Body>
      
      <div className="d-flex justify-content-end"><CloseButton /></div>
      <hr class="solid"/>
      <div className="text-dark mb-2"><strong>New Bucketlist</strong></div>
      <Form >
  <Form.Group controlId="formBasicTitle">
    <Form.Control type="text" placeholder="Enter Title" />
  </Form.Group>
  <Form.Group className="mb-1" controlId="formBasicText">
    <Form.Control className="mt-2" as="textarea" placeholder="Enter Description" rows={3} />
  </Form.Group>
  <hr class="solid"/>
  <ListGroup className="list-group-flush">
    <ListGroupItem>
    
    <Form.Control size="sm" type="text" placeholder="Enter idea here" />
    <InputGroup>
    <FormControl size="sm" type="url" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Share URL"/>
    <Form.Select size="sm" id="inlineFormCustomSelect">
        <option value="0">Rating</option>
        <option value="3">⭐⭐⭐</option>
        <option value="2">⭐⭐</option>
        <option value="1">⭐</option>
      </Form.Select>
      </InputGroup>
    </ListGroupItem>
        
        </ListGroup>
</Form>
  </Card.Body>

  

</Card>
  )
}

export default Buckit;







