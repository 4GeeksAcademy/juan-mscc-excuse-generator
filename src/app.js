import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['My caterpillar', 'My brother', 'The president', 'A crow'];
let action = ['stole', 'buried', 'hid', 'threw'];
let what = ['my homework', 'my wallet', 'the house'];
let when = ['five seconds ago', 'when I was at the gym', 'while i was taking a nap', 'during dinner', 'while I was fighting a bear'];

window.onload = function() {
  //write your code here
  let excuse = who[Math.floor(Math.random() * who.length)] + ' ' + action[Math.floor(Math.random() * action.length)] + ' ' + what[Math.floor(Math.random() * what.length)] + ' ' + when[Math.floor(Math.random() * when.length)];
  console.log(excuse)

  document.querySelector("#excuse").innerHTML = excuse;
};
