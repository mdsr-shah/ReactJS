import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function SearchBox({updateWeatherInfo}) {

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d6a4e0bb96a1ecd5bbd925cba68fddd5";

    let getWeather = async (city) => {
        console.log(API_KEY);
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
       let data = await response.json();
       console.log(data);
       let result = {
        city:city,
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        humidity: data.main.humidity,
        weather: data.weather[0].description,
    }
    console.log(result);
    return result;
    }

    let [city, setCity] = useState("");
    let handleChange = (e) => {
        setCity(e.target.value);
    }
    let handleSubmit = async (e) => {
        e.preventDefault();
        setCity("");
        let newInfo = await getWeather(city);
        updateWeatherInfo(newInfo);
    } 
    return (
        <>
            <form onSubmit={handleSubmit}>
               <TextField
               label="City Name" 
               variant="outlined" 
               id="city" required value={city}
               onChange={handleChange}/> 
            
            <Button variant="contained" 
            type="submit">Send</Button>
            </form>
        </>
    );
}