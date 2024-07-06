import React from "react";
import Navigation from "../Navigation/Navigation";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import styles from'../Demo_chekpoint/demo_chekpoint.module.css'
import stylesHomepage from '../Homepage/homepage.module.css';
import { selectItemCorzina, deletItem, quantityPlus, quantityMinus } from "../Slices/SliceCorzina";

import { useState, useEffect } from 'react';
function Demo_chek(params) {


    const [payment, setPayment] = useState(true);
    let items = useSelector(selectItemCorzina);
    return (
        <div>
            
            <div className={styles.mainDemo}>
                <div>
                    <h1>
                        FASCO Demo Checkout
                    </h1>
                </div>
                <div className={styles.mainContent}>
                    <div className={styles.box_delivery}>
                        <div>
                            <div className={styles.mainContent}>
                                <h1>
                                    Contact
                                </h1>
                                <p>
                                    Have an account? Create Account
                                </p>
                            </div>
                            <div className={styles.mainContent}>
                                <input className={`${styles.inputWidh} ${styles.input_delivery}`} placeholder="Email Address" />
                            </div>
                        </div>
                        <div className={styles.box}>
                            <h1>
                                Delivery
                            </h1>
                            <div className={styles.mainContent}>
                                <input className={`${styles.inputWidh} ${styles.input_delivery}`} placeholder="Country / Region" />
                            </div>
                            <div className={styles.mainContent}>
                                <input className={`${styles.inputWidh} ${styles.input_delivery}`} placeholder="First Name" />
                                <input className={`${styles.inputWidh} ${styles.input_delivery}`} placeholder="Last Name" />
                            </div>
                            <div className={styles.mainContent}>
                                <input className={`${styles.inputWidh} ${styles.input_delivery}`} placeholder="Address" />
                            </div>
                            <div className={styles.mainContent}>
                                <input className={`${styles.inputWidh} ${styles.input_delivery}`} placeholder="City" />
                                <input className={`${styles.inputWidh} ${styles.input_delivery}`} placeholder="Postal Code" />
                            </div>
                        </div>
                        <div className={styles.payment}>
                            <div className={`${payment == true ? `${styles.activePayment}` : `${styles.deactivePayment}`}`} onClick={() => {
                                if (payment == true) {
                                    setPayment(false)
                                }
                                if (payment !== true) {
                                    setPayment(true)
                                }
                            }}>
                                {/* {`${payment == true ? "activePaymentCard" : "deactivePaymentCard"}`} */}
                            </div>

                            <div className={styles.test123} style={{ height: `${payment ?  "77px":  "400px"}` }} >
                                <div className={styles.h_Credit} onClick={() => {
                                if (payment == true) {
                                    setPayment(false)
                                }
                                if (payment !== true) {
                                    setPayment(true)
                                }
                            }}>
                                    <h3 >
                                        Credit Card2
                                    </h3>
                                    <img alt="React logo" className={styles.credit_card_img} src="https://i.imgur.com/CymQ7z4.png" />
                                </div>
                                <div className="" style={{ background: `${payment ? "#F5F5F5" : "white"}` }}>
                                    <div className={styles.mainContent}>
                                        <input className={`${styles.inputWidh} ${styles.input_delivery}`} placeholder="Card Number" />
                                    </div>
                                    <div className={styles.mainContent}>
                                        <input className={`${styles.inputWidh} ${styles.input_delivery}`} placeholder="Expiration Date " />
                                        <input className={`${styles.inputWidh} ${styles.input_delivery}`} placeholder="Security Code" />
                                    </div>
                                    <div className={styles.mainContent}>
                                        <input className={`${styles.inputWidh} ${styles.input_delivery}`} placeholder="Card Holder Name" />
                                    </div>
                                </div>
                                <div className={styles.save_this}>
                                    <input type="checkbox" />
                                    <p>
                                        Save This Info for future
                                    </p>
                                </div>
                                <button className={styles.play_now}>
                                    Play Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box_corzina}>
                        {
                            items.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className={styles.box_corzina_items}>
                                            <div >
                                                <img alt="React logo" className={styles.box_img_items} src={item.img} />
                                            </div>
                                            <div>
                                                <h2>
                                                    {item.name}
                                                </h2>
                                                <p>
                                                    {item.color}
                                                </p>
                                            </div>
                                            <div>
                                                {item.cost}
                                            </div>
                                        </div>
                                        <div>
                                            <input placeholder="Discount code" />
                                            <button>
                                                Apply
                                            </button>
                                        </div>
                                        <div>
                                            <div>
                                                <h3>
                                                    Subtotal
                                                </h3>
                                                <p>

                                                </p>
                                            </div>
                                            <div>
                                                <h3>
                                                    Shipping
                                                </h3>
                                                <p>

                                                </p>
                                            </div>
                                            <div>
                                                <h3>
                                                    Total
                                                </h3>
                                                <p>

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )



}
export default Demo_chek;


