import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";


    
const Main=()=>{

const productArr = useSelector((state)=>state.items);
const [showingList,setShowingList]=useState([]);
const [categories,setCategories]=useState('');

useEffect(()=>{
    setShowingList(()=>[...productArr])
},[productArr])
useEffect(()=>{
    if(categories===""){
        setShowingList(()=>[...productArr])
    }
    if(categories!==""){
    let arr = productArr.filter((v)=>v.category === categories);
    setShowingList(()=>[...arr]);
    }
},[categories]);

return(
    <>
    <h1>Main/products</h1>
    <h1>items:{showingList.length}</h1>
    <button onClick={()=>{setCategories('')}}>모두</button>
    <button onClick={()=>{setCategories('electronics')}}>전자기기</button>
    <button onClick={()=>{setCategories(`jewelery`)}}>쥬얼리</button>
    <button onClick={()=>{setCategories(`men's clothing`)}}>남성의류</button>
    <button onClick={()=>{setCategories(`women's clothing`)}}>여성의류</button>
    <ItemList list={showingList}/>
    </>
    )
}
export default Main;