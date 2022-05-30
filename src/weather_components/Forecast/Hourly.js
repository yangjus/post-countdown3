import React, {useState} from "react";
import Grid from '@mui/material/Grid';
import IndividualHour from './IndividualHour.js';

const Hourly = (props) => {

    const [hour, setHour] = useState(1);
    const [loop, setLoop] = useState(true);
    const [ampm, setAmpm] = useState("");

    const data = props.request;

    const parseTime = () => {
        console.log(props.time);
        const time_colon = props.time.split(":")[0];
        let parsed_time = time_colon.split(" ")[1];
        console.log(parsed_time);
        console.log(typeof parsed_time);
        setHour(parsed_time);
        setAmpm(props.time.split(" ")[2]);
        setLoop(false);
    };
    
    if (loop) {
        parseTime();
    }

    let rows = [];
    for (let i = 1; i < 24; i++) {
        rows.push(<IndividualHour timeString={props.time} hoursPast={i} ampm={ampm} main={data[i].weather[0].main} icon={data[i].weather[0].icon}
            desc={data[i].weather[0].description} temp={data[i].temp} humidity={data[i].humidity} wind={data[i].wind_speed}/>);
    }

    const borderStyle = {
        border: '1px solid black',
    };

    return(
        <>
        <h3>Hourly Weather:</h3>
        <Grid container spacing={1} style={borderStyle}>
        <Grid item xs={1}>
            <h4><strong>Weather:</strong></h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>Conditions:</p>
            <p>Temperature:</p>
            <p>Humidity:</p>
            <p>Wind Speed:</p>
        </Grid>
            {rows}
        </Grid>
        </>
    );
}

export default Hourly;