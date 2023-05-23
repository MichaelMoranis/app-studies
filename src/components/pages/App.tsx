import Formulario from '../Form';
import List from '../List';
import styles from "./app.module.scss"
import Cronometro from '../Cronometro';

function App() {
  return (
    <div className={styles.AppStyle}>
      <Formulario />
      <List />
      <Cronometro />
    </div>
  );
}

export default App;
