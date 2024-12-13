import styles from "./TerceiraSecao.module.css";

export default function TerceiraSecao() {
  return (
    <main>
      <div className={styles.divGrande}>
        <section className={styles.primeiraS}>
          <h1>Missão</h1>
          <p>
            Produzir, comercializar e distribuir com eficiência e alta
            tecnologia alimentos seguros, saudáveis e saborosos
          </p>
        </section>

        <section className={styles.segundaS}>
          <h2>Visão</h2>
          <p>
            Ser uma referência em alimentos e vegetais congelados e tornar a
            nível Brasil as marcas da Nutriz um sinônimo de produtos de
            qualidade
          </p>
        </section>

        <section className={styles.terceiraS}>
          <h1>Valores</h1>
          <p>
            Ética, reputação, transparência, responsabilidade social e respeito
            ao meio ambiente
          </p>
        </section>

        <section className={styles.quartaS}>
          <h2>Filosofia</h2>
          <p>
            Disciplina, comprometimento, trabalho em equipe, inovação continua e
            respeito absoluto às legislações, clientes, colaboradores,
            fornecedores e parceiros
          </p>
        </section>

        <section className={styles.quintaS}>
          <h1>Objetivos</h1>
          <p>Eficiência operacional e comercial, lucro e crescimento</p>
        </section>
      </div>
      <section className={styles.SecaoGrande}>
        <h2 className={styles.TituloGrande}>
          Política Integrada da Qualidade e Segurança de Alimentos
        </h2>
        <p className={styles.paragrafoGrande}>
          A Nutriz Indústria e Comércio de Alimentos Ltda, em suas atividades de
          produção de vegetais congelados, atua através do comprometimento,
          envolvimento e desenvolvimento dos seus colaboradores para a melhoria
          contínua do processo de gestão da qualidade e segurança de alimentos.
          Através de seus diversos canais de comunicação, assegura um bom
          relacionamento com suas partes interessadas. Mantém a eficácia e
          eficiência dos processos produtivos de modo a superar as expectativas
          dos consumidores e atender aos requisitos legais e de clientes,
          maximizando assim o valor da empresa.
        </p>
      </section>
    </main>
  );
}
