import img from '../../../assets/slider/s1.png'
// import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const DealOfTheWeek = () => {
    return (

        <div className='mx-12 mt-16 '>

            <div className="hero min-h-max bg-gray-200 rounded-xl  ">
                <div className="hero-content flex-col lg:flex-row p-0 m-16">
                    <img src={img} className="max-w-sm  mr-24 rounded-lg  " />
                    <div>

                        <p className="text-rose-500 py-0 m-0">----Deal Of The Week--</p>
                        <h1 className="text-5xl font-bold my-4">ROLAND GRAND WHITE <br /> SHORT T-SHIRT</h1>
                        <p>Our intent and our actions have always <br />
                            been informed by progress. We look at <br />
                            an impact report as a way to measure.</p>
                        <button className="btn btn-primary px-8 mt-8">Get Started</button>

                        <p className='mt-4 ms-8' > Limited time offer. The deal will expires <br />
                            on November 12, 2023 HURRY UP!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealOfTheWeek;