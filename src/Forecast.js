import ReactAnimatedWeather from "react-animated-weather";
const defaults = {
  icon: "CLEAR_DAY",
  color: "goldenrod",
  size: 52,
  animate: true,
};
export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="Card">
          <p>Monday</p>

          <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />

          <p>10ºC</p>
        </div>
        <div className="Card">
          <p>Tuesday</p>
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="gray"
            size={defaults.size}
            animate={defaults.animate}
          />
          <p>10ºC</p>
        </div>
        <div className="Card">
          <p>Wednesday</p>
          <ReactAnimatedWeather
            icon="RAIN"
            color="blue"
            size={defaults.size}
            animate={defaults.animate}
          />
          <p>10ºC</p>
        </div>
        <div className="Card">
          <p>Thursday</p>

          <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />

          <p>10ºC</p>
        </div>
        <div className="Card">
          <p>Friday</p>
          <ReactAnimatedWeather
            icon="WIND"
            color="white"
            size={defaults.size}
            animate={defaults.animate}
          />
          <p>10ºC</p>
        </div>
        <div className="Card">
          <p>Saturday</p>
          <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
          <p>10ºC</p>
        </div>
      </div>
    </div>
  );
}
