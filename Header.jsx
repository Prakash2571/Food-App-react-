import React from "react";
import "./new.css";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CallIcon from '@mui/icons-material/Call';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import About from "./About.jsx";
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import { Link } from "react-router";
import user from "./userContext.js";
import { useSelector } from "react-redux";




const Header=()=>{
  const Items=useSelector(store=>store.cart.items)

    const[state,insert]=React.useState(true);
    const data =React.useContext(user);
    return(<div className="flex justify-between h-28 bg-amber-100 shadow-amber-950 ">
      <div>  <header className="py-10 pl-2"><FastfoodIcon /> Food Zone</header></div>

        <div className="">
            <ul className="flex gap-3 py-10">
              <Link to="/"><li><HomeIcon  />Home</li></Link> 
              <Link to="/Contact">  <li><CallIcon />Contact Us</li></Link>
               <Link to="/About"> <li><AssignmentIndIcon />About Us</li></Link>
                <Link to="/Cart"><li><ShoppingCartIcon />Cart-{Items.length}</li></Link>
                <Link to="/Instamart"><li><  FeaturedPlayListIcon/>Instamart</li></Link>
            </ul>

        </div>
        {
        (state)?<button onClick={()=>{insert(false)}}>Login</button>:<button onClick={()=>{insert(true)}}>{data.user.name} Logout</button>
        }
        
    </div>);
}
export default Header;