import React from 'react';
import Author from '../../img/Profil_.jpg';
import '../../styles/style.scss';

const Welcome = () => {
    return (
        <section id='welcome' >
            <div className="content">
                <h2>Hi , I'm </h2>
                <h1>Egecan Yıldırım </h1>
                <h2>Front End  Developer & Digital Marketing Consultant </h2>
                <a className='contact-button' href='mailto: egecanyldrm@hotmail.com' >Contact </a>
                <div className="social-content">
                    <a href="https://www.linkedin.com/in/egecan-yildirim/" target="_blank" ><i className="fab fa-linkedin fa-4x  "></i></a>
                    <a href="https://www.instagram.com/egeylldrrm/?hl=tr" target="_blank" > <i className="fab fa-instagram-square  fa-4x "></i> </a>
                    <a href="https://github.com/egecanyldrm" target="_blank" ><i className="fab fa-github-square fa-4x"></i></a>
                </div>
            </div>
            <div className="author-image">
                <img src={Author} alt="" />
            </div>

        </section>
    )
}

export default Welcome
