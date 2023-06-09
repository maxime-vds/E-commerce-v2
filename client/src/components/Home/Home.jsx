// import React, { useEffect, useContext } from "react";
// import Banner from "./Banner/Banner";
// import "./Home.scss";
// import Category from "./Category/Category";
// import Products from "../Products/Products";
// import { fetchDataFromApi } from "../../utils/api";
// import { Context } from "../../utils/context";

// const Home = () => {
//     const { products, setProducts, categories, setCategories } = useContext(Context);
   
//      useEffect(() => {
//        getProducts();
//        getCategories();
//      },[]);

//      const getProducts = () => {
//          fetchDataFromApi("/api/products/id").then((res) => {
//              setProducts(res);
//          });
//      };

//     const getCategories = () => {
//         fetchDataFromApi("/api/categories/id").then((res) => {
//             console.log(res);
//             setCategories(res);
//         });
//     };


//     return (
//         // <div>
//         //     <Banner />
//         //     <div className="main-content">
//         //         <div className="layout">
//         //             <Category categories={categories} />
//         //             <Products
//         //                 headingText="Popular Products"
//         //                 products={products}
//         //             />
//         //         </div>
//         //     </div>
//         // </div>
     
//         <div className="home">
//             <Banner/>
//             <div className="main-content">
//                 <div className="layout">
//                 <Category categories={categories}/>
//                 <Products products= {products} headingText="Popular Products"/>
//                 </div>
//             </div>
//         </div>
         
//     );
// };

// export default Home;

import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect,useContext } from "react";
import { FetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
     const { products, setProducts, categories, setCategories } = useContext(Context);

     useEffect (()=>{
        getCategories();
        getProducts();
     }, []);

      const getProducts =()=> {
         FetchDataFromApi ("/api/products?populate=*").then((res)=> {
            console.log (res);
            setProducts(res);
        });
      }
     
     const getCategories = () => {
         FetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res);
            setCategories(res);
         });
     };

    return ( 
        <div>
            <Banner/>
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories}/>
                    <Products products={products} headingText="Popular Products"/>
                </div>
            </div>
        </div>
     );
}
 
export default Home;
