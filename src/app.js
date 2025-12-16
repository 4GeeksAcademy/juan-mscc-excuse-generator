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
  let excuse = who[Math.floor(Math.random() * 4)] + ' ' + action[Math.floor(Math.random() * 4)] + ' ' + what[Math.floor(Math.random() * 3)] + ' ' + when[Math.floor(Math.random() * 5)];
  console.log(excuse)
  const originalElement = this.document.getElementById('excuse');

  const newElement = this.document.createElement('p');

  newElement.innerHTML = excuse;

  if(originalElement){
    originalElement.replaceWith(newElement)
  }
  console.log("Hello Rigo from the console!");
};
