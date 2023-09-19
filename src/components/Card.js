import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
const CardWrapper = styled.div`
    border:solid 2px gray;
    width:460px;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:8px;
`;
const StyledImg = styled.img`
    height:20vh;
    width:10vw;
`;
const Button=styled.button`
    cursor:pointer;
    background-color:#fff;
    border-radius:3px;
    width:5vw;
    height:5vh;
     &:hover{
        background-color:#777a89;
        color:#fff;
        border:none;
    }
`;
const Card=(props)=>{
    const navigate = useNavigate();
    const user = useSelector((state)=>state.users.email)
    return(
    <CardWrapper>
        <StyledImg src={props.image} alt={props.title}/>
        <h1>{props.title}</h1>
        <div style={{width:"10vw", display:"flex",justifyContent:"space-around" ,alignItems:"center"}}>
        <Button style={{}} onClick={()=>{
            if(!user){ 
                 alert("로그인이 필요합니다.")
                return navigate('/login');
                }
            navigate(`/item/${props.id}`)
            }}>장바구니 담기</Button>
        <h1>${props.price}</h1>
        </div>
    </CardWrapper>
    )
}
export default Card;