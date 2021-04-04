import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css'
// import  bed1 from '../imagesbed1.jpeg'
// import  bed2 from '../images/bed2.jpeg'
import  bed3 from '../images/bed3.jpg'
import  bed4 from '../images/bed4.jpg'
import  bed5 from '../images/bed5.jpg'
// import  bed6 from '../images/bed6.jpeg'
// import  bed7 from '../images/bed7.jpeg'
// import  bed8 from '../images/bed8.jpeg'
import  bed9 from '../images/bed9.jpg'



function Bedroom() {
    return (
        <div class="carousel-wrapper">
            <Carousel  infiniteLoop autoPlay 
            showArrows={false}
            showIndicators={false}
            showStatus={false}>
                {/* <div className ="image">
                    <img src={bed1} />
                </div>
                <div className ="image">
                    <img src={bed2} />
                </div> */}
                <div className ="image">
                    <img src={bed3} />
                </div>
                <div className ="image">
                    <img src={bed4} />
                </div>
                <div className ="image">
                    <img src={bed5} />
                </div>
                {/* <div className ="image">
                    <img src={bed6} />
                </div>
                <div className ="image">
                    <img src={bed7} />
                </div>
                <div className ="image">
                    <img src={bed8} />
                </div> */}
                <div className ="image">
                    <img src={bed9} />
                </div>
                
            </Carousel>
            </div>
    )
}

export default Bedroom
