import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';
import { Button, Form, Container, Image, Row, Column, Col, Card, ListGroup, ListGroupItem, InputGroup, FormControl, CloseButton } from 'react-bootstrap';

const Buckit = () => {
    return (
        <Card variant="Light" border="primary" style={{ width: '18rem' }}>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div className="text-dark">
                        <strong>New Buckit</strong>
                    </div>
                    <CloseButton />
                </div>

                <hr className="solid" />

                <Form>
                    <Form.Group controlId="formBasicTitle">
                        <Form.Control type="text" placeholder="Enter Title" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicText">
                        <Form.Control className="mt-2" as="textarea" placeholder="Enter Description" rows={3} />
                    </Form.Group>
                    <InputGroup>
                        <FormControl className="mb-2" size="sm" type="url" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Share URL" />
                    </InputGroup>
                    <Row>
                        <Col>
                            <Form.Select size="sm" id="inlineFormCustomSelect">
                                <option value="#">Rating</option>
                                <option value="3">⭐⭐⭐</option>
                                <option value="2">⭐⭐</option>
                                <option value="1">⭐</option>
                            </Form.Select>
                        </Col>
                        <Col></Col>
                    </Row>
                    <hr className="solid" />
                    <Button variant="primary">Confirm</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default Buckit;
