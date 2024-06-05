import React from 'react'
import bgCloud from '../../assets/background.png'
import WeatherCard from '../WeatherCard/WeatherCard'
const WeatherAppBG = () => {
    return (
        <div className='bg-cloud min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center' >
            <img src={bgCloud} alt="bg-cloud" className='absolute bottom-0 right-0' />
            <WeatherCard />
        </div>
    )
}

export default WeatherAppBG