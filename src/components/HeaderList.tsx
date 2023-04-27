import React from 'react';

import styles from './HeaderList.module.css';

interface propsHeaderList{
  tasks: {
    id: string;
    title: string;
    isComplete: boolean;
  }[],
}

export const HeaderList = ({ tasks }: propsHeaderList) => {
  const [taskAmountComplete, setTaskAmountComplete] = React.useState(0);


  React.useEffect(() => {
      const incrementComplete = tasks.reduce((total, task) => (
        task.isComplete ? total + 1 : total
      ),0);

      setTaskAmountComplete(incrementComplete);
  }, [tasks])
  

  return (
    <div className={styles.headerList}>
      <p>Tarefas criadas <span>{tasks.length}</span></p>
      <p>Concluídas <span>{taskAmountComplete} de {tasks.length}</span></p>
    </div>
  )
}
