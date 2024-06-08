import React, { useEffect } from 'react'
import getCurrentWeather from '../../apis/getCurrentWeather.js'
import CurrentCity from './components/CurrentCity/CurrentCity.jsx'
import Forecast from './components/Forecast/Forecast.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import SearchHistory from './components/SearchHistory/SearchHistory.jsx'
const WeatherCard = () => {
    useEffect(() => {
        getCurrentWeather()
            .then((data) => {
                console.log(data)
            })
    })
    return (
        <div className="weather-card p-5 bg-[#F1F2FD] w-[1000px] h-4/5 rounded-[40px] flex z-[1]">
            <CurrentCity />
            <div className='pl-6 pt-4 flex flex-col justify-between'>
                <Forecast />
                <SearchBar />
                <SearchHistory />



            </div>

        </div>
    )
}

export default WeatherCard