import { toast } from "react-hot-toast";


function Actions(props) {
    const refreshWeatherData = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const initOptions = {
            cache: 'no-store',
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }

        const response = await fetch(
            'http://localhost:3000/api/frontend/weather/',
            initOptions
        )
        .catch(error => {
            return {error: error}
        })

        if (response?.error || response?.status == 500) {
            toast.error("It appears that our system is currently unresponsive. Please try again later.");
            return;
        }

        const responseJSON = await response.json();

        if (responseJSON?.error) {
            toast.error(responseJSON.error);
            return;
        } else {
            toast.success(responseJSON.message);
            props.setWeatherData(responseJSON);
        }
    };

    const forecastType = props.weatherData.forecast_type;
    const updateForecastType = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const forecastTypeSwitch = {
            "hourly": "weekly",
            "weekly": "hourly"
        }

        const newDefaultType = forecastTypeSwitch[forecastType];
        const initOptions = {
            cache: 'no-store',
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"forecast_type": newDefaultType}),
        }

        const response = await fetch('http://localhost:3000/api/settings/update/', initOptions);
        if (response.ok) {
            const responseJSON = await response.json();
            const settings = responseJSON.settings;
            const updatedWeatherData = { ...props.weatherData, forecast_type: settings.forecast_type };
            props.setWeatherData(updatedWeatherData);
        }
    };

    const forecastActionTexts = {
        "hourly": "Weekly forecast",
        "weekly": "Hourly forecast"
    }

    const styles = props.styles;

    return (
        <>
        <div className={styles.actions}>
            <span className={styles.action} onClick={(event) => refreshWeatherData(event)}>Refresh data</span>
            <span className={styles.action} onClick={(event) => updateForecastType(event)}>{forecastActionTexts[forecastType]}</span>
        </div>
        </>
    );
  }

export default Actions;