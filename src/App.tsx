import React, { FormEvent } from 'react';
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
  const [createNewTask, setCreateNewTask] = React.useState(tasks);


  function submitForm(event: FormEvent, newValue: string){
    event.preventDefault();
  
    const dataTask = {
      id: v4(), 
      title: newValue, 
      isComplete: false
    }
  
    setCreateNewTask([...createNewTask, dataTask])
  
    console.log(createNewTask)
  }

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Form tasks={tasks} submitForm={submitForm} />
        <HeaderList />
        {
          createNewTask.map(task => 
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
