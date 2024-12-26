import styles from "./PrimeiraSecaoReceitas.module.css";
import BrocolisGratinado from "assets/brocolisGratinado.jpg";
import muffinsBrocolis from "assets/muffins.Brocolis.jpg";
import sopaErvilha from "assets/sopaErvilha.jpg";

export default function primeiraSecaoReceitas() {
  return (
    <div className={styles.DivGrande}>
      <div className={styles.container}>
        <div className={styles.cabecalho}>
          <img
            className={styles.Imagem}
            src={BrocolisGratinado}
            alt="Imagem Brócolis gratinado"
          />
        </div>
        <h2 className={styles.TituloPrincipal}>
          Brocolis Gratinado com camarões e queijo
        </h2>
        <p className={styles.Paragrafo}>
          Ingredientes: 200g de brócolis Nutriz(preparado conforme as instruções
          de refogado) 300g de camarões limpos e descascados 200g de queijo
          muçarela ralado 50g de queijo parmesão ralado 1 colher de sopa de
          manteiga (15g) 1 colher de sopa de azeite de oliva(15ml) Sal e Pimenta
          a gosto
        </p>
        <p className={styles.Paragrafo}>
          Modo de preparo:
          <p className={styles.Paragrafo}>
            1 - Preparar o brócolis Nutriz Refogado: Em uma panela com 600ml de
            água fervente, adicione os 200g de brócolis Nutriz ainda congelados,
            tampe e deixe aquecer por 2 minutos. Retire o brócolis, escorra bem,
            corte em pedaços menores e refogue em uma frigideira untada com 1
            colher de chá de manteiga por cerca de 4 minutos. Reserve.
            Acrescente sal a gosto!
          </p>
          <p className={styles.Paragrafo}>
            2 - Preparar os Camarões: Aqueça o azeite de oliva em uma
            frigideira, adicione o alho picado e refogue até dourar. Acrescente
            os 300g de camarões e tempere com sal e pimenta a gosto. Cozinhe por
            3-5 minutos até os camarões ficarem rosados. Reserve.
          </p>
          <p className={styles.Paragrafo}>
            3 - Montar o Gratinado: Em um refratário, disponha o brócolis
            refogado e os camarões por cima. Cubra com o queijo muçarela e
            polvilhe o parmesão ralado por cima.
          </p>
          <p className={styles.Paragrafo}>
            4 - Gratinar: Leve o refratário ao forno preaquecido a 200°C por
            10-15 minutos, ou até o queijo derreter e gratinar, formando uma
            crosta dourada. Sirva quente, apreciando o sabor do brócolis Nutriz
            com os camarões e o queijo gratinado.
          </p>
        </p>
      </div>
      <div className={styles.containerDois}>
        <div className={styles.cabecalho}>
          {/* Verifica se a imagem está presente */}
          <img
            className={styles.Imagem}
            src={muffinsBrocolis}
            alt="Imagem muffins de brocolis"
          />
        </div>
        <h2 className={styles.TituloPrincipal}>Muffins de Brócolis</h2>
        <p className={styles.Paragrafo}>
          Ingredientes: 200g de brócolis Nutriz 2 ovos 8ml de leite 100g de
          queijo ralado(pode ser muçarela ou parmesao) 100g de farinha de trigo
          1/2 colher de chá de fermento em pó sal a gostotemperos a gostp(como
          óregano ou salsinha) Formas de papel tamanho padrão para mufins, com
          diâmetro de cerca de 7cm e profundidade de 3cm
        </p>
        <p className={styles.Paragrafo}>
          Modo de preparo:
          <p className={styles.Paragrafo}>
            1 - Pré aqueça o forno a 180C e unte a forma de muffins
          </p>
          <p className={styles.Paragrafo}>
            2 - Cozinhe os brocolis Nutriz no vapor po 2-5 minutos ate que
            fiquem macios, mas ainda firmes.
          </p>
          <p className={styles.Paragrafo}>
            3 - em uma tigela, misture os ovos, o leite e o queijo ralado
          </p>
          <p className={styles.Paragrafo}>
            4 - adicione a farinha, o fermento e o sal, mexendo até incorporar
          </p>
          <p className={styles.Paragrafo}>
            5 - Acrescente os brocolis cozidos e misture delicadamnet
          </p>
          <p className={styles.Paragrafo}>
            6 - Despeje a massa nas forminhas de muffin e asse por 20-25 minutos
            ou ate douraar
          </p>
        </p>
      </div>
      <div className={styles.containerTres}>
        <div className={styles.cabecalho}>
          {/* Verifica se a imagem está presente */}
          <img
            className={styles.Imagem}
            src={sopaErvilha}
            alt="Imagem sopa de ervilhas"
          />
        </div>
        <h2 className={styles.TituloPrincipal}>Sopa de Ervilhas</h2>
        <p className={styles.Paragrafo}>
          Ingredientes: 1 pacote de ervilhas congeladas Nutriz; 50g ou mais de
          pão picado para croutons; 1 cebola; Alho picado a gosto; 1 tomate
          picado; Temperos e sal a gosto;
        </p>
        <p className={styles.Paragrafo}>
          Modo de preparo:
          <p className={styles.Paragrafo}>
            1 - Coloque numa frigideira azeite para dourar os pães até ficarem
            crocantes. Após isso, reserve.
          </p>
          <p className={styles.Paragrafo}>
            2 - Doure o alho e a cebola, junte o tomate e refogue.
          </p>
          <p className={styles.Paragrafo}>
            3 - Quando estiver bem refogado, acrescente as ervilhas congeladas
            Nutriz e 1L de água na panela, deixando as ervilhas cozinharem até
            ficarem bem macias.
          </p>
          <p className={styles.Paragrafo}>
            4 - Após cozinhar, bata no liquidificador, leve novamente ao fogo
            até ferver e adicione os temperos.
          </p>
          <p className={styles.Paragrafo}>
            5 - Sirva com os croutons por cima e pimenta moída na hora.
          </p>
        </p>
      </div>
    </div>
  );
}
