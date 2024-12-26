import styles from "./QuartaSecao.module.css";

export default function QuartaSecao() {
  return (
    <div className={styles.BannerContainer}>
      <img
        className={styles.BannerFundo}
        src="/Banner_terceiraSecao.png" // Usando a imagem diretamente da pasta public
        alt="Terceiro banner"
      />
      <div className={styles.Overlay}></div>
      <h1 className={styles.TituloPrincipal}>
        Alimentos de qualidade, garantia de satisfação dos clientes e
        responsabilidade socioambiental
      </h1>
      <p className={styles.Paragrafo}>
        Buscamos a satisfação dos clientes com a entrega de produtos saudáveis,
        nos empenhando sempre no aprimoramento dos processos, buscando
        constantemente integrar fornecedores a fim de promover crescimento
        humano. Percorremos todas as etapas com respeito ao meio ambiente,
        contribuindo para o desenvolvimento e o progresso social e econômico do
        Brasil com alimentos de qualidade.
      </p>
    </div>
  );
}
