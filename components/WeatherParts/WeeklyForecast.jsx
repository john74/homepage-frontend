import {
    Top, Bottom, RestForecasts,
} from './';


function WeeklyForecast(props) {
    const styles = props.styles;
    const forecasts = props.weatherData.forecasts.weekly;

    return (
        <>
        <div className={`${styles.forecast} ${styles.weekly}`}>
        {forecasts.map((forecast, index) => (
            <div className={styles.item} key={`${forecast.week_day_short_name}-${index}`}>
                <div className={styles.mainData}>
                    <Top forecast={forecast} {...props}/>
                    <Bottom forecast={forecast} {...props}/>
                    <RestForecasts forecast={forecast} {...props}/>
                </div>
            </div>
        ))}
        </div>
        </>
    );
  }

export default WeeklyForecast;