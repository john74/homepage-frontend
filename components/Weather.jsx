"use client";

import styles from '../styles/Weather.module.css';
import { useState } from 'react';


function Weather(props) {
    const la = {
        "units":{
          "temperature_symbol":"°C",
          "temperature_unit":"Celsius",
          "speed":"m/s",
          "humidity":"%",
          "pressure":"hPa",
          "visibility":"m"
        },
        "current":{
          "week_day":"False",
          "month_day":"03",
          "month":"November",
          "year":"2023",
          "hours":"12",
          "minutes":"00",
          "city_name":"Landsmeer",
          "country_code":"NL",
          "lat":52.4016,
          "lon":4.9328,
          "temp":10.78,
          "description":"light rain"
        },
        "extra_info":{
          "feels_like_temperature":10.05,
          "minimum_temperature":10.78,
          "maximum_temperature":11.8,
          "humidity_percentage":82,
          "wind_speed":7.88,
          "sunrise_time":{
            "hour":"06",
            "minutes":"39"
          },
          "sunset_time":{
            "hour":"16",
            "minutes":"08"
          }
        },
        "forecasts":{
          "hourly":[
            {
              "hours":"15",
              "minutes":"00",
              "temperature":10.81,
              "description":"light rain",
              "feels_like_temperature":10.04,
              "minimum_temperature":10.81,
              "maximum_temperature":11.08,
              "humidity_percentage":80,
              "wind_speed":7.5
            },
            {
              "hours":"18",
              "minutes":"00",
              "temperature":10.13,
              "description":"light rain",
              "feels_like_temperature":9.37,
              "minimum_temperature":10.13,
              "maximum_temperature":10.13,
              "humidity_percentage":83,
              "wind_speed":7.53
            },
            {
              "hours":"21",
              "minutes":"00",
              "temperature":9.18,
              "description":"overcast clouds",
              "feels_like_temperature":5.9,
              "minimum_temperature":9.18,
              "maximum_temperature":9.18,
              "humidity_percentage":78,
              "wind_speed":6.94
            }
          ],
          "weekly":[
            {
              "week_day_short_name":"Sat",
              "week_day_full_name":"Saturday",
              "month_short_name":"Nov",
              "month_full_name":"November",
              "month_day":"04",
              "month_digit":"11",
              "earliest":{
                "hour":"09",
                "minute":"00",
                "temperature":8.66,
                "description":"overcast clouds",
                "feels_like_temperature":5.24,
                "min_temperature":8.66,
                "max_temperature":8.66,
                "humidity_percent":84,
                "wind_speed":6.92
              },
              "rest":[
                {
                  "hour":"15",
                  "minute":"00",
                  "temperature":8.31,
                  "description":"moderate rain",
                  "feels_like_temperature":4.35,
                  "min_temperature":8.31,
                  "max_temperature":8.31,
                  "humidity_percent":90,
                  "wind_speed":8.46
                },
                {
                  "hour":"18",
                  "minute":"00",
                  "temperature":9.52,
                  "description":"light rain",
                  "feels_like_temperature":6.38,
                  "min_temperature":9.52,
                  "max_temperature":9.52,
                  "humidity_percent":90,
                  "wind_speed":6.82
                },
                {
                  "hour":"21",
                  "minute":"00",
                  "temperature":9.35,
                  "description":"light rain",
                  "feels_like_temperature":6.1,
                  "min_temperature":9.35,
                  "max_temperature":9.35,
                  "humidity_percent":86,
                  "wind_speed":7.01
                }
              ]
            },
            {
              "week_day_short_name":"Sun",
              "week_day_full_name":"Sunday",
              "month_short_name":"Nov",
              "month_full_name":"November",
              "month_day":"05",
              "month_digit":"11",
              "earliest":{
                "hour":"09",
                "minute":"00",
                "temperature":9.87,
                "description":"overcast clouds",
                "feels_like_temperature":7.03,
                "min_temperature":9.87,
                "max_temperature":9.87,
                "humidity_percent":88,
                "wind_speed":6.16
              },
              "rest":[
                {
                  "hour":"15",
                  "minute":"00",
                  "temperature":10.85,
                  "description":"moderate rain",
                  "feels_like_temperature":10.05,
                  "min_temperature":10.85,
                  "max_temperature":10.85,
                  "humidity_percent":79,
                  "wind_speed":8.48
                },
                {
                  "hour":"18",
                  "minute":"00",
                  "temperature":10.42,
                  "description":"light rain",
                  "feels_like_temperature":9.63,
                  "min_temperature":10.42,
                  "max_temperature":10.42,
                  "humidity_percent":81,
                  "wind_speed":8.37
                },
                {
                  "hour":"21",
                  "minute":"00",
                  "temperature":10.67,
                  "description":"light rain",
                  "feels_like_temperature":9.86,
                  "min_temperature":10.67,
                  "max_temperature":10.67,
                  "humidity_percent":79,
                  "wind_speed":8.49
                }
              ]
            },
            {
              "week_day_short_name":"Mon",
              "week_day_full_name":"Monday",
              "month_short_name":"Nov",
              "month_full_name":"November",
              "month_day":"06",
              "month_digit":"11",
              "earliest":{
                "hour":"09",
                "minute":"00",
                "temperature":10.98,
                "description":"light rain",
                "feels_like_temperature":10.22,
                "min_temperature":10.98,
                "max_temperature":10.98,
                "humidity_percent":80,
                "wind_speed":7.61
              },
              "rest":[
                {
                  "hour":"15",
                  "minute":"00",
                  "temperature":11.15,
                  "description":"light rain",
                  "feels_like_temperature":10.36,
                  "min_temperature":11.15,
                  "max_temperature":11.15,
                  "humidity_percent":78,
                  "wind_speed":6.5
                },
                {
                  "hour":"18",
                  "minute":"00",
                  "temperature":9.9,
                  "description":"light rain",
                  "feels_like_temperature":7.38,
                  "min_temperature":9.9,
                  "max_temperature":9.9,
                  "humidity_percent":83,
                  "wind_speed":5.24
                },
                {
                  "hour":"21",
                  "minute":"00",
                  "temperature":9.37,
                  "description":"light rain",
                  "feels_like_temperature":7.03,
                  "min_temperature":9.37,
                  "max_temperature":9.37,
                  "humidity_percent":88,
                  "wind_speed":4.45
                }
              ]
            },
            {
              "week_day_short_name":"Tue",
              "week_day_full_name":"Tuesday",
              "month_short_name":"Nov",
              "month_full_name":"November",
              "month_day":"07",
              "month_digit":"11",
              "earliest":{
                "hour":"09",
                "minute":"00",
                "temperature":10.3,
                "description":"light rain",
                "feels_like_temperature":9.37,
                "min_temperature":10.3,
                "max_temperature":10.3,
                "humidity_percent":76,
                "wind_speed":5.31
              },
              "rest":[
                {
                  "hour":"15",
                  "minute":"00",
                  "temperature":10.2,
                  "description":"light rain",
                  "feels_like_temperature":9.16,
                  "min_temperature":10.2,
                  "max_temperature":10.2,
                  "humidity_percent":72,
                  "wind_speed":5.06
                },
                {
                  "hour":"18",
                  "minute":"00",
                  "temperature":8.88,
                  "description":"broken clouds",
                  "feels_like_temperature":7.09,
                  "min_temperature":8.88,
                  "max_temperature":8.88,
                  "humidity_percent":77,
                  "wind_speed":3.13
                },
                {
                  "hour":"21",
                  "minute":"00",
                  "temperature":8.78,
                  "description":"light rain",
                  "feels_like_temperature":6.98,
                  "min_temperature":8.78,
                  "max_temperature":8.78,
                  "humidity_percent":83,
                  "wind_speed":3.11
                }
              ]
            }
          ]
        }
      }

    const [weatherData, setWeatherData] = useState(la);
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
            setWeatherData(response_data);
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