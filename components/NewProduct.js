import styles from "../styles/NewProduct.module.css";
import ButtonDark from "./ButtonDark";

function NewProduct() {
  return (
    <div className={styles.newProduct}>
      <div className={styles.divColumn}>
        <span className={styles.textThin}>LATEST LAUNCH</span>
        <span className={styles.textBold}>DIONE SOUNDBAR</span>
      </div>
      <img className={styles.image} src="/soundbar.png" />
      <ButtonDark className={styles.button} />
    </div>
  );
}

export default NewProduct;
