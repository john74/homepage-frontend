import styles from '../styles/Weather.module.css';
import {
    Actions, ExtraInfo, CurrentData,
    WeeklyForecast, HourlyForecast,
} from './WeatherParts';


function Weather(props) {
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
                                <HourlyForecast styles={styles} {...props} />
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