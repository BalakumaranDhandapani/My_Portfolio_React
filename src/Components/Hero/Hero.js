import React from 'react'
import { Link } from 'react-router-dom'
import '../Hero/Hero.css'
import HeroIntro from '../Assets/herointro.jpg'

function Hero() {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='hero-image' src={HeroIntro}
                    alt="hero-home-image" />
            </div>
            <div className='content'>
                <p>Hey! I'm </p>
                <h1>Balakumaran</h1>
                <h4>Full Stack Developer</h4>
                <div>
                    <Link to={"/project"} className='btn'>projects</Link>
                    <Link to={"/contact"} className='btn-light'>contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero