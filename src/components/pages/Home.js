import React, { useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css'
// import { storage } from './firebase'
import  bed3 from '../images/bed3.jpg'
import kit1 from '../images/kit1.jpg'
import hall6 from '../images/hall6.jpg'

function Home() {

// const [imagenes, setImagenes] = useState([]);

// useEffect(() => {
//     const fetchedImagenes = [];

//     storage().ref('homepage').listAll().then(function (result) {
//         result.items.forEach((itemRef) => {
//             itemRef.getDownloadURL().then((link) => {
//                 const fetchedImagen = link
//                 fetchedImagenes.push(fetchedImagen)
//                 setImagenes(fetchedImagenes)
//             })
//         });
//     })

// }, [])

    return (
        <div class="carousel-wrapper">
        <Carousel  infiniteLoop autoPlay 
        interval={2000}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}>
            <div className ="image">
                <img src={bed3} />
            </div>
            <div className ="image">
                <img src={kit1} />
            </div>
            <div className ="image">
                <img src={hall6} />
            </div>
        </Carousel>
    </div>

   )
}

export default Home
