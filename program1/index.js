import React from "react";
import ReactDOM from "react-dom";
const name="goldi";
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/seed/picsum/200/300";
const img3="https://picsum.photos/200/300/?blur=2";
const links="www.cricketbuzz.com";


ReactDOM.render(
  <>
    <h1 class="heading"> My name is {name}</h1>
    <img src={img1} alt="random Images"/>
    <img src={img2} alt="random Images"/>
    <a href={links} target="_goldi">
      <img src={img3} alt="randomImages"></img>
    </a>

  </>,
  document.getElementById("root")

);


