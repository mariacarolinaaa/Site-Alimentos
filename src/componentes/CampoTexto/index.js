import styles from "./CampoTexto.module.css";

const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`;

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className={styles.CampoTexto}>
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
