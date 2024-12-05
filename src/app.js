/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let result = [];

  for (let i = 0; i < pronoun.length; i++) {
    pronoun[i];
    for (let j = 0; j < adj.length; j++) {
      adj[j];
      for (let k = 0; k < noun.length; k++) {
        noun[k];
        console.log(pronoun[i] + adj[j] + noun[k]);
        result.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }

  let resultFinal = document.getElementById("result");

  for (let a = 0; a < result.length; a++) {
    let url = result[a];
    let item = document.createElement("li");
    item.innerText = url;
    resultFinal.appendChild(item);
  }
};
