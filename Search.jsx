import React from "react";
const Search=(props)=>{
    return(
        <div className="bg-amber-50">
            <input className="hover:bg-white border-2" onChange={props.CChange} value={props.State} ></input>
            <button className="bg-amber-600 text-shadow-white rounded-full" onClick={props.SShow} >Search</button>
        </div>
    );
}
export default Search;