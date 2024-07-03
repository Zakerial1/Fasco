import React, { useState, useEffect } from 'react';
import styles from '../Homepage/homepage.module.css'
const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = targetDate - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (value) => String(value).padStart(2, '0');

    return (
        <div className={styles.timer}>

            {timeLeft.days > 0 && <p className={styles.timer_year}>
                <div>
                    <div className={styles.timer_box}>
                        {formatTime(timeLeft.days)}
                    </div>
                    <p className={styles.timer_name}>Days</p>
                </div>
            </p>
            }
            <p className={styles.timer_days}>
                <div className={styles.timer_box_widh}>
                    <div className={styles.timer_box}>
                        {formatTime(timeLeft.hours)}
                    </div>
                    <p className={styles.timer_name}>Hr</p>
                </div>
                <div className={styles.timer_box_widh}>
                    <div className={styles.timer_box}>
                        {formatTime(timeLeft.minutes)}
                    </div>
                    <p className={styles.timer_name}>Mins</p>
                </div>
                <div className={styles.timer_box_widh}>
                    <div className={styles.timer_box}>
                        {formatTime(timeLeft.seconds)}
                    </div>
                        <p className={styles.timer_name}>Sec</p>
                </div>

            </p>
        </div>
    );
};

export default CountdownTimer;