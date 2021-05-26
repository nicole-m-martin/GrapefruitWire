/* eslint-disable max-len */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../app/App.css';
export default class Header extends Component {
  render() {
    return (
      <header>
        <img className={style.grapefruitelogo} src={'../../../public/FullSizeRender-removebg-preview (1).png'} alt={'logo'} />
        <NavLink exact to="/">
          Search
        </NavLink>
      </header>
    );
  }
}
