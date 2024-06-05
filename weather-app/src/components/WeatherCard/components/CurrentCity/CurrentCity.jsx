import React from 'react'
import Date from './components/Date'
import City from './components/City'
import Temp from './components/Temp'
import TempRange from './components/TempRange'
import Icon from './components/Icon'
import Details from './components/Details'
import bgCloudy from '../../../../assets/background/Cloudy_day_background.png'


const CurrentCity = () => {
    return (
        <div className='w-80 bg-gradient-to-r from-[#92B6FD] to-[#3D7FF9] rounded-[30px] '>
            <img src={bgCloudy} alt="background cloudy" className='absolute' />
            <div className='p-5 flex-col justify-center text-white'>
                <Date />
                <City />
                <Temp />
                <TempRange />
                <Icon />
                <Details />
            </div>

        </div>
    )
}

export default CurrentCity