import React from 'react';

import styles from './HeaderList.module.css';

export const HeaderList = () => {
  return (
    <div className={styles.headerList}>
      <p>Tarefas criadas <span>5</span></p>
      <p>Concluídas <span>2 de 5</span></p>
    </div>
  )
}
