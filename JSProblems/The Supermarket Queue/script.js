let result = document.querySelector('#result');

function queueTime(customers, n) {
    let tills = [];
    let time_accumulator = 0;
    for (let i = 0; i < n; i++) {
        tills.push(0);
    }
    customers.reverse();
    while (customers.length != 0) {
        for (let i = 0; i < tills.length; i++) {
            if (tills[i] == 0) {
                let customer = customers.pop();
                if (customer == undefined) break;
                if (tills[i] == 0) tills[i] = customer;
            } 
        }
        let fastest_time = Math.min(...tills);
        for (let i = 0; i < tills.length; i++) {
            tills[i] -= fastest_time; 
        }
        time_accumulator += fastest_time;
    }
    time_accumulator += Math.max(...tills);
    return time_accumulator;
}

result.innerHTML = queueTime([2,40,36,39,33,10,20,21,6,39,14,15,30,49,49,35,35,20], 3);