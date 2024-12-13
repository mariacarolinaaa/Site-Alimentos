import styles from "./rodape.module.css";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <img
        src="/logo.nutriz.png"
        alt="Imagem brocolis"
        className={styles.logoNutriz}
      />
      <p> © 2024 Nutriz</p>
    </footer>
  );
}
