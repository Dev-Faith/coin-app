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
    Wallet:false
  });
  const [isHoveringEle, setIsHoveringEle] = useState(false);
  const [checker, setChecker] = useState(false);
  //mouserOver handlers

  //gridIcon
  const handleMouseOverGridIcon = () => {
    setIsHovering({...isHovering, gridIcon:true});
  };
  const handleMouseOutGridIcon = () => {
      setIsHovering({...isHovering, gridIcon:false});
  }   
// buyCrypto
   const handleMouseOverBuyCrypto = () => {
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
  //Trade
  const handleMouseOverTrade = () => {
    setIsHovering({...isHovering, Trade:true}); 
  }
  const handleMouseOutTrade = () => {
    setIsHovering({...isHovering, Trade:false}); 
  }
  //Derivatives
  const handleMouseOverDeriv = () => {
    setIsHovering({...isHovering, Derivatives:true}); 
  }
  const handleMouseOutDeriv = () => {
    setIsHovering({...isHovering, Derivatives:false}); 
  }
  //Earn
  const handleMouseOverEarn = () => {
    setIsHovering({...isHovering, Earn:true}); 
  }
  const handleMouseOutEarn = () => {
    setIsHovering({...isHovering, Earn:false}); 
  }
  //NFT
  const handleMouseOverNFT = () => {
    setIsHovering({...isHovering, NFT:true}); 
  }
  const handleMouseOutNFT = () => {
    setIsHovering({...isHovering, NFT:false}); 
  }
  //Wallet
  const handleMouseOverWallet = () => {
    setIsHovering({...isHovering,Wallet:true}); 
  }
  const handleMouseOutWallet = () => {
    setIsHovering({...isHovering, Wallet:false}); 
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

  const Trade = [
    {
      icon: <AiFillCreditCard/>,
      title: "Spot Trading",
      description: "Trade crypto with comprehensive tools",
    },
    {
      icon: <MdGroups2/>,
      title: "Margin Trading",
      description: "Magnify profits with leverage",
    },
    {
      icon: <RiHandHeartFill/>,
      title: "Trading Bot",
      description: "Earn passive profit without monitoring the market",
    },
    {
      icon: <FaMoneyBill/>,
      title: "Convert",
      description: "The easiest way to trade",
    },
  ];

  const Derivatives = [
    {
      icon: <AiFillCreditCard/>,
      title: "Futures Overviews",
      description: "Browse all crypto derivatives",
    },
    {
      icon: <MdGroups2/>,
      title: "USD-Margined Contracts",
      description: "USD-settled linear contracts",
    },
    {
      icon: <RiHandHeartFill/>,
      title: "Coin-Margined Contracts",
      description: "Coin-settled inverse contracts",
    },
    {
      icon: <FaMoneyBill/>,
      title: "Futures Brawl",
      description: "Predict gains and drops to win prizes",
    },
    {
      icon: <FaMoneyBill/>,
      title: "Futures Bonus",
      description: "Trial funds and deduction coupons",
    },
    {
      icon: <FaMoneyBill/>,
      title: "Leveraged Tokens",
      description: "Track price movement of the underlying asset with a fixed multiple",
    },
  ];

  const Earn = [
    {
      icon: <AiFillCreditCard/>,
      title: "Crypto Lending",
      description: "Lend our crypto to earn interest",
    },
    {
      icon: <MdGroups2/>,
      title: "VeriCoin Earn",
      description: "Invest to earn stable profit through a professional asset manager",
    },
    {
      icon: <RiHandHeartFill/>,
      title: "Spotlight",
      description: "VeriCoin token lauch platform",
    },
    {
      icon: <FaMoneyBill/>,
      title: "VeriCoin Wealth",
      description: "With VeriCoin wealth's structured products, growing your crypto assets has never been easier ",
    },
    {
      icon: <FaMoneyBill/>,
      title: "KCS Bonus",
      description: "Hold KCS to earn daily bonuses",
    },
    {
      icon: <FaMoneyBill/>,
      title: "VeriCoin Pool",
      description: "Empower hashrates to realize gains",
    },
    {
      icon: <FaMoneyBill/>,
      title: "Cloud Mining",
      description: "Easy mining, easy profits",
    },
  ];

  const NFT = [
    {
      icon: <AiFillCreditCard/>,
      title: "Windvane",
      description: "Buy, sell and swap NFTs instantly",
    },
    {
      icon: <MdGroups2/>,
      title: "Wonderland",
      description: "NFT launch platform",
    },
    {
      icon: <RiHandHeartFill/>,
      title: "Fractional NFTs",
      description: "The easiest way to invest in blue-chip NFTs",
    },
  ];

  const Wallet = [
    {
      icon: <AiFillCreditCard/>,
      title: "Halo Wallet",
      description: "A self-custody social wallet - Yours to discover, invest and earn",
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
                  <div className={styles.mouseOverContTable}>
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
                  <div className={styles.navList}
                  onMouseOver={handleMouseOverTrade}
                  onMouseOut={handleMouseOutTrade}
                  >
                    <p className={cn({ activeNav: isHovering.Trade })}>Trade</p>
                    {isHovering.Trade ? <RiArrowDropUpFill /> : <RiArrowDropDownFill />}
                    {isHovering.Trade && (
                  <div className={styles.mouseOverContTable}>
                    {Trade.map((item) => {
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
                   onMouseOver={handleMouseOverDeriv}
                  onMouseOut={handleMouseOutDeriv}
                  >
                    <p className={cn({ activeNav: isHovering.Derivatives })}>Derivatives</p>
                     {isHovering.Derivatives ? <RiArrowDropUpFill /> : <RiArrowDropDownFill />}
                    {isHovering.Derivatives && (
                  <div className={styles.mouseOverContTable}>
                    {Derivatives.map((item) => {
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
                  onMouseOver={handleMouseOverEarn}
                   onMouseOut={handleMouseOutEarn}
                  >
                    <p className={cn({ activeNav: isHovering.Earn })}>Earn</p>
                     {isHovering.Earn ? <RiArrowDropUpFill /> : <RiArrowDropDownFill />}
                    {isHovering.Earn && (
                  <div className={styles.mouseOverContTable}>
                    {Earn.map((item) => {
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
                  onMouseOver={handleMouseOverNFT}
                   onMouseOut={handleMouseOutNFT}
                  >
                    <p className={cn({ activeNav: isHovering.NFT })}>NFT</p>
                     {isHovering.NFT ? <RiArrowDropUpFill /> : <RiArrowDropDownFill />}
                    {isHovering.NFT && (
                  <div className={styles.mouseOverContTable}>
                    {NFT.map((item) => {
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
                  onMouseOver={handleMouseOverWallet}
                   onMouseOut={handleMouseOutWallet}
                  >
                    <p className={cn({ activeNav: isHovering.Wallet })}>Wallet</p>
                     {isHovering.Wallet ? <RiArrowDropUpFill /> : <RiArrowDropDownFill />}
                    {isHovering.Wallet && (
                  <div className={styles.mouseOverContTable}>
                    {Wallet.map((item) => {
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
            </ul>
            <div className={styles.beginnerZoneButton}>Beginner Zone</div>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.logInButton}>Log In</div>
          <div className={styles.signUpButton}>Sign Up</div>
          <FiDownload className={styles.downloadIcon} />
          <FiGlobe className={styles.globeIcon} />
          <p className={styles.USD}>USD</p>
        </div>
      </div>
    );
};