import React from "react";

const Section = (props, func,gunc) => {
  

  return (
    <div className="border border-amber-950 border-width: 1px pb-5 my-5">
      <h1>{props.head}</h1>
      {props.state ? (
        <h2 onClick={() =>props.gunc()} >Hide</h2>
      ) : (
        <h2 onClick={() => props.func()}>Show</h2>
      )}
      {props.state ? <h3>{props.gibrish}</h3> : null}
    </div>
  );
};

const Instamart = (gunc) => {
  const [config, setconfig] = React.useState("");
 

  return (
    <>
      <Section
        head="About"
        gibrish="1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor,
         orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis arcu massa, 
         scelerisque vitae, consequat in, pretium a, enim."
        state={config==="about"}
        func={() => {
          setconfig("about");
        }}
     gunc={()=>{setconfig("")}} />

      <Section
        head="Team"
        gibrish="2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
         adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
          semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim."
        state={config==="team"}
        func={() => {
          setconfig("team");
        }}  gunc={()=>{setconfig("")}}
      />

      <Section
        head="Investments"
        gibrish="3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
         enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis arcu massa, scelerisque vitae, consequat in,
          pretium a, enim."
        state={config==="invest"}
        func={() => {
          setconfig("invest"); 
        }}  gunc={()=>{setconfig("")}}
      />
    </>
  );
};

export default Instamart;
