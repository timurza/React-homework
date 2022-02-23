import React, {useContext} from 'react';
import Context from '../Context';
import '../styles/weather-search.scss';

const WeatherSearch = (/* props */) => {
    const {api_call} = useContext(Context);
    return (
        <div className='weather-search'>
            <form onSubmit={ /* props. */api_call } className='weather-search__form'>
                <input name = 'location' autoComplete = 'off' className='weather-search__input' type ="text"/>
                <div className='weather-search__submit'>
                    <button className='weather-search__button'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default WeatherSearch;