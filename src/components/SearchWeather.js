import {  faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SearchWeather.css'

const SearchWeather = ({searchField, searchChange, searchButton}) =>{
    return(
        <div className='pa2 ma2'>
            <input
                className='pa3 ma2 bg-light-gray ba b--near-white' 
                type='search'
                placeholder='search'
                onChange={searchChange}
                //value={searchField}
            />
            <button 
            id='ButtonSearch'
            onClick= {searchButton}
            ><FontAwesomeIcon icon={faSearch} size='lg'/></button>
        </div>
    );
}
export default SearchWeather;