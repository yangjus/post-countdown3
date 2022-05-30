import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        API Built Website
                    </Typography>
                    <Link to="/" style={linkStyle}>
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to="/weather" style={linkStyle}>
                        <Button color="inherit">Weather Forecast App</Button>
                    </Link>
                    <Link to="/trivia" style={linkStyle}>
                        <Button color="inherit">Trivia App</Button>
                    </Link>
                    <Link to="/menu" style={linkStyle}>
                        <Button color="inherit">Food Menu App</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
    
}

export default Navbar;