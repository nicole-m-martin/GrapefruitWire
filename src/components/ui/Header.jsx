import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <NavLink exact to="/">
          Search
        </NavLink>
      </header>
    );
  }
}
