import React from "react";
import styles  from "./list.module.scss"

function List() {
  const tarefas = [{
    tarefa: "React",
    tempo: "02:00:00"
  }, {
    tarefa: "JavaScript",
    tempo: "01:00:00"
  }, {
    tarefa: "TypeScript",
    tempo: "23:00:00"
  }];

  return (
    <aside className={styles.listaTarefas}>
      <h2>estudos do dia</h2>
      <ul>
         {tarefas.map((item, index) => (
          <li key={index} className="item">
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
         ))}
      </ul>
    </aside>
  )
}

export default List;