// import { useProductContext } from "../context/productcontext";
//  import Product from "./Product";
//  import styled from "styled-components";
// const FeatureProduct=()=>{
//     const {isLoading,featureProducts} =useProductContext();

import { useContext } from "react";
import { useProductContext } from "../context/productcontext";
import styled from "styled-components";
import Product from "./Product";

//     if(isLoading){
//         return
//         <div>......Loading</div>
//     }
// return (
//     <Wrapper>
//      <div>
//         <div>Check Now!</div>
//         <div>Our Feature Products</div>
//         <div>
//             {featureProducts.map((curElem)=>{
//                 return <Product  key={curElem.id} {...curElem} />;
//             })}
//         </div>
//      </div>

//     </Wrapper>
// )
// };

// const Wrapper=styled.section``;

// export default FeatureProduct;

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  console.log(featureProducts);

  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <Wrapper className="section">
      <div className="container">
        <h3 className="intro-data">Check Now</h3>
        <div className="common-heading">Our Service Products</div>

        <div className="grid grid-three-column">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 120rem;
  }
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;

    &::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover img {
      transform: scale(1.3);
    }

    img {
      max-width: 90%;
      height: 20rem;
      margin-top: 1.5rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;
    .card-data {
      padding: 0 2rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    
  }
`;

export default FeatureProduct;

// .card {
//     background-color: #fff;
//     border-radius: 1rem;
//     .card-data {
//       padding: 0 2rem;
//     }
//     .card-data-flex {
//       margin: 2rem 0;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//     }
//     h3 {
//       color: ${({ theme }) => theme.colors.text};
//       text-transform: capitalize;
//     }
//     .card-data--price {
//       color: ${({ theme }) => theme.colors.helper};
//     }
