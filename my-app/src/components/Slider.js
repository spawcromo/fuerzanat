import React from 'react'
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-cube/effect-cube.scss';




// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay]);


export const Slider = () => {

  return (
    <>

      <Swiper
        effect='cube'
        cubeEffect={{ shadow: false }}

        autoplay={{ delay: 7000 }}
        slidesPerView={1}
        /* navigation */
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide >

          <img className="animate__animated animate__zoomIn" src='../img/1.jpg' alt="comida"/>
          <div className="animate__animated animate__zoomIn animate__delay-1s">
            <h1 >COMÉ BIEN CULIADO</h1>
            <button>Comprar</button>
          </div>

        </SwiperSlide>
        <SwiperSlide>

          <img className="animate__animated animate__zoomIn" src='../img/2.jpg'  alt="comida" />
          <div className="animate__animated animate__zoomIn animate__delay-1s">
            <h1 >COMÉ BIEN CULIADO</h1>
            <button>Comprar</button>
          </div>

        </SwiperSlide>
        <SwiperSlide>

          <img className="animate__animated animate__zoomIn" src='../img/3.jpg'  alt="comida"/>
          <div className="animate__animated animate__zoomIn animate__delay-1s">
            <h1 >COMÉ BIEN CULIADO</h1>
            <button>Comprar</button>
          </div>

        </SwiperSlide>
        <SwiperSlide>

          <img className="animate__animated animate__zoomIn" src='../img/4.jpg'  alt="comida"/>
          <div className="animate__animated animate__zoomIn animate__delay-1s">
            <h1 >COMÉ BIEN CULIADO</h1>
            <button>Comprar</button>
          </div>

        </SwiperSlide>


      </Swiper>

    </>
  );
};


