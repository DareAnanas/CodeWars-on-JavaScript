let tbody = querySelector('.rwd-table > tbody');

for (e of document.querySelectorAll('.rwd-table > tbody > tr')) {
    if (e.cells[3].innerText.trim > 2) e.remove();
}

let table = document.querySelectorAll('.rwd-table > tbody > tr').childNodes;