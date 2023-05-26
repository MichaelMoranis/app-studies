import { ITarefa } from "../../types/tarefa";
import Item from "./item";
import styles  from "./list.module.scss"


function List({ tarefas }: {tarefas: ITarefa[] }) {

  return (
    <aside className={styles.listaTarefas}>
      <h2>estudos do dia</h2>
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