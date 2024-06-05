import React from 'react'
import humidity from '../../../../../assets/meta_icon/humidity.svg'
import pm from '../../../../../assets/meta_icon/PM2.5.svg'
import sensory from '../../../../../assets/meta_icon/Somatosensory_temperature.svg'
import wind from '../../../../../assets/meta_icon/wind_speed.svg'


/* const Details = () => {
    return (
        <div className='px-6 py-4'>
            <ul className='flex justify-between text-sm'>
                <li className='text-center'>
                    <img src={humidity} alt="" className='m-auto' />
                    <p>85%</p>
                </li>
                <li className='text-center'>
                    <img src={wind} alt="" className='m-auto' />
                    <p>9km/h</p>
                </li>
                <li className='text-center'>
                    <img src={pm} alt="" className='m-auto' />
                    <p>75</p>
                </li>
                <li className='text-center'>
                    <img src={sensory} alt="" className='m-auto' />
                    <p>26℃</p>
                </li>
            </ul>
        </div>
    )
}
 */
const Details = () => {
    const data = [
        { icon: humidity, value: '85%' },
        { icon: wind, value: '9km/h' },
        { icon: pm, value: '75' },
        { icon: sensory, value: '26℃' }
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