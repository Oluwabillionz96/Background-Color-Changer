let inputs = document.querySelector('input');
let button = document.querySelector('button');
let body = document.querySelector('body');
let span = document.getElementsByTagName('span')[0];
let input2;
body.style.backgroundColor = localStorage.getItem('color');
span.style.color = localStorage.getItem('color');
button.addEventListener('click',function(){
    input2 = inputs.value;
    if(!test(input2)){
        alert(`'${input2}' is not a valid color`)
        input2.value = '';
    } else{
        localStorage.setItem('color', input2 )
        body.style.backgroundColor = localStorage.getItem('color');
        span.style.color = localStorage.getItem('color');
        inputs.value = '';
    }   
})

function test(color){
    let tester = document.createElement('div');
    tester.style.backgroundColor = color;
    return tester.style.backgroundColor !== '';
}