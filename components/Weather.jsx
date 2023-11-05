import styles from '../styles/Weather.module.css';
import {
    Actions, ExtraInfo,
} from './WeatherParts';


function Weather(props) {
    const weatherData = props.weatherData;

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;

    const isWeeklyForecastDisplayed = props.weatherData.forecast_type == "weekly";

    return (
        <>
        <div className={styles.weather}>
            <div className={styles.wrapper}>
                <Actions styles={styles} {...props} />
                <div className={styles.weatherData}>
                    <div className={styles.today}>
                        <ExtraInfo styles={styles} {...props} />
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

                        <div className={`${styles.forecasts} ${isWeeklyForecastDisplayed ? styles.weekly : ''}`}>

                        {isWeeklyForecastDisplayed ? (
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