import styled from "styled-components";

const CardWrapper = styled.div`
    border:solid 1px black;
    width:10vw;
    overflow:hidden;
`;
const StyledImg = styled.img`
    width:10vw;
`;

const Card=(props)=>{
    return(
    <CardWrapper key={props.key}>
        <h1>{props.id}</h1>
        <h1>{props.title}</h1>
        <StyledImg src={props.image} alt={props.title}/>
    </CardWrapper>
    )
}
export default Card;