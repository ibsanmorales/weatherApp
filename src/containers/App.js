//import logo from './logo.svg';
import './App.css'
import weather from '../services/weatherApi'
import React, { Component } from 'react'
import CardWeather from '../components/CardWeather'
import CardRegion from '../components/CardRegion'
import SearchWeather from '../components/SearchWeather'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      searchfield:'',
    }
  }
  onSearchChange =async (event) =>{
    //this.setState({searchfield: event.target.value});
    const objweather = await weather.getWeatherByDesc( event.target.value.toLowerCase());
    this.setState({items:objweather});
  }

  async componentDidMount() {
    const objweather = await weather.getWeatherByDesc('Hermosillo, Sonora, Mexico')
    console.log(objweather);
    this.setState({items:objweather})
  }


  render() {
    const { items } = this.state;
   if (!items) {
      return (<div>Loading...</div>);
    } else {
      return (
        <div className="App">
          <div className="App-header">
            <h1>Weather App</h1>
          </div>
          <div className="App-body">
            <SearchWeather searchChange = {this.onSearchChange}/>
            <CardWeather current={items?.current}/>
            <CardRegion location={items?.location}/>
          </div>
        </div>
      );
    }
  }
}

export default App;
