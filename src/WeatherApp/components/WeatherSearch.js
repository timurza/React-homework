import React from 'react';
import '../styles/weather-search.scss';

const WeatherSearch = (props) => {
    return (
        <div className='weather-search'>
            <form onSubmit={ props.api_call } className='weather-search__form'>
                <input autoComplete = 'off' className='weather-search__input' type ="text"/>
                <div className='weather-search__submit'>
                    <button className='weather-search__button'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default WeatherSearch;