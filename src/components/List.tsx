import React from 'react';

import styles from './List.module.css';
import { Trash } from '@phosphor-icons/react';

interface PropsList{
  id: string;
  title: string;
  isComplete: boolean;
  createNewTask: {
      id: string;
      title: string;
      isComplete: boolean;
  }[];
  setCreateNewTask: React.Dispatch<React.SetStateAction<{
      id: string;
      title: string;
      isComplete: boolean;
  }[]>>;
  provided: any;
}

export const List = ({
  id, 
  title, 
  isComplete,  
  createNewTask,
  setCreateNewTask,
  provided
} : PropsList) => {
  const [taskComplete, setTaskComplete] = React.useState(isComplete);

  function toggleCompleteTask(){
    const newTasks = createNewTask.map((task) => {
      if(task.id === id){
        return {
          id: task.id, 
          title: task.title,
          isComplete: !task.isComplete
        }
      } else {
        return task;
      }
    })

    setCreateNewTask(newTasks)
  }


  function handleIsComplete(){
    setTaskComplete(!taskComplete);
    toggleCompleteTask();
  }

  function handleDeleteTask(){
    const taskFiltered = createNewTask.filter((task) => {
      return task.id === id ? 0 : 1;
    })

    setCreateNewTask(taskFiltered);
  }


  return (    
    <li 
      className={styles.list} 
      ref={provided.innerRef} 
      {...provided.draggableProps} 
      {...provided.dragHandleProps}
    >
      <input 
        onClick={handleIsComplete} 
        type="checkbox" 
        id={id} 
        defaultChecked={taskComplete} />
      <label 
      htmlFor={id}
      className={taskComplete ? styles.checked : ''}
      >{title}</label>
      <button onClick={handleDeleteTask} title="Deletar Tarefa">
        <Trash size={20} color="#808080" />
      </button>
    </li>
  )
}
