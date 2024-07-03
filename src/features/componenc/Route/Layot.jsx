import React from 'react';
import Navigation from "../Navigation/Navigation.jsx";
import Paeky from "../paeky_blinder/peaky_blinders.jsx"
import styles from '../Homepage/homepage.module.css';
import Footer from './Footer.jsx';
import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Sing_in from '../PageRegistrIn/Sing_in.jsx'
import { useEffect, useState } from 'react';
import { selectMinMax, selectBrands, selectArr, selectPage } from '../Slices/SliceRegistr.js';
import { selectCurrentUser } from '../Slices/SliceRegistr.js';
import { addUser, newLogin } from '../Slices/SliceRegistr.js';
import { selectList, downloadList } from '../Slices/SliceList.js';
import { createComments, commentName } from '../Slices/SliceCommt.js';
import { createRoot } from 'react-dom/client';
import { useTranslation, initReactI18next } from "react-i18next";
import Support from './Support.jsx'; // Импортируем компонент поддержки

import i18next from './i18n.js'
function Layot() {
    const [tempory, setTempory] = useState(true);
    let arrComments = useSelector(createComments);
    const [list, setList] = useState();
    let temp = useSelector(selectCurrentUser)
    let arrList = useSelector(selectList)
    const [date, setDate] = useState(new Date(3600 * 24 * 1000));
    const [event, setEvent] = useState(new Date());
    const [lang,  setLang] = useState("Eng");
    console.log(temp);
    const dispatch = useDispatch();
    console.log(event);
    useEffect(() => {
        if (localStorage.getItem("user") !== null) {
            console.log(localStorage.getItem("user"));
            if (localStorage.getItem("user") !== undefined) {
                console.log(localStorage.getItem("user"))
                console.log(JSON.parse(localStorage.getItem("user")));//null
                let temp = JSON.parse(localStorage.getItem("user"));
                console.log(typeof (localStorage.getItem("user")))
                dispatch(newLogin(
                    {
                        First_Name: temp.First_Name,
                        Last_Name: temp.Last_Name,
                        Password: temp.Password,
                        email: temp.email,
                        Phone_Number: temp.Phone_Number,
                        imgUserIcon: temp.imgUserIcon
                    }))
            }

        }
    }, [])
    const changeLanguageHandler = (lang) => {
        console.log(lang)
        i18next.changeLanguage(lang)
        console.log(i18next.languages);
    }

    return (
        <>
            <div className={styles.box_header}>
                <div className={styles.box_logo}>
                    <Link to="/"><p className={styles.logo}>
                        {/* {t("FASCO")} */}
                        {i18next.t("main.component.title")}

                    </p>
                    </Link>
                </div>
                <div className={styles.box_navig}>
                    <Navigation />
                    <div>
                        <select  name='Сменить яз' onChange={(e) => {
                            // document.location.reload();
                          //  localStorage.setItem("lang",JSON.stringify(e.target.value));
                            changeLanguageHandler(e.target.value);
                            
                            console.log(localStorage.getItem("lang"));
                            console.log(e.target.value);
                            document.location.reload();
                        }}>
                            <option value="" onClick={(e) => {
                                //    changeLanguageHandler(e.target.value)
                                // console.log(true)
                                setLang(e.target.value)
                                
                            }}>Сменить яз</option>
                            <option value="ru" onClick={(e) => {
                                //    changeLanguageHandler(e.target.value)
                                // console.log(true)
                                setLang(e.target.value);
                                
                            }}>Ru</option>
                            <option value="en"
                                onClick={(e) => {
                                    //    changeLanguageHandler(e.target.value)
                                    //  console.log(false)
                                    setLang(e.target.value)
                                }}
                            >Eng</option>
                            <option value="ua"
                                onClick={(e) => {
                                    //    changeLanguageHandler(e.target.value)
                                    //  console.log(false)
                                    setLang(e.target.value)
                                }}>Ua</option>
                        </select>

                    </div>
                </div>
            </div>
            <Outlet />
            {/* <div className={tempory ? styles.support : styles.supportArea} onClick={() => {
                if (tempory) {
                    setTempory(false);
                }
                console.log(true)
                // if (!tempory) {
                //     setTempory(true);
                // }
            }}> */}
            {/* <div className={styles.boxContent_support}> */}
            <Support />
            {/* <div className={styles.supportManager}>
                        <img className={styles.supportImg} src='https://i.imgur.com/HiQSyaJ.png' />
                        <p>Поддержка</p>
                        <button onClick={() => {
                            console.log(true)
                            if (!tempory) {
                                setTempory(true);
                            }
                        }}> X</button>
                    </div>
                    <div>
                        <div className={styles.Box_list}>
                            {
                                arrList.map((item, index) => {
                                    return <div key={index} className={styles.list}>
                                        <p>
                                        {/* {new Date(item.date).toLocaleString('en-GB', { timeZone: 'UTC' }).replaceAll('/', '.')} */}
            {/* {item.date.toLocaleString('en-GB', { timeZone: 'UTC' }).replaceAll('/', '.')}
                                        </p>
                                        <p>{item.text}</p>
                                    </div> */}
            {/* })
                            } */}
            {/* sk-proj-xM9hD3rxTaCuB4sJN4cUT3BlbkFJSEnoxauNHY0Qb938ed7Y */}
            {/* </div>
                    </div>
                    <div className={styles.Box_but_list}>
                        <input className={styles.input_list} onChange={(e) => {
                            setList(e.target.value)
                        }} />
                    </div>
                    <div className={styles.Box_but_list}>
                        <button className={styles.but_list} onClick={() => {
                            dispatch(downloadList({ text: list, date: (new Date(event).toLocaleString('en-GB', { timeZone: 'UTC' })) }))
                        }}>
                            Ответить
                        </button>
                    </div> */}
            {/* </div> */}
            {/* </div > */}
            <Footer />
        </>
    )



}


export default Layot;