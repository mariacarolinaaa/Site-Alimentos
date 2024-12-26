import { useNavigate } from "react-router-dom";
import styles from "./SecaoInicio.module.css";
import imagemBrocolis from "assets/imagem_brocolis.jpg";

export default function SecaoInicio() {
  const navigate = useNavigate();

  const handleContatoClick = () => {
    navigate("/quemsomos");
  };

  return (
    <section className={styles.container}>
      <section className={styles.paragrafo}>
        <h1 className={styles.subtitulo}></h1>
      </section>
      <img
        src={imagemBrocolis}
        alt="Imagem brocolis"
        className={styles.imagemBrocolis}
      />

      <section>
        <div>
          <h1 className={styles.subtitulo}>
            Alimentos Congelados Nutriz: Sabor e frescor na sua mesa
          </h1>
          <p className={styles.paragrafo}>
            Estamos presentes em todo o território brasileiro, com uma vasta
            rede de distribuição que nos permite alcançar cada canto do país.
            Adotamos uma abordagem inovadora, buscando sempre melhorar nossos
            processos e integrar tecnologias de ponta, com o objetivo de
            garantir qualidade em todas as etapas da nossa produção. Desde a
            escolha cuidadosa das sementes até a entrega final ao cliente, cada
            detalhe é pensado para proporcionar a melhor experiência.
          </p>

          <p className={styles.paragrafo}>
            Acreditamos que a sustentabilidade e o respeito ao meio ambiente
            devem andar de mãos dadas com a produção de alimentos. Por isso,
            nossos produtos são ecologicamente corretos, preservando ao máximo
            as características nutricionais, sabor e textura dos alimentos.
            Garantimos que, mesmo após o processo de congelamento, a qualidade
            de cada item se mantém impecável, oferecendo ao consumidor alimentos
            saudáveis e frescos.
          </p>
        </div>
        <button className={styles.botao} onClick={handleContatoClick}>
          Saiba mais
        </button>
      </section>
    </section>
  );
}
