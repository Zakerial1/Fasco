import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addUser } from '../Slices/SliceRegistr';
import { selectarrUser } from '../Slices/SliceRegistr';
import "../PageRegistrIn/sing_in.css"
import axios from 'axios';
function Sing_Up() {

    let MinMax = useSelector(selectarrUser);
    const dispatch = useDispatch();
    const [First_Name, setFirst_Name] = useState();
    const [Last_Name, setLast_Name] = useState();
    const [email, setEmail] = useState();
    const [Phone_Number, setPhone_Number] = useState();
    const [Password, setPassword] = useState();
    
    // useEffect(()=>{
    //     const ARR = {'client_id': GOOGLE_CLIENT_ID,
    //         'redirect_uri': GOOGLE_REDIRECT_URI,
    //         'response_type': 'code',
    //         'scope': GOOGLE_SCOPES.join(" "),
    //         'include_granted_scopes': 'true',
    //         'state': 'pass-through value'
    //     }
    //     console.log(`${GOOGLE_AUTH_URI}?response_type=code&redirect_uri=${GOOGLE_REDIRECT_URI}&client_id=479684631489-4dtme99m3c9htjil6k43i8pv443hrjf5.apps.googleusercontent.com&scope=${GOOGLE_SCOPES.join(" ")}`);
    // },[])
    // const [URLsGoogle, setURLsGoogle] = useState(`${GOOGLE_AUTH_URI}`, ApiGoogle())
    return (
        <div>
            <div className="box_main_sing">
                <div>
                    <img className="img_sing" src="https://i.imgur.com/iZlod2m.png" />
                </div>
                <div className="box_registr">
                    <div className='box_logoFASCO'>
                        <p className="logo">FASCO</p>
                    </div>
                    <div >
                        <div className='box_Sign_Google'>
                            <p className="textFASCO">Sign In To FASCO</p>
                            <div className='Sign_Google'>
                                <button className="but_Sign_up">
                                    <img className='icon_Sign' src='https://i.imgur.com/gRXfggd.png' onClick={() => {
                                        
                                    }} />
                                    {/* <a href ={`${URLsGoogle}`} >
                                        Sign up with Google
                                    </a> */}
                                </button>
                                <button className="but_Sign_up">
                                    <img className='icon_Sign' src='https://i.imgur.com/pMIKUH8.png' /> Sign up with Email
                                </button>
                            </div>
                            <div className="text_or">
                                -OR-
                            </div>
                        </div>
                        <div className="box_registr">
                            <div className='box_registr_row'>
                                <input placeholder="First Name" className="inp_sing" onChange={(e) => {
                                    setFirst_Name(e.target.value)
                                }} />
                                <input placeholder="Last Name " className="inp_sing"
                                    onChange={(e) => {
                                        setLast_Name(e.target.value)
                                    }} />
                            </div>
                            <div className='box_registr_row'>
                                <input placeholder="Email Address" className="inp_sing"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} />
                                <input placeholder="Phone Number" className="inp_sing"
                                    onChange={(e) => {
                                        setPhone_Number(e.target.value)
                                    }} />
                            </div>
                            <div className='box_registr_row'>
                                <input placeholder="Password" className="inp_sing" onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />
                                <input placeholder="Confirm Password" className="inp_sing" onChange={(e) => {
                                    if (e.target.value == Password) {
                                        console.log("пароли совпадают")
                                        return
                                    }
                                }} />

                            </div>
                            <Link to={"/Shop"}>
                                <button className="but_Sign_In" onClick={() => {
                                    dispatch(addUser({
                                        First_Name: First_Name,
                                        Last_Name: Last_Name,
                                        Password: Password,
                                        email: email,
                                        Phone_Number: Phone_Number,
                                        id: MinMax.lenght,
                                        imgUserIcon: "https://i.imgur.com/fwWAahU.jpg"
                                    }))
                                    console.log(First_Name,
                                        Last_Name,
                                        Password,
                                        email,
                                        Phone_Number, MinMax)
                                }}>
                                    Sign Up
                                </button>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sing_Up