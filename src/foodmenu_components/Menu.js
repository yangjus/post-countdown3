import React from "react"

const Menu = (props) => {
    if (props.toggleVeg == true) {
        return (
            <>
            {props.isVeg == true ? (<p>{props.food} (${props.price})</p>) :
            null}
            </>
        );
    }
    else {
        return (
            <>
            <p>{props.food} (${props.price})</p>
            </>
        );
    }
}

export default Menu;