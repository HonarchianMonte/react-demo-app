import { NavLink } from "react-router-dom";
import React from 'react';
import style from './style.module.scss';

const Header = () => (
  <div className={style.header}>
    <h2>User Tracker</h2>
    <ul className={style.navList}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/users'>Users</NavLink>  
    </ul>
  </div>
)

export default Header;