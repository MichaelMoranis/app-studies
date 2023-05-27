import React from "react";
import styles from  "./form.module.scss"
import Button from "../Button";
import { ITarefa } from "../../types/tarefa";
import {v4 as uuidv4} from "uuid";

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> 
{

  state = {
    tarefa: "",
    tempo: "00:00"
  }
  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas(tarefasAntigas => 
      [
        ...tarefasAntigas, 
        {
          ...this.state,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ])
    this.setState({
      tarefa: "",
      tempo: "00:00"
    })
  }

  render() {
    return (
      <form className={styles.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={styles.inputContainer}>
          <label htmlFor="tarefa"> adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
            id="tarefa"
            placeholder="o que voce quer estudar" 
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="tempo">tempo</label>
           <input 
             type="time"
             step="1"
             name="tempo"
             value={this.state.tempo}
             id="tempo"
             onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
             min="00:00:00"
             max="01:30:00"
             required
           />
        </div>
        <Button type="submit">
          adicionar
        </Button>
      </form>
    )
  }
}

export default Formulario;