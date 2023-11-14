import { useEffect, useState } from 'react';
// import Latest from './Latest';
import LatestSwiper from './LatestSwiper';


const LatestFiltered = () => {
    // load data
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // here I read all product via map and then filter product as requirement

    const filteredProducts = products.filter(product => product.ratings >= 3 && product.price > 220);

    return (
        <div>
            <div className='grid md:grid-cols-4 gap-0 ms-16 me-16  mt-8'>
                {/* <h1>Selected Products {products.length}</h1> */}
                {
                    filteredProducts.map(product => <LatestSwiper
                        key={product.id}
                        // send all product as products in <LatestSwiper> component
                        products={product}
                    ></LatestSwiper>
                    )}


            </div>
        </div>
    );
};

export default LatestFiltered;