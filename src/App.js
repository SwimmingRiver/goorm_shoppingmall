import HeadNav from "./components/HeadNav";
import itemSlice from "./reducer/item";
import Routers from "./routers/Routers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


function App() {
  const dispatch =useDispatch();
  const loadProductData=async()=>{
    try{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        dispatch(itemSlice.actions.loadProductInit(data));
      }catch(error){
        console.error(error);
    }

};
useEffect(()=>{
    loadProductData();
},[])

  return (
    <div className="App">
      <HeadNav/>
      <Routers/>
    </div>
  );
}

export default App;
