import { useState } from "react";
import Menu from "./Menu.js";
import VegButton from "./VegButton.js";
import Navbar from "../Navbar.js";

const MenuApp = () => {
  const menu = 
  {
    "breakfast": [
      {"food": "pancakes", "price": 5.00, "vegetarian": true},
      {"food": "waffles", "price": 5.00, "vegetarian": true},
      {"food": "orange juice", "price": 2.00, "vegetarian": true}
    ],
    "lunch": [
      {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
      {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
      {"food": "hamburger", "price": 8.00, "vegetarian": false}
    ],
    "dinner": [
      {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
      {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
      {"food": "chili", "price": 8.00, "vegetarian": false}
    ]
  }

  const [Veg, setVeg] = useState(false);
  return (
    <div>
      <Navbar />
      <h1>Simple Menu App</h1>
      <VegButton veg={Veg} setVeg={setVeg}/>
      <h4>Breakfast</h4>
      {menu.breakfast.map((entre) => <Menu food={entre.food} price={entre.price} isVeg={entre.vegetarian} toggleVeg={Veg}/>)}
      <h4>Lunch</h4>
      {menu.lunch.map((entre) => <Menu food={entre.food} price={entre.price} isVeg={entre.vegetarian} toggleVeg={Veg}/>)}
      <h4>Dinner</h4>
      {menu.dinner.map((entre) => <Menu food={entre.food} price={entre.price} isVeg={entre.vegetarian} toggleVeg={Veg}/>)}
    </div>
  );
}

export default MenuApp;