import styles from "./Time.module.css";
import Colaborador from "../Colaborador";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  const colaboradores = props.colaboradores || [];

  return colaboradores.length > 0 ? (
    <section className={styles.time} style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className={styles.colaboradores}>
        {colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={props.corPrimaria}
            key={colaborador.id}
            nome={colaborador.nome}
            receita={colaborador.receita}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
