import { useNavigate } from "react-router-dom";
import styles from "./Banner.module.css";
import bannerFundo from "assets/Banner.nutriz.png";

export default function Banner() {
  const navigate = useNavigate();

  const handleContatoClick = () => {
    navigate("/quemsomos"); // Navega para a rota "/contato"
  };

  return (
    <div className={styles.Banner}>
      <div className={styles.imagens}>
        <img className={styles.bannerFundo} src={bannerFundo} />
      </div>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          O frescor que você deseja, a praticidade que você precisa.
        </h1>

        <p className={styles.paragrafo}>
          Alimentos congelados saborosos, práticos e de qualidade. Delicie-se!
        </p>

        <button className={styles.botao} onClick={handleContatoClick}>
          Conheça
        </button>
      </div>
    </div>
  );
}
