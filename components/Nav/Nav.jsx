import { logo } from "../../assets";
import Image from "next/image";
import { useState } from "react";
import { BsFillGrid3X3GapFill, BsFillFlagFill, BsFillPostcardHeartFill } from "react-icons/bs";
import { RiArrowDropDownFill, RiArrowDropUpFill, RiHandHeartFill } from "react-icons/ri";
import { FiDownload, FiGlobe } from "react-icons/fi";
import { TbPlugConnected } from "react-icons/tb";
import { RiContactsFill, RiNewspaperFill } from "react-icons/ri";
import { HiChatAlt2 } from "react-icons/hi";
import { FaHandshake, FaMoneyBill } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
import { AiFillCreditCard } from "react-icons/ai";
import { MdGroups2 } from "react-icons/md";
import { GiWantedReward, GiCrystalGrowth } from "react-icons/gi";
import cn from "classnames";
import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {

  const [isHovering, setIsHovering] = useState({
    gridIcon: false,
    buyCrypto: false,
    Market: false,
    Trade: false,
    Derivatives: false,
    Earn: false,
    NFT: false,
    wallet:false
  });
  const [isHoveringEle, setIsHoveringEle] = useState(false);
  const [checker, setChecker] = useState(false);
  //mouserOver handlers

  //gridIcon
  const handleMouseOverGridIcon = () => {
    setChecker(true);
    setIsHovering({...isHovering, gridIcon:true});
  };
  const handleMouseOutGridIcon = ()=>{
    setIsHovering({...isHovering, gridIcon:false});
  }   
// buyCrypto
   const handleMouseOverBuyCrypto = () => {
    setChecker(true);
    setIsHovering({...isHovering, buyCrypto:true});
  };
   const handleMouseOutBuyCrypto     = ()=>{
    setIsHovering({...isHovering, buyCrypto:false});
  }  
  //Market 
  const handleMouseOverMarket = () => {
    setIsHovering({...isHovering, Market:true}); 
  }
  const handleMouseOutMarket = () => {
    setIsHovering({...isHovering, Market:false}); 
  }
  
  

  //Arrays for the mouse Overs 
  const gridIcon = [
    {
      icon: <TbPlugConnected />,
      title: "Api Services",
      description: "Exclusive perks for API users"
    },
    {
      icon: <HiChatAlt2 />,
      title: "Blog",
      description: "Blockchain and Crypto Information"
    },
    {
      icon: <RiContactsFill />,
      title: "Referral Program",
      description: "Refer Friends To Earn a 30% Commission"
    },
    {
      icon: <SlChemistry />,
      title: "VeriCoin Labs",
      description: "Vericoin investment and research laboratory"
    },
    {
      icon: <FaHandshake />,
      title: "Affiliate",
      description: "Join the Vericoin affiliate program and earn commissions"
    },
    {
      icon: <RiNewspaperFill />,
      title: "News",
      description: "Latest veriCoin news and announcements"
    },
    {
      icon: <BsFillFlagFill />,
      title: "Promotions",
      description: "Latest promotions and events"
    },
    {
      icon: <GiWantedReward />,
      title: "Rewards Hub",
      description: "New bonuses regularly available"
    },
    {
      icon: <GiCrystalGrowth />,
      title: "KCC",
      description: "DeFi, NFT, web 3.0"
    },
    {
      icon: <BsFillPostcardHeartFill />,
      title: "Veri Card",
      description: "Spend crypto and earn cash back"
    },
  ];

  const buyCrypto = [
    {
      icon: <AiFillCreditCard/>,
      title: "Fast Trade",
      description: "Buy Crypto with Visa, Mastercard, fiat balance",
    },
    {
      icon: <MdGroups2/>,
      title: "P2P",
      description: "Bank transfer and 20+ options",
    },
    {
      icon: <RiHandHeartFill/>,
      title: "Third-Party",
      description: "Banxa, Simplex, BTC Direct",
    },
    {
      icon: <FaMoneyBill/>,
      title: "Fiat Deposit",
      description: "Top up fiat balance via bank transfer",
    },
  ];

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
            <div
              className={styles.gridAlign}
              onMouseOver={handleMouseOverGridIcon}
              onMouseOut={handleMouseOutGridIcon}
            >
              <BsFillGrid3X3GapFill className={cn({ activeNav: isHovering.gridIcon })} />
              {isHovering.gridIcon ? <RiArrowDropUpFill /> : <RiArrowDropDownFill />}
              {isHovering.gridIcon && (
                  <div className={styles.mouseOverContGridIcon}>
                    {gridIcon.map((item) => {
                      return (
                        <div
                          className={styles.mouseOverElement}
                          key="item.title"
                        >
                          <div className={styles.itemIcon}>{item.icon}</div>
                          <div className={styles.TextOverDiv}>
                            <p className={styles.overHead}>{item.title}</p>
                            <p className={styles.overPara}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
              )}
            </div>
          </div>
          <div className={styles.navListAlign}>
            <ul className={styles.navLists}>
              <Link href="#">
                <li>
                  <div className={styles.navList}
                  onMouseOver={handleMouseOverBuyCrypto}
                  onMouseOut={handleMouseOutBuyCrypto}
                  >
                    <p className={cn({ activeNav: isHovering.buyCrypto })}>Buy Crypto</p>
                    {isHovering.buyCrypto ? <RiArrowDropUpFill /> : <RiArrowDropDownFill />}
                    {isHovering.buyCrypto && (
                  <div className={styles.mouseOverContBuyCrypto}>
                    {buyCrypto.map((item) => {
                      return (
                        <div
                          className={styles.mouseOverElement}
                          key="item.title"
                        >
                          <div className={styles.itemIcon}>{item.icon}</div>
                          <div className={styles.TextOverDiv}>
                            <p className={styles.overHead}>{item.title}</p>
                            <p className={styles.overPara}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
              )}
                  </div>
                </li>
              </Link>

              <Link href="#">
                <li>
                  <div className={styles.navList}
                   onMouseOver={handleMouseOverMarket}
                   onMouseOut={handleMouseOutMarket}
                  >
                    <p className={cn({ activeNav: isHovering.Market })}>Markets</p>
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
            <div className={styles.beginnerZoneButton}>Beginner Zone</div>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.logInButton}>Log In</div>
          <div className={styles.signUpButton}>Sign Up</div>
          <FiDownload />
          <FiGlobe />
          <p>USD</p>
        </div>
      </div>
    );
};