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
        <a href="https://github.com/EriDQuinn/weather-react">
          Open-source code,
        </a>
        by{" "}
        <a href="https://www.linkedin.com/in/erika-diaz-0b9857195/">
          Erika Díaz A.
        </a>{" "}
      </p>
    </div>
  );
}

export default App;
