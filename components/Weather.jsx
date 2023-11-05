import styles from '../styles/Weather.module.css';
import {
    Actions, ExtraInfo, CurrentData,
    WeeklyForecast,
} from './WeatherParts';


function Weather(props) {
    const weatherData = props.weatherData;
    const isWeeklyForecastDisplayed = props.weatherData.forecast_type == "weekly";

    return (
        <>
        <div className={styles.weather}>
            <div className={styles.wrapper}>
                <Actions styles={styles} {...props} />
                <div className={styles.weatherData}>
                    <div className={styles.today}>
                        <ExtraInfo styles={styles} {...props} />
                        <CurrentData styles={styles} {...props} />

                        <div className={`${styles.forecasts} ${isWeeklyForecastDisplayed ? styles.weekly : ''}`}>
                        {isWeeklyForecastDisplayed ? (
                            <WeeklyForecast styles={styles} {...props} />
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