import {
    Top,
} from './';


function WeeklyForecast(props) {
    const styles = props.styles;
    const forecasts = props.weatherData.forecasts.weekly;
    const units = props.weatherData.units;

    return (
        <>
        <div className={`${styles.forecast} ${styles.weekly}`}>
        {forecasts.map((forecast, index) => (
            <div className={styles.item} key={`${forecast.week_day_short_name}-${index}`}>

                <div className={styles.mainData}>
                    <Top forecast={forecast} {...props}/>

                    <div className={styles.bottom}>
                        <div className={styles.degrees}>
                            <span className={styles.value}>{forecast.earliest.temperature}</span>
                            <span className={styles.unit}>{units.temperature_symbol}</span>
                        </div>
                        <div className={styles.description}>{forecast.earliest.description}</div>
                    </div>

                </div>

                <div className={styles.restForecasts}>
                {forecast.rest.map((item, index) => (
                    <div className={styles.itFor} key={`${forecast.week_day_short_name}-rest-${index}`}>
                        <div>{`${item.hours}:${item.minutes}`}</div>
                        <div>{item.temperature}</div>
                        <div className={styles.unit}>{units.temperature_symbol}</div>
                        <div>{item.description}</div>
                    </div>
                ))}
                </div>

            </div>
        ))}
        </div>
        </>
    );
  }

export default WeeklyForecast;