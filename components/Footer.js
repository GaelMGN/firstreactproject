import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <span className={styles.link}>ABOUT</span>
      <span className={styles.link}>CONTACT</span>
      <span className={styles.link}>SUPPORT</span>
      <span className={styles.link}>STORES</span>
    </div>
  );
}

export default Footer;
