import Slider from "../Slider/Slider";
import Offer from "../Offer/Offer"
import Category from "../Category/Category";
import FashionStyle from "../FashionStyle/FashionStyle";
// import img1 from "../../../assets/slider/fa.webp";


// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import DealOfTheWeek from "../DealOfTheWeek/DealOfTheWeek";
// import Latest from "../Latest/Latest";
import LatestFiltered from "../Latest/LatestFiltered";

const Home = () => {
    return (
        <div >
            <Slider></Slider>
            <Offer></Offer>
            <Category></Category>
            <FashionStyle></FashionStyle>
            <DealOfTheWeek></DealOfTheWeek>
            <LatestFiltered></LatestFiltered>
        </div>
    );
};

export default Home;