import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';
//import { Tooltip, Toast, Popover } from 'bootstrap';
import { Button, Form, Container, Image, Row, Column, Col } from 'react-bootstrap';
import axios from 'axios';

import Dashboard from '../components/Dashboard.jsx';
//WHERE ARE THE PROPS COMING FROM WHAT THE FUCK
const HomeContainer = (props) => {
    
    return (
        <Dashboard userName={props.location.state.username}/>
    )
}


export default HomeContainer;
