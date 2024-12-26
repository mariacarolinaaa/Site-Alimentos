import { useState, useEffect } from "react";
import styles from "./LogicaCarrinho.module.css";

export default function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);

  // Recupera o carrinho do localStorage quando a página carrega
  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho"));
    if (carrinhoSalvo) {
      setCarrinho(carrinhoSalvo); // Atualiza o estado do carrinho
      setTotal(
        carrinhoSalvo.reduce((acc, item) => acc + item.preco, 0).toFixed(2)
      );
    }
  }, []);

  // Função para limpar o carrinho
  const limparCarrinho = () => {
    setCarrinho([]); // Limpa o estado do carrinho
    setTotal(0); // Reseta o total
    localStorage.removeItem("carrinho"); // Remove o carrinho do localStorage
  };

  return (
    <div className={styles.Container}>
      <h1 className={styles.Tituloprincipal}>Carrinho de Compras</h1>
      {carrinho.length === 0 ? (
        <p className={styles.CarrinhoVazio}>Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul className={styles.Lista}>
            {carrinho.map((item, index) => (
              <li key={index}>
                {item.nome} - R$ {item.preco.toFixed(2)}
              </li>
            ))}
          </ul>
          <h2 className={styles.segundoTitulo}>Total: R$ {total}</h2>
        </div>
      )}

      {/* Botão para limpar o carrinho */}
      <button onClick={limparCarrinho} className={styles.botaoLimparCarrinho}>
        Limpar Carrinho
      </button>
    </div>
  );
}
