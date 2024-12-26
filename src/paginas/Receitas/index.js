import BannerReceitas from "componentes/BannerReceitas";
import PrimeiraSecaoReceitas from "./PrimeiraSecaoReceitas";
import Colaborador from "componentes/Colaborador";
import Formulario from "componentes/Formulario";
import Time from "componentes/Time";
import { useState } from "react";
import Rodape from "componentes/Rodape";

export default function Receitas() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };
  return (
    <>
      <>
        <BannerReceitas />

        <Formulario
          aoColaboradorCadastrado={(colaborador) =>
            aoNovoColaboradorAdicionado(colaborador)
          }
        />
        <Colaborador />

        <Time colaboradores={colaboradores} />
        <PrimeiraSecaoReceitas />
      </>
      <Rodape />
    </>
  );
}
