import Formulario from '../Form';
import List from '../List';
import styles from "./app.module.scss"
import Cronometro from '../Cronometro';
import { useState } from 'react';
import { ITarefa } from '../../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]
  );
  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <List tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
