import styles from "./BannerProdutos.module.css";

export default function BannerProdutos() {
  return (
    <div className={styles.BannerContainer}>
      <img
        className={styles.BannerFundo}
        src="/banner.produtos.png"
        alt="Imagem legumes"
      />
      <div className={styles.TextosSobreBanner}>
        <h1 className={styles.TituloPrincipal}>Alimentos Nutriz:</h1>
        <h2 className={styles.SegundoTitulo}>
          Segurança, Saúde e Sabor em cada mordida
        </h2>
      </div>
      <section>
        <div className={styles.MenuProdutos}>
          <a href="#institucional">Institucional</a>
          <a href="#atacado">Atacado</a>
          <a href="#varejo">Varejo</a>
          <a href="#bom-apetite">Bom Apetite</a>
        </div>
      </section>
    </div>
  );
}
