import { FaPlus, FaMinus } from "react-icons/fa";
import styled from "styled-components";

const CartToggleAmount = ({ amount, setIncrease, setDecrease }) => {
  return (
   <Wrapper>
     <div className="amount-data">
      <div className="amount">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="data">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
   </Wrapper>
  );
};

const Wrapper=styled.section`
.amount{
    display:flex;
    justify-content:space-evenly;
    font-size:3rem;
    margin:2rem;
    position:relative;
    left:-3rem;

}

button {
    display: inline-block;
    padding:0.9;
    font-size: 25px;
    cursor: pointer;
    text-align: center;
    
    
    color: #fff;
    background-color:#8621eb;
    border: none;
    border-radius:20%;
    box-shadow: 0 0.6rem #999;
  }
  
  button:hover {background-color:#8621eb}
  
  button:active {
    background-color:#8621eb;
    box-shadow: 0 0.5rem #666;
    transform: translateY(4px);
  }
   


`;
export default CartToggleAmount;
