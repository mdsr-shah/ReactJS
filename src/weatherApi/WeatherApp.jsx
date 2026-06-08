import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({});

    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h3>Weather App</h3>
            <SearchBox updateWeatherInfo={updateWeatherInfo} />
            <InfoBox weatherInfo={weatherInfo} />
        </div>
    )
}