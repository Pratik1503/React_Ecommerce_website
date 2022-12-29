import {FaPlus,FaMinus} from "react-icons/fa"

const CartToggleAmount=({amount,setIncrease,setDecrease})=>{
    return (
       <div>
        <div>
            <button onClick={()=>setDecrease()}>
                <FaMinus />
            </button>
            <div>{amount}</div>
            <button onClick={()=>setIncrease()}>
                <FaPlus />
            </button>
        </div>
       </div>
        
    )
};
export default CartToggleAmount;