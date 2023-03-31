import React from 'react';
import style from './style.module.scss';

const Footer = () => (
  <div className={style.footer}>
    <small>&copy; React Demo 2022</small>
    <ul className={style.socialList}>
      <li>GitHub</li>
      <li>LinkedIn</li>
    </ul>
  </div>
)

export default Footer;