let result = document.querySelector('#result');


 
function multiply(F, M)
{
    let x = F[0][0] * M[0][0] + F[0][1] * M[1][0];
    let y = F[0][0] * M[0][1] + F[0][1] * M[1][1];
    let z = F[1][0] * M[0][0] + F[1][1] * M[1][0];
    let w = F[1][0] * M[0][1] + F[1][1] * M[1][1];
 
    F[0][0] = x;
    F[0][1] = y;
    F[1][0] = z;
    F[1][1] = w;
}

function power(F, n)
{
    if (n == 0 || n == 1) return;
         
    let M = [ [ 1, 1 ], [ 1, 0 ] ];
 
    power(F, n / 2);
    multiply(F, F);
 
    if (n % 2 != 0) multiply(F, M);
}

function fib(n)
{
    let F = [ [ 1, 1 ], [ 1, 0 ] ];
    if (n == 0) return 0;
         
    power(F, n - 1);
 
    return F[0][0];
}

console.log(fib(6));

result.innerHTML = 1;