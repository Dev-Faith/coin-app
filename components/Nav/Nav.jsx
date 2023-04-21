import { logo } from "../../assets";
import Image from "next/image";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
    return (
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.logoAlign}>
            <Image
              src={logo}
              alt="logo"
              width="100"
              height="50"
              className={styles.logo}
            />
            <div className={styles.gridAlign}>
              <BsFillGrid3X3GapFill />
              <RiArrowDropDownFill />
            </div>
          </div>
          <div className={styles.navListAlign}>
            <ul className={styles.navLists}>
              <Link href="#">
                <li>
                  <div className={styles.navList}>
                    <p>Buy Crypto</p>
                    <RiArrowDropDownFill />
                  </div>
                </li>
              </Link>

              <Link href="#">
                <li>
                  <div className={styles.navList}>
                    <p>Market</p>
                    <RiArrowDropDownFill />
                  </div>
                </li>
              </Link>

              <Link href="#">
                <li>
                  <div className={styles.navList}>
                    <p>Trade</p>
                    <RiArrowDropDownFill />
                  </div>
                </li>
              </Link>

              <Link href="#">
                <li>
                  <div className={styles.navList}>
                    <p>Derivatives</p>
                    <RiArrowDropDownFill />
                  </div>
                </li>
              </Link>

              <Link href="#">
                <li>
                  <div className={styles.navList}>
                    <p>Earn</p>
                    <RiArrowDropDownFill />
                  </div>
                </li>
              </Link>

              <Link href="#">
                <li>
                  <div className={styles.navList}>
                    <p>NFT</p>
                    <RiArrowDropDownFill />
                  </div>
                </li>
              </Link>

              <Link href="#">
                <li>
                  <div className={styles.navList}>
                    <p>Wallet</p>
                    <RiArrowDropDownFill />
                  </div>
                </li>
              </Link>
            </ul>
            <div className={styles.beginnerZone}>Beginner Zone</div>
          </div>
        </div>
      </div>
    );
};