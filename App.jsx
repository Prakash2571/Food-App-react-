import React,{Suspense} from "react";
import Header from "./Header";
import Body from "./Body.jsx";
import Footer from "./Footer";
import About from "./About";
import Error from "./Error";
import Contact from "./Contact";
import Cart from "./Cart";
import user from "./userContext.js";
import { Provider } from "react-redux";
import store from "./Store.jsx";


import { createBrowserRouter ,Outlet} from "react-router";

const Instamart=React.lazy(()=>import("./Instamart"));

const App = () => {
  
const[usern,setName]=React.useState({
  name:"Poka",
  email:"sahoopoka@gmail.com"
})
  return (
    <Provider store={store}>
    <user.Provider value={{
      user:usern
    }}>
      <Header />
      <Outlet />
     
      <Footer />
      </user.Provider>
    </Provider>
  );
};
const Router=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement:<Error />,
        children:[
           {
            path:"/",
            element:<Body />
           },
           {
            path:"/About",
            element:<About />
           }
             ,
             {
                path:"/Contact",
                element:<Contact />
             },
             {
              path:"/Cart",
              element:<Cart />

             
             }
             ,
             {
              path:"/Instamart",
              element:(<Suspense><Instamart /></Suspense>)
             }
             
          
        ]
    }
    
  
]);

export default App;
export  {Router};
