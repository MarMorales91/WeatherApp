export default async function handler(req, res) {
    const {city} = req.body;
    const getWeatherData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API}`
    )
    const data = await getWeatherData.json();
    res.status(200).json(data)
}