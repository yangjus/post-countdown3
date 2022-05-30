import './App.css';
import Location from './weather_components/Location.js';
import Home from './Home.js';
import Error from './Error.js';
import TriviaApp from './trivia_components/TriviaApp.js';
import MenuApp from './foodmenu_components/MenuApp.js';
import { Routes, Route } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_api_key;

document.title = "Multipage Application";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/weather" element={<Location api_key={API_KEY}/>} />
        <Route path="/trivia" element={<TriviaApp/>} />
        <Route path="/menu" element={<MenuApp/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
