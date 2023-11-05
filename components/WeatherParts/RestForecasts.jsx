function RestForecasts(props) {
    const styles = props.styles;
    const forecast = props.forecast;
    const units = props.weatherData.units;

    return (
        <>
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
        </>
    );
  }

export default RestForecasts;