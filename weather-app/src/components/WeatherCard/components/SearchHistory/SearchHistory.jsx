import React from 'react'
import sunny from '../../../../assets/weather_icon/Sunny.png'
import cloudy from '../../../../assets/weather_icon/Cloudy.png'
import cloudyDay from '../../../../assets/weather_icon/Cloudy_day.png'
import snow from '../../../../assets/weather_icon/Snow.png'
import london from '../../../../assets/City/London.png'
import shanghai from '../../../../assets/City/Shanghai.png'
import newyork from '../../../../assets/City/Newyork.png'
import sydney from '../../../../assets/City/Sydney.png'
import './searchHistory.css'

const SearchHistory = () => {
    const data = [
        { icon: sunny, city: 'Sydney', temp: '28~32°', bg: sydney },
        { icon: cloudy, city: 'Shanghai', temp: '20~23°', bg: shanghai },
        { icon: cloudyDay, city: 'New York', temp: '18~20°', bg: newyork },
        { icon: snow, city: 'London', temp: '0~2°', bg: london }

    ]
    return (
        <ul className='flex justify-between text-center'>
            {data.map((item, index) => (
                <li key={index} className='bg-contain bg-no-repeat w-[160px] h-[120px] text-white ' style={{ backgroundImage: `url(${item.bg})` }}>
                    {/* <img src={item.bg} alt="" /> */}

                    <img src={item.icon} className="size-14 m-auto drop-shadow-md" alt="" />
                    <p className='font-bold drop-shadow-md'>{item.city}</p>
                    <p className='drop-shadow-md'>{item.temp}</p>
                </li>
            ))
            }
        </ul >
    )
}

export default SearchHistory