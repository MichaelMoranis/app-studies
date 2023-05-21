import React from "react";
import styles from "./botao.module.scss"

class Button extends React.Component {
  render() {
    return (
      <button className={styles.botao}>
        botao
      </button>
    )
  }
}

export default Button;