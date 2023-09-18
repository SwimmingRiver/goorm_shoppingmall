import { useEffect, useState } from "react";
import ItemList from "./ItemList";


    
const Main=()=>{
const [productArr,setProductArr] = useState([]);
const [showingList,setShowingList]=useState([]);
const [categories,setCategories]=useState('');
const loadProductData=async()=>{
    try{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProductArr(()=>[...data]);
    }catch(error){
        console.error(error);
    }
};
useEffect(()=>{
    loadProductData();
},[]);
console.log(productArr);
return(
    <>
    <h1>Main/products</h1>
    <h1>{productArr.length}</h1>
    <button onClick={()=>{setCategories('')}}>모두</button>
    <button onClick={()=>{setCategories('electronics')}}>전자기기</button>
    <button onClick={()=>{setCategories(`jewelery`)}}>쥬얼리</button>
    <button onClick={()=>{setCategories(`men's clothing`)}}>남성의류</button>
    <button onClick={()=>{setCategories(`women's clothing`)}}>여성의류</button>
    <ItemList list={productArr}/>
    </>
    )
}
export default Main;