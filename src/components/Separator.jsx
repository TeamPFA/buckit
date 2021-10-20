import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';

import Buckit from './Buckit';

const Separator = (props) => {
  console.log('separator props', props);
  return (
    <div className="separator">
        <Buckit titleInput={props.titleInput} textInput={props.textInput} urlInput={props.urlInput} ratingInput={props.ratingInput} />
    </div>
  )
}

export default Separator;

