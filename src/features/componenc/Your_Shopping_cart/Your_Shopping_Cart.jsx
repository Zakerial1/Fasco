import React from "react";
import { useState, useEffect } from 'react';
import Navigation from "../Navigation/Navigation";
import { useParams } from 'react-router-dom';
import { selectArr } from '../Slices/SlicePlashka';
import styles from '../Your_Shopping_cart/your_shopping_cart.module.css';
import stylesHomepage from '../Homepage/homepage.module.css';
import { selectItemCorzina, deletItem, quantityPlus, quantityMinus } from "../Slices/SliceCorzina";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import Cart_page from "../Cart_page/Cart_page";
function ShoppingCard() {
    const dispatch = useDispatch();
    let items = useSelector(selectItemCorzina);
    let total = 0;
    for (let index = 0; index < items.length; index++) {
        total += items[index].quantityArr * items[index].cost
        console.log(total)
    }
    return (
        <div>
            <div>
            
            </div>
            <div className={styles.box_main}>
                <div className={styles.box_Shopping}>
                    <h1>Shopping Cart</h1>
                </div>
                <div className={styles.box_character}>
                    <h2>
                        Product
                    </h2>
                    <h2>
                        Price
                    </h2>
                    <h2>
                        Quantity
                    </h2>
                    <h2>
                        Total
                    </h2>
                </div>
                <div>

                    <hr></hr>
                </div>
                <div>
                    {console.log(items)}
                    {items.map((item, index) => {
                        return (
                            <div key={index} className={styles.box_character}>
                                <div className={styles.box_product}>
                                    <div className={styles.box_product_img}>
                                        <img src={item.img} style={{ width: '130px' }} />
                                        <div className={styles.box_description}>
                                            <p>
                                                {item.name}
                                            </p>
                                            <p className={styles.text_color_grey}>Color : {item.color}</p>
                                            <p className={styles.text_color_grey} onClick={() => {
                                                dispatch(deletItem(index))
                                            }}>Remove</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3>
                                        ${item.cost}.00
                                    </h3>
                                </div>
                                <div className={styles.box_quantity_corzina}>
                                    <button className={styles.box_quantity_temp} onClick={() => {
                                        if (item.quantityArr == 1) {
                                            dispatch(deletItem(index))
                                            return
                                        }
                                        dispatch(quantityMinus({ index: index, quantityArr: 1 }))
                                    }}>
                                        <img className={styles.icon_actions} src="https://i.imgur.com/jzEYtX5.png" />
                                    </button>
                                    <p className={`${styles.box_quantity_temp} ${styles.p_quantity}`}>
                                        {item.quantityArr}
                                    </p>
                                    <button className={styles.box_quantity_temp} onClick={() => {
                                        dispatch(quantityPlus({ index: index, quantityArr: 1 }))
                                    }}>
                                        <img className={styles.icon_actions} src="https://i.imgur.com/1aVIRQy.png" />
                                    </button>
                                </div>
                                <div>
                                    <h3 className={styles.h3_quantity}>
                                        ${item.cost * item.quantityArr}.00
                                    </h3>
                                </div>
                            </div>
                        )
                    })}
                    <div>
                        <button onClick={() => {
                            dispatch(deletItem())
                        }}>
                            Очистить корзину
                        </button>
                    </div>
                    <div className={styles.box_store}>
                        <div className={styles.box_subtotal}>
                            <div >
                                <div className={styles.box_checkbox}>
                                    <input type={styles.checkbox}/>
                                    <p>
                                        For $10.00 please wrap the product
                                    </p>
                                </div>
                                <hr></hr>
                            </div>
                            <div>
                                <div className={styles.box_subtotal}>
                                    <div className={styles.total}>
                                        <h2>
                                            Subtotal
                                        </h2>
                                        <h2>
                                            {total}.00
                                        </h2>
                                        {

                                        }
                                    </div>
                                    <div>
                                        <Link to={`/Shop/ShoppingCard/DemoChek`}>
                                        <button className={`${styles.but_Sign} ${styles.but_checkbox}`}>
                                            Checkout

                                        </button>
                                        </Link>
                                    </div>
                                    <div>
                                        <a>
                                            View Cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Cart_page />
            </div>
        </div>
    )
}
export default ShoppingCard;