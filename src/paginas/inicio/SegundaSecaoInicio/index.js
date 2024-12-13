import styles from "./SegundaSecaoinicio.module.css"; // Corrigido o caminho de importação

export default function SegundaSecaoInicio() {
  return (
    <main>
      <div>
        <section className={styles.titulo}>
          <h1>Conheça os principais diferenciais dos alimentos Nutriz:</h1>
        </section>
      </div>

      <div className={styles.divGrande}>
        <section className={styles.primeiraS}>
          <h1>Alimentos 100% naturais, livres de aditivos e conservantes</h1>
          <p>
            Selecionados, limpos, descascados, cortados e congelados
            individualmente. Sem corantes ou conservantes, preservando a
            autenticidade e qualidade.
          </p>
        </section>

        <section className={styles.segundaS}>
          <h2>Praticidade e economia</h2>
          <p>
            Sem a necessidade de descongelar antes do preparo e com a
            possibilidade de retornar o restante da embalagem ao freezer,
            evitando desperdícios!
          </p>
        </section>

        <section className={styles.terceiraS}>
          <h1>Preparo rápido e com qualidade garantida</h1>
          <p>
            Nossos alimentos oferecem um rápido preparo, garantindo qualidade
            nutricional e microbiológica.
          </p>
        </section>
      </div>
    </main>
  );
}
