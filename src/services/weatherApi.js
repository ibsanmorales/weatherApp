const WeatherApi = {

    //getCurrentWeather(){

    //}
    //getWeatherByDescription(lat, long){}
    getWeatherByDesc: async function(location){
        try{
            const jsonresp = await fetch(`${process.env.REACT_APP_WEATHER_CURRENT}?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${location}`);
            const objrep = await jsonresp.json();
            return objrep;
        }catch(e){
            console.log(e);
            return e;
        }
    }
}
export default WeatherApi;