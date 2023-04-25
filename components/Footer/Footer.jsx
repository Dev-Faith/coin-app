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
                <p>About Us</p>
                <p>Join us</p>
                <p>Media kit</p>
                <p>Afiliate Program</p>
                <p>Whistleblower Contact</p>
                <p>Blog</p>
                <p>News & Announcements</p>
                <p>Referral</p>
                <p>Security</p>
             </div>
           </div>
           <div className={styles.column}>
             <p className={styles.header}>Products</p>
             <div className={styles.links}>
                <p>Spot Trading</p>
                <p>Margin Trading</p>
                <p>Convert</p>
                <p>Futures Trading</p>
                <p>VeriCoin Earn</p>
                <p>Crypto Lending</p>
                <p>Calculator</p>
                <p>Windvane NFT Marketplace</p>
                <p>Halo Wallet</p>
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