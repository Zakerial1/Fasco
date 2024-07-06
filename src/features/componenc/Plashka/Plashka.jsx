import React from "react";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from '../Shop/Shop.module.css';
import { selectMinMax,selectBrands,selectArr,selectPage  } from '../Slices/SlicePlashka'
import { Link, useNavigate } from "react-router-dom";
function Plashka() {
    // const [arr, setArr] = useState([{ name: 'Красная Шляпа', cost: 8, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0, brands:'Minimog'},
    // { name: 'Платье', cost: 50, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0 },
    // { name: 'Блузка', cost: 30, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0 },
    // { name: 'Юбка', cost: 40, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0 },
    // { name: 'Джинсы', cost: 45, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0 },
    // { name: 'Пальто', cost: 80, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0 },
    // { name: 'Кардиган', cost: 35, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0 },
    // { name: 'Брюки', cost: 55, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0 },
    // { name: 'Топ', cost: 25, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0 }])
    let MinMax = useSelector(selectMinMax);
    let Brands = useSelector(selectBrands);
    let arr = useSelector(selectArr);
    let Page = useSelector(selectPage);
    // console.log(Page)
    // console.log(arr)
    return (

        arr.slice((Page-1)*6,Page*6).filter((item) => {
            if (
                (item.cost > MinMax.min || MinMax.min == -1) && (item.cost < MinMax.max || MinMax.max == -1)&&
                (item.brands == Brands || Brands == 'All') 

            ) {
                if (item.brands) {
                    
                }
                return true
            }

            return false;
        }).map((item, index) => {
            return  <Link to={`/Shop/${item.id}`}><div className={styles.plachka} key={index}>
                <img alt="React logo" className={styles.img_plashka} src={item.img} />
                <p className={styles.name_Product}>{item.name}</p>
                <p>$ {item.cost}</p>
                <p>{item.date}</p>
                <p>{item.reiting}</p>
            </div>
            </Link>
        }
        ))




}
export default Plashka;