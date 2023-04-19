import React from 'react';
import { Header } from './components/Header'
import { Form } from './components/Form';
import { HeaderList } from './components/HeaderList';
import { List } from './components/List';

import styles from './App.module.css'

export const App = () => {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Form />
        <List />
      </main>
    </>
  )
}
