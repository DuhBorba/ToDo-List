import React from 'react';
import { Header } from './components/Header'
import { Form } from './components/Form';

import styles from './App.module.css'

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Form />
      </div>
    </>
  )
}
