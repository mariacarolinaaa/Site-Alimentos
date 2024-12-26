import styles from "./Colaborador.module.css";

const Colaborador = ({ nome, imagem, receita }) => {
  // Verifica se existe nome e imagem antes de renderizar o card
  if (!nome || !imagem) {
    return null; // Não renderiza nada se 'nome' ou 'imagem' estiverem ausentes
  }

  return (
    <div className={styles.colaborador}>
      <div className={styles.cabecalho}>
        {/* Verifica se a imagem está presente */}
        <img src={imagem} alt={nome} />
      </div>
      <div className={styles.rodape}>
        <h4>{nome}</h4>
        <h5>{receita}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
