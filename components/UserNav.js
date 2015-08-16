import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class UserNav extends Component {
  render() {
    return(
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <div className="sidebar-user">
              <img src="http://placekitten.com/g/75/75" width="75" height="75" className="avatar" />
              <div className="user-name">Coder Jade</div>
              <div className="user-username">@jade</div>
            </div>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/subs/57b088734c5dd37cbd49">Unclaimed Sub</Link>
          </li>
          <li>
            <Link to="/subs/caf1a79f4f5360381d71">Claimed Sub</Link>
          </li>
          <li>
            <Link to="/subs/e76629ebf3b2a3ccf388">Fulfilled Sub</Link>
          </li>
        </ul>
      </div>
    );
  }
}