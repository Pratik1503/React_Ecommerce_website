import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartToggleAmount from "./CartToggleAmount";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [color, setcolor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ background: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setcolor(curColor)}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      <CartToggleAmount
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />


      <NavLink to="/cart">
        <Button >Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  p {
    display: flex;
    justify-content:space-between;
    align-content:center;
  }

  .btnStyle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }
`;

export default AddToCart;

/* we can use it as a global one too  */
//   .amount-toggle {
//     margin-top: 3rem;
//     margin-bottom: 1rem;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     font-size: 1.4rem;
//     button {
//       border: none;
//       background-color: #fff;
//       cursor: pointer;
//     }
//     .amount-style {
//       font-size: 2.4rem;
//       color: ${({ theme }) => theme.colors.btnStyle};
//     }
//   }
