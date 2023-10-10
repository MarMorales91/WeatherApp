import {useState, useEffect} from 'react';
import styles from "../styles/Home.module.css"
import { addRequestMeta } from 'next/dist/server/request-meta';

function App() {
  const [city, setCity] = useState("Los Angeles");
  const [triggerFetch, setTriggerFetch] = useState("true");
  const [weatherData, setWeatherData] = useState();
  const [unitSystem, setUnitSystem] = useState("metric");

  useEffect(() =>{
    const getData = async() =>{
      const res = await fetch("api/data", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({city})
      });
      const data = await res.json();
      setWeatherData({...data});
      setCity('');
    };
    getData()
  }, [triggerFetch])


  console.log(weatherData)


  return (
    <div className={styles.wrapper}>
      <p>Weather App Wrapper</p>
    </div>
  )
}

export default App