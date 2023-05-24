import React from "react";
import styles from  "./form.module.scss"
import Button from "../Button";

class Formulario extends React.Component {

  state = {
    tarefa: "",
    tempo: "00:00"
  }
  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    console.log("state: ", this.state)
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
        <Button>
          adicionar
        </Button>
      </form>
    )
  }
}

export default Formulario;