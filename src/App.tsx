import React, { FormEvent } from 'react';
import { Header } from './components/Header'
import { Form } from './components/Form';
import { HeaderList } from './components/HeaderList';
import { List } from './components/List';

import { v4 } from 'uuid';

import styles from './App.module.css'

// interface propsTask{
//   tasks: {
//     id: string;
//     title: string;
//     isComplete: boolean;
//   }[],
// }

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

  

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Form 
          createNewTask={createNewTask} 
          setCreateNewTask={setCreateNewTask} 
        />
        <HeaderList tasks={createNewTask} />
        {
          createNewTask ? (
            createNewTask.map(task => 
              <List 
                key={task.id}
                id={task.id} 
                title={task.title} 
                isComplete={task.isComplete} 
                createNewTask={createNewTask}
                setCreateNewTask={setCreateNewTask}
              />
            )
          ) : (
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seus itens a fazer
            </p>
          )
        }
      </main>
    </>
  )
}
