import TerceiraSecao from "paginas/QuemSomos/TerceiraSecao";
import BannerProdutos from "./BannerProdutos";
import PrimeiraSecaoprodutos from "./PrimeiraSecaoProdutos";
import SegundaSecaoprodutos from "./SegundaSecaoProdutos";
import TerceiraSecaoProdutos from "./TerceiraSecaoProdutos";
import QuartaSecaoProdutos from "./QuartaSecaoProdutos";
import Rodape from "componentes/Rodape";

export default function Produtos() {
  return (
    <div>
      <BannerProdutos />
      <PrimeiraSecaoprodutos />
      <SegundaSecaoprodutos />
      <TerceiraSecaoProdutos />
      <QuartaSecaoProdutos />
      <Rodape />
    </div>
  );
}
