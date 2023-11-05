function HourlyForecast(props) {
    const styles = props.styles;
    const forecasts = props.weatherData.forecasts.hourly;
    const units = props.weatherData.units;

    return (
        <>
        <div className={`${styles.forecast} ${styles.hourly}`}>
            {forecasts.length ? (
                forecasts.map(forecast => (
                    <div className={styles.item} key={forecast.hours+forecast.temp}>
                        <div className={styles.hours}>{`${forecast.hours}:${forecast.minutes}`}</div>
                        <div className={styles.degrees}>
                            <span className={styles.value}>{forecast.temperature}</span>
                            <span className={styles.unit}>{units.temperature_symbol}</span>
                        </div>
                        <div className={styles.description}>{forecast.description}</div>
                    </div>
                ))
            ) : (
                <p>No forecasts to display</p>
            )}
        </div>
        </>
    );
  }

export default HourlyForecast;