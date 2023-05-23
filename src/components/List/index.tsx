import { useState } from "react";
import Item from "./item";
import styles  from "./list.module.scss"

function List() {
  const [tarefas, setTarefas] = useState([{
    tarefa: "React",
    tempo: "02:00:00"
  }, {
    tarefa: "JavaScript",
    tempo: "01:00:00"
  }, {
    tarefa: "TypeScript",
    tempo: "23:00:00"
  }]
  );

  return (
    <aside className={styles.listaTarefas}>
      <h2 onClick={() => {
        console.log("h2 clicado ", tarefas)
        setTarefas([...tarefas, {tarefa: "estudar estado", tempo: "05:00:00"}])
      }}>estudos do dia</h2>
      <ul>
         {tarefas.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
         ))}
      </ul>
    </aside>
  )
}

export default List;