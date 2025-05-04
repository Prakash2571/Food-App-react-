import React from "react";
import { useRouteError  } from "react-router";

const Error=()=>{
    const Err=useRouteError();
    return(<>
         <h1>Opps !</h1>
         <h2>Something went Wrong....</h2>
         <h2>{Err.status + ":" + Err.statusText}</h2>
          </>);
}
export default Error;