import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import styles from "./QuintaSecao.module.css";

export default function QuintaSecaoInicio() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null); // Usando a referência para o título

  // Função para ativar a animação quando o elemento entra na tela
  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true); // Adiciona a classe quando o elemento entra na tela
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.6, // Quando 50% do elemento estiver visível
    });

    if (titleRef.current) {
      observer.observe(titleRef.current); // Observando o título com a ref
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current); // Parando a observação
      }
    };
  }, []);

  const handleConfiraClick = () => {
    navigate("/receitas");
  };

  return (
    <div className={styles.container}>
      <p
        ref={titleRef} // Associando a ref ao elemento do título
        className={`${styles.TituloPrincipal} ${
          isVisible ? styles.textoVisivel : styles.textoAnimado
        }`}
      >
        Inspire-se com
        <p>receitas deliciosas para preparar</p>
        <p>com os seus alimentos Nutriz!</p>
      </p>
      <button className={styles.botao} onClick={handleConfiraClick}>
        Confira!
      </button>
    </div>
  );
}
