import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/inicio";
import QuemSomos from "./paginas/QuemSomos";
import Certificacoes from "./paginas/Certificacoes/BannerCertificacoes";
import Contato from "./paginas/Contato";
import Carrinho from "./paginas/Carrinho";
import PaginaNaoEncontrada from "paginas/PaginaNaoEncontrada";
import Produtos from "./paginas/Produtos";
import Receitas from "paginas/Receitas";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/certificacoes" element={<Certificacoes />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
