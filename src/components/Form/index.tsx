import React from "react";
import styles from  "./form.module.scss"
import Button from "../Button";

class Formulario extends React.Component {
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
             id="tempo"
             min="00:00:00"
             max="01:30:00"
             required
           />
        </div>
        <Button>
          mudar
        </Button>
      </form>
    )
  }
}

export default Formulario;