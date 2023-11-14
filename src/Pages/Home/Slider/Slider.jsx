import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import img1 from '../../../assets/slider/s1.png'
import img2 from '../../../assets/slider/s2.png';
import img3 from '../../../assets/slider/s3.png';
import img4 from '../../../assets/slider/s4.png';

const Slider = () => {
    return (
        < >
            <Swiper
                spaceBetween={30}
                rewind={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-2/5 "
            >

                <SwiperSlide className='my-16 '><img src={img1} /></SwiperSlide>
                <SwiperSlide className='my-16'><img src={img2} /></SwiperSlide>
                <SwiperSlide className='my-16'><img src={img3} /></SwiperSlide>
                <SwiperSlide className='my-8'><img src={img4} /></SwiperSlide>




            </Swiper>
        </>
    );
};

export default Slider;