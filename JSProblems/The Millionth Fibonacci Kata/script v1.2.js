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

let M = [ [1, 1], [1, 0] ];

multiply(M, M);

console.log(M);

result.innerHTML = 1;