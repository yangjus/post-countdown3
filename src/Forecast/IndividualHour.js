import React, {useState} from "react";
import Grid from '@mui/material/Grid';

const IndividualHour = (props) => {

    const icon_url = "https://openweathermap.org/img/wn/";
    const icon_url2 = "@2x.png";

    const borderStyle = {
        border: '1px solid black',
    };

    const [loop, setLoop] = useState(true);
    const [time, setTime] = useState(1);
    const [ampm, setAmpm] = useState(props.ampm);

    const Time = (hoursPast, hour) => {
        setTime(time + parseInt(hour));
        setTime(time + hoursPast);
        if (props.hoursPast > 11) {
            setTime(time + hoursPast - 12);
            if (ampm == "AM") {
                setAmpm("PM");
            }
            if (ampm == "PM") {
                setAmpm("AM");
            }
        }
        setLoop(false);
    };

    if (loop) {
        Time(props.hoursPast, props.time);
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