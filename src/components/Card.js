import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div`
    border:solid 1px black;
    width:25vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    boreder-radius:10px;
`;
const StyledImg = styled.img`
    width:10vw;
`;

const Card=(props)=>{
    const navigate = useNavigate();
    return(
    <CardWrapper>
        <h1>{props.title}</h1>
        <StyledImg src={props.image} alt={props.title}/>
        <button onClick={()=>{navigate(`/item/${props.id}`)}}>장바구니 담기</button>
        <h1>${props.price}</h1>
    </CardWrapper>
    )
}
export default Card;