import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css'
import kit1 from '../images/kit1.jpg'
import kit2 from '../images/kit2.jpg'
import kit3 from '../images/kit3.jpg'
import kit4 from '../images/kit4.jpg'
// import kit5 from '../images/kit5.jpg'
// import kit6 from '../images/kit6.jpg'
import kit7 from '../images/kit7.jpg'
import kit8 from '../images/kit8.jpg'
import kit9 from '../images/kit9.jpg'


function Kitchen() {
    return (
        <div class="carousel-wrapper">
            <Carousel  infiniteLoop autoPlay 
            showArrows={false}
            showIndicators={false}
            showStatus={false}>
                <div className ="image">
                    <img src={kit1} />
                </div>
                <div className ="image">
                    <img src={kit2} />
                </div>
                <div className ="image">
                    <img src={kit3} />
                </div>
                <div className ="image">
                    <img src={kit4} />
                </div>
                {/* <div className ="image">
                    <img src={kit5} />
                </div>
                <div className ="image">
                    <img src={kit6} />
                </div> */}
                <div className ="image">
                    <img src={kit7} />
                </div>
                <div className ="image">
                    <img src={kit8} />
                </div>
                <div className ="image">
                    <img src={kit9} />
                </div>
                
            </Carousel>
            </div>
    )
}

export default Kitchen
