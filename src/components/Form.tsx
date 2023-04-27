import React, { ChangeEvent, FormEvent, InvalidEvent } from 'react';

import { v4 } from 'uuid';

import styles from './Form.module.css';

import { PlusCircle } from "@phosphor-icons/react";

interface propsForm{
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
}

export const Form = ({ 
  createNewTask, setCreateNewTask
} : propsForm) => {

  const [newValue, setNewValue] = React.useState('');

  function handleValueTask(event: ChangeEvent<HTMLInputElement>){
    setNewValue(event.target.value);
  }


  function handleClickSubmit(event: FormEvent){
    event.preventDefault();
  
    const dataTask = {
      id: v4(), 
      title: newValue, 
      isComplete: false
    }
  
    setCreateNewTask([dataTask, ...createNewTask]);
    
    setNewValue('');
  }

  return (
    <div>
      <form onSubmit={handleClickSubmit} className={styles.form}>
        <input 
          onChange={handleValueTask}
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          value={newValue}
          required
        />
        <button>Criar <PlusCircle size={20} /></button>
      </form>
    </div>
  )
}
