import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css'
// import hall1 from '../images/hall1.jpg'
// import hall2 from '../images/hall2.jpg'
// import hall3 from '../images/hall3.jpg'
// import hall4 from '../images/hall4.jpg'
// import hall5 from '../images/hall5.jpg'
import hall6 from '../images/hall6.jpg'
// import hall7 from '../images/hall7.jpg'
// import hall8 from '../images/hall8.jpg'
import hall9 from '../images/hall9.jpg'
import hall10 from '../images/hall10.jpg'
import hall11 from '../images/hall11.jpg'
import hall12 from '../images/hall12.jpg'



function Hall() {
    return (
        <div class="carousel-wrapper">
            <Carousel  infiniteLoop autoPlay 
            showArrows={false}
            showIndicators={false}
            showStatus={false}>
                {/* <div className ="image">
                    <img src={hall1} />
                </div>
                <div className ="image">
                    <img src={hall2} />
                </div> */}
                <div className ="image">
                    <img src={hall6} />
                </div>
                <div className ="image">
                    <img src={hall9} />
                </div>
                <div className ="image">
                    <img src={hall10} />
                </div>
                {/* <div className ="image">
                    <img src={hall6} />
                </div>
                <div className ="image">
                    <img src={hall7} />
                </div>
                <div className ="image">
                    <img src={hall8} />
                </div> */}
                <div className ="image">
                    <img src={hall11} />
                </div>
                <div className ="image">
                    <img src={hall12} />
                </div>
                
            </Carousel>
        </div>

        
    )
}

export default Hall
