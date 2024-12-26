import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TerceiraSecaoProdutos.module.css";
import imagemCouveVarejo from "assets/imagem.couveFlorVarejo.png";
import imagemSeletaVarejo from "assets/imagem.seletaLegumesVarejo.png";
import imagemErvilhaVarejo from "assets/imagem.ervilhaVarejo.png";
import imagemjardineiraVarejo from "assets/imagem.jardineiravarejo.png";
import imagemBrocolisvarejo from "assets/imagem.brocolisVarejo.png";
import imagemPolentaVarejo from "assets/imagem.polentaPalitoVarejo.png";

const produtos = [
  { id: 1, nome: "Couve", preco: 3.99, imagem: imagemCouveVarejo },
  { id: 2, nome: "Seleta de Legumes", preco: 6.9, imagem: imagemSeletaVarejo },
  { id: 3, nome: "Ervilha", preco: 7.49, imagem: imagemErvilhaVarejo },
  { id: 4, nome: "Jardineira", preco: 8.9, imagem: imagemjardineiraVarejo },
  { id: 5, nome: "Brócolis", preco: 5.5, imagem: imagemBrocolisvarejo },
  { id: 7, nome: "Polenta", preco: 10.5, imagem: imagemPolentaVarejo },
];

export default function TerceiraSecaoProdutos() {
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
    <div>
      <h1 className={styles.TituloPrincipal}>Linha Varejo</h1>
      <div className={styles.container} id="varejo">
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
    </div>
  );
}
