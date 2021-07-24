import React from 'react';
import { Link } from '@reach/router';


const Card = props => {
    return(
        <div className="card" style={{width: "18rem", display:"inline-block"}}>
            <div className="card-body">
                <h5 className="card-title"><Link to={`/products/${props.product._id}`}>{props.product.title}</Link></h5>
                <p className="card-text">{props.product.price}</p>
            </div>
        </div>
    );
}

export default Card;