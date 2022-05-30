import React, {useState} from "react";
import Grid from '@mui/material/Grid';

const IndividualHour = (props) => {

    const icon_url = "https://openweathermap.org/img/wn/";
    const icon_url2 = "@2x.png";

    const borderStyle = {
        border: '1px solid black',
    };

    const [loop, setLoop] = useState(true);
    const [time, setTime] = useState(parseInt(props.time));
    const [ampm, setAmpm] = useState(props.ampm);

    const Time = (hoursPast) => {
        /*setTime(time + hoursPast)*/;
        if (props.hoursPast > 11) {
            /*setTime(time - 12)*/
            if (ampm == "AM") {
                setAmpm("PM");
            }
            if (ampm == "PM") {
                setAmpm("AM");
            }
        }
    };

    const CurrentTime = () => {
        const time_colon = props.timeString.split(":")[0];
        let parsed_time = time_colon.split(" ")[1];
        
        {/* cannot update state when calling setState() multiple times in one call*/}
        setTime(time + parseInt(parsed_time));
        console.log(time);
        setLoop(false);
    };

    if (loop) {
        CurrentTime();
        Time(props.hoursPast);
    }

    return(
        <>
        <Grid item xs={1} style={borderStyle}>
            <h3>{time}:00 {ampm}</h3>
            <h4>{props.main}</h4>
            <img src={icon_url + props.icon + icon_url2} alt={props.desc + "icon"}/>
            <p>{props.desc}</p>
            <p>{props.temp} &#8457;</p>
            <p>{props.humidity}%</p>
            <p>{props.wind} mph</p>
        </Grid>
        </>
    );
}

export default IndividualHour;