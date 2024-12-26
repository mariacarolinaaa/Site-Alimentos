import { useNavigate } from "react-router-dom";
import styles from "./QuartaSecao.module.css";

export default function TerceiraSecaoInicio() {
  const navigate = useNavigate();

  const handleContatoClick = () => {
    navigate("/produtos");
  };
  return (
    <div className={styles.ContainerFotos}>
      <div className={styles.ItemFoto}>
        <img
          onClick={handleContatoClick}
          className={styles.Foto}
          src="/Primeira_Foto.png" // Usando a imagem diretamente da pasta public
          alt="Primeira Foto"
        />
        <h2 className={styles.paragrafo}>Linha</h2>
        <h1 className={styles.Subtitulo}>Institucional</h1>
      </div>

      <div className={styles.ItemFoto}>
        <img
          onClick={handleContatoClick}
          className={styles.Foto}
          src="/Segunda_Foto.png"
          alt="Imagem legumes"
        />
        <h2 className={styles.paragrafo}>Linha</h2>
        <h1 className={styles.Subtitulo}>Atacado</h1>
      </div>

      <div className={styles.ItemFoto}>
        <img
          onClick={handleContatoClick}
          className={styles.Foto}
          src="/Terceira_Foto.png"
          alt="Imagem legumes"
        />
        <h2 className={styles.paragrafo}>Linha</h2>
        <h1 className={styles.Subtitulo}>Varejo</h1>
      </div>

      <div className={styles.ItemFoto}>
        <img
          onClick={handleContatoClick}
          className={styles.Foto}
          src="/Quarta_Foto.png"
          alt="Imagem legumes"
        />
        <h2 className={styles.paragrafo}>Linha</h2>
        <h1 className={styles.Subtitulo}>Bom Apetite</h1>
      </div>
    </div>
  );
}
