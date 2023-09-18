import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail=(props)=>{
    const {productId} = useParams();
    const product = useSelector((state)=>state.items)[productId-1];
    return(<>
    detail
    <h1>{product.title}</h1>
    <img src={product.image} alt={product.title}/>
    <h1>${product.price}</h1>
    <button>장바구니 담기</button>
    <button>장바구니 보기</button>
    </>)
}
export default Detail;