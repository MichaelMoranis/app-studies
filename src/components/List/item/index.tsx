import { ITarefa } from "../../../types/tarefa";
import styles from "../list.module.scss"

export default function Item({tarefa, tempo, selecionado, completado, id}: ITarefa) {
  console.log("item atual: ", {tarefa, tempo, selecionado, completado, id} )
  return (
    <li className={styles.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
