let result = document.querySelector('#result');

let str = "the-stealth-warrior";

function toCamelCase (str) {
    let new_str = "";
    let isNeededToUpperCase = false;
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (element != '_' && element != '-') {
            if (isNeededToUpperCase) {
                new_str = new_str + element.toUpperCase();
                isNeededToUpperCase = false;
            } else {
                new_str = new_str + element;
            }
            
        } else {
            let next_element = str[index+1];
            if (next_element != next_element.toUpperCase()) {
                isNeededToUpperCase = true
            }
        }
    }
    return new_str;
}



result.innerHTML = toCamelCase(str);