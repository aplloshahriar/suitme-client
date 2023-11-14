// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Navigation } from 'swiper/modules';
// // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/navigation';

// import SectionTitle from '../../../components/SectionTitle/SectionTitle';
// import { useEffect, useState } from 'react';
// import LatestSwiper from './LatestSwiper';
// import LatestFiltered from './LatestFiltered';
// // import LatestSwiper from './LatestSwiper';


// const Latest = () => {

//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         fetch('products.json')
//             .then(res => res.json())
//             .then(data => setProducts(data))
//     }, [])

  



//     return (
//         <div>
//             <SectionTitle
//                 subHeading={'--Featured--'}
//                 heading={"LATEST PRODUCT"}
//             ></SectionTitle>

//             <div className='grid md:grid-cols-4 gap-0 ms-16 me-16  mt-8 '>
//                 <h2>product {products.length}</h2>
//                 {
//                     products.map(product => <LatestSwiper
//                         key={product.id}
//                         product={product}
//                     ></LatestSwiper>
                        
//                     )}

//             </div>

           
//         </div>
//     );
// };

// export default Latest;




