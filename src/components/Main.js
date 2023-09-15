import { useState } from "react";
import Card from "./Card";



    
const Main=()=>{
const [productArr,setProductArr] = useState([]);
const loadProductData=async()=>{
    try{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProductArr((prev)=>[...data]);
    }catch(error){
        console.error(error);
    }
};
loadProductData();
    return(<>
    <h1>Main</h1>
    <h1>{productArr.length}</h1>
    {productArr.map((i)=><Card key={i.id} id={i.id} title={i.title} image={i.image}/>)}
    </>)
}
export default Main;