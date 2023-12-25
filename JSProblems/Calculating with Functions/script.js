let result = document.querySelector('#result');


function nine(exp='')  {const n = 9; return Math.floor(new Function('return ' + n + exp)());}

function eight(exp='') {const n = 8; return Math.floor(new Function('return ' + n + exp)());}

function seven(exp='') {const n = 7; return Math.floor(new Function('return ' + n + exp)());}

function six(exp='')   {const n = 6; return Math.floor(new Function('return ' + n + exp)());}

function five(exp='')  {const n = 5; return Math.floor(new Function('return ' + n + exp)());}

function four(exp='')  {const n = 4; return Math.floor(new Function('return ' + n + exp)());}

function three(exp='') {const n = 3; return Math.floor(new Function('return ' + n + exp)());}

function two(exp='')   {const n = 2; return Math.floor(new Function('return ' + n + exp)());}

function one(exp='')   {const n = 1; return Math.floor(new Function('return ' + n + exp)());}

function zero(exp='')  {const n = 0; return Math.floor(new Function('return ' + n + exp)());}

function dividedBy(n)  {return '/' + n;}

function times(n)      {return '*' + n;}

function minus(n)      {return '-' + n;}

function plus(n)       {return '+' + n;}



console.log(seven(times(seven())));

console.log(eight(dividedBy(three())));


result.innerHTML = 1;