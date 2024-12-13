import BannerQuemSomos from "componentes/BannerQuemSomos";
import PrimeiraSecao from "./PrimeiraSecao";
import SegundaSecao from "./SegundaSecao";
import TerceiraSecao from "./TerceiraSecao";
import Rodape from "componentes/Rodape";

export default function QuemSomos() {
  return (
    <>
      <main>
        <BannerQuemSomos />
        <PrimeiraSecao />
        <SegundaSecao />
        <TerceiraSecao />
        <Rodape />
      </main>
    </>
  );
}
