"use client";

import styles from '../styles/Weather.module.css';
import { useState } from 'react';


function Weather(props) {

    const la = {'current': {'week_day': 'Day', 'month_day': '31', 'month': 'October', 'year': '2023', 'hours': '12', 'minutes': '00', 'city_name': 'Amsterdam', 'country_code': 'NL', 'lat': 52.4016, 'lon': 4.9328, 'temp': 12.62, 'description': 'light rain'}, 'extra_info': {'feels_like_temperature': 12.08, 'minimum_temperature': 12.62, 'maximum_temperature': 13.71, 'humidity_percentage': 82, 'wind_speed': 2.28, 'sunrise_time': {'hour': '06', 'minutes': '33'}, 'sunset_time': {'hour': '16', 'minutes': '14'}}, 'forecasts': {'hourly': [{'hours': '15', 'minutes': '00', 'temperature': 11.39, 'description': 'light rain', 'feels_like_temperature': 10.93, 'minimum_temperature': 11.05, 'maximum_temperature': 11.39, 'humidity_percentage': 90, 'wind_speed': 2.89}, {'hours': '18', 'minutes': '00', 'temperature': 10.44, 'description': 'moderate rain', 'feels_like_temperature': 9.94, 'minimum_temperature': 10.44, 'maximum_temperature': 10.44, 'humidity_percentage': 92, 'wind_speed': 1.33}, {'hours': '21', 'minutes': '00', 'temperature': 10.37, 'description': 'light rain', 'feels_like_temperature': 9.97, 'minimum_temperature': 10.37, 'maximum_temperature': 10.37, 'humidity_percentage': 96, 'wind_speed': 2.82}], 'weekly': [{'week_day_short_name': 'Wed', 'week_day_full_name': 'Wednesday', 'month_short_name': 'Nov', 'month_full_name': 'November', 'month_day': '01', 'month_digit': '11', 'earliest': {'hour': '09', 'minute': '00', 'temperature': 11.98, 'description': 'light rain', 'feels_like_temperature': 11.61, 'min_temperature': 11.98, 'max_temperature': 11.98, 'humidity_percent': 91, 'wind_speed': 5.86}, 'rest': [{'hour': '15', 'minute': '00', 'temperature': 12.07, 'description': 'light rain', 'feels_like_temperature': 11.5, 'min_temperature': 12.07, 'max_temperature': 12.07, 'humidity_percent': 83, 'wind_speed': 7.95}, {'hour': '18', 'minute': '00', 'temperature': 11.57, 'description': 'light rain', 'feels_like_temperature': 10.87, 'min_temperature': 11.57, 'max_temperature': 11.57, 'humidity_percent': 80, 'wind_speed': 8.45}, {'hour': '21', 'minute': '00', 'temperature': 10.49, 'description': 'light rain', 'feels_like_temperature': 9.71, 'min_temperature': 10.49, 'max_temperature': 10.49, 'humidity_percent': 81, 'wind_speed': 6.07}]}, {'week_day_short_name': 'Thu', 'week_day_full_name': 'Thursday', 'month_short_name': 'Nov', 'month_full_name': 'November', 'month_day': '02', 'month_digit': '11', 'earliest': {'hour': '09', 'minute': '00', 'temperature': 11.18, 'description': 'moderate rain', 'feels_like_temperature': 10.63, 'min_temperature': 11.18, 'max_temperature': 11.18, 'humidity_percent': 87, 'wind_speed': 9.39}, 'rest': [{'hour': '15', 'minute': '00', 'temperature': 10.59, 'description': 'light rain', 'feels_like_temperature': 9.43, 'min_temperature': 10.59, 'max_temperature': 10.59, 'humidity_percent': 66, 'wind_speed': 11.45}, {'hour': '18', 'minute': '00', 'temperature': 10.62, 'description': 'light rain', 'feels_like_temperature': 9.41, 'min_temperature': 10.62, 'max_temperature': 10.62, 'humidity_percent': 64, 'wind_speed': 10.37}, {'hour': '21', 'minute': '00', 'temperature': 9.85, 'description': 'overcast clouds', 'feels_like_temperature': 6.44, 'min_temperature': 9.85, 'max_temperature': 9.85, 'humidity_percent': 63, 'wind_speed': 8.15}]}, {'week_day_short_name': 'Fri', 'week_day_full_name': 'Friday', 'month_short_name': 'Nov', 'month_full_name': 'November', 'month_day': '03', 'month_digit': '11', 'earliest': {'hour': '09', 'minute': '00', 'temperature': 7.8, 'description': 'scattered clouds', 'feels_like_temperature': 4.66, 'min_temperature': 7.8, 'max_temperature': 7.8, 'humidity_percent': 81, 'wind_speed': 5.43}, 'rest': [{'hour': '15', 'minute': '00', 'temperature': 9.11, 'description': 'light rain', 'feels_like_temperature': 6.05, 'min_temperature': 9.11, 'max_temperature': 9.11, 'humidity_percent': 81, 'wind_speed': 6.19}, {'hour': '18', 'minute': '00', 'temperature': 8.38, 'description': 'light rain', 'feels_like_temperature': 4.83, 'min_temperature': 8.38, 'max_temperature': 8.38, 'humidity_percent': 92, 'wind_speed': 7.08}, {'hour': '21', 'minute': '00', 'temperature': 9.54, 'description': 'light rain', 'feels_like_temperature': 6.85, 'min_temperature': 9.54, 'max_temperature': 9.54, 'humidity_percent': 93, 'wind_speed': 5.43}]}, {'week_day_short_name': 'Sat', 'week_day_full_name': 'Saturday', 'month_short_name': 'Nov', 'month_full_name': 'November', 'month_day': '04', 'month_digit': '11', 'earliest': {'hour': '09', 'minute': '00', 'temperature': 8.36, 'description': 'overcast clouds', 'feels_like_temperature': 4.46, 'min_temperature': 8.36, 'max_temperature': 8.36, 'humidity_percent': 85, 'wind_speed': 8.3}, 'rest': [{'hour': '15', 'minute': '00', 'temperature': 10.34, 'description': 'light rain', 'feels_like_temperature': 9.7, 'min_temperature': 10.34, 'max_temperature': 10.34, 'humidity_percent': 87, 'wind_speed': 8.21}, {'hour': '18', 'minute': '00', 'temperature': 11.18, 'description': 'light rain', 'feels_like_temperature': 10.57, 'min_temperature': 11.18, 'max_temperature': 11.18, 'humidity_percent': 85, 'wind_speed': 8.35}, {'hour': '21', 'minute': '00', 'temperature': 10.41, 'description': 'light rain', 'feels_like_temperature': 9.73, 'min_temperature': 10.41, 'max_temperature': 10.41, 'humidity_percent': 85, 'wind_speed': 8.04}]}, {'week_day_short_name': 'Sun', 'week_day_full_name': 'Sunday', 'month_short_name': 'Nov', 'month_full_name': 'November', 'month_day': '05', 'month_digit': '11', 'earliest': {'hour': '09', 'minute': '00', 'temperature': 10.79, 'description': 'light rain', 'feels_like_temperature': 9.96, 'min_temperature': 10.79, 'max_temperature': 10.79, 'humidity_percent': 78, 'wind_speed': 7.19}, 'rest': []}]}}

    const [weatherData, setWeatherData] = useState(la);

    const refreshWeatherData = async () => {
        const initOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }

        const response = await fetch('http://localhost:3000/api/frontend/weather/', initOptions);
        if (response.ok) {
            const response_data = await response.json();
            setWeatherData(response_data)
        }
    };

    const saveForecastPreference = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        console.log("saveForecastPreference");
    };

    const [weeklyForecast, setWeeklyForecast] = useState(false);
    const toggleForecast = () => {
        setWeeklyForecast(!weeklyForecast);
        saveForecastPreference(event);
    }

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;

    return (
        <>
        <div className={styles.weather}>

            <div className={styles.wrapper}>

                <div className={styles.actions}>
                    <span className={styles.action} onClick={refreshWeatherData}>Refresh data</span>
                    <span className={styles.action} onClick={(event) => toggleForecast(event)}>{weeklyForecast ? 'Hourly forecast' : 'Weekly forecast'}</span>
                </div>

                <div className={styles.weatherData}>

                    <div className={styles.today}>

                        <div className={styles.extraInfo}>
                                <div className={styles.info}>
                                    <span className={styles.label}>Feels like:</span>
                                    <span className={styles.value}>19</span>
                                </div>

                                <div className={styles.info}>
                                    <span className={styles.label}>Wind:</span>
                                    <span className={styles.value}>19mph</span>
                                </div>

                                <div className={styles.info}>
                                    <span className={styles.label}>Humidity:</span>
                                    <span className={styles.value}>50%</span>
                                </div>

                                <div className={styles.info}>
                                    <span className={styles.label}>Sunrise:</span>
                                    <span className={styles.value}>06:00</span>
                                </div>

                                <div className={styles.info}>
                                    <span className={styles.label}>Sunset:</span>
                                    <span className={styles.value}>19:00</span>
                                </div>

                                <div className={styles.info}>
                                    <span className={styles.label}>Min:</span>
                                    <span className={styles.value}>10°</span>
                                </div>

                                <div className={styles.info}>
                                    <span className={styles.label}>Max:</span>
                                    <span className={styles.value}>15°</span>
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
                                <span className={styles.degrees}>{weatherData.current.temp}°</span>
                                <span className={styles.unit}>C</span>
                                <span className={styles.description}>{weatherData.current.description}</span>
                            </div>

                        </div>

                        <div className={`${styles.forecasts} ${weeklyForecast ? styles.weekly : ''}`}>

                        {weeklyForecast ? (
                            <div className={`${styles.forecast} ${styles.weekly}`}>
                                {weatherData.forecasts.weekly.map((forecast, index) => (
                                    <div className={styles.item} key={`${forecast.week_day_short_name}-${index}`}>
                                        <div className={styles.top}>
                                            <span>{forecast.week_day_short_name}</span>
                                            <div className={styles.month}>
                                                <span>{forecast.month_day}</span>
                                                <span>{forecast.month_short_name}</span>
                                            </div>
                                        </div>

                                        <div className={styles.bottom}>
                                            <div className={styles.degrees}>
                                                <span className={styles.value}>{`${forecast.earliest.temperature}°`}</span>
                                                <span className={styles.unit}>C</span>
                                            </div>
                                            <div className={styles.description}>{forecast.earliest.description}</div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className={`${styles.forecast} ${styles.hourly}`}>
                                {weatherData.forecasts.hourly.map(forecast => (
                                    <div className={styles.item} key={forecast.hours+forecast.temp}>
                                        <div className={styles.hours}>{`${forecast.hours}:${forecast.minutes}`}</div>
                                        <div className={styles.degrees}>
                                            <span className={styles.value}>{forecast.temperature}°</span>
                                            <span className={styles.unit}>C</span>
                                        </div>
                                        <div className={styles.description}>{forecast.description}</div>
                                    </div>
                                ))}
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