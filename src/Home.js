import React from "react";
import Navbar from "./Navbar.js";
import logo from './logo.svg';

const Home = () => {
    return (
        <>
        <Navbar />
        <h1>Homepage</h1>
        <h3>All applications use API.</h3>
        <h3>A culmination of countdown projects built by Justin Yang to learn React</h3>
        <img src={logo} className="App-logo" alt="logo" />
        </>
    );
    
}

export default Home;