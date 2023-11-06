"use client";
import { useEffect, useState } from "react";


function CurrentData(props) {
    const styles = props.styles;
    const currentData = props.weatherData.current;
    const units = props.weatherData.units;

    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
      }

    const currentDate = props.currentDate;
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');

    const [currentTime, setCurrentTime] = useState(`${hours}:${minutes}`);

    useEffect(() => {
        /*
            Calculate the time remaining until the next minute from the moment the page is first rendered.
            If there are, for example, 20 seconds remaining in the current minute,
            we don't need to wait a full 60 seconds to update the time.
            This interval adjusts for the remaining seconds, ensuring accurate and timely updates.
        */
        const interval = 60000 - new Date().getSeconds() * 1000;
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, interval);

        return () => clearInterval(intervalId);
    }, [currentTime]);

    return (
        <>
        <div className={styles.currentData}>
            <div className={`${styles.group} ${styles.date}`}>
                <span className={styles.weekDay}>{currentData.week_day}</span>
                <span className={styles.monthDay}>{currentData.month_day}</span>
                <span className={styles.month}>{currentData.month}</span>
                <span className={styles.year}>{currentData.year}</span>
            </div>

            <div className={`${styles.group} ${styles.time}`}>
                <span className={styles.hour}>{currentTime}</span>
            </div>

            <div className={`${styles.group} ${styles.location}`}>
                <span className={styles.city}>{currentData.city_name}</span>
                <span className={styles.countryCode}>{currentData.country_code}</span>
            </div>

            <div className={`${styles.group} ${styles.temperature}`}>
                <span className={styles.degrees}>{currentData.temp}</span>
                <span className={styles.unit}>{units.temperature_symbol}</span>
                <span className={styles.description}>{currentData.description}</span>
            </div>
        </div>
        </>
    );
  }

export default CurrentData;