import React from 'react'
import forecast from '../../../../../mocks/forecast.json'
const TempRange = () => {
    return (
        <div className='text-center'>{Math.floor(forecast.mintemp_c)}~{Math.floor(forecast.maxtemp_c)}°</div>
    )
}

export default TempRange