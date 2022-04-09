import React from 'react'
import Css from '../../img/Css.png'
import Figma from '../../img/Figma.png'
import Javascript from '../../img/Javascript.png'
import Photoshop from '../../img/Photoshop.png'
import Wordpress from '../../img/Wordpress.png'
import Html from '../../img/Html.png'
import ReactPng from '../../img/React.png'
import FacebookADS from '../../img/FacebookADS.png'
import Bootstrap from '../../img/Bootstrap.png'
import '../../styles/style.scss';



const Ability = () => {
    return (
        <section id='ability'>
            <h1>My Skills</h1>
            <div className="my-skills">
                <div className="item"> <img src={Html} alt="" /></div>
                <div className="item"> <img src={Css} alt="" /></div>
                <div className="item"> <img src={Bootstrap} alt="" /></div>
                <div className="item"> <img src={Javascript} alt="" /></div>
                <div className="item"> <img src={ReactPng} alt="" /></div>
                <div className="item"> <img src={Wordpress} alt="" /></div>
                <div className="item"> <img src={Photoshop} alt="" /></div>
                <div className="item"> <img src={Figma} alt="" /></div>
                <div className="item"> <img src={FacebookADS} alt="" /></div>
            </div>
            
        </section>
    )
}

export default Ability
