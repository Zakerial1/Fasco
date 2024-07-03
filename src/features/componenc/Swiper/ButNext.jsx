
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Swiper/swiperwoman.module.css'

import styles from '../Swiper/swiperwoman.module.css';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
function ButNext() {
    const swiper = useSwiper();
    return (
        <div className={styles.boxButton}>

            <button className={styles.swiperNext} onClick={() => {
                console.log(swiper);
                swiper.slidePrev()

            }}><img className={styles.arrow} src='https://i.imgur.com/nZDCuk4.png' /></button>
            <button className={styles.swiperPrev} onClick={() => {
                console.log(swiper);
                swiper.slideNext()
            }}><img className={styles.arrow} src='https://i.imgur.com/IVGe5a3.png' /></button>

        </div>
    )
}
export default ButNext;