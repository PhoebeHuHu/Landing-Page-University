import React from 'react'
import currentData from '../../../../../mocks/current.json'
const City = () => {
    return (
        <p className='text-center text-xl font-bold'>{currentData.location.name}</p>
    )
}

export default City