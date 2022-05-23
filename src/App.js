import './App.css';
import Location from './Location.js';

const API_KEY = process.env.REACT_APP_api_key;

document.title = "Weather App";

function App() {
  return (
    <div className="App">
      <h1>Weather Forecast API</h1>
      <Location api_key={API_KEY}/>
    </div>
  );
}

export default App;
