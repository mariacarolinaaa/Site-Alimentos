import styles from "./PrimeiraSecao.module.css";

export default function PrimeiraSecao() {
  return (
    <div className={styles.DivGrande}>
      <div className={styles.InfoContainer}>
        <div className={styles.InfoSection}>
          <p>Telefone: (11) 2171 - 6666</p>
          <p>Email: sac@nutriz.com.br</p>

          <h1 className={styles.Titulo}>Indústria</h1>
          <p>Rio Grande do Sul</p>
          <p className={styles.textoParagrafo}>
            Rua Buarque de Macedo, n° 965 - Bairro: Gentil. Lagoa Vermelha - RS
            / Brasil CEP: 95300-000
          </p>
          <h1 className={styles.Titulo}>Escritório</h1>
          <p>São Paulo</p>
          <p className={styles.textoParagrafo}>
            Av. dos Autonomistas, n° 896, Sala 2804, 28° Andar. Torre Santorini,
            Vila Yara, Osasco - SP / Brasil CEP: 06020-010
          </p>
        </div>

        <div className={styles.InputContainer}>
          <input type="text" className={styles.input} placeholder="Seu nome" />
          <input
            type="text"
            className={styles.input}
            placeholder="Seu e-mail"
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Nome da empresa"
          />
          <input type="text" className={styles.input} placeholder="Assunto" />
          <input
            type="text"
            className={styles.input}
            placeholder="Sua mensagem"
          />
          <button className={styles.botao}>Enviar</button>
        </div>
      </div>
    </div>
  );
}
