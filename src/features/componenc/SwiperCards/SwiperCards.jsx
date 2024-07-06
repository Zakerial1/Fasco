
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './swiper_cards.css';
// import required modules
import { EffectCards } from 'swiper/modules';
import styles from './swiperCards.module.css'
function SwiperCards() {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySecondSwiper"
            >
                <SwiperSlide>
                    <div className={styles.boxCard}>
                        <div >
                            <img alt="React logo" className={styles.imgCard} src="https://i.imgur.com/HZZDNGT.png"  />
                        </div>
                        <div className={styles.boxInfo}>
                            <p className={styles.infoText}>
                                "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"
                            </p>
                            <h2 className={styles.nameKlient}>
                                James K.
                            </h2>

                            <p className={styles.profKlient}>
                                Traveler
                            </p>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className={styles.boxCard}>
                        <div >
                            <img alt="React logo" className={styles.imgCard} src="https://i.imgur.com/okKuyE3.png" />
                        </div>
                        <div className={styles.boxInfo}>
                            <p className={styles.infoText}>
                                "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"
                            </p>
                            <h2 className={styles.nameKlient}>
                                James K.
                            </h2>

                            <p className={styles.profKlient}>
                                Traveler
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className={styles.boxCard}>
                        <div >
                            <img alt="React logo" className={styles.imgCard} src="https://i.imgur.com/HZZDNGT.png"  />
                        </div>
                        <div className={styles.boxInfo}>
                            <p className={styles.infoText}>
                                "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"
                            </p>
                            <h2 className={styles.nameKlient}>
                                James K.
                            </h2>

                            <p className={styles.profKlient}>
                                Traveler
                            </p>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide><div className={styles.boxCard}>
                        <div >
                            <img alt="React logo" className={styles.imgCard} src="https://i.imgur.com/HZZDNGT.png"  />
                        </div>
                        <div className={styles.boxInfo}>
                            <p className={styles.infoText}>
                                "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"
                            </p>
                            <h2 className={styles.nameKlient}>
                                James K.
                            </h2>

                            <p className={styles.profKlient}>
                                Traveler
                            </p>
                        </div>
                    </div></SwiperSlide>
                {/* <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    );
}


export default SwiperCards;