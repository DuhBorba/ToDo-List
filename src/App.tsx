import React, { FormEvent } from 'react';
import { Header } from './components/Header'
import { Form } from './components/Form';
import { HeaderList } from './components/HeaderList';
import { List } from './components/List';

import { v4 } from 'uuid';

import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

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

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(createNewTask);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCreateNewTask(items);
  }

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <Form 
          createNewTask={createNewTask} 
          setCreateNewTask={setCreateNewTask} 
        />
        <HeaderList tasks={createNewTask} />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <ul
                {...provided.droppableProps} 
                ref={provided.innerRef}
              >
                {
                  createNewTask.length !== 0 ? (
                    createNewTask.map((task, index) => (
                      <Draggable 
                        key={task.id}
                        draggableId={task.id} 
                        index={index}
                      >
                        {(provided) => (
                          <List 
                            id={task.id} 
                            title={task.title} 
                            isComplete={task.isComplete} 
                            createNewTask={createNewTask}
                            setCreateNewTask={setCreateNewTask}
                            provided={provided}
                          />
                        )}
                      </Draggable>
                    ))
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
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </main>
    </div>
  )
}
