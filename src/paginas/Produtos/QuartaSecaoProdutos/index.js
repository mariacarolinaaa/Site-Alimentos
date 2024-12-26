import styles from "./QuartaSecaoprodutos.module.css";

import imagemErvilhaBa from "assets/imagem.ErvilhaBA.png";
import imagemBrocolisBA from "assets/imagem.BrodolisBA.png";
import imagemCouveFlorBA from "assets/imagem.couveFlorBA.png";
import imagemJardineiraBA from "assets/imagem.jardineiraBA.png";
import imagemJardineiraPanacheBA from "assets/imagem.jardineiraPanacheBA.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const produtos = [
  { id: 1, nome: "Ervilha Bom Apetite", preco: 8.99, imagem: imagemErvilhaBa },
  { id: 2, nome: "Brocolis Bom Apetite", preco: 6.9, imagem: imagemBrocolisBA },
  {
    id: 3,
    nome: "Ervilha Bom apetite",
    preco: 7.49,
    imagem: imagemCouveFlorBA,
  },
  {
    id: 4,
    nome: "Jardineira Bom apetite",
    preco: 8.9,
    imagem: imagemJardineiraBA,
  },
  {
    id: 5,
    nome: "Jardineira Panache",
    preco: 5.5,
    imagem: imagemJardineiraPanacheBA,
  },
];
export default function SegundaSecaoprodutos() {
  const [carrinho, setCarrinho] = useState(
    JSON.parse(localStorage.getItem("carrinho")) || []
  );
  const navigate = useNavigate();

  // Função para adicionar produtos ao carrinho
  const adicionarAoCarrinho = (produto) => {
    const novosProdutos = [...carrinho, produto];
    setCarrinho(novosProdutos);
    localStorage.setItem("carrinho", JSON.stringify(novosProdutos)); // Atualiza o localStorage
  };

  // Função para ir para o carrinho
  const irParaCarrinho = () => {
    navigate("/carrinho");
  };

  return (
    <>
      <h1 className={styles.TituloPrincipal} id="bom-apetite">
        Linha Bom Apetite
      </h1>
      <div className={styles.container}>
        {produtos.map((produto) => (
          <figure key={produto.id} className={styles.ImagemContainer}>
            <img
              className={styles.ImagemProdutosDois}
              src={produto.imagem}
              alt={produto.nome}
            />
            <figcaption>
              {produto.nome} - R$ {produto.preco.toFixed(2)} /kg
            </figcaption>
            <button
              className={styles.adicionarButton}
              onClick={() => adicionarAoCarrinho(produto)}
            >
              Adicionar
            </button>
          </figure>
        ))}
      </div>

      <button onClick={irParaCarrinho} className={styles.BotaoCarrinho}>
        Ir para o Carrinho
      </button>
    </>
  );
}
