import {  faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SearchWeather.css'

const SearchWeather = ({searchField, searchChange}) =>{
    return(
        <div className='pa2 ma2'>
            <input
                className='pa3 ma2 ba b--green bg-light-blue' 
                type='search'
                placeholder='search robots'
                onChange={searchChange}
                //value={searchField}
            />
            <button 
            id='ButtonSearch'
            ><FontAwesomeIcon icon={faSearch} size='lg'/></button>
        </div>
    );
}
export default SearchWeather;