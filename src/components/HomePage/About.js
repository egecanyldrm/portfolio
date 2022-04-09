import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/style.scss'

const About = () => {
    return (
        <section id='home-about' >
            <div className="animation">
            <div id="wrapper">
            <p id="hi"></p>
        </div>
            </div>
            <div className="about-content">
                <h1>About Me  </h1>
                <p>Hey there ı’m Egecan, ı am a  Front End Developer, building one page application with React.js. Every day try improving myself for become better than yesterday. I wanna become full stack developer.    
                </p>
                <br />
                <Link to='/about' >Know More</Link>  
                </div>
        </section>
    )
}

export default About
