import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const INIT_URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"; // Default weather image

export default function InfoBox({ weatherInfo }) {
    return (
        <div className="info-box">
            <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="Weather"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {weatherInfo.city || "No city selected"}
                    </Typography>

                    {weatherInfo.temp ? (
                        <>
                            <Typography variant="body1" sx={{ mt: 1 }}>
                                🌡️ Temperature: <strong>{(weatherInfo.temp - 273.15).toFixed(1)}°C</strong>
                            </Typography>
                            <Typography variant="body2">
                                Min: {(weatherInfo.temp_min - 273.15).toFixed(1)}°C | 
                                Max: {(weatherInfo.temp_max - 273.15).toFixed(1)}°C
                            </Typography>
                            <Typography variant="body2">
                                💧 Humidity: <strong>{weatherInfo.humidity}%</strong>
                            </Typography>
                            <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
                                ☁️ Condition: <strong>{weatherInfo.weather}</strong>
                            </Typography>
                        </>
                    ) : (
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
                            Search for a city to see weather info.
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}