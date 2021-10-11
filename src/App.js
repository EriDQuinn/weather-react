import "./App.css";
import SearchWeather from "./SearchWeather.js";
import Forecast from "./Forecast.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Enter a City to search the weather</h2>
        <SearchWeather></SearchWeather>
      </header>
      <Forecast></Forecast>

      <p>
        <a href="">Open-source code,</a>by <a href="">Erika D.</a>{" "}
      </p>
    </div>
  );
}

export default App;
