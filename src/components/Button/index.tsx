import styles from "./botao.module.scss"

interface ButtonProps {
  children: string;
  type?: "button" | "submit" | "reset" | undefined
}

function Button({ children }: ButtonProps) {
  return (
    <button className={styles.botao}>
      {children}
    </button>
  );
}

export default Button;