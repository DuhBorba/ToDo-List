import React, { ChangeEvent, FormEvent } from 'react';

import { v4 } from 'uuid';

import styles from './Form.module.css';

import { PlusCircle } from "@phosphor-icons/react";

interface propsForm{
  tasks: {
    id: string;
    title: string;
    isComplete: boolean;
  },
}

export const Form = ({ tasks } : propsForm) => {
  const [createNewTask, setCreateNewTask] = React.useState(tasks);

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

    setCreateNewTask([createNewTask, ...dataTask])

    console.log(createNewTask)
  }

  return (
    <div>
      <form onSubmit={handleClickSubmit} className={styles.form}>
        <input 
          onChange={handleValueTask}
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          value={newValue}
        />
        <button>Criar <PlusCircle size={20} /></button>
      </form>
    </div>
  )
}
