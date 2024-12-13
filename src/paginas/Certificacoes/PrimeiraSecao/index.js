import styles from "./PrimeiraSecao.module.css";

export default function PrimeiraSecao() {
  return (
    <div className={styles.container}>
      <div className={styles.paragrafo}>
        <p>
          A Nutriz carrega em seu nome o princípio do seu trabalho: Nutrir. Mas
          a nossa missão vai muito além da nutrição e, partindo dessa premissa,
          nos sentimos muito honrados em sermos uma empresa produtora de
          vegetais congelados certificada FSSC 22.000 (Food Safety System
          Certification 22000), esquema de certificação de reconhecimento
          internacional que demonstra o compromisso da Nutriz com a segurança e
          a qualidade dos alimentos, legalidade e melhoria contínua dos seus
          processos. O esquema de certificação FSSC 22.000 compreende os
          requisitos da ISO 22000, ISO/TS e requisitos adicionais desenvolvidos
          para garantir a segurança e a qualidade de alimentos, uma estrutura de
          alto nível de controle, o qual é reconhecido globalmente pelo GFSI
          (Global Food Safety Initiative), organização privada que atua no
          desenvolvimento de padrões de segurança e qualidade de alimentos,
          facilitando o controle e evitando duplicação de auditorias e
          certificações. Isso representa não só o reconhecimento pelo cuidado
          com os alimentos desde a escolha da semente até a mesa do consumidor,
          mas também é a garantia de qualidade e segurança de que todos os
          alimentos produzidos e comercializados pela Nutriz passam por
          rigorosos controles.
        </p>

        <p>
          Esse é o resultado de investimentos constantes em automação
          industrial, tecnologias de produção e nos mais avançados maquinários
          do mundo para garantir eficiência e qualidade aos vegetais produzidos.
          É o zelo ao produzir alimentos de forma segura e sustentável. É uma
          consequência do aprimoramento humano e de processos, do
          comprometimento e da dedicação que desde 2003 norteiam o trabalho da
          Nutriz no mercado de vegetais congelados no Brasil. Essa é a Nutriz:
          sinônimo de produção e comercialização de alimentos saudáveis,
          saborosos, práticos e, principalmente, de qualidade, fabricados com
          total segurança, alta tecnologia de produção e respeito ao meio
          ambiente!
        </p>
      </div>

      <div className={styles.imagemContainer}>
        <img
          src="/imagem.certificacoes.png"
          alt="imagem certificado"
          className={styles.imagem}
        />
      </div>
    </div>
  );
}
