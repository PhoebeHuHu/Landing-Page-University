import React, { useEffect } from 'react'
import currentData from '../../../../../mocks/current.json'
import formatDate from '../../../../../apis/formatDate'
const Date = () => {
    const date = formatDate(currentData.location.localtime);

    return (
        <div>
            <p className='mb-[20px] text-[14px]'>{date.day} {date.monthAbbr}, {date.weekday} {date.time}</p>
        </div>
    )
}

export default Date