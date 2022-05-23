import React from "react";
import Grid from '@mui/material/Grid';

const Current = (props) => {

    const icon_url = "https://openweathermap.org/img/wn/";
    const icon_url2 = "@2x.png";
    const data = props.request;

    return(
        <>
        <h3>Current Weather:</h3>
        <Grid container spacing={5}>
            <Grid item xs={5} align="right">
                <h4><strong>{data.weather[0].main}</strong></h4>
                <img src={icon_url + data.weather[0].icon + icon_url2} alt={data.weather[0].description + "icon"}/>
            </Grid>
            <Grid item xs={7} align="left">
                <br></br>
                <p>Conditions: {data.weather[0].description}.</p>
                <p>Temperature: {data.temp} &#8457;, feels like {data.feels_like} &#8457;</p>
                <p>Humidity: {data.humidity}%</p>
                <p>Wind Speed: {data.wind_speed} mph</p>
            </Grid>
        </Grid>
        </>
    );
}

export default Current;