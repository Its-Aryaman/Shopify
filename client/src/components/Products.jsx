


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {productListAction }  from "../Redux/Actions/Product";


const Products = () => {
  const dispatch = useDispatch();
  const productListReducer = useSelector((state) => state.productListReducer);
  const { loading, error, products ,  } = productListReducer;


  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);



    return(
      <div>
        {loading ? (<h1>loading</h1>) : error ? (<h1>error </h1>) : (

          <section className="text-gray-600 body-font">
<div className="container px-5 py-24 mx-auto">


  <div className="flex flex-wrap -m-4">
    


    {products.map((product)=> (

<div className="p-4 lg:w-1/4 md:w-1/2" key={product._id}>
<div className="h-full flex flex-col items-center text-center">
  <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={product.image}/>
  <div className="w-full">
    <h2 className="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
    <h3 className="text-gray-500 mb-3">UI Developer</h3>
    <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
    <span className="inline-flex">
      <a className="text-gray-500">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-2 text-gray-500">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-2 text-gray-500">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
        </svg>
      </a>
    </span>
  </div>
</div>
</div>




    ))}


  </div>
</div>
          </section>

        )}
      </div>
        

    );

}


export default Products




// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {Link} from "react-router-dom"
// import  {productListAction }  from "../Redux/Actions/Product";
// const Products = () => {
//   const dispatch = useDispatch();
//   const productListReducer = useSelector((state) => state.productListReducer);
//   const { loading, error, products = [],  } = productListReducer;


//   useEffect(() => {
//     dispatch(productListAction());
//   }, [dispatch]);


//   return (
//     <div>
//       {loading ? (
//         <h1>loading</h1>
//       ) : error ? (
//         <h1>{error}</h1>
//       ) : (
//         <>
//           <section className="text-gray-600 body-font">
//             <div className="container px-5 py-24 mx-auto">
//                   <div className="flex flex-wrap -m-4">
//                 {products.map((product) => (
//                   <div className="p-4 lg:w-1/4 md:w-1/2" key={product.id}>
//                     <div className="bg-white">
//                       <div className=" max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//                         <div className="mt-6  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//                           <div className="group relative">
//                             <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                               <img
//                                 src={product.image}
//                                 alt="Front of men&#039;s Basic Tee in black."
//                                 className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                               />
//                             </div>
//                             <div className="mt-4 flex justify-between">
//                               <div>
//                                 <h3 className="text-sm text-gray-700">
//                                   <Link to={`/products/${product._id}`}>
//                                     <span
//                                       aria-hidden="true"
//                                       className="absolute inset-0"
//                                     ></span>
//                                     {product.name}
//                                   </Link>
//                                 </h3>
//                                 <p className="mt-1 text-sm text-gray-500">
//                                   Review Count : {product.numReview}
//                                 </p>
//                               </div>
//                               <p className="text-sm font-medium text-gray-900">
//                                 ${product.price}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </>
//       )}
//     </div>
//   );
// };

// export default Products;