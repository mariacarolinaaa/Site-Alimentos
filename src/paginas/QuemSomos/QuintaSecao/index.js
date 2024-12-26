import { useNavigate } from "react-router-dom";
import styles from "./QuintaSecao.module.css";

export default function QuintaSecao() {
  const Navigate = useNavigate();
  const handleProdutosClick = () => {
    Navigate("/produtos");
  };
  return (
    <div className={styles.container} onClick={handleProdutosClick}>
      <p className={styles.ParagrafoQuintaSecao}>
        Experimente agora e descubra a<p>qualidade e sabor dos produtos</p>{" "}
        Nutriz!
      </p>
      <section className={styles.Secao}>
        <h2 className={styles.TituloQuintaSecao}>Conheça nossos produtos</h2>
        <img src="/seta-direita.png" alt="seta para direita" />
      </section>
    </div>
  );
}
