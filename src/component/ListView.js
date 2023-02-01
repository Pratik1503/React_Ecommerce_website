
import { Button } from "../styles/Button";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { NavLink } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <Wrapper>
      <div className="grid container">
        .
        {products.map((curElem) => {
          const { id, name, image, price, description } = curElem;
          return (
            <div className="grid grid-two-column card" key={id}>
              <figure>
                <img src={image } alt={name} />
              
              </figure>

              <div className="card-data">  
               <h2> {name}</h2>
               <p> <FormatPrice price={price} /></p>
               <p>{description.slice(0,99)}......</p>
               <NavLink to={`/singleproduct/${id}`}>
               <Button className="btn"> Read More</Button>
               </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section `
.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
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

 
}

.card{
  border-style:outset;
  padding:2rem;
}

.card-data{
  padding:0 2rem;

}
.btn{
  margin:2rem 0;
}
`;

export default ListView;
