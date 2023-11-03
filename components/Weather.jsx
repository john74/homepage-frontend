"use client";

import styles from '../styles/Weather.module.css';
import { useState } from 'react';


function Weather(props) {

    const weatherData = props.weatherData;
    const [weeklyForecast, setWeeklyForecast] = useState(false);

    const refreshWeatherData = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const initOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: 'no-store'
        }

        const response = await fetch('http://localhost:3000/api/frontend/weather/', initOptions);
        if (response.ok) {
            const response_data = await response.json();
            props.setWeatherData(response_data);
        }
    };

    const saveForecastPreference = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("saveForecastPreference");
    };

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;


    return (
        <>
        <div className={styles.weather}>

            <div className={styles.wrapper}>

                <div className={styles.actions}>
                    <span className={styles.action} onClick={(event) => refreshWeatherData(event)}>Refresh data</span>
                    <span className={styles.action} onClick={(event) => setWeeklyForecast(!weeklyForecast)}>{weeklyForecast ? 'Hourly forecast' : 'Weekly forecast'}</span>
                </div>

                <div className={styles.weatherData}>

                    <div className={styles.today}>

                        <div className={styles.extraInfo}>
                                <div className={styles.info}>
                                    <span className={styles.label}>Feels like:</span>
                                    <span className={styles.value}>{weatherData.extra_info.feels_like_temperature}</span>
                                    <span className={styles.unit}>{weatherData.units.temperature_symbol}</span>
                                </div>

                                <div className={styles.info}>
                                    <span className={styles.label}>Min:</span>
                                    <span className={styles.value}>{weatherData.extra_info.minimum_temperature}</span>
                                    <span className={styles.unit}>{weatherData.units.temperature_symbol}</span>
                                </div>

                                <div className={styles.info}>
                                    <span className={styles.label}>Max:</span>
                                    <span className={styles.value}>{weatherData.extra_info.maximum_temperature}</span>
                                    <span className={styles.unit}>{weatherData.units.temperature_symbol}</span>
                                </div>

                                <div className={styles.info}>
                                    <span className={styles.label}>Wind:</span>
                                    <span className={styles.value}>{weatherData.extra_info.wind_speed}</span>
                                    <span className={styles.unit}>{weatherData.units.speed}</span>
                                </div>

                                <div className={styles.info}>
                                    <span className={styles.label}>Humidity:</span>
                                    <span className={styles.value}>{weatherData.extra_info.humidity_percentage}</span>
                                    <span className={styles.unit}>{weatherData.units.humidity}</span>
                                </div>

                                <div className={styles.info}>
                                    <span className={styles.label}>Sunrise:</span>
                                    <span className={styles.value}>{weatherData.extra_info.sunrise_time.hour}:{weatherData.extra_info.sunrise_time.minutes}</span>
                                </div>

                                <div className={styles.info}>
                                    <span className={styles.label}>Sunset:</span>
                                    <span className={styles.value}>{weatherData.extra_info.sunset_time.hour}:{weatherData.extra_info.sunset_time.minutes}</span>
                                </div>
                        </div>

                        <div className={styles.currentData}>

                            <div className={`${styles.group} ${styles.date}`}>
                                <span className={styles.weekDay}>{weatherData.current.week_day}</span>
                                <span className={styles.monthDay}>{weatherData.current.month_day}</span>
                                <span className={styles.month}>{weatherData.current.month}</span>
                                <span className={styles.year}>{weatherData.current.year}</span>
                            </div>

                            <div className={`${styles.group} ${styles.time}`}>
                                <span className={styles.hour}>{currentTime}</span>
                            </div>

                            <div className={`${styles.group} ${styles.location}`}>
                                <span className={styles.city}>{weatherData.current.city_name}</span>
                                <span className={styles.countryCode}>{weatherData.current.country_code}</span>
                            </div>

                            <div className={`${styles.group} ${styles.temperature}`}>
                                <span className={styles.degrees}>{weatherData.current.temp}</span>
                                <span className={styles.unit}>{weatherData.units.temperature_symbol}</span>
                                <span className={styles.description}>{weatherData.current.description}</span>
                            </div>

                        </div>

                        <div className={`${styles.forecasts} ${weeklyForecast ? styles.weekly : ''}`}>

                        {weeklyForecast ? (
                            <div className={`${styles.forecast} ${styles.weekly}`}>
                                {weatherData.forecasts.weekly.map((forecast, index) => (
                                    <div className={styles.item} key={`${forecast.week_day_short_name}-${index}`}>

                                        <div className={styles.mainData}>
                                            <div className={styles.top}>
                                                <span>{forecast.week_day_short_name}</span>
                                                <div className={styles.month}>
                                                    <span>{forecast.month_day}</span>
                                                    <span>{forecast.month_short_name}</span>
                                                </div>
                                                <div className={styles.time}>
                                                    <span>{forecast.earliest.hours}</span>
                                                    <span className={styles.separator}>:</span>
                                                    <span>{forecast.earliest.minutes}</span>
                                                </div>
                                            </div>

                                            <div className={styles.bottom}>
                                                <div className={styles.degrees}>
                                                    <span className={styles.value}>{forecast.earliest.temperature}</span>
                                                    <span className={styles.unit}>{weatherData.units.temperature_symbol}</span>
                                                </div>
                                                <div className={styles.description}>{forecast.earliest.description}</div>
                                            </div>

                                        </div>

                                        <div className={styles.restForecasts}>
                                            {forecast.rest.map((item, index) => (
                                            <div className={styles.itFor} key={`${forecast.week_day_short_name}-rest-${index}`}>
                                                <div>{`${item.hours}:${item.minutes}`}</div>
                                                <div>{item.temperature}</div>
                                                <div className={styles.unit}>{weatherData.units.temperature_symbol}</div>
                                                <div>{item.description}</div>
                                            </div>
                                            ))}
                                        </div>

                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className={`${styles.forecast} ${styles.hourly}`}>
                                {weatherData.forecasts.hourly.length ? (
                                    weatherData.forecasts.hourly.map(forecast => (
                                        <div className={styles.item} key={forecast.hours+forecast.temp}>
                                            <div className={styles.hours}>{`${forecast.hours}:${forecast.minutes}`}</div>
                                            <div className={styles.degrees}>
                                                <span className={styles.value}>{forecast.temperature}</span>
                                                <span className={styles.unit}>{weatherData.units.temperature_symbol}</span>
                                            </div>
                                            <div className={styles.description}>{forecast.description}</div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No forecasts to display</p>
                                )}
                            </div>
                        )}

                        </div>

                    </div>

                </div>

            </div>

        </div>
        </>
    );
  }

  export default Weather;