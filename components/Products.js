import styles from "../styles/Products.module.css";
import ButtonDark from "./ButtonDark";

function Products() {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productCard1}>
        <div className={styles.textDiv}>
          <span className={styles.textThin}>PHANTOM I White</span>
          <span className={styles.textBold}>A class of its own.</span>
          <ButtonDark />
        </div>
      </div>
      <div className={styles.productCard2}>
        <div className={styles.textDiv}>
          <span className={styles.textThin}>PHANTOM II Gold</span>
          <span className={styles.textBold}>Pure sound.</span>
          <ButtonDark />
        </div>
      </div>
      <div className={styles.productCard3}>
        <div className={styles.textDiv}>
          <span className={styles.textThin}>PHANTOM II Black</span>
          <span className={styles.textBold}>Deeply nomadic.</span>
          <ButtonDark />
        </div>
      </div>
      <div className={styles.productCard4}>
        <div className={styles.textDiv}>
          <span className={styles.textThin}>PHANTOM II White</span>
          <span className={styles.textBold}>Intensively immersive.</span>
          <ButtonDark />
        </div>
      </div>
    </div>
  );
}

export default Products;
