import React from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import "./sing_in.css"

import { addUser,login } from '../Slices/SliceRegistr';
import { selectarrUser } from '../Slices/SliceRegistr';
import { useState, useEffect } from 'react';
function Sing_in() {
    const [localUser,setLocalUser] = useState();
    let Users = useSelector(selectarrUser);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigation = useNavigate()
    const dispatch = useDispatch();
    return (
        <div>
            <div className="box_main_sing">
                <div>
                    <img className="img_sing" src="https://i.imgur.com/fyFbr96.png" />
                </div>
                <div className="box_registr">
                    <div>
                        <p className="logo">FASCO</p>
                    </div>
                    <div >
                        <p className="textFASCO">Sign In To FASCO</p>
                        <div className='Sign_Google'>
                            <button className="but_Sign_up">
                                <img className='icon_Sign' src='https://i.imgur.com/gRXfggd.png' />Sign up with Google
                            </button>
                            <button className="but_Sign_up">
                                <img className='icon_Sign' src='https://i.imgur.com/pMIKUH8.png' /> Sign up with Email
                            </button>
                        </div>
                        <div className="text_or">
                            -OR-
                        </div>
                        <div className="box_registr">
                            <input placeholder="Email" className="inp_sing" onChange={(e) => {
                              //  setEmail(e.target.value)
                               // localStorage.setItem("key1",`${email}`);
                              //  console.log(localStorage.getItem("user"));
                               // setLocalUser(JSON.stringify(localStorage.getItem("user")));
                              //  console.log(localUser)
                            }} />
                            <input placeholder="Password" className="inp_sing" onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                            <button className="but_Sign_In" onClick={() => {
                                dispatch(login({email,password}))
                                navigation("/Shop")
                                // console.log(Users)
                                // for (let index = 0; index < Users.length; index++) {
                                //     if (email == Users[index].email) {
                                //         if (password == Users[index].Passwort) {             
                                //             navigation("/Shop")
                                //         }
                                //         else {
                                //             console.log("Не правильнй пароль")
                                //         }
                                //     }
                                //     else {
                                //         console.log("Не правильная почта ")
                                //     }
                                // }
                            }}>
                                Sign In
                            </button>
                            <button className="but_registr_now">
                                Register Now
                            </button>
                            <div className="box_password">

                                <a>Forget Password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sing_in;