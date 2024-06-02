import React from 'react'
import dark_arrow from '../../assets/dark-arrow.png'
import './Hero.css'
const Hero = () => {
    return (
        <div>
            <div className='hero container'>
                <div className="hero-text">
                    <h1>We Ensure better education for a better world</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam est praesentium neque ex aliquid pariatur veniam repellendus aliquam fugiat? Id qui optio quis sequi, atque nihil facere minus autem! Architecto.</p>
                    <button className="btn">Explore More<img src={dark_arrow} alt="arrow icon" /></button>
                </div>
            </div>
        </div>
    )
}

export default Hero
