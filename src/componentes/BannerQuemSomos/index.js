import styles from "./BannerQuemSomos.module.css";

export default function BannerQuemSomos() {
  return (
    <div className={styles.BannerQuemSomos}>
      <div className={styles.imagens}>
        <img className={styles.bannerFundo} src="/Banner.quemSomos.jpg" />
      </div>
      <div className={styles.apresentacao}>
        <h2 className={styles.titulo}>
          Nutriz: uma história de excelência em alimentos congelados
        </h2>
      </div>
    </div>
  );
}
