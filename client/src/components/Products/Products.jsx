 import "./Products.scss";
 import Product from "./Product/Product";

 const Products = ({ products, innerPage, headingText }) => {
    const limitedProducts= products?.data?.slice(0, 12);
     return (
         <div className="products-container">
             {!innerPage && <div className="sec-heading">{headingText}</div>}
             <div className={`products ${innerPage ? "innerPage" : ""}`}>
                 {limitedProducts?.map((item) => (
                     <Product
                         key={item.id}
                         id={item.id}
                         data={item.attributes}
                     />
                 ))}
             </div>
         </div>
     );
 };

 export default Products;

// import "./Products.scss";
// import Product from "./Product/Product";

// const Products = ({innerPage, headingText}) => {
//     return (
//         <div className="products-container">
//             {!innerPage && <div className="sec-heading">{headingText}</div>}
//             <div className="products">
//                 <Product/>
//                 <Product/>
//                 <Product/>
//                 <Product/>
//                 <Product/>
//                 <Product/>
//                 <Product/>
//                 <Product/>
//                 <Product/>
                
//             </div>
//         </div>

//       );
// }
 
// export default Products;