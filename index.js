let inputs = document.querySelector('input');
let button = document.querySelector('button');
let body = document.querySelector('body');
let span = document.getElementsByTagName('span')[0];
let input2;
button.addEventListener('click',function(){
    input2 = inputs.value;
    body.style.backgroundColor = input2;
    span.style.color = input2;
    inputs.value = '';
    
})