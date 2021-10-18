import React, { useState }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';
//import { Tooltip, Toast, Popover } from 'bootstrap';
import { Button, Form, Container, Image, Row, Column, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';


import Separator from './Separator';


const Dashboard = () => {
    const [showBuckit, setShowBuckit] = useState(false)
    return (
        <Container fluid className="dashboard border rounded border-dark">
                <Navbar collapseOnSelect className="fixed-top" bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Buckit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Button variant="secondary" onClick={()=> setShowBuckit(true)}>Create Buckitlist</Button>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                {showBuckit && <Separator />}
                </Container>
    );
};

export default Dashboard;
