// // create a context
// // Provider
// // consumer =>usecontext hook which comes under context

// //import { createContext, useContext, useEffect, useReducer } from "react";

// import axios from "axios";
// import { useEffect, useReducer } from "react";
// import { useContext } from "react";
// import { createContext } from "react";
// import reducer from "../reducer/productReducer";

// const AppContext = createContext();

// const API = "https://api.pujakaitem.com/api/products";

// const initialstate = {
//   isLoading: false,
//   isError: false,
//   products: [],
//   featureProducts: [],
//   isSingleLoading:false,
//   singleProduct:{},

//   //single product has an object why ?????????????????????????????????????
//   // because jo api singleproduct page ke liye hum bula rahe hai usme singleproduct ki sari info  ek objext hai...
// };

// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialstate);

//   //dispatch is like one who finishes work by others
//   //matbal agar apko koi kam kaarna hai toh aap dispatch ko bologe dispatch woah kam action [productreducer mein hai] method se karva ke layegaF

//   //getproducts for getting all the products from the axios
//   const getproducts = async (url) => {
//     dispatch({ type: "SET_LOADING" });
//     try {
//       const res = await axios.get(url);
//       const products = await res.data;

//       dispatch({ type: "SET_API_DATA", payload: products });
//     } catch (error) {
//       dispatch({ type: "API_ERROR" });
//     }
//   };

//   //my 2nd api call for single product page
//   const getSingleProduct = async (url) => {
//     dispatch({type:"SET_SINGLE_LOADING"})
//     try {
//       const res = axios.get(url);
//       const singleProduct = await res.data;

//       //yeah jo singleProduct mila hai API se woah as a paylaod hum dispatch ko dene wale hai
//       //payload is the data to do the following work1
//       dispatch({type:'SET_SINGLE_PRODUCT',payload:singleProduct})
//     } catch (error) {
//       dispatch({type:"SET_SINGLE_ERROR"})
//     }
//   };

//   useEffect(() => {
//     getproducts(API);
//   }, []);
//   //     const getProducts=async(url)=>{
//   //    const res=await axios.get(url);
//   //    const products=await res.data;
//   //    console.log(products);
//   // } ;

//   //     useEffect(()=>{
//   //       getProducts(API);
//   //     },[])
//   return (
//     //singleProduct page should call the getSingleProduct function so we have to pass it to the value of AppcontectProvider
//     <AppContext.Provider value={{ ...state ,getSingleProduct }}>{children}</AppContext.Provider>
//   );
// };
// const useProductContext = () => {
//   return useContext(AppContext);
// };

// export { AppContext, AppProvider, useProductContext };

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const initialstate = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading:false,
  singleProduct:{},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const getProducts = async (url) => {
    dispatch({type:"SET_LOADING"})
    try {
      const res = await axios.get(url);
      console.log(res);
      const products = await res.data;
     // console.log(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };


  const getSingleProduct=async(url)=>{
    dispatch({type:"SET_SINGLE_LOADING"})
   try {
	 const res=await axios.get(url);
	    const singleProduct=await res.data;
	    console.log(singleProduct);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload:singleProduct});
} catch (error) {
      dispatch({type:"SET_SINGLE_ERROR"})
  }
  }


  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state , getSingleProduct}}>
      {children}
    </AppContext.Provider>
  );
};


const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
