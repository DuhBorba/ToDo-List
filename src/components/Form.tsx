import React from 'react';
import styles from './Form.module.css';

import { PlusCircle } from "@phosphor-icons/react";

export const Form = () => {
  return (
    <div>
      <form className={styles.form}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
        />
        <button>Criar <PlusCircle size={20} /></button>
      </form>
    </div>
  )
}
