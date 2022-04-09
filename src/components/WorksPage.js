import React from 'react'
import '../styles/style.scss'
import Work from './WorksPage/Work'
import Kreatif from '../img/Kreatif_destek.jpg'
import Cetsa from '../img/Cetsa.jpg'
import DreamTime from '../img/DreamtimeHotel.jpg'
import Kartallar from '../img/KartallarPalet.jpg'
import Carlos from '../img/Carlos.jpg'
import BumeShop from '../img/BumeShop.jpg'
import Vardendi from '../img/Vardendi.jpg'
import Vays from '../img/Vays.jpg'

const WorksPage = () => {
    const webdesign = [
        { name: Kreatif, link: 'https://kreatifdestek.com/' },
        { name: Cetsa, link: 'https://cetsaormanurunleri.com/' },
        { name: Kartallar, link: 'https://antalyakartallarpalet.com/' },
        { name: DreamTime, link: 'https://antalyadreamtimehotel.com/' }

    ]
    const dijital_marketing = [
        { name: Carlos, link: 'https://www.carlos.com.tr/' },
        { name: BumeShop, link: 'https://www.bumeshop.com/' },
        { name: Vardendi, link: 'https://www.vardendi.com.tr/' },
        { name: Vays, link: 'https://www.vays.com.tr/' }
    ]
    return (
        <section>
            <div className="about_head">
                <h1>My Works</h1>
            </div>
            <div className="about_title">
                <h2>Web Design</h2>
            </div>
            <div id='works' >
                {webdesign.map((work) => {
                    return <Work {...work} />
                })}
            </div>
            <div className="about_title" >
                <h2>Dijital Marketing Consulting</h2>
            </div>
            <div id='works' >
                {
                    dijital_marketing.map((work) => {
                        return <Work {...work} />
                    })
                }
            </div>


        </section>
    )
}

export default WorksPage
