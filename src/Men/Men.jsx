import { useEffect, useState } from "react";
// import Offer from "../Pages/Home/Offer/Offer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import LatestSwiper from "../Pages/Home/Latest/LatestSwiper";
import { Slider } from "@mui/material";
// import { red } from '@mui/material/colors';


const Men = () => {

    const [products, setProducts] = useState([]);

    // price range
    const [value, setValue] = useState([0, 100000]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const filteredProducts = products.filter(product => product.category.toLowerCase().includes("boot") && product.price >= value[0] &&
        product.price <= value[1]);

    return (
        <div >
            <div className="">
                <h1 className=" p-8 text-6xl font-bold  bg-slate-600">Men</h1>
            </div>

            <div className='grid grid-cols-6'>
                <div className="ms-6 mt-4">
                    <h2>FILTER BY PRICE</h2>

                    {/* price range double slider */}
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        color: red
                        min={0}
                        step={5}
                        max={1000}

                    />
                </div>
                <div className="col-span-5 ">
                    <div className="grid md:grid-cols-4 gap-0 ms-16 me-16  mt-8 mb-8">
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
                                        <SwiperSlide> <img className="rounded-xl" src={products.img} alt="" /></SwiperSlide>
                                        <SwiperSlide><img className="rounded-xl" src={products.img} alt="" /></SwiperSlide>
                                        <SwiperSlide><img className="rounded-xl" src={products.img} alt="" /></SwiperSlide>
                                        <div className="flex">
                                            <h2>{products.name}</h2>
                                            <h2 className="mt-2">${products.price}</h2>
                                        </div>
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