function productFib(prod){
    let arr = [0, 1];
    let i = 0;
    while (true) {
        const e1 = arr[i];
        const e2 = arr[i+1];
        if (e1 * e2 == prod) return [e1, e2, true];
        if (e1 * e2 > prod) return [e1, e2, false];
        arr.push(e1 + e2);
        i++;
    }
}

console.log(productFib(800));