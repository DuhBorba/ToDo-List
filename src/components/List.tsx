import React from 'react';

import styles from './List.module.css';
import { Trash } from '@phosphor-icons/react';

interface PropsList{
  id: string;
  title: string;
  isComplete: boolean;
}

export const List = ({id, title, isComplete} : PropsList) => {
  const [taskComplete, setTaskComplete] = React.useState(isComplete);

  function handleIsComplete(){
    setTaskComplete(!taskComplete);
  }

  return (
    <>      
      <div className={styles.list}>
        <input type="checkbox" id={id} defaultChecked={taskComplete} />
        <label 
        onClick={handleIsComplete}
        htmlFor={id}
        className={taskComplete ? styles.checked : ''}
        >{title}</label>
        <button title="Deletar Tarefa">
          <Trash size={20} color="#808080" />
        </button>
      </div>
    </>
  )
}
