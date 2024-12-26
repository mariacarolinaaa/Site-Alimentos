import styles from "./TerceiraSecao.module.css";

export default function TerceiraSecaoInicio() {
  return (
    <div className={styles.BannerContainer}>
      <img
        className={styles.BannerFundo}
        src="/banner.secao3.png"
        alt="Imagem legumes"
      />
      <div className={styles.Overlay}></div>
      <h1 className={styles.TituloPrincipal}>
        Os Melhores alimentos congelados!
      </h1>
    </div>
  );
}
