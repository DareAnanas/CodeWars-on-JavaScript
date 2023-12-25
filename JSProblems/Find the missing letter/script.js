let result = document.querySelector('#result');


function findMissingLetter(array) {
    const magic_number_1 = 90;
    const magic_number_2 = 122;
    let first_char_code = array[0].charCodeAt();
    let eng_alphabet = [];
    function generateArray(from, to) {
        let array = [];
        for (let i = from; i <= to; i++) {
            array.push(String.fromCharCode(i)); 
        }
        return array;
    }
    if (first_char_code <= magic_number_1) {
        eng_alphabet = generateArray(first_char_code, magic_number_1);
    } else {
        eng_alphabet = generateArray(first_char_code, magic_number_2);
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] != eng_alphabet[i]) {
            return eng_alphabet[i];
        }
        
    }
}

result.innerHTML = findMissingLetter(['O','Q','R','S']);