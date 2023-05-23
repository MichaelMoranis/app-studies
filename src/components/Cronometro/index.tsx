import Button from "../Button";
import Relogio from "./Relogio";
import styles from "./Cronometro.module.scss"

export default function Cronometro() {
 return (
  <div className={styles.cronometro}>
     <p className={styles.titulo}>escolha um card e inicie o cronometro</p>
     <div className={styles.relogioWrapper}>
       <Relogio />
     </div>
     <Button>
        comecar!!
     </Button>
  </div>
 )
}