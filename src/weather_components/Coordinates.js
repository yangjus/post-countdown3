import React, {useState, useEffect} from "react";
import Weather from './Weather.js';

const Coordinates = (props) => {

    const coords_url = props.weather_url.toString();
    const url = new URL("https://api.openweathermap.org/data/2.5/onecall?");

    const [data, setData] = useState();
    const [newUrl, setUrl] = useState("");

    useEffect(() => {
        fetch(coords_url)
        .then((res) => res.json())
        .then(jsonData => {
            findUrl(jsonData);
            setData(jsonData);
        })
    }, [])

    const findUrl = (coord_data) => {
        let good_url = "";
        url.searchParams.append("lat", coord_data.lat);
        url.searchParams.append("lon", coord_data.lon);
        url.searchParams.append("exclude", "minutely,alerts")
        url.searchParams.append("units", "imperial")
        url.searchParams.append("appid", props.api_key);
        good_url += url.toString()
        {/*console.log(good_url)*/};
        setUrl(good_url);
    };

    if (data) {
        return (
            <>
            {/*{JSON.stringify(data, null, 2)}*/}
            <p>Latitude: {data.lat} | Longitude: {data.lon}</p>
            <Weather weather_url={newUrl} api_key={props.api_key} city_name={data.name}/>
            </>
        );
    } else {
        return (
        <h1>Loading...</h1>
        );
    }
}

export default Coordinates;