import './CardWeather.css';

const CardWeather = ({current})=>{
    return (
        <div className="wrapper">
            <div className="widget-container">
                <div className="top-left">
                <h1 className="city" id="city">hpa</h1>
                <h2 id="day">{current?.temperature}</h2>
                <h3 id="date">{current?.weather_descriptions[0]}</h3>
                <h3 id="time">{current?.observation_time}</h3>
                <p className="geo"></p>
                </div>
            </div>
        </div>
        
    );
}

export default CardWeather;