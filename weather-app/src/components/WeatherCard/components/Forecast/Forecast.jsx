import React from 'react'
import cloudyDay from '../../../../assets/weather_icon/Cloudy_day.png'
import cloudy from '../../../../assets/weather_icon/Cloudy.png'
/* import hail from '../../../../assets/weather_icon/Hail.png' */
import rain from '../../../../assets/weather_icon/Rain.png'
import sunny from '../../../../assets/weather_icon/Sunny.png'
const Forecast = () => {
    const data = [
        { day: 'Monday', date: '24 July', icon: rain, temp: '20~25°' },
        { day: 'Tuesday', date: '25 July', icon: cloudyDay, temp: '18~20°' },
        { day: 'Wednesday', date: '26 July', icon: cloudy, temp: '20~23°' },
        { day: 'Thursday', date: '27 July', icon: sunny, temp: '28~32°' }
    ];

    return (
        <div className='mb-16'>
            <ul className='flex justify-between'>
                {data.map((item, index) => (
                    <li key={index} className='text-center'>
                        <p className='font-bold'>{item.day}</p>
                        <p className='text-[12px]'>{item.date}</p>
                        <img src={item.icon} alt="" className='m-auto' />
                        <p className='text-[14px]'>{item.temp}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Forecast