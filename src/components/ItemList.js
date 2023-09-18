import Card from "./Card";
import styled from "styled-components";


const CardWrapper=styled.div`
display:grid;
grid-template-rows: repeat(4, 1fr);
grid-template-columns: repeat(5, 1fr);
gap:10px;
`;

const ItemList=(props)=>{
    return(<CardWrapper>
        {props.list.map((i)=><Card key={i.id} id={i.id} title={i.title} image={i.image} price={i.price}/>)}
        </CardWrapper>)
};

export default ItemList;