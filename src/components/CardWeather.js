import './CardWeather.css'
import { Grid  } from 'semantic-ui-react'
import {  faPercent, faTemperatureLow, faSun, faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardWeather = ({current})=>{
    return (
        <div className='ContainerGrid ma5'>
                 <Grid className='GridCard' stackable columns={3}>
                        <Grid.Row  >
                        <Grid.Column>
                                <img className='ui centered medium image cardImg' src={current?.weather_icons[0]} alt='weatherImagen'/>
                                <h3 id="date">{current?.weather_descriptions[0]}</h3>
                        </Grid.Column>
                        <Grid.Column centered="true" verticalAlign='middle'>
                                <h3><FontAwesomeIcon icon={faTemperatureLow} id='IconTemp'/> Temp: {current?.temperature}</h3>
                                <h3><FontAwesomeIcon icon={faCloudRain} id='IconTemp'/> Lluvia: {current?.precip}</h3>
                        </Grid.Column>
                        <Grid.Column centered="true" verticalAlign='middle'>
                                <h3><FontAwesomeIcon icon={faSun} id='IconTemp'/> UV: {current?.uv_index}  </h3>
                                <h3><FontAwesomeIcon icon={faPercent} id='IconTemp'/> Humedad: {current?.humidity}  </h3>
                        </Grid.Column>
                        </Grid.Row>
                 </Grid>
        </div>
    );
}

export default CardWeather;