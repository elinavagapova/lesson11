const text = document.querySelector('#text');
const btn = document.querySelector('#btn');
const square = document.querySelector('#square');
const btn1 = document.querySelector('#e_btn');
const range = document.querySelector('#range');
const circle = document.querySelector('#circle');


const color = function(event) {

  const color1 = function() {
    square.style.backgroundColor = event.target.value;
  };

  btn.addEventListener('click', color1);
};

text.addEventListener('input', color);

btn1.style.display = 'none';

const diapason = function(event) {
  circle.style.width = event.target.value + "%";
  circle.style.height = event.target.value + "%";
};

range.addEventListener('input', diapason);





