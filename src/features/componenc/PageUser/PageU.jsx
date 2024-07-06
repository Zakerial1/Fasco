import React from 'react'
import Navigation from "../Navigation/Navigation";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addUser, login, newLogin, deleteUser } from '../Slices/SliceRegistr';
import { useState, useEffect } from 'react';
import { selectarrUser, selectCurrentUser } from '../Slices/SliceRegistr';
import styles from './pageU.module.css'
import axios from 'axios'
function PageU() {
    let CurrentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const [now_email, setNow_email] = useState();
    const [now_password, setNow_password] = useState();
    const [now_Name, setNow_Name] = useState();
    const [now_LastName, setNow_LastName] = useState();
    const [now_numberPhone, setNow_numberPhone] = useState();
    const [imgUser, setImgUser] = useState('https://i.imgur.com/fwWAahU.jpg');
    const [imgDonload, setImgDonload] = useState();

    //   $.ajax({
    //     url: "https://api.imgur.com/3/image",
    //     type: "POST",
    //     datatype: "json",
    //     headers: {
    //       "Authorization": "Client-ID aca6d2502f5bfd8"
    //     },
    //     data: formData,
    //     success: function(response) {
    //       console.log(response);
    //       var photo = response.data.link;
    //       var photo_hash = response.data.deletehash;
    //     },
    //     cache: false,
    //     contentType: false,
    //     processData: false
    //   });


    return (
        <div>
            <div className={styles.box_main_user}>
                <h1>
                    Настройка аккаунта
                    <Link to={"/Shop"}>
                        <button className={styles.but_Sign}>
                            Назад
                        </button>
                    </Link>
                </h1>
                <div className={styles.box_setting}>
                    <div className={styles.box_user_info}>
                        <img alt="React logo" className={styles.img_User} src={`${CurrentUser.imgUserIcon}`} />
                        <div className={styles.box_info_user}>
                            <p className={styles.setting_profil}>
                                Имя: {CurrentUser.First_Name}
                            </p>
                            <textarea className={styles.inp_setting_profil} onChange={(e) => {
                                setNow_Name(e.target.value)
                            }}>
                                {CurrentUser.First_Name}
                            </textarea>
                        </div>
                        <div className={styles.box_info_user}>
                            <p className={styles.setting_profil}>
                                Фамилия:  {CurrentUser.Last_Name}
                            </p>
                            <textarea className={styles.inp_setting_profil} onChange={(e) => {
                                setNow_LastName(e.target.value)
                            }}>
                                {CurrentUser.Last_Name}
                            </textarea>
                        </div>
                        <div className={styles.box_info_user}>
                            <p className={styles.setting_profil}>
                                Емайл: {CurrentUser.email}
                            </p>
                            <textarea className={styles.inp_setting_profil} onChange={(e) => {
                                setNow_email(e.target.value)
                            }}>
                                {CurrentUser.email}
                            </textarea>
                        </div>
                        <div className={styles.box_info_user}>
                            <p className={styles.setting_profil}>
                                Пароль: {CurrentUser.Password}
                            </p>
                            <textarea className={styles.inp_setting_profil} onChange={(e) => {
                                setNow_password(e.target.value)
                            }}>
                                {CurrentUser.Password}
                            </textarea>
                        </div>
                        <div className={styles.box_info_user}>
                            <p className={styles.setting_profil}>
                                Номер телефона: {CurrentUser.Phone_Number}
                            </p>
                            <textarea className={styles.inp_setting_profil} onChange={(e) => {
                                setNow_numberPhone(e.target.value)
                            }}>
                                {CurrentUser.Phone_Number}
                            </textarea>
                        </div>
                        <div className={styles.box_user_info}>
                        </div>
                        {/* <input className={styles.inp_setting_profil}
                            placeholder='href'
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onChange={(e) => {
                                var formData = new FormData();
                                console.log(formData)
                                formData.append("image", e.target.files[0]);
                                setImgDonload(formData);
                            }}
                        /> */}

                        <input type="file" id="myFile" onChange={() => {


                        }} />



                        <button className={styles.but_Sign} onClick={() => {


                            // var formData = new FormData();
                            // formData.append("image", document.getElementById("#myFile")[0].files[0]);

                            // axios.post("https://api.imgur.com/3/image", imgDonload, {
                            //     url: "https://api.imgur.com/3/image",
                            //     type: "POST",
                            //     datatype: "json",
                            //     headers: {
                            //         "Authorization": "Client-ID aca6d2502f5bfd8"
                            //     },
                            //     data: formData,
                            //     success: function (response) {
                            //         console.log(response);
                            //         var photo = response.data.link;
                            //         var photo_hash = response.data.deletehash;
                            //     },
                            //     cache: false,
                            //     contentType: false,
                            //     processData: false
                            // });

                            // axios.post("https://api.imgur.com/3/image", imgDonload, {
                            //     headers: {
                            //         'Authorization': `Client-ID ec61027faa2ed94`
                            //     }
                            // }).then((response) => {
                            //     console.log(response.data);
                            // })
                            dispatch(newLogin(
                                {
                                    First_Name: now_Name,
                                    Last_Name: now_LastName,
                                    Password: now_password,
                                    email: now_email,
                                    Phone_Number: now_numberPhone,
                                    imgUserIcon: imgUser
                                }

                            ))
                        }}>
                            Сохранить
                        </button>

                        <Link to={'/'}>
                            <button onClick={() => {
                                dispatch(deleteUser())
                            }}>
                                Выйти
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageU;