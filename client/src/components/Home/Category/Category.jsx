// import { useNavigate } from "react-router-dom";
// import "./Category.scss";

// const Category = ({ categories }) => {
//     const navigate = useNavigate();
//     return (
//       <div className="shop-by-category">
//         <div className="categories">
//           {categories?.data?.map((item) => (
//             <div
//               key={item.id}
//               className="category"
//               onClick={() => navigate(`/category/${item.id}`)}
//             >
//               <img
//                 src={
//                   process.env.REACT_APP_STRIPE_APP_DEV_URL +
//                   item.attributes.img.data.attributes.url
//                 }
//                 alt=""
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
// };

// export default Category;

import "./Category.scss";
// import cat1 from "../../../assets/cat1-1.jpg"
// import cat2 from "../../../assets/cat2_2.jpg"
// import cat3 from "../../../assets/cat3_3.jpg"
// import cat4 from "../../../assets/cat4_4.jpg"
const Category = ({ categories }) => {
return (
  <div className="shop-by-category">
    <div className="categories">
      {categories?.data?.map((item)=> (
         <div key={item.id} className="category">
         <div className="category-image">
         <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="products" /> 
         <p className="category-text">Headphones</p>
         </div>       
       </div>
      ) )}
     
      
      
    </div>
  </div>



);

}
export default Category;