import React from 'react';
import Formulario from '../Form';
import List from '../List';
import styles from "./app.module.scss"

function App() {
  return (
    <div className={styles.AppStyle}>
      <Formulario />
      <List />
    </div>
  );
}

export default App;
