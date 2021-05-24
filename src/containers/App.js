//import logo from './logo.svg';
import './App.css';
import weather from '../services/weatherApi'
import React, { Component } from 'react';
import CardWeather from '../components/CardWeather'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  async componentDidMount() {
    const objweather = await weather.getWeatherByDesc('sonora')
    console.log(objweather.current);
    this.setState({items:objweather})
  }
  render() {
    const { items } = this.state;
   if (!items) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={items.current?.weather_icons[0]} className="App-logo" alt="logo" />
            <h2>
              {items.current?.temperature}
            </h2>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <div>
    
          <CardWeather current={items.current}/>
          </div>
        </div>
      );
    }
  }
}

export default App;
