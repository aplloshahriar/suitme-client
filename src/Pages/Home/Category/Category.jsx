
import { Link } from "react-router-dom";
import img from "../../../assets/slider/Untitled-design-10.png";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";



const Category = () => {
    // to do make the cards linkable
    return (
        <div>
            <SectionTitle
                subHeading={'--Discover Fashion--'}
                heading={"Category"}
            ></SectionTitle>
            {/* option-1 */}

            {/* men */}
            <div className=" grid md:grid-cols-4  ms-32 me-32 mb-8 mt-8  py-0 rounded ">
                <Link to="men">
                    <div className="card  card-compact w-64 h-64 py-0 shadow-xl card-bordered">
                        <figure><img className="card-bordered py-0" src={img} alt="Shoes" /> </figure>
                        <div className="card-body card-bordered items-center py-0 ">
                            <h2 className="card-title  text-4xl text-center -mt-24 py-0">Men</h2>
                        </div>

                    </div>
                </Link>



                <div className="card card-compact w-64 h-64 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body  items-center">
                        <h2 className="card-title text-4xl text-center -mt-24 ">Women</h2>
                    </div>
                </div>
                <div className="card card-compact w-64 h-64 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body  items-center">
                        <h2 className="card-title text-4xl text-center -mt-24 ">Kids</h2>
                    </div>
                </div>
                <div className=" card card-compact w-64 h-64 bg-base-100 shadow-xl">

                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body  items-center">
                        <h2 className="card-title text-4xl text-center -mt-24 ">Accessories</h2>
                    </div>

                </div>


            </div>



            {/* option-2 */}
            {/* <div className=" grid md:grid-cols-4  gap-8 ms-16 me-16   mt-0">

            
            <div className="hero min-h-screen  ">
                <div className=" ">
                    <img src={img} className=" rounded-lg shadow-2xl" />
                  

                </div>
            </div>
            <div className="hero min-h-screen ">
                <div className=" ">
                    <img src={img} className=" rounded-lg shadow-2xl" />

                </div>
            </div>
            <div className="hero min-h-screen ">
                <div className=" ">
                    <img src={img} className=" rounded-lg shadow-2xl" />

                </div>
            </div>
            <div className="hero min-h-screen ">
                <div className=" ">
                    <img src={img} className=" rounded-lg shadow-2xl" />

                </div>
            </div>
            </div> */}
        </div>
    );
};

export default Category;