import { useNavigate } from "react-router-dom";
import styles from "./PaginanaoEncontrada.module.css";
import Rodape from "componentes/Rodape";

export default function PaginaNaoEncontrada() {
  const navegar = useNavigate();
  return (
    <div className={styles.divGrande}>
      <h1>Ops! Página não encontrada.</h1>
      <h2>Tem certeza de que era isso que você estava procurando?</h2>
      <button className={styles.botaoContainer} onClick={() => navegar(-2)}>
        Voltar
      </button>
    </div>
  );
}
