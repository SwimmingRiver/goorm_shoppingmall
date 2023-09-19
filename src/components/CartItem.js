
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import cartList from "../reducer/cartList";


const CartItem=(props)=>{
    const {userId} = useParams();
    const myItems = useSelector((state)=>state.cartList.filter(v=>v.user === userId))[0];
    const dispatch = useDispatch();
    const plusQuantity=()=>{
        dispatch(cartList.actions.addQuantity({
            user:userId, 
            itemId:props.id
        }));
        console.log(props.quantity);
    };
    const miusQuantity=()=>{
        if(props.quantity>1){
            dispatch(cartList.actions.minusQuantity({
                user:userId,
                itemId:props.id
            }))
        }
    }
    return(<>
    <li key={props.id}>
            {props.title}/{props.price}
            <button onClick={plusQuantity}>+</button>
            <input value={props.quantity} readOnly/>
            <button onClick={miusQuantity}>-</button>
            </li>
    </>)
}
export default CartItem;