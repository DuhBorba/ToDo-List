import React, { ChangeEvent, FormEvent } from 'react';

import styles from './Form.module.css';

import { PlusCircle } from "@phosphor-icons/react";

interface propsForm{
  submitForm: (event: FormEvent, newValue: string) => void,
}

export const Form = ({ submitForm} : propsForm) => {

  const [newValue, setNewValue] = React.useState('');

  function handleValueTask(event: ChangeEvent<HTMLInputElement>){
    setNewValue(event.target.value);
  }

  function handleClickSubmit(event: FormEvent){
    submitForm(event, newValue)
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
