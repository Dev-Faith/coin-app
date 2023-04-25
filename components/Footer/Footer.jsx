import {logo} from "../../assets";
import {BsFacebook, BsTwitter, BsTelegram, BsYoutube, BsDiscord, BsReddit, BsGithub, BsInstagram} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";
import {SiCoinmarketcap} from "react-icons/si";
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
                <p>Help Center</p>
                <p>Submit a Ticket</p>
                <p>Fees</p>
                <p>VIP</p>
                <p>Identity Verification</p>
                <p>Technical Support</p>
                <p>Beginner's Guide</p>
                <p>Official Verification Center</p>
                <p>PoR (Proof of Reserves)</p>
                <p>Sitemap</p>
              </div>
            </div>
            <div className={styles.column}>
              <p className={styles.header}>Business</p>
              <div className={styles.links}>
                <p>Token Listing</p>
                <p>VeriCoin Labs</p>
                <p>VeriCoin Ventures</p>
                <p>Spotlight Application</p>
                <p>Market Maker Incentive Program</p>
                <p>P2P Merchant Apllication </p>
                <p>Safeguard Program</p>
              </div>
            </div>
            <div className={styles.column}>
              <p className={styles.header}>Legal</p>
              <div className={styles.links}>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Risk Disclosure Statement</p>
                <p>AML & CFT</p>
                <p>Special Treatment</p>
                <p>VeriCoin Plus</p>
                <p>Law Enforcement Requests</p>
              </div>
            </div>
          </div>
          <div className={styles.lowerDiv}>
              <div className={styles.column}>
                <p className={styles.header}>Crypto Prices</p>
                <div className={styles.links}>
                  <p>Bitcoin (BTC) Price</p>
                  <p>Ethereum (ETH) Price</p>
                  <p>Ripple (XRP) Price</p>
                  <p>VeriCoin Token (VCS) Price</p>
                </div>
              </div>
              <div className={styles.column}>
                <p className={styles.header}>Learn</p>
                <div className={styles.links}>
                  <p>Buy Bitcoin</p>
                  <p>Buy Ethereum</p>
                  <p>Buy FLOKI</p>
                  <p>Buy XRP</p>
                  <p>Buy Solana</p>
                  <p>Buy Ton</p>
                  <p>Buy Injective Protocol</p>
                  <p>Buy Arbitrum</p>
                  <p>Buy Polygon</p>
                  <p>Buy Fantom</p>
                </div>
              </div>
              <div className={styles.column}>
                <p className={styles.header}>Developer</p>
                <div className={styles.links}>
                  <p>API Documentation</p>
                  <p>SDK</p>
                  <p>Sandbox</p>
                </div>
              </div>
              <div className={styles.column}>
                <p className={styles.header}>App Download</p>
                <div className={styles.links}>
                  <p>Android Download</p>
                  <p>iOS Download</p>
                </div>
              </div>
              <div className={styles.column}>
                <p className={styles.header}>Community</p>
                <div className={styles.linkIcons}>
                  <BsFacebook/>
                  <BsTwitter/>
                  <BsTelegram/>
                  <BsYoutube/>
                  <BsDiscord/>
                  <BsReddit/>
                  <BsGithub/>
                  <FaLinkedinIn/>
                  <BsInstagram/>
                  <SiCoinmarketcap/>
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