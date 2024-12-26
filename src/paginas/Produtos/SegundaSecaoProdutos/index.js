import styles from "./SegundaSecaoProdutos.module.css";

import imagemBrocolisAtacado from "assets/imagem.brocolisAtacado.png";
import imagemCouveFlorAtacado from "assets/imagem.CouveFlorAtacado.png";
import imagemErvilhaAtacado from "assets/imagem.ErvilhaAtacado.png";
import imagemMilhoAtacado from "assets/imagem.MilhoAtacado.png";
import imagemPaodeQueijo from "assets/imagem.paoQueijoAtacado.png";
import imagemjardineiraAtacado from "assets/imagem.jardineiraAtacado.png";
import imagemjardineiraPanacheAtacado from "assets/imagem.jardineira.panache.png";
import imagemalhoPicadoAtacado from "assets/imagem.alhoPicadoAtacado.png";
import imagemPolentaPalitoAtacado from "assets/imagem.poletaPalitoAtacado.png";
import imagemDuetoAtacado from "assets/imagem.DuetoLegumesAtacado.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const produtos = [
  {
    id: 1,
    nome: "Brocolis Atacado",
    preco: 5.99,
    imagem: imagemBrocolisAtacado,
  },
  {
    id: 2,
    nome: "Couve Flor Atacado",
    preco: 6.49,
    imagem: imagemCouveFlorAtacado,
  },
  { id: 3, nome: "Ervilha Atacado", preco: 7.99, imagem: imagemErvilhaAtacado },
  { id: 4, nome: "Milho Atacado", preco: 8.5, imagem: imagemMilhoAtacado },
  {
    id: 5,
    nome: "Pão de Queijo Atacado",
    preco: 12.0,
    imagem: imagemPaodeQueijo,
  },
  {
    id: 6,
    nome: "Jardineira Panache Atacado",
    preco: 9.8,
    imagem: imagemjardineiraPanacheAtacado,
  },
  {
    id: 7,
    nome: "Polenta Palito Atacado",
    preco: 10.5,
    imagem: imagemPolentaPalitoAtacado,
  },
  {
    id: 7,
    nome: "Alho Picado Atacado",
    preco: 10.5,
    imagem: imagemalhoPicadoAtacado,
  },
  {
    id: 7,
    nome: "Dueto de Legumes Atacado",
    preco: 10.5,
    imagem: imagemDuetoAtacado,
  },
];

export default function SegundaSecaoprodutos() {
  const [carrinho, setCarrinho] = useState(
    JSON.parse(localStorage.getItem("carrinho")) || []
  );

  const navigate = useNavigate();

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
      <h1 className={styles.TituloPrincipal}>Linha Atacado</h1>
      <div className={styles.container} id="atacado">
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
