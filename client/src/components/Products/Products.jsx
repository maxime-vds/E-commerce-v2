// import "./Products.scss";
// import Product from "./Product/Product";

// const Products = ({ products, innerPage, headingText }) => {
//     return (
//         <div className="products-container">
//             {!innerPage && <div className="sec-heading">{headingText}</div>}
//             <div className={`products ${innerPage ? "innerPage" : ""}`}>
//                 {products?.data?.map((item) => (
//                     <Product
//                         key={item.id}
//                         id={item.id}
//                         data={item.attributes}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Products;

import "./Products.scss";
import Product from "./Product/Product";

const Products = ({innerPage}) => {
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">Section Heading</div>}
            <div className="products">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                
            </div>
        </div>

      );
}
 
export default Products;