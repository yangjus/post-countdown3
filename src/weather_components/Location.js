import React, {useState, useRef, useEffect} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Coordinates from './Coordinates.js';
import Navbar from '../Navbar.js';

const Location = (props) => {

    const zipcodeForm = useRef();
    const countrycodeForm = useRef();
    const [zipcode, setZipcodeInfo] = useState("");
    const [countrycode, setCountrycodeInfo] = useState("");
    const [urlNew, setUrl] = useState("");

    const handleZipCode = () => {
        const form = zipcodeForm.current;
        console.log(form.value);
        setZipcodeInfo(form.value);
    };

    const handleCountryCode = () => {
        const form = countrycodeForm.current;
        console.log(form.value);
        setCountrycodeInfo(form.value);
    };

    const url = new URL("http://api.openweathermap.org/geo/1.0/zip");

    const [renderWeather, setRenderWeather] = useState(false);

    const findCoordinates = () => {
        let good_url = "";
        let zipInput = zipcode;
        let zip = zipInput.toString();
        zip += ',';
        zip += countrycode;
        url.searchParams.append("zip", zip);
        url.searchParams.append("appid", props.api_key);
        good_url += url.toString().replace("%2C",",");
        {/*console.log(good_url)*/};
        console.log(typeof good_url);
        setUrl(good_url);
        setRenderWeather(true);
    };

    return (
        <>
        <Navbar />
        <h1>Weather Forecast App</h1>
        <h3>Location Input</h3>
        <p>Input your zip code and 
            <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes" target="_blank"> ISO 3166 (Alpha-2) </a> 
            country code for latitude and longitude (e.g. E14, GB):</p>
        <TextField id="zip" name="zip" label="Zip Code" variant="outlined" inputRef={zipcodeForm} />
        <Button variant="contained" onClick={handleZipCode}>Submit Zip Code</Button>
        <p> </p>
        <TextField id="country" name="country" label="Country Code" variant="outlined" inputRef={countrycodeForm} />
        <Button variant="contained" onClick={handleCountryCode}>Submit Country Code</Button>
        <p> </p>
        <Button variant="contained" onClick={findCoordinates}>Display Weather Forecast</Button>
        {renderWeather && <Coordinates weather_url={urlNew} api_key={props.api_key}/>}
        </>
    );
}

export default Location;