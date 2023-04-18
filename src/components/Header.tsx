import React from 'react';

import styles from './Header.module.css';

import rocketLogo from '../assets/rocket.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <img src={rocketLogo} alt="Rocket Logo" />
        To<span>Do</span>
      </h1>
    </header>
  )
}
