import styles from "./botao.module.scss"

interface ButtonProps {
  children: string;
}

function Button({ children }: ButtonProps) {
  return (
    <button className={styles.botao}>
      {children}
    </button>
  );
}

export default Button;