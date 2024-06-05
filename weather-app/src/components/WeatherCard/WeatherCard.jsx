import React from 'react'
import CurrentCity from './components/CurrentCity/CurrentCity.jsx'
import Forecast from './components/Forecast/Forecast.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import SearchHistory from './components/SearchHistory/SearchHistory.jsx'
const WeatherCard = () => {
    return (
        <div className="weather-card p-5 bg-[#F1F2FD] w-5/6 h-4/5 rounded-[40px] flex z-[1]">
            <CurrentCity />
            <div className='px-6 py-4'>
                <Forecast />
                <SearchBar />
                <SearchHistory />
            </div>

        </div>
    )
}

export default WeatherCard