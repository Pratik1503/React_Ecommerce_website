// import { NavLink } from "react-router-dom";
 import FormatPrice from "../Helpers/FormatPrice";

import { NavLink } from "react-router-dom";

// const Product = (curElem) => {
//   const { name, id, category, image, price } = curElem;
//   return (
//     <NavLink to={`/singleproduct/${id}`}>
//       <div className="card">
//         <figure>
//             <img src={image} alt={name} />
//             <figcaption>{category}</figcaption>
//         </figure>

//         <div className="card-data">
//          <div className="card-data-flex">
//             <h3>{name}</h3>

//  // 1st price is prop and the second one is the price of the item
//             <p className="card-data--price">{<FormatPrice price={price} />}</p>
//          </div>
//         </div>
//       </div>
//     </NavLink>
//   );
// };
// export default Product;

const Product = (curElem) => {
  const { name, id, image, category, price } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
            <div className="card-data-flex">
                <h3>{name}</h3>
                <p className="card-data--price">{ <FormatPrice price={price} />}</p>
            </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
