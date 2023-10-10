import Image from "next/image";
import { ctoF } from "@/services/converter";
import styles from "./MainCard.module.css"

export const MainCard = ({
    city,
    country,
    description,
    iconName,
    unistSystem,
    weatherData
}) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.location}>
                {city}, {country}
            </h1>
            <p className={styles.description}>{description}</p>
            <Image
                width='300px'
                height="300px"
                src={`/icons/${iconName}.svg`}
                alt="weatherIcon"
            />
            <h1 className={styles.temperature}>
                {unistSystem == "metric"
                    ? Math.round(weatherData.main.temp)
                    : Math.round(ctoF(weatherData.main.temp))}
                &deg;{unistSystem == "metric" ? "C": "F"} 
            </h1>
            <p>
                Feels like{" "}
                {unistSystem == "metric"
                    ? Math.round(weatherData.main.feels_like)
                    : Math.round(ctoF(weatherData.main.feels_like))}
                &deg;{unistSystem =="metric" ? "C" : "F"}
            </p>
        </div>
    )
}