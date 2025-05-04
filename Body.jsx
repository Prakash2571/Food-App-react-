import React from "react";
import Items from "./Hardcode.js";
import "./new.css";
import Search from "./Search";
import useOnline from "./useOnline.js";
import {addItem} from "./CartSlice"
import { useDispatch } from "react-redux";

const Res = (props) => {
  const dispatch=useDispatch();
  const item = props.things[props.id];
  const Do=()=>{dispatch(addItem(item))};
  return (
    <div className=" bg-neutral-200 space-x-5">
      <img className="h-40" src={props.things[props.id].image_url} alt="food" />
      <h2>{props.things[props.id].name}</h2>
      <h3>Category: {props.things[props.id].category}<button className="pl-8 text-3xl text-shadow-blue-950 " onClick={Do}>+</button></h3>
      <h3>{props.things[props.id].price}</h3>
    </div>
  );
};

const Body = () => {
  const [state, func] = React.useState("");
  const [start, insert] = React.useState(Items);
  const [things, put] = React.useState(Items);
 

  const Change = (event) => {
    const hi = event.target.value;
    func(hi);
  };

  const Show = () => {
    const fil = start.filter((x) => {
      return x.name.toLowerCase().includes(state.toLowerCase());
    });
    put(fil);
  };
  const isOn=useOnline();


  return isOn? things.length === 0 ? (
    <h1>No Match found</h1>
  ) : (
    <>
       
        <div className="">
          <Search State={state} SShow={Show} CChange={Change} />
        </div>
          <div className="flex flex-wrap">
        {things.map((x, i) => (
          <Res id={i} key={i} things={things} />
        ))}
      </div>
    </>
  ) : (<h1>Something went wrong with your network.</h1>);
};

export default Body;      
export {Res};  
                                           