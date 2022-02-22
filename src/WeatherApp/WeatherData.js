import React from 'react';

const WeatherData = () => {
    return(
        <div className = "weather-data">
            <p className='weather__tagline'>Weather for
            <span className='weather-data__city'>Minsk</span></p>
            <div className='weather-data__container'>
                <span className='weather-data__property'>
                    <p className='weather-data__title'>Temperature</p>
                    <p className='weather-data__value'>10.9</p>
                </span>
                <span className='weather-data__property'>
                    <p className='weather-data__title'>Humidity</p>
                    <p className='weather-data__value'>22</p>
                </span>
                <span className='weather-data__property'>
                    <p className='weather-data__title'>Pressure</p>
                    <p className='weather-data__value'>1001</p>
                </span>
            </div>
        </div>

    )
}
export default WeatherData;