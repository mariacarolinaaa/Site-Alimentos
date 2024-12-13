import styles from "./SegundaSecao.module.css";

export default function SegundaSecao() {
  return (
    <section className={styles.container}>
      <section className={styles.paragrafo}>
        <h1 className={styles.subtitulo}></h1>
      </section>
      <img
        src="/imagem.salada.jpg"
        alt="Imagem brocolis"
        className={styles.imagemSalada}
      />

      <section>
        <div>
          <h1 className={styles.subtitulo}>
            Uma trajetória de crescimento e inovação
          </h1>
          <p className={styles.paragrafo}>
            Desde a nossa fundação em 2003, nos estabelecemos como referência no
            mercado de alimentos congelados. Em 2008, inauguramos nossa própria
            câmara frigorífica, aprimorando a logística e conquistando a
            confiança de nossos clientes. Em 2011, lançamos uma linha de
            produtos atacadistas, seguida pela reformulação visual de todas as
            embalagens em 2012.
          </p>

          <p className={styles.paragrafo}>
            Ao longo do tempo, criamos as marcas BOM APETITE e MACERATA,
            destinadas a auxiliar a Nutriz a ter uma atuação estratégica no
            mercado, sendo utilizadas para a comercialização de alguns produtos
            da linha Nutriz e também para a distribuição de alguns alimentos em
            determinadas regiões do Brasil.
          </p>
          <p className={styles.paragrafo}>
            Assim, desde o nosso início, continuamos evoluindo, expandindo e,
            cada vez mais oferecendo qualidade e variedade para todos os nossos
            clientes.
          </p>
        </div>
      </section>
    </section>
  );
}
