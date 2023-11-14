import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import img1 from "../../../assets/slider/fa.webp"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';

const FashionStyle = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const filteredProducts = products.filter(product => product.ratings >= 3 && product.price > 220);

    return (
        <div >
            <SectionTitle
                subHeading={'--Featured--'}
                heading={"GET YOUR FASHION STYLE"}
            ></SectionTitle>
            <div className='grid md:grid-cols-4 gap-0 ms-16 me-16  mt-8'>
                {
                    filteredProducts.map(products =>
                        <div key={products.id}

                        >
                            <Swiper
                                rewind={true}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper   w-3/4 my-4 mx-0"
                            >
                                <SwiperSlide> <img src={products.img} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={products.img} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={products.img} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    )
                }
                {/* <div className='grid md:grid-cols-4 gap-0 ms-16 me-16  mt-8 '> */}

                {/* <div className="hero m-0 w-3/4">
    <div className="hero-content m-0 ">
        <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper  "
        >
            <SwiperSlide > <img className="  shadow-2xl" src={img1} alt="" /></SwiperSlide>

            <SwiperSlide> <img className="  shadow-2xl" src={img1} alt="" /></SwiperSlide>


        </Swiper>

    </div>
</div>
<div className="hero  w-3/4 ">
    <div className="hero-content m-0">
        <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper  "
        >
            <SwiperSlide className=""> <img className="  shadow-2xl" src={img1} alt="" /></SwiperSlide>

            <SwiperSlide> <img className="  shadow-2xl" src={img1} alt="" /></SwiperSlide>


        </Swiper>

    </div>
</div>
<div className="hero  w-3/4 ">
    <div className="hero-content m-0 ">
        <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper    "
        >
            <SwiperSlide className=""> <img className="  shadow-2xl" src={img1} alt="" /></SwiperSlide>

            <SwiperSlide> <img className="  shadow-2xl" src={img1} alt="" /></SwiperSlide>


        </Swiper>

    </div>
</div>
<div className="hero    w-3/4">
    <div className="hero-content m-0">
        <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper   "
        >
            <SwiperSlide className=""> <img className="  shadow-2xl" src={img1} alt="" /></SwiperSlide>

            <SwiperSlide> <img className="  shadow-2xl" src={img1} alt="" /></SwiperSlide>


        </Swiper>

    </div>
</div> */}
            </div>
        </div>
    );
};

export default FashionStyle;