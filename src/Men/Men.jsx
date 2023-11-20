import { useEffect, useState } from "react";
// import Offer from "../Pages/Home/Offer/Offer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import LatestSwiper from "../Pages/Home/Latest/LatestSwiper";

const Men = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const filteredProducts = products.filter(product => product.category.toLowerCase().includes("boot"));

    return (
        <div >
            <div className="">
                <h1 className=" p-8 text-6xl font-bold  bg-slate-600">Men</h1>
            </div>

            <div className='grid grid-cols-6'>
                <div>
                    <h2>cart</h2>
                </div>
                <div className="col-span-5 ">
                    <div className="grid md:grid-cols-4 gap-0 ms-16 me-16  mt-8">
                        {
                            filteredProducts.map(products =>
                                <div className=""
                                    key={products.id}  
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
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Men;







// const Men = () => {
//     const [products, setProducts] = useState(' ');
//     useEffect(() => {
//         fetch('products.json')
//             .then(res => res.json())
//             .then(data => setProducts(data))
//     }, [])
//     const filteredProducts = products.filter(product => product.category.toLowerCase().includes.toLowerCase(('Men')));

//     return (

//         <div>
//            {
//             filteredProducts.map(products=>
//                 <h2 key={products.id}>{products.category}</h2>
//                 )
//            }
//         </div>

//         // <div className="grid grid-cols-6 ">
//         //     <div className="">
//         //
//         //     </div>

//         //     <div >
//         //

//         //     </div>

//         // </div>
//     );
// };

// export default Men;