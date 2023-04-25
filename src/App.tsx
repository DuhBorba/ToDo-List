import React from 'react';
import { Header } from './components/Header'
import { Form } from './components/Form';
import { HeaderList } from './components/HeaderList';
import { List } from './components/List';

import { v4 } from 'uuid';

import styles from './App.module.css'

const tasks = [
  {
    id: v4(),
    title: 'Terminar o desafio',
    isComplete: false
  },
  {
    id: v4(),
    title: 'Estudar TypeScript',
    isComplete: true
  }
]

export const App = () => {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Form tasks={tasks} />
        <HeaderList />
        {
          tasks.map(task => 
            <List 
              key={task.id}
              id={task.id} 
              title={task.title} 
              isComplete={task.isComplete} 
            />
          )
        }
      </main>
    </>
  )
}
