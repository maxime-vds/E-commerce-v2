// import React from "react";
// import { useNavigate } from "react-router-dom";
 import "./Product.scss";

// const Product = ({ data, id }) => {
//     const navigate = useNavigate();
//     return (
//         <div
//             className="product-card"
//             onClick={() => navigate("/product/" + id)}
//         >
//             <div className="thumbnail">
//                 <img
//                     src={
//                         process.env.REACT_APP_STRIPE_APP_DEV_URL +
//                         data.image.data[0].attributes.url
//                     }
//                     alt=""
//                 />
//             </div>
//             <div className="prod-details">
//                 <span className="name">{data.title}</span>
//                 <span className="price">&#8377;{data.price}</span>
//             </div>
//         </div>
//     );
// };

// export default Product;
import test from "../../../assets/rr.png"
const Product = () => {
    return ( 
        <>
       {/* <img src={test} alt="" style ={{width:290, height:210}}/> */}
        <div className="product-card">
            <div className="thumbnail">
                <img src={test} alt="product" />
                
            </div>
            
                <div className="prod-details">
                    <span className="name">Product name</span>
                    <span className="price"> 499&#8364;</span>
                </div>
        </div>
        </> 
    );
}
 
export default Product; 