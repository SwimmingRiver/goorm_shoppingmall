
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import cartList from "../reducer/cartList";


const CartItem=(props)=>{
    const {userId} = useParams();
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
    <div style={{
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        border:"solid 1px black",
        padding:'10px'
        }} key={props.id}>
            <img style={{
                width:"5vw",
                height:'15vh'
                }} src={props.image} alt={props.id}/>
            <div style={{width:"13vw"}}>
            <h1 style={{color:"gray"}}>{props.category}</h1>
            <h1 style={{fontWeight:"550"}}>{props.title}</h1>
            <h1 style={{fontWeight:"800"}}>${props.price} x {props.quantity}</h1>
            </div>
            <div style={{display:'flex',justifyContent:"space-between",width:'115px'}}>
            <button style={{width:'30px',backgroundColor:"#fff",border:'solid 3px gray',outline:'none'}} onClick={plusQuantity}>+</button>
            <input style={{width:'30px',backgroundColor:"#fff",border:'solid 3px gray',outline:'none',textAlign:"center"}}  value={props.quantity} readOnly/>
            <button style={{width:'30px',backgroundColor:"#fff",border:'solid 3px gray',outline:'none'}}  onClick={miusQuantity}>-</button>
            </div>
            </div>
    </>)
}
export default CartItem;