import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OneProduct = props => {
    const [oneProduct, setOneProduct] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
            .then(res => setOneProduct(res.data))
            .catch(err => console.log("Something went wrong trying to render one product.", err))
    }, [])
    return(
        <div className="container">
            {
                oneProduct ? <> 
                <div className="col-6 text-left" >
                    <h2>{oneProduct.title}</h2>
                    <h3>{oneProduct.price}</h3>
                    <h4>{oneProduct.description}</h4>
                </div>
                </> 
                : ""
            }
        </div>
    );
}

export default OneProduct;