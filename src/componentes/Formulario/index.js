import CampoTexto from "componentes/CampoTexto";
import styles from "./Formulario.module.css";
import Botao from "componentes/Botao";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [receita, setReceita] = useState("");
  const [imagem, setImagem] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();

    console.log("Nome:", nome);
    console.log("Receita:", receita);
    console.log("Imagem:", imagem);

    props.aoColaboradorCadastrado({
      nome,
      receita,
      imagem,
    });

    setNome("");
    setReceita("");
    setImagem("");
  };

  return (
    <section className={styles.formulario}>
      <form onSubmit={aoSalvar}>
        <CampoTexto
          obrigatorio={true}
          label="Nome da Receita"
          placeholder="Digite o nome da Receita"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Receita"
          placeholder="Digite sua receita"
          valor={receita}
          aoAlterado={(valor) => setReceita(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <Botao texto="Criar Card" />
      </form>
    </section>
  );
};

export default Formulario;
