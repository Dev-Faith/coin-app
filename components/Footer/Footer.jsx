import {logo} from "../../assets";
import {BsFacebook, BsTwitter, BsTelegram, BsYoutube, BsDiscord, BsReddit, BsGithub, BsInstagram} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";
import {SiCoinmarketcap} from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
export default function Footer () {
    return (
      <div className={styles.footer}>
        <Image src={logo} alt="logo" height="75" width="150" />
        <div className={styles.linksCont}>
          <div className={styles.upperDiv}>
            <div className={styles.column}>
              <p className={styles.header}>Corporate</p>
              <div className={styles.links}>
                <Link href ="#"><p>About Us</p></Link>
                <Link href ="#"><p>Join us</p></Link>
                <Link href ="#"><p>Media kit</p></Link>
                <Link href ="#"><p>Afiliate Program</p></Link>
                <Link href ="#"><p>Whistleblower Contact</p></Link>
                <Link href ="#"><p>Blog</p></Link>
                <Link href ="#"><p>News & Announcements</p></Link>
                <Link href ="#"><p>Referral</p></Link>
                <Link href ="#"><p>Security</p></Link>
              </div>
            </div>
            <div className={styles.column}>
              <p className={styles.header}>Products</p>
              <div className={styles.links}>
                <Link href ="#"><p>Spot Trading</p></Link>
                <Link href ="#"><p>Margin Trading</p></Link>
                <Link href ="#"><p>Convert</p></Link>
                <Link href ="#"><p>Futures Trading</p></Link>
                <Link href ="#"><p>VeriCoin Earn</p></Link>
                <Link href ="#"><p>Crypto Lending</p></Link>
                <Link href ="#"><p>Calculator</p></Link>
                <Link href ="#"><p>Windvane NFT Marketplace</p></Link>
                <Link href ="#"><p>Halo Wallet</p></Link>
              </div>
            </div>
            <div className={styles.column}>
              <p className={styles.header}>Service</p>
              <div className={styles.links}>
                <Link href ="#"><p>Help Center</p></Link>
                <Link href ="#"><p>Submit a Ticket</p></Link>
                <Link href ="#"><p>Fees</p></Link>
                <Link href ="#"><p>VIP</p></Link>
                <Link href ="#"><p>Identity Verification</p></Link>
                <Link href ="#"><p>Technical Support</p></Link>
                <Link href ="#"><p>Beginner's Guide</p></Link>
                <Link href ="#"><p>Official Verification Center</p></Link>
                <Link href ="#"><p>PoR (Proof of Reserves)</p></Link>
                <Link href ="#"><p>Sitemap</p></Link>
              </div>
            </div>
            <div className={styles.column}>
              <p className={styles.header}>Business</p>
              <div className={styles.links}>
                <Link href ="#"><p>Token Listing</p></Link>
                <Link href ="#"><p>VeriCoin Labs</p></Link>
                <Link href ="#"><p>VeriCoin Ventures</p></Link>
                <Link href ="#"><p>Spotlight Application</p></Link>
                <Link href ="#"><p>Market Maker Incentive Program</p></Link>
                <Link href ="#"><p>P2P Merchant Apllication </p></Link>
                <Link href ="#"><p>Safeguard Program</p></Link>
              </div>
            </div>
            <div className={styles.column}>
              <p className={styles.header}>Legal</p>
              <div className={styles.links}>
                <Link href ="#"><p>Terms of Use</p></Link>
                <Link href ="#"><p>Privacy Policy</p></Link>
                <Link href ="#"><p>Risk Disclosure Statement</p></Link>
                <Link href ="#"><p>AML & CFT</p></Link>
                <Link href ="#"><p>Special Treatment</p></Link>
                <Link href ="#"><p>VeriCoin Plus</p></Link>
                <Link href ="#"><p>Law Enforcement Requests</p></Link>
              </div>
            </div>
          </div>
          <div className={styles.lowerDiv}>
              <div className={styles.column}>
                <p className={styles.header}>Crypto Prices</p>
                <div className={styles.links}>
                  <Link href ="#"><p>Bitcoin (BTC) Price</p></Link>
                  <Link href ="#"><p>Ethereum (ETH) Price</p></Link>
                  <Link href ="#"><p>Ripple (XRP) Price</p></Link>
                  <Link href ="#"><p>VeriCoin Token (VCS) Price</p></Link>
                </div>
              </div>
              <div className={styles.column}>
                <p className={styles.header}>Learn</p>
                <div className={styles.links}>
                  <Link href ="#"><p>Buy Bitcoin</p></Link>
                  <Link href ="#"><p>Buy Ethereum</p></Link>
                  <Link href ="#"><p>Buy FLOKI</p></Link>
                  <Link href ="#"><p>Buy XRP</p></Link>
                  <Link href ="#"><p>Buy Solana</p></Link>
                  <Link href ="#"><p>Buy Ton</p></Link>
                  <Link href ="#"><p>Buy Injective Protocol</p></Link>
                  <Link href ="#"><p>Buy Arbitrum</p></Link>
                  <Link href ="#"><p>Buy Polygon</p></Link>
                  <Link href ="#"><p>Buy Fantom</p></Link>
                </div>
              </div>
              <div className={styles.column}>
                <p className={styles.header}>Developer</p>
                <div className={styles.links}>
                  <Link href ="#"><p>API Documentation</p></Link>
                  <Link href ="#"><p>SDK</p></Link>
                  <Link href ="#"><p>Sandbox</p></Link>
                </div>
              </div>
              <div className={styles.column}>
                <p className={styles.header}>App Download</p>
                <div className={styles.links}>
                  <Link href ="#"><p>Android Download</p></Link>
                  <Link href ="#"><p>iOS Download</p></Link>
                </div>
              </div>
              <div className={styles.column}>
                <p className={styles.header}>Community</p>
                <div className={styles.linkIcons}>
                  <Link href ="#"><BsFacebook/></Link>
                  <Link href ="#"><BsTwitter/></Link>
                  <Link href ="#"><BsTelegram/></Link>
                  <Link href ="#"><BsYoutube/></Link>
                  <Link href ="#"><BsDiscord/></Link>
                  <Link href ="#"><BsReddit/></Link>
                  <Link href ="#"><BsGithub/></Link>
                  <Link href ="#"><FaLinkedinIn/></Link>
                  <Link href ="#"><BsInstagram/></Link>
                  <Link href ="#"><SiCoinmarketcap/></Link>
                </div>
              </div>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.bottomPart}>
         <p>CopyRight © 2017 - 2023 VeriCoin.com. All Rights Reserved.</p>
        </div>
      </div>
    );
};