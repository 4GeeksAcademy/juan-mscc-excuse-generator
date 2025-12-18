import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let who = ['My caterpillar', 'My brother', 'The president', 'A crow'];
let action = ['stole', 'buried', 'hid', 'threw'];
let what = ['my homework', 'my wallet', 'the house'];
let when = ['five seconds ago', 'when I was at the gym', 'while i was taking a nap', 'during dinner', 'while I was fighting a bear'];

let phrase = [who, action, what, when]

const select = (array) => array[Math.floor(Math.random() * array.length)];


window.onload = function() {
  //write your code here
  document.getElementById('title').innerHTML = 'Hola!'
  let excuse = ''
  for (let i = 0; i < phrase.length; i++){
    excuse = excuse + ' ' + select(phrase[i])
  }
  console.log(excuse)

  document.getElementById('excuse').innerHTML = excuse;
};
