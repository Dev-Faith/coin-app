import {logo} from "../../assets";
import Image from "next/image";
import styles from "./Footer.module.css";
export default function Footer () {
    return (
      <div className={styles.footer}>
        <Image src={logo} alt="logo" height="75" width="150" />
        <div>
          <div className={styles.upperDiv}>
           <div className={styles.column}>
             <p className={styles.header}>Corporate</p>
             <div className={styles.links}>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
             </div>
           </div>
           <div className={styles.column}>
             <p className={styles.header}>Products</p>
             <div className={styles.links}>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
             </div>
           </div>
           <div className={styles.column}>
             <p className={styles.header}>Service</p>
             <div className={styles.links}>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
             </div>
           </div>
           <div className={styles.column}>
             <p className={styles.header}>Business</p>
             <div className={styles.links}>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
             </div>
           </div>
           <div className={styles.column}>
             <p className={styles.header}>Legal</p>
             <div className={styles.links}>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
             </div>
           </div>
          </div>
          <div className={styles.lowerDiv}>
            <div className={styles.headers}></div>
            <div className={styles.links}></div>
          </div>
        </div>
      </div>
    );
};