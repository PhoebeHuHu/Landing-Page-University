import React from 'react'
import './about.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="about_img" className='about-img' />
                <img src={play_icon} alt="play_icon" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Tomorrow&apos;s Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eveniet iure esse ipsa commodi at adipisci rerum eius sit. Rem eveniet culpa officia consequuntur architecto voluptatem mollitia doloremque dolorem porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod asperiores saepe aliquid deleniti vel nisi est, eos cupiditate quam doloribus dolores, voluptatum consequatur ullam totam numquam consectetur. Voluptatum, ipsa earum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam maiores est possimus modi eveniet eos, atque nesciunt corrupti sequi eaque, error quos unde ipsam labore minus quasi necessitatibus tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi excepturi, minima enim et laudantium culpa autem ducimus dolorum quibusdam? Eius necessitatibus atque enim quod aliquam, ratione quasi explicabo quaerat incidunt.</p>
            </div>
        </div>
    )
}

export default About