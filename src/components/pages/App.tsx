import Formulario from '../Form';
import List from '../List';
import styles from "./app.module.scss"
import Cronometro from '../Cronometro';
import { useState } from 'react';
import { ITarefa } from '../../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();
  
  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <List 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
      />
      <Cronometro />
    </div>
  );
}

export default App;
