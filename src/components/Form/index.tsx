import React from "react";
import styles from  "./form.module.scss"
import Button from "../Button";

class Formulario extends React.Component {

  state = {
    tarefa: "",
    tempo: "00:00"
  }

  render() {
    return (
      <form className={styles.novaTarefa}>
        <div className={styles.inputContainer}>
          <label htmlFor="tarefa"> adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
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