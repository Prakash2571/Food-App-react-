import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { emptyCart } from "./CartSlice";

const Cart=()=>{
    const filItems=useSelector(store=>store.cart.items);
    const dispatch =useDispatch();
    const Remove=()=>{dispatch(emptyCart())};

    
    return (


        <>
           <button className="bg-cyan-300 text-2xl ml-10 p-2 " onClick={Remove}>clear</button>

         {filItems.map((X,i)=>{
            return(
            <div key={i}>
            <h1>{X.name}</h1>
            </div>);
         })}


       
            </>
    );
};
export default Cart;