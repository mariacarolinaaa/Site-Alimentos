import styles from "./PrimeiraSecaoProdutos.module.css";
import imagemBrocolisProdutos from "assets/imagem.brocolis.png";
import imagemSecundariaBrocolis from "assets/imagem.secundaria.brocolis.png";
import imagemCouveFlor from "assets/imagem.couveflor.png";
import imagemErvilha from "assets/imagem.ervilha.png";
import imagemSeleta from "assets/imagem.seleta.png";
import imagemJardineira from "assets/imagem.jardineira.png";
import imagemJardineiraPanache from "assets/imagem.jardineira.panache.png";
import imagemPolenta from "assets/imagem.polenta.png";
import imagemPolentaNoissete from "assets/imagem.polenta.noisette.png";
import imagemVagemInteira from "assets/vagem.inteira.png";
import imagemVagemPedaços from "assets/imagem.vagem.png";
import imagemEspinafrePicado from "assets/imagem.vagem.png";
import imagemEspinafreFolhas from "assets/imagem.espinafre.folhas.png";
import imagemCenouraBaby from "assets/imagem.cenoura.baby.png";
import imagemMandioca from "assets/imagem.mandioca.png";
import imagemAbobora from "assets/Abobora.cabotiá.png";
import imagemAnelcebola from "assets/imagem.anelCebola.png";
import imagemBatata from "assets/imagem.batataPalito.png";
import imagemCouveFlorMacerata from "assets/imagem.couveFlorMacerata.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const produtos = [
  { id: 1, nome: "Couve Flor ", preco: 4.99, imagem: imagemCouveFlor },
  { id: 2, nome: "Seleta de Legumes", preco: 6.9, imagem: imagemSeleta },
  { id: 3, nome: "Brócolis", preco: 8.49, imagem: imagemBrocolisProdutos },
  { id: 4, nome: "Jardineira", preco: 8.9, imagem: imagemJardineira },
  {
    id: 5,
    nome: "Jardineira Panache",
    preco: 9.5,
    imagem: imagemJardineiraPanache,
  },
  {
    id: 6,
    nome: "Polenta",
    preco: 9.8,
    imagem: imagemPolenta,
  },
  {
    id: 7,
    nome: "Polenta Noissete",
    preco: 12.0,
    imagem: imagemPolentaNoissete,
  },
  { id: 8, nome: "Vagem Inteira", preco: 6.5, imagem: imagemVagemInteira },
  { id: 9, nome: "Vagem Pedaços", preco: 7.49, imagem: imagemVagemPedaços },
  {
    id: 11,
    nome: "Espinafre Folhas",
    preco: 8.5,
    imagem: imagemEspinafreFolhas,
  },
  { id: 12, nome: "Cenoura", preco: 6.8, imagem: imagemCenouraBaby },
  { id: 13, nome: "Mandioca", preco: 6.5, imagem: imagemMandioca },
  { id: 14, nome: "Abóbora Cabotiá", preco: 4.5, imagem: imagemAbobora },
  { id: 15, nome: "Anel de Cebola", preco: 11.5, imagem: imagemAnelcebola },
  { id: 16, nome: "Batata Palito", preco: 7.2, imagem: imagemBatata },
  {
    id: 17,
    nome: "Couve Flor Macerata",
    preco: 9.5,
    imagem: imagemCouveFlorMacerata,
  },
];
export default function PrimeiraSecaoprodutos() {
  const [carrinho, setCarrinho] = useState(
    JSON.parse(localStorage.getItem("carrinho")) || []
  );
  const navigate = useNavigate();

  const adicionarAoCarrinho = (produto) => {
    const novosProdutos = [...carrinho, produto];
    setCarrinho(novosProdutos);
    localStorage.setItem("carrinho", JSON.stringify(novosProdutos));
  };

  const irParaCarrinho = () => {
    navigate("/carrinho");
  };

  return (
    <div>
      <h1 className={styles.TituloPrincipal}>Linha Institucional</h1>
      <div className={styles.container} id="institucional">
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
