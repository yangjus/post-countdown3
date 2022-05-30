import React from "react"

const VegButton = (props) => {
    if (props.veg == false) {
        return (
            <>
            <button onClick={() => props.setVeg(true)}>Show Only Vegetarian</button>
            </>
        );
    }
    else {
        return (
            <>
            <button onClick={() => props.setVeg(false)}>Show All</button>
            </>
        );
    }
}

export default VegButton;