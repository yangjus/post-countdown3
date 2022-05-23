import React, {useState, useEffect} from "react";
import Current from './Forecast/Current.js';
import Hourly from './Forecast/Hourly.js';

const Weather = (props) => {

    const [data, setData] = useState();
    const [time, setTime] = useState("");
    const [loop, setLoop] = useState(true);
    const [cityTime, setCityTime] = useState("");

    useEffect(() => {
        fetch(props.weather_url)
        .then((res) => res.json())
        .then(jsonData => setData(jsonData))
    }, [])

    const findTime = (cityTimezone) => {
        let today = new Date();
        {/*
        let curTime = "";
        if (today.getHours() > 12) {
            curTime += (today.getHours()-12) + ':' + today.getMinutes() + " PM";
        }
        else {
            curTime += today.getHours() + ':' + today.getMinutes() + " AM";
        }
        */}
        let localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setTime(today.toLocaleString('en-US', {timeZone: localTimezone}));
        setCityTime(today.toLocaleString('en-US', {timeZone: cityTimezone}));
        setLoop(false);
    };

    if (data) {
        if (loop) {
            findTime(data.timezone);
        }
        return (
            <>
            <p>Your Current Date: {time} | {props.city_name} Local Date: {cityTime}</p>
            <h2>Forecast for {props.city_name}</h2>
            <Current request={data.current}/>
            <Hourly request={data.hourly} time={cityTime}/>
            </>
        );
    } else {
        return (
        <h1>Loading...</h1>
        );
    }
}

export default Weather;