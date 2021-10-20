import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';
import { Button, Form, Container, Image, Row, Column, Col, Card, ListGroup, ListGroupItem, InputGroup, FormControl, CloseButton, Modal } from 'react-bootstrap';

const Buckit = (props) => {

    return (
        <Card variant="Light" border="primary" style={{ width: '18rem' }}>
            <div className="d-flex justify-content-end">{props.ratingInput}</div>
            <Card.Body>
                <Card.Title>{props.titleInput} </Card.Title>
                <hr className="solid" />
                <Card.Text>{props.urlInput}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href={props.urlInput}>{props.urlInput}</Card.Link>
            </Card.Body>
        </Card>
                    
    );
};

export default Buckit;
