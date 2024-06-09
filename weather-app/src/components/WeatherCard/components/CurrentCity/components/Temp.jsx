import React from 'react'
import currentData from '../../../../../mocks/current.json'
const Temp = () => {
    return (
        <p className='text-center text-[72px] font-bold mb-[4px] mt-[30px] leading-[0.8]'>{Math.floor(currentData.current.temp_c)}°</p>
    )
}

export default Temp