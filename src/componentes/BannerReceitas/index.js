import styles from "./BanneReceitas.module.css";
import BannerImagem from "assets/Banner.Receitas.png";

export default function BannerReceitas() {
  return (
    <div>
      <img
        className={styles.BannerFundo}
        src={BannerImagem}
        alt="Banner Receitas"
      />
      <div>
        <h1 className={styles.TituloPrincipal}>
          Receitas para Inspirar Sua Cozinha
        </h1>
        <h2 className={styles.SegundoTitulo}>
          Explore receitas incríveis para todos os gostos e crie pratos que vão
          surpreender sua família e amigos!
        </h2>
      </div>
      <h3 className={styles.TerceiroTitulo}>
        Gostaria de compartilhar uma receita conosco? Crie um card como os
        abaixo e mostre-nos a sua receita!
      </h3>
    </div>
  );
}
