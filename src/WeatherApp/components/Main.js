import React, { useEffect } from 'react';
import '../styles/main.scss';
import Header from './Header';
import axios from 'axios';
import Content from './Content';
import WeatherSearch from './WeatherSearch';




const Main = () => {
    const api_call = async() => {
    const API_KEY ='0ebc1969d923c75b08ffcee680530531';   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`;
    const request = axios.get(url)
    const response = await request//async, await
    console.log(response)
    }
    
    useEffect(() => {
        api_call()
    }, []);

    return (

        <div className = 'main'>
            <Header/>
            <Content>
                <WeatherSearch/>
            </Content>
        </div>
    )
}

export default Main;