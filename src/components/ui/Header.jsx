/* eslint-disable max-len */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../app/App.css';
export default class Header extends Component {
  render() {
    return (
      <header>
        <div className={style.headerContainer}>
          <img className={style.grapefruitelogo} src={'../../../public/FullSizeRender-removebg-preview (1).png'} alt={'logo'} />
          <h1 className={style.headerTitle}>GrapefruitWire</h1>
        </div>
        <NavLink exact to="/">
          Home
        </NavLink>
      </header>
    );
  }
}
