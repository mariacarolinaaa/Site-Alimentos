import BannerQuemSomos from "componentes/BannerQuemSomos";
import PrimeiraSecao from "./PrimeiraSecao";
import SegundaSecao from "./SegundaSecao";
import TerceiraSecao from "./TerceiraSecao";
import Rodape from "componentes/Rodape";
import QuartaSecao from "./QuartaSecao";
import QuintaSecao from "./QuintaSecao";

export default function QuemSomos() {
  return (
    <>
      <main>
        <BannerQuemSomos />
        <PrimeiraSecao />
        <SegundaSecao />
        <TerceiraSecao />
        <QuartaSecao />
        <QuintaSecao />
        <Rodape />
      </main>
    </>
  );
}
