import React, { useRef } from 'react'
import './testimonials.css'

import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const users = [
        { profile: user_1, user_name: 'Amelia Smith', company: 'Edusity, USA', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellat asperiores ab ipsam ratione. Debitis ad, adipisci omnis quidem nisi dolorum tempora, iure laudantium quam itaque hic libero dolore maiores.' },
        { profile: user_2, user_name: 'Jackson William', company: 'Edusity, USA', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellat asperiores ab ipsam ratione. Debitis ad, adipisci omnis quidem nisi dolorum tempora, iure laudantium quam itaque hic libero dolore maiores.' },
        { profile: user_3, user_name: 'Olivia Jones', company: 'Edusity, USA', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellat asperiores ab ipsam ratione. Debitis ad, adipisci omnis quidem nisi dolorum tempora, iure laudantium quam itaque hic libero dolore maiores.' },
        { profile: user_4, user_name: 'George Brown', company: 'Edusity, USA', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellat asperiores ab ipsam ratione. Debitis ad, adipisci omnis quidem nisi dolorum tempora, iure laudantium quam itaque hic libero dolore maiores.' }
    ]

    /* onclick function for next and back button */
    const slider = useRef();
    let transX = 0;
    const slideNext = () => {
        if (transX > -50) {
            transX -= 25;
        }
        slider.current.style.transform = `translateX(${transX}%)`;
    }
    const slideBack = () => {
        if (transX < 0) {
            transX += 25;
        }
        slider.current.style.transform = `translateX(${transX}%)`;
    }
    return (
        <div className='testimonials'>
            <img className='next-btn' src={next_icon} onClick={slideNext} alt="" />
            <img className='back-btn' src={back_icon} onClick={slideBack} alt="" />
            <div className="slider">
                <ul ref={slider}>
                    {users.map((user, index) => (
                        <li key={index}>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={user.profile} alt="" />
                                    <div>
                                        <h3>{user.user_name}</h3>
                                        <span>{user.company}</span>
                                    </div>
                                </div>
                                <p>{user.discription}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Testimonials