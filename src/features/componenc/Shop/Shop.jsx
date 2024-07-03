import Navigation from "../Navigation/Navigation";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import styles from './Shop.module.css';
import styles1 from '../PageUser/pageU.module.css';
import stylesHomepage from '../Homepage/homepage.module.css';
import Plashka from "../Plashka/Plashka";
import { filtrMinCost, filtrMaxCost, filtrBrands, setPage } from "../Slices/SlicePlashka";
import { selectMinMax, selectBrands, selectArr, selectPage } from '../Slices/SlicePlashka';
import Paeky from "../paeky_blinder/peaky_blinders";
import { selectarrUser, selectCurrentUser } from '../Slices/SliceRegistr';

import { Link, useNavigate } from "react-router-dom";
function Shop() {
    let User = useSelector(selectCurrentUser);
    console.log(User)
    let page = useSelector(selectPage);
    const dispatch = useDispatch();
    let arr = useSelector(selectArr);
    console.log(User);
    return (
        <div theme="black">
            <div className={styles.name_page}>
                <h1>
                    Volkhov
                </h1>
            </div>
            <div className={styles.content}>
                <div className={styles.filtr}>
                    <div className={styles.box_filtr}>
                        <h1>Filters</h1>
                    </div>
                    <div className={styles.box_filtr}>
                        <p>Size</p>
                        <button className={styles.but_size}>
                            S
                        </button>
                        <button className={styles.but_size}>
                            M
                        </button>
                        <button className={styles.but_size}>
                            L
                        </button>
                        <button className={styles.but_size}>
                            XL
                        </button>
                    </div>
                    <div className={styles.box_filtr}>
                        <h2>Color</h2>
                        <div className={styles.colors}>

                        </div>
                    </div>
                    <div className={styles.box_filtr}>
                        <div className={styles.box_cost}>
                            <h2>Prices</h2>
                            <button className={`${styles.cost} ${styles.cost_poz}`}
                                onClick={(e) => {
                                    dispatch(filtrMinCost(-1));
                                    dispatch(filtrMaxCost(-1));
                                }}><h2>Сбросить всё</h2></button>
                            <button className={`${styles.cost} ${styles.cost_poz}`}
                                onClick={(e) => {
                                    dispatch(filtrMinCost(0));
                                    dispatch(filtrMaxCost(50));
                                }}>$0-$50</button>
                            <button className={`${styles.cost} ${styles.cost_poz}`}
                                onClick={(e) => {
                                    dispatch(filtrMinCost(50));
                                    dispatch(filtrMaxCost(100));
                                }}>$50-$100</button>
                            <button className={`${styles.cost} ${styles.cost_poz}`}
                                onClick={(e) => {
                                    dispatch(filtrMinCost(100));
                                    dispatch(filtrMaxCost(150));
                                }}>$100-$150</button>
                            <button className={`${styles.cost} ${styles.cost_poz}`}
                                onClick={(e) => {
                                    dispatch(filtrMinCost(150));
                                    dispatch(filtrMaxCost(200));
                                }}>$150-$200</button>
                            <button className={`${styles.cost} ${styles.cost_poz}`}
                                onClick={(e) => {
                                    dispatch(filtrMinCost(200));
                                    dispatch(filtrMaxCost(400));
                                }}>$300-$400</button>
                        </div>
                    </div>
                    <div className={styles.box_filtr}>
                        <div className={styles.box_brands}>
                            <h2>Brands</h2>
                            <div className={styles.brands}>
                                <button className={styles.cost} onClick={(e) => {
                                    dispatch(filtrBrands('All'))
                                }}><h2>Сбросить</h2> </button>
                                <button className={styles.cost}
                                    onClick={(e) => {
                                        dispatch(filtrBrands('Minimog'))
                                    }}>Minimog</button>
                                <button className={styles.cost}
                                    onClick={(e) => {
                                        dispatch(filtrBrands('Retrolie'))
                                    }}>Retrolie</button>
                                <button className={styles.cost}
                                    onClick={(e) => {
                                        dispatch(filtrBrands('Brook'))
                                    }}>Brook</button>
                                <button className={styles.cost}
                                    onClick={(e) => {
                                        dispatch(filtrBrands('Learts'))
                                    }}>Learts</button>
                                <button className={styles.cost}
                                    onClick={(e) => {
                                        dispatch(filtrBrands('Vagabond'))
                                    }}>Vagabond</button>
                                <button className={styles.cost}
                                    onClick={(e) => {
                                        dispatch(filtrBrands('Abby'))
                                    }}>Abby</button>
                            </div>
                        </div>

                    </div>
                    <div className={styles.box_filtr}>
                        <div className={styles.collections}>
                            <h2>Collections</h2>
                            <div>
                                <button className={`${styles.cost} ${styles.cost_poz}`}>All products</button>
                                <button className={`${styles.cost} ${styles.cost_poz}`}>Best sellers</button>
                                <button className={`${styles.cost} ${styles.cost_poz}`}>New arrivals</button>
                                <button className={`${styles.cost} ${styles.cost_poz}`}>Accessories</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box_filtr}>
                        <div className={styles.tags}>
                            <h2>Tags</h2>
                            <div>
                                <button className={styles.cost}>Fashion</button>
                                <button className={styles.cost}>Hats</button>
                                <button className={styles.cost}>Sandal</button>
                                <button className={styles.cost}>Belt</button>
                                <button className={styles.cost}>Bags</button>
                                <button className={styles.cost}>Snacker</button>
                                <button className={styles.cost}>Denim</button>
                                <button className={styles.cost}>Minimog</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.plashka}>
                    <div className={styles.sort_plaska}>
                        <h3>Best selling </h3>

                    </div>
                    <div className={styles.tovar}>
                        <Plashka />

                    </div>
                    <div className={styles.box_page_plashka}>

                        {/* Array.from(Array(10).keys()) */}
                        {/* //=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] */}
                        {
                            Array.from(Array(Math.ceil(arr.length / 6)).keys()).map((item) => {
                                return <button className={`${styles.page_plashka} ${item + 1 == page ? `${styles.page_plashka_active}` : ""}`}
                                    onClick={(e) => {
                                        dispatch(setPage(item + 1))
                                    }}>{item + 1}</button>
                            })

                        }

                        {/* <button className="page_plashka" onClick={(e) => {

                            dispatch(setPage(1))
                        }}>1 </button>
                        <button className="page_plashka"
                            onClick={(e) => {
                                dispatch(setPage(2))
                            }}>2</button>
                        <button className="page_plashka" onClick={(e) => {
                            dispatch(setPage(3))
                        }}

                        >3 </button>
                        <button className="page_plashka" onClick={(e) => {
                            dispatch(setPage(4))
                        }}

                        >4 </button> */}
                        
                    </div>
                </div>
            </div>
            <Paeky />
        </div>
    )

}
export default Shop;