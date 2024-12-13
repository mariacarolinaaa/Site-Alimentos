import Rodape from "componentes/Rodape";
import PrimeiraSecao from "../PrimeiraSecao";
import styles from "./BannerCertificacoes.module.css";
export default function BannerCertificacoes() {
  return (
    <div>
      <img
        src="/Banner.salada.jpg"
        alt="Imagem certificacoes"
        className={styles.BannerCertificacoes}
      />
      <div className={styles.titulo}>
        <h1>Certificações</h1>
        <h2>
          Conheça nossa certificação de segurança, qualidade e compromisso com a
          excelência.
        </h2>
      </div>
      <PrimeiraSecao />
      <Rodape />
    </div>
  );
}
