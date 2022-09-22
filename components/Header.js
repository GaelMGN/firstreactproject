import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faLocationDot,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerBar}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon className={styles.icon} icon={faBars} />
        </div>
        <span className={styles.title}>MUSIC STORE</span>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon className={styles.icon} icon={faUser} />
          <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
          <FontAwesomeIcon className={styles.icon} icon={faBagShopping} />
        </div>
      </div>
      <div className={styles.headerBottom}>
        <div className={styles.divColumn}>
          <span>PHANTOM</span>
          <span className={styles.textBold}>IMPLOSIVE SOUND</span>
        </div>
        <div>
          <button className={styles.lightbutton}>DISCOVER</button>
          <button className={styles.darkbutton}>BUY</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
