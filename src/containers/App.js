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
  onSearchChange =  (event) =>{
    this.setState({searchfield: event.target.value});
    //console.log(this.state.searchfield);
    //const objweather = await weather.getWeatherByDesc( event.target.value.toLowerCase());
    //this.setState({items:objweather});
  }
  onClickSumit = async (event) =>{
    //console.log(this.state.searchfield);
    const objweather = await weather.getWeatherByDesc( this.state.searchfield);
    this.setState({items:objweather});
  }
  async componentDidMount() {
    const objweather = await weather.getWeatherByDesc('Hermosillo, Sonora, Mexico')
    console.log(objweather);
    this.setState({items:objweather})
  }


  render() {
    const { items } = this.state;
   if (items.error || items == null) {
      return ( 
        <div className="App bg-lightest-blue">
          <div className="App-header">
            <h1>Weather App</h1>
          </div>
          <div className="App-body">
          <h1 className="ErrorMsg">{items?.error?.code} : {items?.error?.info}</h1>
          </div>
        </div>
        );
    } else {
      return (
        <div className="App bg-lightest-blue">
          <div className="App-header">
            <h1>Weather App</h1>
          </div>
          <div className="App-body ">
            <SearchWeather searchChange = {this.onSearchChange} searchButton={this.onClickSumit}/>
            <CardWeather current={items?.current}/>
            <CardRegion location={items?.location}/>
          </div>
        </div>
      );
    }
  }
}

export default App;
