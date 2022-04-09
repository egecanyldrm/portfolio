import React from 'react'
import '../../styles/style.scss'

const Work = ({name ,link }) => {
    return (
        <div id='work_detail'>
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
                    <img src={name} alt="examp_page_image" />
                </div>
            </div>
            <div className="visit">
                <a href={link} target="_blank" className='contact-button' > Visit</a>
            </div>
        </div>

    )
}

export default Work
