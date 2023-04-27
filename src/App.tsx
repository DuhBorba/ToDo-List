import React, { FormEvent } from 'react';
import { Header } from './components/Header'
import { Form } from './components/Form';
import { HeaderList } from './components/HeaderList';
import { List } from './components/List';

import { v4 } from 'uuid';

import styles from './App.module.css'

import Clipboard from '../src/assets/clipboard.svg'

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
          createNewTask.length !== 0 ? (
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
            <div className='clipboard'>
              <img src={Clipboard} alt="Ícone Clipboard" />
              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
              </p>
              <p>
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          )
        }
      </main>
    </>
  )
}
