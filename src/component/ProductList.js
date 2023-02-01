import { useFilterContext } from "../context/filter_Context";
import GridView from "./GridView"
import ListView from "./ListView";
const ProductList = () => {
  const {filter_products,grid_view}=useFilterContext();
 // console.log("Products",filter_products);
  
  if(grid_view===true){
    return <GridView products={filter_products} />
  }
  if(grid_view===false){
    return <ListView products={filter_products} />
  }

  // else{
  //   return <ListView products={filter_products}/>
  // }


  return <div>ProductList</div>;
};
export default ProductList;
