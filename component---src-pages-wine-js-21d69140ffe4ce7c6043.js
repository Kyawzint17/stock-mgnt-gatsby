"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[435],{6173:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(7294);const a={borderRadius:"5%",width:"10rem"},l={width:"40rem",overflow:"hidden",background:"#0f0404",color:"#f0f0f0",marginBottom:"1rem",padding:"0.5rem"},i={marginLeft:"1rem"};function s(){let e=[],[t,r]=n.useState([]);return n.useEffect((async()=>{let t=await fetch("https://api.sampleapis.com/wines/reds"),s=await t.json();for(let r=0;r<s.length;r++)console.log(s[r].winery),e.push(n.createElement("div",{style:l},n.createElement("div",{style:{width:"11rem",float:"left"}}," ",n.createElement("img",{style:a,src:s[r].image})," "),n.createElement("div",{style:i},n.createElement("h3",null,s[r].winery),s[r].wine," ")));r(e)}),[]),n.createElement("div",{style:{margin:"1rem"}},n.createElement("h1",null,"Wine"),n.createElement("main",null,t))}}}]);
//# sourceMappingURL=component---src-pages-wine-js-21d69140ffe4ce7c6043.js.map