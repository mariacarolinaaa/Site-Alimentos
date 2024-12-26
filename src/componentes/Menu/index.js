import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Menu.module.css";
import MenuLink from "./MenuLink";

export default function Menu() {
  const navigate = useNavigate();

  const handleContatoClick = () => {
    navigate("/contato"); // Navega para a rota "/contato"
  };

  return (
    <header className={styles.header}>
      <img src="./LogoNutriz.png" alt="Logo" className={styles.logo} />
      <nav className={styles.navegacao}>
        <MenuLink to="/">Início</MenuLink>
        <MenuLink to="/quemsomos">Quem Somos</MenuLink>
        <MenuLink to="/certificacoes">Certificações</MenuLink>
        <MenuLink to="/produtos">Produtos</MenuLink>
        <MenuLink to="/receitas">Receitas</MenuLink>
        <button className={styles.botao} onClick={handleContatoClick}>
          Contato
        </button>
        <MenuLink to="/carrinho">
          <img
            className={styles.carrinho}
            src="/carrinho-de-compras.png"
            alt="carrinho de compras"
          />
        </MenuLink>
      </nav>
    </header>
  );
}
