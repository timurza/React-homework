import React, {useContext} from 'react';
import Context from '../Context';
import '../styles/weather-data.scss';

const WeatherData = (/* {weather} */) => {
    /* const {temp, humidity, pressure} = weather; */
    const {weather} = useContext(Context);
    const {temp, humidity, pressure} = weather;
    return(
        <div className = "weather-data">
            <p className='weather__tagline'>Weather for
            <span className='weather-data__city'>Minsk</span></p>
            <div className='weather-data__container'>
                <span className='weather-data__property'>
                    <p className='weather-data__title'>Temperature</p>
                    <p className='weather-data__value'>{temp}</p>
                </span>
                <span className='weather-data__property'> 
                    <p className='weather-data__title'>Humidity</p>
                    <p className='weather-data__value'>{humidity}</p>
                </span>
                <span className='weather-data__property'>
                    <p className='weather-data__title'>Pressure</p>
                    <p className='weather-data__value'>{pressure}</p>
                </span>
            </div>
        </div>

    )
}
export default WeatherData;