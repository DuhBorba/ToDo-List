import React from 'react';
import { HeaderList } from './HeaderList';

import styles from './List.module.css';
import { Trash } from '@phosphor-icons/react';

export const List = () => {
  return (
    <>
      <HeaderList />
      
      <div className={styles.list}>
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
        <button title="Deletar Tarefa">
          <Trash size={20} color="#808080" />
        </button>
      </div>
      <div className={styles.list}>
        <input type="checkbox" id="checkbox2" checked />
        <label className={styles.checked} htmlFor="checkbox2">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
        <button title="Deletar Tarefa">
          <Trash size={20} color="#808080" />
        </button>
      </div>
    </>
  )
}
