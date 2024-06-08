import React from 'react'
import humidity from '../../../../../assets/meta_icon/humidity.svg'
import pm from '../../../../../assets/meta_icon/PM2.5.svg'
import sensory from '../../../../../assets/meta_icon/Somatosensory_temperature.svg'
import wind from '../../../../../assets/meta_icon/wind_speed.svg'
import currentData from '../../../../../mocks/current.json'

const Details = () => {
    const data = [
        { icon: humidity, value: `${Math.floor(currentData.current.humidity)}%` },
        { icon: wind, value: `${Math.floor(currentData.current.wind_kph)}km/h` },
        { icon: pm, value: `${currentData.current.precip_mm * 100}μm` },
        { icon: sensory, value: `${Math.floor(currentData.current.feelslike_c)}°` }
    ];

    return (
        <div className='px-6 py-4 bg-[#EBF2FE] rounded-[20px]'>
            <ul className='flex justify-between text-sm text-[#2B2755]'>
                {data.map((item, index) => (
                    <li className='text-center' key={index}>
                        <img src={item.icon} alt="" className='m-auto' />
                        <p>{item.value}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Details