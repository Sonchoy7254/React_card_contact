import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles.css";




var Root = ReactDOM.createRoot(document.getElementById("root"));

function Card(props){
return (
<div className="content">
<div className="card">
  <div className="heading"><h2>{props.name}</h2><p>{props.number}</p> </div>
  <div className="image">
    <img src= {props.avater} alt={props.alt.name} />
  </div>
</div>
</div>
);
}


Root.render(
<div className="container">
<Card 
name="Osamu Dazai" 
avater="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg"
alt="Ai_generated_image"
number="+8876354834647"
/>
<Card 
name="Kiyotaka Ayanokouji" 
avater="https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk=w240-h480-rw"
alt="Ai_generated_image"
number="+8876354834647"
/>
<Card 
name="Kamina" 
avater="https://images.datacamp.com/image/upload/v1685454800/learn_ai_robot_stairs_c6600dbdf5.png"
alt="Ai_generated_image"
number="+8876354834647"
/>
<Card 
name="Ichigo Kurosaki" 
avater="https://img.mobiuspace.com/image/aigc/5ea2298b070153c40045e095b85996a9_512_512.webp"
alt="Ai_generated_image"
number="+8876354834647"
/>
<Card 
name="Violet Evergarden" 
avater="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg"
alt="Ai_generated_image"
number="+8876354834647"
/>
</div>


);