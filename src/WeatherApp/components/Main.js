import React, { useEffect, useState } from 'react';
import '../styles/main.scss';
import Header from './Header';
import axios from 'axios';
import Content from './Content';
import WeatherSearch from './WeatherSearch';
import WeatherData from './WeatherData';




const Main = () => {
    /* const weather = useState[0];
    const setWeather = useState[1]; */
    const [weather, setWeather] = useState();
    const api_call = async e  => {
        e.preventDefault()
    const API_KEY ='0ebc1969d923c75b08ffcee680530531';   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=${API_KEY}`;
    const request = axios.get(url)
    const response = await request//async, await
    setWeather(response.data.main)
    }
    console.log(weather)
    
    useEffect(() => {
        api_call()
    }, []);

    return (

        <div className = 'main'>
            <Header/>
            <Content>
                <WeatherSearch api_call={api_call}/>
                {weather && <WeatherData weather = {weather}/>}
               
            </Content>
        </div>
    )
}

export default Main;