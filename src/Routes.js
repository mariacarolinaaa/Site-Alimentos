import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/inicio";
import QuemSomos from "./paginas/QuemSomos";
import Certificacoes from "./paginas/Certificacoes/BannerCertificacoes";
import Contato from "./paginas/Contato";
import PaginaNaoEncontrada from "paginas/PaginaNaoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/certificacoes" element={<Certificacoes />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
