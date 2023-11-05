import styles from '../styles/Weather.module.css';
import {
    Actions, ExtraInfo, CurrentData,
    Forecasts,
} from './WeatherParts';


function Weather(props) {

    return (
        <>
        <div className={styles.weather}>
            <div className={styles.wrapper}>
                <Actions styles={styles} {...props} />
                <div className={styles.weatherData}>
                    <div className={styles.today}>
                        <ExtraInfo styles={styles} {...props} />
                        <CurrentData styles={styles} {...props} />
                        <Forecasts styles={styles} {...props} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
  }

export default Weather;