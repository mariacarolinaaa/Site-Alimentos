import Banner from "componentes/Menu/Banner";
import Rodape from "componentes/Rodape";

import SecaoInicio from "paginas/inicio/SecaoInicio";
import SegundaSecaoInicio from "./SegundaSecaoInicio";

export default function Inicio() {
  return (
    <main>
      <Banner />
      <SecaoInicio />
      <SegundaSecaoInicio />
      <Rodape />
    </main>
  );
}
