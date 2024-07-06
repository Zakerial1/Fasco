import React, { useEffect } from 'react';
import Navigation from "../Navigation/Navigation";
import Paeky from "../paeky_blinder/peaky_blinders";
import styles from'../Homepage/homepage.module.css';
import CountdownTimer from '../home_page_timer/homepage_timer';
import { Link } from 'react-router-dom';
import SwiperIMGWoman from '../Swiper/SwiperIMGWoman.jsx';
import Sing_in from '../PageRegistrIn/Sing_in'
import { useSwiper } from 'swiper/react';
import SwiperCards from '../SwiperCards/SwiperCards.jsx';
import i18next from '../Route/i18n.js'
function Homepage() {
    const targetDate = new Date('2024-08-31T23:59:59');
    const swiper = useSwiper();

    
    return (
        <div >
            <div className={styles.box_prew}>
                <div className={styles.box_img}>
                <img alt="React logo" src="https://i.imgur.com/nJdFOBr.png" />
                </div>
                <div className={styles.box_imgPrew}>
                    <div className={`${styles.box_bg} ${styles.woman}`}>
                        <img alt="React logo" src="https://i.imgur.com/u5qfWkb.png" />
                    </div>
                    <div className={styles.box_Ultim}>
                        <img alt="React logo" src="https://i.imgur.com/II5Lqsx.png" className={styles.img_Ultim} />
                        <img  alt="React logo" src="https://i.imgur.com/peg4LrS.png" className={styles.img_Ultim} />
                        <img  alt="React logo" src="https://i.imgur.com/cSoNVdB.png" className={`${styles.img_Ultim} ${styles.newColl}`}/>
                        <div className={styles.box_butSHOP}>
                            <button className={styles.but_Sign}>{i18next.t("shop_now")}</button>

                        </div>
                    </div>
                    <div className={styles.box_bg}>
                        <img alt="React logo" src="https://i.imgur.com/z9V1UPj.png" />
                    </div>
                </div>
                <div className={styles.box_img}>
                    <div className="">
                        <img alt="React logo" src="https://i.imgur.com/oc175wb.png" />
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.box_logo_Companie}>
                    <div className={styles.logo_Companye}>
                        <img alt="React logo" src="https://i.imgur.com/VI80XwS.png" />
                    </div>
                    <div className={styles.logo_Companye}>
                        <img alt="React logo" src="https://i.imgur.com/eL3rb41.png" />
                    </div>
                    <div className={styles.logo_Companye}>
                        <img alt="React logo" src="https://i.imgur.com/xsVw8CE.png" />
                    </div>
                    <div className={styles.logo_Companye}>
                        <img alt="React logo" src="https://i.imgur.com/e5eVPQP.png" />
                    </div>
                    <div className={styles.logo_Companye}>
                        <img alt="React logo" src="https://i.imgur.com/S6D0nLa.png" />
                    </div>
                </div>
            </div>
            <div className={styles.box_sale}>
                <div className={styles.box_sale_div}>
                    <div className={styles.info_sale}>
                        <h2 className={styles.info_sale_Month}> {i18next.t("deals_donth")}</h2>
                        <p className={styles.lorem_impus}>{i18next.t("text_lorem")}</p>
                        <button className={styles.but_Sign}>
                        {i18next.t("buy_now")}
                        </button>
                        <div>
                            <h3 className={styles.info_sale_Hurry}>Hurry, Before Its Too Late!</h3>
                            <div>
                                <CountdownTimer targetDate={targetDate} />
                            </div>
                        </div>
                        <div className={styles.box_but_img}>
                            {/* <button className={styles.but_arrow} onClick={() => swiper.slideNext()}>
                                <img alt="React logo" className={styles.arrow} src='https://i.imgur.com/nZDCuk4.png'/>
                            </button> */}
                            {/* <button className={styles.but_arrow}  onClick={() => swiper.slideNext()}>
                                <img alt="React logo" className={styles.arrow} src='https://i.imgur.com/IVGe5a3.png'/>fghjkl
                            </button> */}
                        </div>

                    </div>
                    <div className={styles.img_sale}>
                    <SwiperIMGWoman/>
                        {/* <div className={styles.img_sale_main}>
                            <img alt="React logo" className={styles.img_woman_sale_main} src="https://i.imgur.com/tQTnEJH.png" />
                        </div>
                        <div className={styles.box_img_woman}>
                            <img alt="React logo" className={styles.img_woman_sale_main} src="https://i.imgur.com/LemOslv.png" />
                        </div>
                        <div className={styles.box_img_woman}>
                            <img alt="React logo" className={styles.img_woman_sale_main} src="https://i.imgur.com/E8C0ECl.png" />
                        </div> */}
                    </div>
                </div>
            </div>
                <Paeky/>
            <div className={styles.boxSwiperCards}>
                <h1 className={styles.swiperCards}>This Is What Our Customers Say</h1>
            <SwiperCards/>
                </div>
        </div>
    )
}
export default Homepage;