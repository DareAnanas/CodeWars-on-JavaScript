let result = document.querySelector('#result');

function rgb(r, g, b){
    rgb_color = [r, g, b];
    function round(val) {
        if (val > 255) return 255;
        if (val < 0) return 0;
        return val;
    }
    rgb_color = rgb_color.map(function (e) {
        e = round(e).toString(16).toUpperCase();
        if (e.length == 1) return '0' + e;
        return e;
    });
    return rgb_color.join('');
}

result.innerHTML = rgb(300, 300, -300);