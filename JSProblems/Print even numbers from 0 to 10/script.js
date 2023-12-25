let result = document.querySelector('#result');
let isFirstIteration = true;
for (let index = 0; index <= 10; index++) {
    if (isFirstIteration) {
        result.innerHTML = 0;
        isFirstIteration = false;
    } else if (index % 2 == 0){
        result.innerHTML = result.innerHTML + ' ' + index;  
    }
    
}