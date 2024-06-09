import React from 'react'
import getIcon from '../../../../../apis/getIcon'
import currentData from '../../../../../mocks/current.json'
const Icon = () => {
    return (
        <img src={getIcon(currentData.current.condition.text)} alt="" className='m-auto' />
    )
}

export default Icon