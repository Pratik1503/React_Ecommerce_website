// const ProductReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_LOADING":
//       return {
//         ...state,
//         isLoading:true,
//       };

//     case "API_ERROR":
//       return {
//         ...state,
//         isError: true,
//       };

//       case "SET_API_DATA":
//         const featureData=action.payload.filter((curElem)=>{
//                return curElem.featured===true
//         })
//         return {
//           ...state,
//           isLoading:false,
//           featureProducts:featureData,
//           products:action.paylaod,
//         }


//       //cases for the singleproduct page
//       case "SET_SINGLE_LOADING":
//       return {
//         ...state,
//         isSingleLoading:true,
//       };

//     case "SET_SINGLE_ERROR":
//       return {
//         ...state,
//         isError: true,
//       };

//       case "SET_SINGLE_Product":
//         return {
//           ...state,
//         isSingleLoading:false,
//         singleProduct:action.payload,
//         }
//         default:
//           return state;
//   }

// };

// export default ProductReducer;

const ProductReducer=(state,action)=>{

  switch (action.type){
  case "API_ERROR":
    return{
      ...state,
      isError:true,
    }
  case "SET_LOADING":
    return{
      ...state,
      isLoading:true,
    }

    case "SET_API_DATA":
     const featureData=action.payload.filter((curElem)=>{
       return curElem.featured===true;
     })

     return{
      ...state,
      isLoading:false,
      products: action.payload,
      featureProducts:featureData,

     }
     //single product pag          //cases for the singleproduct page
        case "SET_SINGLE_LOADING":
        return {
          ...state,
          isSingleLoading:true,
        }
          
      case "SET_SINGLE_ERROR":
        return {
          ...state,
          isError: true,
        }
          
        case "SET_SINGLE_PRODUCT":
          return {
            ...state,
          isSingleLoading:false,
          singleProduct:action.payload,
          }
          default:
            return state;
    }

  }

export default ProductReducer;