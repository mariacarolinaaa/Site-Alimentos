import styles from "./PrimeirSecao.module.css";

export default function PrimeiraSecao() {
  return (
    <section className={styles.container}>
      <section className={styles.paragrafo}>
        <h1 className={styles.subtitulo}></h1>
      </section>
      <img
        src="/imagem.planta.jpg"
        alt="Imagem brocolis"
        className={styles.imagemPlanta}
      />

      <section>
        <div>
          <h1 className={styles.subtitulo}>
            A escolha consciente para alimentos congelados e de qualidade
          </h1>
          <p className={styles.paragrafo}>
            Conquistamos presença no Brasil por meio de uma abordagem inovadora
            e com tecnologias avançadas que nos destacam no mercado.
          </p>

          <p className={styles.paragrafo}>
            Garantimos a qualidade de nossos produtos o ano todo, desde a
            escolha das sementes até a entrega, com controle de resíduos e mão
            de obra responsável. Somos reconhecidos não apenas pela rapidez no
            processamento, mas também pelo frescor e qualidade.
          </p>
          <p className={styles.paragrafo}>
            Com uma ampla gama de alimentos ultracongelados, livre de
            conservantes e em embalagens 100% recicláveis, proporcionamos
            praticidade, saúde e respeito ao meio ambiente, contando com uma
            seleção de insumos naturais para nutrição saudável que mantém o
            sabor e os nutrientes através de um processo de ultracongelamento de
            alta tecnologia.
          </p>
        </div>
      </section>
    </section>
  );
}
