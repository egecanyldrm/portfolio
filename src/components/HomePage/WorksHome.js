import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/style.scss'
import Kreatif from '../../img/Kreatif_destek.jpg'

const WorksHome = () => {
    return (
        <section id='works-home'>
            <div className="title">
                <h1>My Works</h1>
            </div>
            <div className="examp-work">
                <div className="bar">
                    <svg >
                        <circle />
                    </svg>
                    <svg >
                        <circle />
                    </svg>
                    <svg >
                        <circle />
                    </svg>
                </div>
                <div className="page-img">
                    <img src={Kreatif} alt="examp_page_image" />
                </div>
            </div>
            <div className="visit">
                <Link  to='/works' className='contact-button' >
                    Visit My Works
                </Link>
            </div>
        </section>
    )
}

export default WorksHome
