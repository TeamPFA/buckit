import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';


import Dashboard from '../components/Dashboard.jsx';

const HomeContainer = () => {
    return (
        <Dashboard />
    );
  };


export default HomeContainer;
