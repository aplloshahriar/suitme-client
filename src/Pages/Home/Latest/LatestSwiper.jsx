import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import img1 from "../../../assets/slider/fa.webp";
// import { useEffect, useState } from 'react';

const LatestSwiper = ({ products }) => {
    

    return (
        <div >
            <div className='my-4'>


                <Swiper
                    rewind={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper   w-3/4 "
                >
                    <SwiperSlide> <img src={products.img} alt="No Image" /></SwiperSlide>

                    <SwiperSlide><img src={products.img} alt="No Image" /></SwiperSlide>
                    <SwiperSlide><img src={products.img} alt="No Image" /></SwiperSlide>
                  
                </Swiper>
             
            </div>
        </div>
    );
};

export default LatestSwiper;