import React, { useState, useCallback } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { selectList, downloadList } from '../Slices/SliceList.js'; // Исправьте пути в зависимости от структуры вашего проекта

import styles from '../Homepage/homepage.module.css';

const SupportChat = () => {
    const [input, setInput] = useState('');
    const [responses, setResponses] = useState([]);
    const [tempory, setTempory] = useState(true);
    const dispatch = useDispatch();
    const arrList = useSelector(selectList);

    const apiKey = 'sk-proj-xM9hD3rxTaCuB4sJN4cUT3BlbkFJSEnoxauNHY0Qb938ed7Y';

    // const fetchChatResponse = useCallback(_.debounce(async (query) => {
    //     try {
    //         const result = await axios.post('https://api.openai.com/v1/chat/completions', {
    //             model: 'gpt-3.5-turbo',
    //             messages: [
    //                 {
    //                     role: 'system',
    //                     content: 'You are a poetic assistant, skilled in explaining complex programming concepts with creative flair.'
    //                 },
    //                 {
    //                     role: 'user',
    //                     content: query
    //                 }
    //             ]
    //         }, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${apiKey}`
    //             }
    //         });
    //         setResponses(prevResponses => [...prevResponses, result.data.choices[0].message.content]);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // }, 1000), []);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSend = async (query) => {

        try {
            const result = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a poetic assistant, skilled in explaining complex programming concepts with creative flair.'
                    },
                    {
                        role: 'user',
                        content: query
                    }
                ]
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                }
            });
            setResponses(prevResponses => [...prevResponses, result.data.choices[0].message.content]);
        } catch (error) {
            // console.error('Error fetching data:', error);
        }
        dispatch(downloadList({ text: input, date: (new Date().toLocaleString('en-GB', { timeZone: 'UTC' })) }));
        setInput('');
    };

    return (
        <div className={tempory ? styles.support : styles.supportArea} >
            <div className={styles.boxContent_support}>
                <div className={styles.supportManager}>
                    <img  className={styles.supportImg} src='https://i.imgur.com/HiQSyaJ.png' alt='Support' onClick={() => setTempory(false)} />
                    <p>Поддержка</p>
                    <button onClick={() => setTempory(true)

                    }> X</button>
                </div>
                <div>
                    <div className={styles.Box_list}>
                        {arrList.map((item, index) => (

                            <div key={index} className={styles.list}>
                                {/* {console.log(tempory)} */}
                                {/* <p>{item.date}</p> */}
                                <p>{item.text}</p>
                            </div>
                        ))}
                        {responses.map((response, index) => (
                            <div key={index} className={styles.list}>
                                <p>{new Date().toLocaleString('en-GB', { timeZone: 'UTC' })}</p>
                                <p>{response}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.Box_but_list}>
                    <input
                        className={styles.input_list}
                        value={input}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.Box_but_list}>
                    <button className={styles.but_list} onClick={handleSend}>
                        Ответить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SupportChat;