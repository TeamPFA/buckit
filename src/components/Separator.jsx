import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';

import Buckit from './Buckit';

const Separator = () => {
  return (
    <div className="separator">
        <Buckit />
    </div>
  )
}

export default Separator;

