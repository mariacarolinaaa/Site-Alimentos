import styles from "./BannerContato.module.css";

export default function BannerContato() {
  return (
    <div>
      <img
        className={styles.BannerFundo}
        src="/Banner.contato.jpg"
        alt="Imagem legumes"
      />
      <div>
        <h1 className={styles.TituloPrincipal}>Vamos conversar?</h1>
        <h2 className={styles.SegundoTitulo}>Entre em contato conosco.</h2>
      </div>
    </div>
  );
}
