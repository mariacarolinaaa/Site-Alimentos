import Banner from "componentes/Menu/Banner";
import Rodape from "componentes/Rodape";

import SecaoInicio from "paginas/inicio/SecaoInicio";
import SegundaSecaoInicio from "./SegundaSecaoInicio";
import TerceiraSecaoInicio from "./TerceiraSecaoInicio";
import QuartaSecaoInicio from "./QuartaSecaoInicio";
import QuintaSecaoInicio from "./QuintaSecaoInicio";

export default function Inicio() {
  return (
    <main>
      <Banner />
      <SecaoInicio />
      <SegundaSecaoInicio />
      <TerceiraSecaoInicio />
      <QuartaSecaoInicio />
      <QuintaSecaoInicio />
      <Rodape />
    </main>
  );
}
