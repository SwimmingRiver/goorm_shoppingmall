import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import cartList from "../reducer/cartList";

const Detail=(props)=>{
    const {productId} = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state)=>state.items)[productId-1];
    const nowUser = useSelector(state=>state.users?.email);
    const myCart = useSelector(state=>state.cartList.filter((v)=>v.user === nowUser));
    const navigate = useNavigate();
    const addMyCart =()=>{
        dispatch(cartList.actions.addToCart({
            user:nowUser,
            items:{
                ...product,
                quantity:1
            },
        }));
    }
    return(<>
    detail
    <h1>{product.title}</h1>
    <img src={product.image} alt={product.title}/>
    <h1>${product.price}</h1>
    <button onClick={addMyCart}>장바구니 담기</button>
    <button onClick={()=>navigate(`/cart/${nowUser}`)}>장바구니 보기</button>
    </>)
}
export default Detail;