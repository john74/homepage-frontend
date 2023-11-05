import {
    WeeklyForecast, HourlyForecast
} from './';


function Forecasts(props) {
    const styles = props.styles;

    return (
        <>
        <div className={`${styles.forecasts} ${props.weatherData.forecast_type == "weekly" ? styles.weekly : ''}`}>
        {props.weatherData.forecast_type == "weekly"
            ? <WeeklyForecast {...props} />
            : <HourlyForecast {...props} />}
        </div>
        </>
    );
  }

export default Forecasts;