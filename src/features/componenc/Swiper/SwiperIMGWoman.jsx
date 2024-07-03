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
import ButNext from '../Swiper/ButNext.jsx';
import styles from '../Swiper/swiperwoman.module.css';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

function SwiperIMGWoman() {
  const swiperRef = useRef(null)
  const swiper = useSwiper();
  console.log(useSwiper())
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={9}
        freeMode={true}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        pagination={{ clickable: true }}
      >
        {/* <button className={styles.swiperNext} onClick={() => {
          console.log(swiper);
          swiper.slidePrev()
        }}>Next</button> */}
        <ButNext/>
        {/* <button className={styles.swiperPrev} onClick={() => {
          console.log(swiper);
          swiperRef.current.swiper.slidePrev()
        }}>Prev</button> */}
        <SwiperSlide><img className={styles.img_woman_sale_main} src="https://i.imgur.com/tQTnEJH.png" /></SwiperSlide>
        <SwiperSlide><img className={styles.img_woman_sale_main} src="https://i.imgur.com/LemOslv.png" /></SwiperSlide>
        <SwiperSlide><img className={styles.img_woman_sale_main} src="https://i.imgur.com/E8C0ECl.png" /></SwiperSlide>
        <SwiperSlide><img className={styles.img_woman_sale_main} src="https://i.imgur.com/tQTnEJH.png" /></SwiperSlide>
        <SwiperSlide><img className={styles.img_woman_sale_main} src="https://i.imgur.com/tQTnEJH.png" /></SwiperSlide>
        <SwiperSlide><img className={styles.img_woman_sale_main} src="https://i.imgur.com/tQTnEJH.png" /></SwiperSlide>
        <SwiperSlide><img className={styles.img_woman_sale_main} src="https://i.imgur.com/tQTnEJH.png" /></SwiperSlide>
        <SwiperSlide><img className={styles.img_woman_sale_main} src="https://i.imgur.com/tQTnEJH.png" /></SwiperSlide>
        <SwiperSlide><img className={styles.img_woman_sale_main} src="https://i.imgur.com/tQTnEJH.png" /></SwiperSlide>
      </Swiper>
    </>
  )
}
export default SwiperIMGWoman;